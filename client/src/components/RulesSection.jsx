export const RulesSection = (props) => {
  return (
    <section className={props.handleRules()}>
      <section className="w-screen h-screen grid grid-rows-4 place-content-center md:w-96 md:bg-white md:h-96 md:rounded-xl md:grid-cols-2 px-4">
        <h1 className="text-dark-text text-4xl font-bold row-span-1 col-span-1 m-auto md:ml-4"> RULES </h1>
        <button className="absolute h-0 w-0 col-span-1 m-auto md:relative md:w-10 md:h-10 md:mr-4" onClick={() => props.setRules(false)}><img alt="close" src={props.close} /></button>
        <img className="row-span-2 m-auto md:col-span-2" alt="rules" src={props.rules} />
        <button className="row-span-1 m-auto md:invisible" onClick={() => props.setRules(false)}><img className="" alt="close" src={props.close} /></button>
      </section>
    </section>
  )
}