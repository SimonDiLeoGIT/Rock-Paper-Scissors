import paper_icon from "./../assets/images/icon-paper.svg"
import scissors_icon from "./../assets/images/icon-scissors.svg"
import rock_icon from "./../assets/images/icon-rock.svg"
import bgImage from "./../assets/images/bg-triangle.svg"
import { useState } from "react";
import { Button } from "./Button";
import { Choice } from "./Choice";

export const GameSection = (props) => {

  let [picked, setPicked] = useState(-1);
  let [pc, setPc] = useState(-1);
  let [win, setWin] = useState(false);
  let [tie, setTie] = useState(false);

  function handleChoice(key) {

    let user = key;

    let pcPick = Math.floor(Math.random() * 3);
    setPc(pcPick);

    let tie = false;
    let win = false;

    if (user === 0) {
      pcPick === 0 && (tie = true);
      pcPick === 2 && (win = true);
    } else if (user === 1) {
      pcPick === 1 && (tie = true);
      pcPick === 0 && (win = true);
    } else {
      pcPick === 2 && (tie = true);
      pcPick === 1 && (win = true);
    }

    setTie(tie);
    setWin(win);

    if (!tie) {
      if (!win) {
        (props.score > 0) && props.setScore(props.score - 1)
      } else {
        props.setScore(props.score + 1)
      }
    }

  }

  function handleClasses(choice, pc) {
    let classes = "from-paper-from to-paper-to choice-paper"
    if (choice === 1) {
      classes = "from-scissors-from to-scissors-to choice-scissors";
    } else if (choice === 2) {
      classes = "from-rock-from to-rock-to choice-rock";
    }
    pc && (classes += " pc-animation")
    return classes
  }

  function handleInnerClasses(choice) {
    let classes = "inner-shadow-paper"
    if (choice === 1) {
      classes = "inner-shadow-scissors";
    } else if (choice === 2) {
      classes = "inner-shadow-rock";
    }
    return classes
  }


  function handleView() {
    if (picked > -1) {
      return (
        <section className="grid z-10 absolute w-screen top-1/3 h-1/2 md:top-1/4">
          <section className="grid grid-cols-2 md:h-1/2">
            <article className="md:m-auto md:mr-8 move-choice-left">
              <p className="invisible md:visible md:pb-12 font-semibold"> YOU PICKED </p>
              <Choice className={handleClasses(picked, false)} innerClasses={handleInnerClasses(picked)} icon={picked === 0 ? paper_icon : (picked === 1 ? scissors_icon : rock_icon)} />
              <p className="md:invisible"> YOU PICKED </p>
            </article>
            <article className="md:m-auto md:ml-8 move-choice-right">
              <p className="invisible md:visible md:pb-12 font-semibold"> THE HOUSE PICKED </p>
              <div className="bg-radial-gradient-to h-fit w-fit m-auto rounded-full">
                <Choice className={handleClasses(pc, true)} innerClasses={handleInnerClasses(pc)} icon={pc === 0 ? paper_icon : (pc === 1 ? scissors_icon : rock_icon)} />
              </div>
              <p className="md:invisible"> THE HOUSE PICKED </p>
            </article>
          </section>
          <section className="absolute bottom-0 w-screen result lg:top-1/3">
            <h1 className="text-6xl font-bold"> {(!tie && !win) ? "YOU LOSE" : (win ? "YOU WIN" : "YOU TIED")} </h1>
            <button className="text-dark-text bg-white font-medium w-48 py-2 rounded-lg mt-4" onClick={() => setPicked(-1)}> PLAY AGAIN </button>
          </section>
        </section>
      )
    } else {
      return (
        <section className="grid grid-cols-2 z-10 absolute w-screen top-1/3 md:gap-16">
          <div className="col-auto w-screen h-full grid place-content-center absolute z-0"> <img className="m-auto w-8/12 md:w-11/12" src={bgImage} alt="bg" /> </div>
          <Button className="col-span-1 from-paper-from to-paper-to m-auto mr-8 choice-paper" innerClasses="inner-shadow-paper" handleChoice={handleChoice} value={0} icon={paper_icon} setPicked={setPicked} />
          <Button className="col-span-1 from-scissors-from to-scissors-to m-auto ml-8 choice-scissors" innerClasses="inner-shadow-scissors" handleChoice={handleChoice} value={1} icon={scissors_icon} setPicked={setPicked} />
          <Button className="col-span-2 from-rock-from to-rock-to choice-rock" innerClasses="inner-shadow-rock" handleChoice={handleChoice} value={2} icon={rock_icon} setPicked={setPicked} />
        </section>
      )
    }
  }

  return (
    handleView()
  );
}