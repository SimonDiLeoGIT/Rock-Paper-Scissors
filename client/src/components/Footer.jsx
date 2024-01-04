export const Footer = (props) => {
  return (
    <footer className="absolute bottom-0 w-screen p-10 md:text-end">
      <div className="m-auto inline-block rounded-xl  hover:bg-gradient-to-r from-scissors-to via-paper-to to-rock-to">
        <button
          className="text-lg w-32 font-medium py-2 rounded-xl border-2 hover:border-none hover:bg-gradient-to-t from-radial-gradient-from to-radial-gradient-to hover:m-0.5"
          onClick={() => props.setRules(true)}
        > RULES
        </button>
      </div>
    </footer>
  )
}