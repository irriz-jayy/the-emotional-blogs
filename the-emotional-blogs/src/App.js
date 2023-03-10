import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import About from "./components/About";
import Newblog from "./components/Newblog";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/new-blog" element={<Newblog />} />
      </Routes>
    </div>
  );
}

export default App;
