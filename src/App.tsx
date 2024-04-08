import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/Homepage";
import Resume from "./views/Resume";
import Projects from "./views/Projects";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
