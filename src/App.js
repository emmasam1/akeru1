import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./Responsive.css";
import Home from "./components/Home";
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
import AllClients from "./Dashboard/AllClients";
import Alltrucks from "./Dashboard/Alltrucks";
import Newrequest from "./Dashboard/Newrequest";
import DashRequest from "./Dashboard/DashRequest";
import Notfound from "./components/Notfound";
import Driver from "./Dashboard/Driver";
import Pro from "./Dashboard/InexNewRequest";
import ForgotPassword from "./components/ForgotPassword";
import Setting from "./Dashboard/Setting"
import Trucks from "./Dashboard/Trucks";
import PrivacyPolicy from "./components/PrivacyPolicy";
import FAQ from "./components/Faq";
import Withdrawals from "./Dashboard/Withdrawals";
import NewRequest from "./components/NewRequest";
import ChangePassword from "./components/ChangePassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request" element={<Request />} />
        <Route path="/new-request" element={<NewRequest />} />
        <Route path="/detail" element={<RequestNext />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
        <Route path="/change-password" element={<ChangePassword />} /> 
        
        <Route path="/faq" element={<FAQ />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/profile" element={<Proflie />}>
          <Route path="" element={<Current />} />
          <Route path="ongoing" element={<Ongoing />} />
          <Route path="pending" element={<Pending />} />
          <Route path="complete" element={<Complete />} />
        </Route>
        <Route path="/payment" element={<Payment />}>
          <Route path="card" element={<Card />} />
          <Route path="bank-transfer" element={<Bank />} />
        </Route>
        <Route path="/admin-dashboard" element={<Dashboard />}>
          <Route path="" element={<DashboardHome />}>
          <Route path="" element={<Pro />} />
            <Route path="" element={<Newrequest />} />
          </Route>
          <Route path="request" element={<AdminRequest />} />
          <Route path="all-trucks" element={<Alltrucks />} />
          <Route path="new-request" element={<DashRequest />} />
          <Route path="drivers" element={<Driver />} />
          <Route path="customers" element={<AllClients />} />
          <Route path="trucks" element={<Trucks />} />
          <Route path="setting" element={<Setting />} /> 
          <Route path="withdrawals" element={<Withdrawals />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
