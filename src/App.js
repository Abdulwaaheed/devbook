import "./assets/style/main.css";
import { Routes, Route } from "react-router-dom";
import { Home, Nasr, Nazm, Forum, Maqolar,Singin } from "./Pages";
import Header from "./Container/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nasr" element={<Nasr />} />
          <Route path="/nazm" element={<Nazm />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/maqolar" element={<Maqolar />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
