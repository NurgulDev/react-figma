import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Rgister from "./components/Register/Rgister";
import Consultasia from "./Consultasia/Consultasia";
import Vam from "./components/voit/Vam";
import Chak from "./components/consultatia/fil/Chak";

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/register" element={<Rgister/>}/>
     <Route path="/consultasia" element={<Consultasia/>}/>
     <Route path="vam" element={<Vam/>}/>
     <Route path="chack" element={<Chak/>}/>



     </Routes>
      
    </div>
  );
}

export default App;
