import paper_icon from "./../assets/images/icon-paper.svg"
import scissors_icon from "./../assets/images/icon-scissors.svg"
import rock_icon from "./../assets/images/icon-rock.svg"
import lizard_icon from "./../assets/images/icon-lizard.svg"
import spock_icon from "./../assets/images/icon-spock.svg"
import logo from "./../assets/images/logo-bonus.svg"
import rules from "./../assets/images/image-rules-bonus.svg"
import { useState } from "react"

export const BonusGame = () => {

  let [score, setScore] = useState(0);

  return (
    <section>
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
        <img alt="spock" src={spock_icon} />
        <img alt="lizard" src={lizard_icon} />
      </section>
      <div>
        <img alt="rules" src={rules} />
      </div>
      <button> RULES </button>
    </section>
  );
}