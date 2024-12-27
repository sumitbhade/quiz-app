import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Questions({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answersState,
  onSkipAnswer,
}) {
  return (
    <div id="questions">
      <QuestionTimer
        //For resetting component

        timeout={10000}
        onTimeout={onSkipAnswer}
      />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answersState={answersState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
