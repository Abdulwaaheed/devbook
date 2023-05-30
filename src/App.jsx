import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserCard } from "./Container";
import NowRead from "./Container/NowRead/NowRead";
import UserBook from "./Container/UserBook/UserBook";

function App() {
  return (
    <div className="App">
      <UserCard />
      <Router>
        <Routes>
          <Route path="/" element={<UserBook />} />
          <Route path="/nima" element={<UserBook />} />
        </Routes>
        <NowRead />
      </Router>
    </div>
  );
}

export default App;
