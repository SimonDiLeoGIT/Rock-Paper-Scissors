import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import { OriginalGame } from "./pages/OriginalGame";
import { BonusGame } from "./pages/BonusGame";

function App() {

  return (
    <main class=" w-screen h-screen m-auto text-center font-sans bg-gradient-to-b from-radial-gradient-from to-radial-gradient-to text-white p-8">
      <h1 className="text-4xl text-white font-semibold border-4 border-header-outline inline-block p-8 rounded-xl"> Rock, Paper, Scissors Game </h1>
      <section className="game-options">
        <h2 className="text-3xl p-4 mt-12 font-semibold"> Game mode </h2>
        <Router>
          <section className="grid gap-4">
            <div className="m-auto flex rounded-xl bg-opacity-100 hover:bg-gradient-to-r from-scissors-to via-paper-to to-rock-to">
              <Link
                to="/original-mode"
                className="text-lg w-32 font-medium py-2 rounded-xl border-2 hover:border-none hover:bg-gradient-to-t from-radial-gradient-from to-radial-gradient-to hover:m-0.5"
              >
                Original
              </Link>
            </div>
            <div className="m-auto flex rounded-xl bg-opacity-100 hover:bg-gradient-to-r from-scissors-to via-paper-to to-rock-to">
              <Link
                to="/bonus-mode"
                className="text-lg w-32 font-medium py-2 rounded-xl border-2 hover:border-none  hover:bg-gradient-to-t from-radial-gradient-from to-radial-gradient-to hover:m-0.5"
              >
                Bonus
              </Link>
            </div>
          </section>
          <Routes>
            <Route path="/original-mode" element={<OriginalGame />} />
            <Route path="/bonus-mode" element={<BonusGame />} />
          </Routes>
        </Router>
      </section>
    </main>
  );
}

export default App;
