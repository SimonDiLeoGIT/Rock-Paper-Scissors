import logo from "./../assets/images/logo-bonus.svg"
import rules from "./../assets/images/image-rules-bonus.svg"
import { useState } from "react"
import { Header } from "../components/Header"
import close from "./../assets/images/icon-close.svg"
import { RulesSection } from "../components/RulesSection"
import { Footer } from "../components/Footer"
import { BonusGameSection } from "../components/BonusGameSection"

export const BonusGame = () => {

  let [score, setScore] = useState(0);
  let [viewRules, setRules] = useState(false);

  function handleRules() {
    let classes = "absolute bg-white top-0 z-20 w-screen h-screen  md:grid md:place-content-center md:bg-black md:bg-opacity-40";
    !viewRules && (classes += " invisible ");
    return classes;
  }

  return (
    <section className="fixed top-0 left-0 h-screen w-screen bg-gradient-to-b from-radial-gradient-from to-radial-gradient-to">
      <Header logo={logo} score={score} logoClasses="w-20 md:w-28" />
      <BonusGameSection score={score} setScore={setScore} />
      <RulesSection handleRules={handleRules} close={close} setRules={setRules} rules={rules} />
      <Footer setRules={setRules} />
    </section>
  );
}