export const BonusButton = (props) => {

  function handleClasses() {
    let classes = "m-auto z-10 rounded-full p-3 shadow-inner bg-gradient-to-tr " + props.className;
    return classes;
  }

  return (
    <button
      onClick={() => { props.handleChoice(props.value); props.setPicked(props.value) }}
      className={handleClasses()}
    >
      <div className="bg-white w-20 h-20 rounded-full grid">
        <img className="m-auto w-10" alt="paper" src={props.icon} />
      </div>
    </button>
  )
}