import imgSrc from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={imgSrc} alt="Quiz logo" />
      <h1>REACTQUIZ</h1>
    </header>
  );
}
