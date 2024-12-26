import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [timeRemaining, setTimeRemaining] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 100);
    }, 100);
  }, []);

  return <progress id="question-time" value={timeRemaining} max={timeout} />;
}
