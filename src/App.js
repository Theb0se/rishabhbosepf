import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// ..

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
