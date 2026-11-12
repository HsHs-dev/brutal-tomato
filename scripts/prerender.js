import { createElement, StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { readFile, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'

const vite = await createServer({
  appType: 'custom',
  server: { middlewareMode: true, ws: false },
})

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
  const appMarkup = renderToString(
    createElement(StrictMode, null, createElement(App)),
  )
  const outputPath = new URL('../dist/index.html', import.meta.url)
  const html = await readFile(outputPath, 'utf8')
  const prerenderedHtml = html.replace(
    '<div id="root"></div>',
    `<div id="root">${appMarkup}</div>`,
  )

  if (prerenderedHtml === html) {
    throw new Error('Could not find the app root in dist/index.html')
  }

  await writeFile(outputPath, prerenderedHtml)
} finally {
  await vite.close()
}
