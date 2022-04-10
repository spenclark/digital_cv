import "./App.css";
import Hero from "./Components/Hero";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { heroContent } from "./assets/Content/HeroContent";
import FloatingToolBar from "./Components/FloatingToolBar";
import { toolContent } from "./assets/Content/ToolContent";
import Writing from "./Components/Writing";
import { productContent } from "./assets/Content/ProductContent";
import { writtenContent } from "./assets/Content/WrittenContent";
import Projects from "./Components/Projects";
import { Essay } from "./Components/Essay";

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

const RenderRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* Renders Essay routes */}
      {writtenContent.document.map((e) => {
        return <Route path={`/${e.id}`} element={<Essay props={e} />} />;
      })}
    </Routes>
  );
};

function App() {
  return (
    <div className="App">
      <RenderRoutes />
    </div>
  );
}

export default App;
