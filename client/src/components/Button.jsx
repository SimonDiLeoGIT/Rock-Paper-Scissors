export const Button = (props) => {

  function handleClasses() {
    let classes = "m-auto z-10 rounded-full p-4 shadow-inner bg-gradient-to-tr md:p-6 " + props.className;
    return classes;
  }

  return (
    <button
      onClick={() => { props.handleChoice(props.value); props.setPicked(props.value) }}
      className={handleClasses()}
    >
      <div className="bg-white w-28 h-28 rounded-full grid md:w-36 md:h-36">
        <img className="m-auto md:w-20" alt="paper" src={props.icon} />
      </div>
    </button>
  )
}