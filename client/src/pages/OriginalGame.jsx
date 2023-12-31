import logo from "./../assets/images/logo.svg"
import rules from "./../assets/images/image-rules.svg"
import { useState } from "react";
import close from "./../assets/images/icon-close.svg"
import "./../styles/original-styles.css"
import { GameSection } from "../components/GameSection"

export const OriginalGame = () => {

  let [score, setScore] = useState(0);
  let [viewRules, setRules] = useState(false);

  function handleRules() {
    let classes = "absolute bg-white top-0 z-20 w-screen h-screen grid grid-rows-4 place-content-center ";
    !viewRules && (classes += " invisible ");
    return classes;
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
      <GameSection score={score} setScore={setScore} />
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