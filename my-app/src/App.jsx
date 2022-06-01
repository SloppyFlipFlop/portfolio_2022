// put scss import here
import "./styles/globals.scss";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import "./utils/js/customAnimations.js";
import "./utils/scss/customAnimations.scss";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />
    </div>
  );
}

export default App;
