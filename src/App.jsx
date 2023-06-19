import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";

const App = () => {
  return (
    <main className="dark:bg-slate-800">
      <div className="main dark:before:bg-none ">
        <div className="gradient dark:w-full " />
      </div>

      <div className="app ">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
