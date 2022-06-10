import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./Responsive.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Request from "./components/Request";
import RequestNext from "./components/RquestNext";
import Proflie from "./components/Profile";
import Partner from "./components/Partner";
import HowItWorks from "./components/HowItWorks";
import Ongoing from "./components/Ongoing";
import Current from "./components/Current";
import Pending from "./components/Pending";
import Complete from "./components/Complete";
import Payment from "./components/Payment";
import Card from "./components/Card";
import Bank from "./components/Bank";
import Dashboard from "./Dashboard/Dashboard";
import DashboardHome from "./Dashboard/DashboardHome";
import AdminRequest from "./Dashboard/AdminRequest";
import Trucks from "./Dashboard/Trucks";
import Newrequest from "./Dashboard/Newrequest";
import DashRequest from "./Dashboard/DashRequest";
import Notfound from "./components/Notfound";
import Driver from "./Dashboard/Driver"

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request" element={<Request />} />
        <Route path="/detail" element={<RequestNext />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/profile" element={<Proflie />}>
          <Route path="" element={<Current />} />
          <Route path="ongoing" element={<Ongoing />} />
          <Route path="pending" element={<Pending />} />
          <Route path="complete" element={<Complete />} />
        </Route>
        <Route path="/payment" element={<Payment />}>
          <Route path="" element={<Card />} />
          <Route path="bank-transfer" element={<Bank />} />
        </Route>
        <Route path="/admin-dashboard" element={<Dashboard />}>
          <Route path="" element={<DashboardHome />}>
            <Route path="" element={<Newrequest />} />
          </Route>
          <Route path="request" element={<AdminRequest />} />
          <Route path="trucks" element={<Trucks />} />
          <Route path="new-request" element={<DashRequest />} />
          <Route path="drivers" element={<Driver />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
