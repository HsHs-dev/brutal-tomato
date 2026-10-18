import { useEffect, useState } from "react";

export const useTimer = (minutes) => {

  const durationSeconds = minutes * 60

  const [isActive, setIsActive] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(durationSeconds);

  // reset when the durationSeconds changes (with mode)
  useEffect(() => {
    setIsActive(false)
    setSecondsRemaining(durationSeconds)
  }, [durationSeconds])


  // tick
  useEffect(() => {
    if (!isActive) return

    const intervalId = setInterval(() => {
      setSecondsRemaining((remaining) => Math.max(remaining - 1, 0))
    }, 1000)

    // cleanup
    return () => clearInterval(intervalId)

  }, [isActive])


  // stop
  useEffect(() => {
    if (secondsRemaining === 0) {
      setIsActive(false);
    }
  }, [secondsRemaining]);


  const start = () => {
    setIsActive(true);
  };

  const pause = () => setIsActive(false);

  const timerFormat = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return { secondsRemaining, isActive, start, pause, timerFormat };
}