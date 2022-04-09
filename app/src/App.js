import "./App.css";
import Hero from "./Components/Hero";
import { heroContent } from "./assets/Content/HeroContent";
import FloatingToolBar from "./Components/FloatingToolBar";
import { toolContent } from "./assets/Content/ToolContent";
// import { productContent } from "./assets/Content/ProductContent";
// import { writtenContent } from "./assets/Content/writtenContent";

function App() {
  return (
    <div className="App">
      <Hero props={heroContent} />
      <FloatingToolBar props={toolContent} />
    </div>
  );
}

export default App;
