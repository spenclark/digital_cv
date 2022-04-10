import "./App.css";
import Hero from "./Components/Hero";
import { heroContent } from "./assets/Content/HeroContent";
import FloatingToolBar from "./Components/FloatingToolBar";
import { toolContent } from "./assets/Content/ToolContent";
import Writing from "./Components/Writing";
import { productContent } from "./assets/Content/ProductContent";
import { writtenContent } from "./assets/Content/WrittenContent";
import Projects from "./Components/Projects";

function Landing() {
  return (
    <>
      <Hero props={heroContent} />
      <FloatingToolBar props={toolContent} />
      <Writing props={writtenContent} />
      <Projects props={productContent} />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
