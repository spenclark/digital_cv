import "./App.css";
import Hero from "./Components/Hero";
import { heroContent } from "./assets/Content/HeroContent";
import { navContent } from "./assets/Content/NavContent";
import { productContent } from "./assets/Content/ProductContent";
import { writtenContent } from "./assets/Content/writtenContent";

function App() {
  return (
    <div className="App">
      <Hero props={heroContent} />
    </div>
  );
}

export default App;
