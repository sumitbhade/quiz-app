import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [timeRemaining, setTimeRemaining] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearInterval(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={timeRemaining} max={timeout} />;
}
