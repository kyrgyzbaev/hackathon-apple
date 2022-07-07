import { Home } from "@mui/icons-material";
import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import EditMacbookAir from "./components/EditMacbookAir/EditMacbookAir";
import MacsList from "./components/MacsList/MacsList";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Shop from "./components/Shop/Shop";
import CommentsList from "./components/CommentsList/CommentsList";
import { authContext } from "./contexts/authContext";
import IphoneList from "./components/IphoneList/IphoneList";
import AirPodsList from "./components/AirPodsList/AirPodsList";
import MacBookAirList from "./components/MacBookAirList/MacBookAirList";
import AddMacBookAir from "./components/AddMacBookAir/AddMacBookAir";
import MacbookProList from "./components/MacbookProList/MacbookProList";
import AddMacbookPro from "./components/AddMacbookPro/AddMacbookPro";
import EditMacBookPro from "./components/EditMacBookPro/EditMacBookPro";
import EditIphone13Pro from "./components/EditIphone13Pro/EditIphone13Pro";
import Iphone13ProList from "./components/Iphone13ProList/Iphone13ProList";
import AddIphone13Pro from "./components/AddIphone13Pro/AddIphone13Pro";
import Iphone13List from "./components/Iphone13List/Iphone13List";
import AddIphone13 from "./components/AddIphone13/AddIphone13";
import EditIphone13 from "./components/EditIphone13/EditIphone13";
import Iphone12List from "./components/Iphone12List/Iphone12List";
import AddIphone12 from "./components/AddIphone12/AddIphone12";
import EditIphone12 from "./components/EditIphone12/EditIphone12";
import AirPods2ndList from "./components/AirPods2ndList/AirPods2ndList";
import AirPods3rdList from "./components/AirPods3rdList/AirPods3rdList";
import AirPodsProList from "./components/AirPodsProList/AirPodsProList";
import AirPodsMaxList from "./components/AirpodsMaxList/AirPodsMaxList";
import AddAirpodsMax from "./components/AddAirpodsMax/AddAirpodsMax";
import EditAirpodsMax from "./components/EditAirpodsMax/EditAirpodsMax";
import EditAirpods from "./components/EditAirpods/EditAirpods";
import AddAirpods from "./components/AddAirpods/AddAirpods";
import AddComment from "./components/AddComment/AddComment";
import EditComments from "./components/EditComments/EditComments";
import MacbookProCart from "./components/MacbookProCart/MacbookProCart";

const Routing = () => {
  const { isAdmin } = useContext(authContext);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/shop" element={<Shop />} />

      <Route
        path="/add-macbook-air"
        element={isAdmin ? <AddMacBookAir /> : <Navigate replace to="*" />}
      />
      <Route
        path="/add-macbook-pro"
        element={isAdmin ? <AddMacbookPro /> : <Navigate replace to="*" />}
      />
      <Route
        path="/add-iphone-13-pro"
        element={isAdmin ? <AddIphone13Pro /> : <Navigate replace to="*" />}
      />
      <Route
        path="/add-iphone-13"
        element={isAdmin ? <AddIphone13 /> : <Navigate replace to="*" />}
      />
      <Route
        path="/add-iphone-12"
        element={isAdmin ? <AddIphone12 /> : <Navigate replace to="*" />}
      />
      <Route
        path="/add-airpods-max"
        element={isAdmin ? <AddAirpodsMax /> : <Navigate replace to="*" />}
      />
      <Route
        path="/add-airpods"
        element={isAdmin ? <AddAirpods /> : <Navigate replace to="*" />}
      />
      <Route path="/add-comments" element={<AddComment />} />

      <Route
        path="/edit-macbook-air/:id"
        element={isAdmin ? <EditMacbookAir /> : <Navigate replace to="*" />}
      />
      <Route
        path="/edit-macbook-pro/:id"
        element={isAdmin ? <EditMacBookPro /> : <Navigate replace to="*" />}
      />
      <Route
        path="/edit-iphone-13-pro/:id"
        element={isAdmin ? <EditIphone13Pro /> : <Navigate replace to="*" />}
      />
      <Route
        path="/edit-iphone-13/:id"
        element={isAdmin ? <EditIphone13 /> : <Navigate replace to="*" />}
      />
      <Route
        path="/edit-iphone-12/:id"
        element={isAdmin ? <EditIphone12 /> : <Navigate replace to="*" />}
      />
      <Route
        path="/edit-airpods-max/:id"
        element={isAdmin ? <EditAirpodsMax /> : <Navigate replace to="*" />}
      />
      <Route
        path="/edit-airpods/:id"
        element={isAdmin ? <EditAirpods /> : <Navigate replace to="*" />}
      />
      <Route path="/edit-comments/:id" element={<EditComments />} />
      <Route path="/macs" element={<MacsList />} />
      <Route path="/iphones" element={<IphoneList />} />
      <Route path="/airpods" element={<AirPodsList />} />
      <Route path="/macbook-air" element={<MacBookAirList />} />
      <Route path="/macbook-pro" element={<MacbookProList />} />
      <Route path="/iphone-13-pro" element={<Iphone13ProList />} />
      <Route path="/iphone-13" element={<Iphone13List />} />
      <Route path="/iphone-12" element={<Iphone12List />} />
      <Route path="/airpods-2nd" element={<AirPods2ndList />} />
      <Route path="/airpods-3rd" element={<AirPods3rdList />} />
      <Route path="/airpods-pro" element={<AirPodsProList />} />
      <Route path="/airpods-max" element={<AirPodsMaxList />} />
      <Route path="/comments" element={<CommentsList />} />
      <Route path="cart" element={<MacbookProCart />} />
    </Routes>
  );
};

export default Routing;
