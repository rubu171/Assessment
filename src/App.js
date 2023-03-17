import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Homepage from "./Pages/Homepage";

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Homepage />} />
  </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
