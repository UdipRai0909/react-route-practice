import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Zones from "./pages/Zones";
import Cities from "./pages/Cities";

function App() {
  const listZone = [
    {
      zone: "Bagmati",
      city: ["Ktm", "Bhaktapur", "Lalitpur"],
    },
    {
      zone: "Gandaki",
      city: ["Gorkha", "Kaski", "Lamjung"],
    },
    {
      zone: "Narayani",
      city: ["Bara", "Parsa", "Rautahat"],
    },
  ];

  return (
    <BrowserRouter>
      <NavbarComponent zone={listZone} />
      <Routes>
        <Route path="/" element="" />
        {/* <Route index element="" /> */}
        <Route path=":zone" element={<Zones zone={listZone} />}>
          <Route path=":city" element={<Cities zone={listZone} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
