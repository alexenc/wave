import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import Event from "./pages/Event";

import Home from "./pages/Home";

function App() {
  const isAdmin = useSelector((state) => state.user.user.user?.isAdmin);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/admin" element={isAdmin ? <AdminPanel /> : <Home />} />
      </Routes>
    </div>
  );
}

export default App;
