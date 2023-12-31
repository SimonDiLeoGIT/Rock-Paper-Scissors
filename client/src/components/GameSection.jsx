import paper_icon from "./../assets/images/icon-paper.svg"
import scissors_icon from "./../assets/images/icon-scissors.svg"
import rock_icon from "./../assets/images/icon-rock.svg"
import bgImage from "./../assets/images/bg-triangle.svg"
import { useState } from "react";
import { Button } from "./Button";

export const GameSection = (props) => {

  let [picked, setPicked] = useState(-1);
  let [pc, setPc] = useState(-1);

  function handleChoice(key) {

    let user = key;

    let pcPick = Math.floor(Math.random() * 3);
    setPc(pcPick);

    let win = false;
    let empate = false;

    if (user === 0) {
      pcPick === 0 && (empate = true);
      pcPick === 2 && (win = true);
    } else if (user === 1) {
      pcPick === 1 && (empate = true);
      pcPick === 0 && (win = true);
    } else {
      pcPick === 2 && (empate = true);
      pcPick === 1 && (win = true);
    }

    if (!empate) {
      if (!win) {
        (props.score > 0) && props.setScore(props.score - 1)
      } else {
        props.setScore(props.score + 1)
      }
    }

  }

  function handleClasses(choice) {
    let classes = "from-paper-from to-paper-to"
    if (choice === 1) {
      classes = "from-scissors-from to-scissors-to";
    } else if (choice === 2) {
      classes = "from-rock-from to-rock-to";
    }
    return classes
  }


  function handleView() {
    if (picked > -1) {
      return (
        <section>
          <Button className={handleClasses(picked)} icon={picked === 0 ? paper_icon : (picked === 1 ? scissors_icon : rock_icon)} />
          <p> YOU PICKED </p>
          <Button className={handleClasses(pc)} icon={pc === 0 ? paper_icon : (pc === 1 ? scissors_icon : rock_icon)} />
          <p> THE HOUSE PICKED </p>
          <button onClick={() => setPicked(-1)}> CONTINUE </button>
        </section>
      )
    } else {
      return (
        <section className="grid grid-cols-2 z-10 absolute w-screen top-1/3">
          <div className="col-auto w-screen h-full grid place-content-center absolute z-0"> <img className="m-auto w-52" src={bgImage} alt="bg" /> </div>
          <Button className="col-span-1 from-paper-from to-paper-to" handleChoice={handleChoice} value={0} icon={paper_icon} setPicked={setPicked} />
          <Button className="col-span-1 from-scissors-from to-scissors-to" handleChoice={handleChoice} value={1} icon={scissors_icon} setPicked={setPicked} />
          <Button className="col-span-2 from-rock-from to-rock-to" handleChoice={handleChoice} value={2} icon={rock_icon} setPicked={setPicked} />
        </section>
      )
    }
  }

  return (
    handleView()
  );
}