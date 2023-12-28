import paper_icon from "./../assets/images/icon-paper.svg"
import scissors_icon from "./../assets/images/icon-scissors.svg"
import rock_icon from "./../assets/images/icon-rock.svg"
import logo from "./../assets/images/logo.svg"
import rules from "./../assets/images/image-rules.svg"
import { useState } from "react";
import bgImage from "./../assets/images/bg-triangle.svg"
import close from "./../assets/images/icon-close.svg"

export const OriginalGame = () => {

  let [score, setScore] = useState(0);
  let [viewRules, setRules] = useState(false);
  let [user, setUser] = useState();
  let [pc, setPC] = useState();

  function handleRules() {
    let classes = "absolute bg-white top-0 z-20 w-screen h-screen grid grid-rows-4 place-content-center ";
    !viewRules && (classes += " invisible ");
    return classes;
  }

  function handleChoice(key) {
    setPC(Math.random(2));
    setUser(key);
    console.log(pc);
    console.log(user);
  }

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
      <section className="grid grid-cols-2 z-10 absolute w-screen top-1/3">
        <div className="col-auto w-screen h-full grid place-content-center absolute z-0"> <img className="m-auto w-52" src={bgImage} alt="bg" /> </div>
        <button onClick={() => handleChoice(0)} className="col-span-1 m-auto z-10 rounded-full p-4 shadow-inner bg-gradient-to-tr from-scissors-from to-scissors-to"><div className="bg-white w-28 h-28 rounded-full grid"><img className="m-auto" alt="scissor" src={scissors_icon} /></div></button>
        <button onClick={handleChoice} className="col-span-1 m-auto z-10 rounded-full p-4 shadow-inner bg-gradient-to-tr from-paper-from to-paper-to"><div className="bg-white w-28 h-28 rounded-full grid"><img className="m-auto" alt="paper" src={paper_icon} /></div></button>
        <button onClick={handleChoice} className="col-span-2 m-auto z-10 rounded-full p-4 shadow-inner bg-gradient-to-tr from-rock-from to-rock-to"><div className="bg-white w-28 h-28 rounded-full grid"><img className="m-auto" alt="rock" src={rock_icon} /></div></button>
      </section>
      <section className={handleRules()}>
        <h1 className="text-dark-text text-4xl font-bold row-span-1 m-auto"> RULES </h1>
        <img className="row-span-2 m-auto" alt="rules" src={rules} />
        <button onClick={() => setRules(false)}><img className="row-span-1 m-auto" alt="close" src={close} /></button>
      </section>
      <footer className="absolute bottom-0 w-screen p-10">
        <div className="m-auto inline-block rounded-xl  hover:bg-gradient-to-r from-scissors-to via-paper-to to-rock-to">
          <button
            className="text-lg w-32 font-medium py-2 rounded-xl border-2 hover:border-none hover:bg-gradient-to-t from-radial-gradient-from to-radial-gradient-to hover:m-0.5"
            onClick={() => setRules(true)}
          > RULES
          </button>
        </div>
      </footer>
    </section>
  );
}