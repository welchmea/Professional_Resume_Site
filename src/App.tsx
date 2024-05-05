import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/Homepage";
import Resume from "./views/Resume";
import Projects from "./views/Projects";
import "./App.css";

function App() {

 const bookshelf =  
 <iframe
  width="1000"
  height="500"
  loading="lazy"
  src="https://fe-bookshelf-6bdf6bf741e2.herokuapp.com"
></iframe>

const hospital =             
<iframe
width="1000"
height="500"
loading="lazy"
src="https://gh-hospital-d474f7c585fa.herokuapp.com"
></iframe>

const mern =             
<iframe
width="1000"
height="500"
loading="lazy"
src="https://web-dev-mern-bef2b172b674.herokuapp.com"
></iframe>

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects books={bookshelf} hospital={hospital} mern={mern}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
