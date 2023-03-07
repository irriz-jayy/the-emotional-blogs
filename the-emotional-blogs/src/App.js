import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import New from "./components/New";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/new-blog" element={<New />} />
      </Routes>
      {/* <Login /> */}
    </div>
  );
}

export default App;
