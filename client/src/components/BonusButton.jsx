export const BonusButton = (props) => {

  function handleClasses() {
    let classes = "m-auto z-10 rounded-full p-3 bg-gradient-to-tr md:p-6 " + props.className;
    return classes;
  }

  function handleInnerClasses() {
    let classes = "bg-white w-20 h-20 rounded-full grid md:w-32 md:h-32 " + props.innerClasses;
    return classes;
  }


  return (
    <button
      onClick={() => { props.handleChoice(props.value); props.setPicked(props.value) }}
      className={handleClasses()}
    >
      <div className={handleInnerClasses()}>
        <img className="m-auto w-10 md:w-16 " alt="paper" src={props.icon} />
      </div>
    </button>
  )
}