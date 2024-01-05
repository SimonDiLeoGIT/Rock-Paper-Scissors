export const Header = (props) => {
  return (
    <section className="grid grid-cols-2 w-5/6 m-auto border-4 border-header-outline rounded-lg p-3 my-10 md:w-5/12">
      <div className="col-span-1 m-auto ml-2">
        <img className={props.logoClasses} alt="logo" src={props.logo} />
      </div>
      <div className="col-span-1 bg-white w-24 md:w-32 h-20 md:h-full m-auto mr-0 rounded-md shadow-lg">
        <p className="text-score-text text-xs font-semibold mt-2 md:text-sm"> SCORE </p>
        <h2 className="text-dark-text font-semibold text-5xl md:text-6xl"> {props.score} </h2>
      </div>
    </section>
  );
}