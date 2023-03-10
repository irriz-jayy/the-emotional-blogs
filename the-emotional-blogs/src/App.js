import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
