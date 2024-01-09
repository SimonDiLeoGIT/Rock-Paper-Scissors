export const Choice = (props) => {

  function handleClasses() {
    let classes = " rounded-full p-4 w-fit m-auto bg-gradient-to-tr md:p-8 " + props.className;
    return classes;
  }

  function handleInnerClasses() {
    let classes = " bg-white w-28 h-28 rounded-full grid md:w-52 md:h-52 " + props.innerClasses;
    return classes;
  }

  return (
    <div
      className={handleClasses()}
    >
      <div className={handleInnerClasses()}>
        <img className="m-auto md:w-24" alt="paper" src={props.icon} />
      </div>
    </div>
  )
}