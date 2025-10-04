import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Playlist from "./pages/Playlist";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/playlist" element={<Playlist />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
      </Routes>
    </>
  );
}

export default App;
