import { Home } from "@mui/icons-material";
import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddMacs from "./components/AddMacs/AddMacs";
import EditMacs from "./components/EditMacs/EditMacs";
import EditMacbookAir from "./components/EditMacbookAir/EditMacbookAir";
import MacsList from "./components/MacsList/MacsList";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Shop from "./components/Shop/Shop";
import { authContext } from "./contexts/authContext";
import IphoneList from "./components/IphoneList/IphoneList";
import AirPodsList from "./components/AirPodsList/AirPodsList";
import MacBookAirList from "./components/MacBookAirList/MacBookAirList";
import AddMacBookAir from "./components/AddMacBookAir/AddMacBookAir";
import MacbookPro from "./components/MacbookProList/MacbookProList";
import AddMacbookPro from "./components/AddMacbookPro/AddMacbookPro";
import EditMacBookPro from "./components/EditMacBookPro/EditMacBookPro";

const Routing = () => {
  const { isAdmin } = useContext(authContext);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/shop" element={<Shop />} />
      <Route
        path="/add-macs"
        element={isAdmin ? <AddMacs /> : <Navigate replace to="*" />}
      />
      <Route
        path="/add-macbook-air"
        element={isAdmin ? <AddMacBookAir /> : <Navigate replace to="*" />}
      />
      <Route
        path="/add-macbook-pro"
        element={isAdmin ? <AddMacbookPro /> : <Navigate replace to="*" />}
      />
      <Route
        path="/edit-macs/:id"
        element={isAdmin ? <EditMacs /> : <Navigate replace to="*" />}
      />
      <Route
        path="/edit-macbook-air/:id"
        element={isAdmin ? <EditMacbookAir /> : <Navigate replace to="*" />}
      />
      <Route
        path="/edit-macbook-pro/:id"
        element={isAdmin ? <EditMacBookPro /> : <Navigate replace to="*" />}
      />
      <Route path="/macs" element={<MacsList />} />
      <Route path="/iphones" element={<IphoneList />} />
      <Route path="/airpods" element={<AirPodsList />} />
      <Route path="/macbook-air" element={<MacBookAirList />} />
      <Route path="/macbook-pro" element={<MacbookPro />} />
    </Routes>
  );
};

export default Routing;
