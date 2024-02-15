import About from "./Components/Pages/About";
import Hero from "./Components/Pages/Hero";

function App() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Hero LinkToGo={"#about"} ButtonName={"Get me"} />
    </main>
  );
}

export default App;
