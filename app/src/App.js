import "./App.css";
import Hero from "./Components/Hero";
import { heroContent } from "./assets/Content/HeroContent";
import FloatingToolBar from "./Components/FloatingToolBar";
import { toolContent } from "./assets/Content/ToolContent";
import Writing from "./Components/Writing";
// import { productContent } from "./assets/Content/ProductContent";
import { writtenContent } from "./assets/Content/WrittenContent";

function App() {
  return (
    <div className="App">
      <Hero props={heroContent} />
      <FloatingToolBar props={toolContent} />
      <Writing props={writtenContent} />
    </div>
  );
}

export default App;
