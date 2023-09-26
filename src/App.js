import Login from "./pages/Login";
import Teste from "./pages/Home";
import Etiqueta from "./pages/Etiqueta";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Teste/>}/>
        <Route path="/etiqueta" element={<Etiqueta/>}/>
      </Routes>
    </Router>
  );
}

export default App;