import paper_icon from "./../assets/images/icon-paper.svg"
import scissors_icon from "./../assets/images/icon-scissors.svg"
import rock_icon from "./../assets/images/icon-rock.svg"
import logo from "./../assets/images/logo.svg"
import rules from "./../assets/images/image-rules.svg"
import { useState } from "react";
import bgImage from "./../assets/images/bg-triangle.svg"

export const OriginalGame = () => {

  let [score, setScore] = useState(0);

  return (
    <section className="fixed top-0 left-0 h-screen w-screen bg-gradient-to-b from-radial-gradient-from to-radial-gradient-to">
      <section className="grid grid-cols-2 w-5/6 m-auto border-4 border-header-outline rounded-lg p-3 my-10">
        <div className="col-span-1 m-auto ml-2">
          <img className="w-24" alt="logo" src={logo} />
        </div>
        <div className="col-span-1 bg-white w-24 h-20 m-auto mr-0 rounded-md shadow-lg">
          <p className="text-score-text text-xs font-semibold mt-2"> SCORE </p>
          <h2 className="text-dark-text font-semibold text-5xl"> {score} </h2>
        </div>
      </section>
      <div className="w-screen absolute z-0 mt-14"> <img className="m-auto w-52" src={bgImage} alt="bg" /> </div>
      <section className="grid grid-cols-2 z-10">
        <div className="col-span-1 m-auto z-10 bg-gradient-to-tr rounded-full p-4 shadow-inner  from-paper-from to-paper-to"><button className="bg-white w-24 h-24 rounded-full"><img className="m-auto" alt="paper" src={paper_icon} /></button></div>
        <div className="col-span-1 m-auto z-10 bg-gradient-to-tr rounded-full p-4 shadow-inner  from-scissors-from to-scissors-to"><button className="bg-white w-24 h-24 rounded-full"><img className="m-auto" alt="scissor" src={scissors_icon} /></button></div>
        <div className="col-span-2 m-auto z-10 bg-gradient-to-tr rounded-full p-4 shadow-inner  from-rock-from to-rock-to my-4"><button className="bg-white w-24 h-24 rounded-full"><img className="m-auto" alt="rock" src={rock_icon} /></button></div>
      </section>
      <div className="invisible fixed">
        <img alt="rules" src={rules} />
      </div>
      <button> RULES </button>
    </section>
  );
}