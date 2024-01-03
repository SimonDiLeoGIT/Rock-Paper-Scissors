export const RulesSection = (props) => {
  return (
    <section className={props.handleRules()}>
      <h1 className="text-dark-text text-4xl font-bold row-span-1 m-auto"> RULES </h1>
      <img className="row-span-2 m-auto" alt="rules" src={props.rules} />
      <button onClick={() => props.setRules(false)}><img className="row-span-1 m-auto" alt="close" src={props.close} /></button>
    </section>
  )
}