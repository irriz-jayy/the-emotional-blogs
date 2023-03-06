import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
      {/* <Login /> */}
    </div>
  );
}

export default App;
