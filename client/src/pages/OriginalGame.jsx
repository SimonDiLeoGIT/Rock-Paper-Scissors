import paper_icon from "./../assets/images/icon-paper.svg"
import scissors_icon from "./../assets/images/icon-scissors.svg"
import rock_icon from "./../assets/images/icon-rock.svg"
import logo from "./../assets/images/logo.svg"
import rules from "./../assets/images/image-rules.svg"
import { useState } from "react";

export const OriginalGame = () => {

  let [score, setScore] = useState(0);

  return (
    <section className="absolute top-0 h-screen w-screen bg-gradient-to-b from-radial-gradient-from to-radial-gradient-to">
      <section className="score-container">
        <div>
          <img alt="logo" src={logo} />
        </div>
        <div>
          <span> SCORE </span>
          <h2> {score} </h2>
        </div>
      </section>
      <section>
        <img alt="paper" src={paper_icon} />
        <img alt="scissor" src={scissors_icon} />
        <img alt="rock" src={rock_icon} />
      </section>
      <div>
        <img alt="rules" src={rules} />
      </div>
      <button> RULES </button>
    </section>
  );
}