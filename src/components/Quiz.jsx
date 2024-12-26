import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState();
  const [userAnswers, setUserAnswers] = useState();

  function handleQuestionChange() {}

  return <div id="quiz"></div>;
}
