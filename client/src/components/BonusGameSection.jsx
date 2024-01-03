import paper_icon from "./../assets/images/icon-paper.svg"
import scissors_icon from "./../assets/images/icon-scissors.svg"
import rock_icon from "./../assets/images/icon-rock.svg"
import lizard_icon from "./../assets/images/icon-lizard.svg"
import spock_icon from "./../assets/images/icon-spock.svg"
import bgImage from "./../assets/images/bg-pentagon.svg"
import { useState } from "react";
import { Button } from "./Button";
import { BonusButton } from "./BonusButton"

export const BonusGameSection = (props) => {

  let [picked, setPicked] = useState(-1);
  let [pc, setPc] = useState(-1);
  let [win, setWin] = useState(false);
  let [tie, setTie] = useState(false);

  function handleChoice(key) {

    let user = key;

    let pcPick = Math.floor(Math.random() * 5);
    setPc(pcPick);

    let tie = false;
    let win = false;

    if (user === 0) {
      pcPick === 0 && (tie = true);
      pcPick === 2 && (win = true);
      pcPick === 3 && (win = true);
    } else if (user === 1) {
      pcPick === 1 && (tie = true);
      pcPick === 0 && (win = true);
      pcPick === 4 && (win = true);
    } else if (user === 2) {
      pcPick === 2 && (tie = true);
      pcPick === 1 && (win = true);
      pcPick === 4 && (win = true);
    } else if (user === 3) {
      pcPick === 3 && (tie = true);
      pcPick === 1 && (win = true);
      pcPick === 2 && (win = true);
    } else {
      pcPick === 4 && (tie = true);
      pcPick === 0 && (win = true);
      pcPick === 3 && (win = true);
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

    console.log(pcPick)
  }

  function handleClasses(choice, pc) {
    let classes = "from-scissors-from to-scissors-to"
    if (choice === 1) {
      classes = "from-cyan-from to-cyan-to";
    } else if (choice === 2) {
      classes = "from-paper-from to-paper-to";
    } else if (choice === 3) {
      classes = "from-lizard-from to-lizard-to";
    } else if (choice === 4) {
      classes = "from-rock-from to-rock-to";
    }

    pc && (classes += " pc-animation")
    return classes
  }


  function handleView() {
    if (picked > -1) {
      return (
        <section className="grid z-10 absolute w-screen top-1/3 h-1/2">
          <section className="grid grid-cols-2">
            <article className="">
              <Button className={handleClasses(picked, false)} icon={picked === 0 ? scissors_icon : (picked === 1 ? spock_icon : (picked === 2 ? paper_icon : (picked === 3 ? lizard_icon : rock_icon)))} />
              <p> YOU PICKED </p>
            </article>
            <article className="">
              <div className="bg-radial-gradient-to h-fit w-fit m-auto rounded-full">
                <Button className={handleClasses(pc, true)}
                  icon={
                    pc === 0 ? scissors_icon : (pc === 1 ? spock_icon : (pc === 2 ? paper_icon : (pc === 3 ? lizard_icon : rock_icon)))
                  } />
              </div>
              <p> THE HOUSE PICKED </p>
            </article>
          </section>
          <section className="absolute bottom-0 w-screen result">
            <h1 className="text-6xl font-bold"> {(!tie && !win) ? "YOU LOSE" : (win ? "YOU WIN" : "YOU TIE")} </h1>
            <button className="text-dark-text bg-white font-medium w-48 py-2 rounded-lg mt-4" onClick={() => setPicked(-1)}> PLAY AGAIN </button>
          </section>
        </section>
      )
    } else {
      return (
        <section className="grid grid-cols-2 z-10 absolute top-1/3 w-screen gap-0">
          <div className="col-auto w-screen h-full grid place-content-center absolute z-0"> <img className="m-auto w-64" src={bgImage} alt="bg" /> </div>
          <BonusButton className="col-span-2 from-scissors-from to-scissors-to " handleChoice={handleChoice} value={0} icon={scissors_icon} setPicked={setPicked} />
          <BonusButton className="col-span-1 m-auto ml-8 from-cyan-from to-cyan-to  " handleChoice={handleChoice} value={1} icon={spock_icon} setPicked={setPicked} />
          <BonusButton className="col-span-1 m-auto mr-8 from-paper-from to-paper-to " handleChoice={handleChoice} value={2} icon={paper_icon} setPicked={setPicked} />
          <BonusButton className="col-span-1 m-auto ml-20 mt-8 from-lizard-from to-lizard-to " handleChoice={handleChoice} value={3} icon={lizard_icon} setPicked={setPicked} />
          <BonusButton className="col-span-1 m-auto mr-20 mt-8 from-rock-from to-rock-to" handleChoice={handleChoice} value={4} icon={rock_icon} setPicked={setPicked} />
        </section>
      )
    }
  }

  return (
    handleView()
  );
}