import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import EventDetails from "./pages/EventDetails";
import AllEvents from "./pages/AllEvents";
import FindFriends from "./pages/FindFriends";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
	<Route path="/events/all" element={<AllEvents />} />
	<Route path="/event/:id/find-friends" element={<FindFriends />} />
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
	<Route path="/events" element={<HomePage />} />
	<Route path="/register" element={<Register />} />
	<Route path="/home" element={<HomePage />} />
	<Route path="/event/:id" element={<EventDetails />} />
      </Routes>
    </>
  );
}

