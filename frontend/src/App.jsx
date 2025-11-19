import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import EventDetails from "./pages/EventDetails";
import AllEvents from "./pages/AllEvents";
import FindFriends from "./pages/FindFriends";
import ProfilePage from "./pages/ProfilePage";  

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/events" element={<HomePage />} />

        <Route path="/events/all" element={<AllEvents />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/event/:id/find-friends" element={<FindFriends />} />

        <Route path="/profile" element={<ProfilePage />} />   {/* ✅ NEW ROUTE */}
      </Routes>
    </>
  );
}
