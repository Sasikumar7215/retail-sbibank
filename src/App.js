import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
<<<<<<< HEAD
=======
import Dashboard from "./components/Dashboard";
>>>>>>> 631e2c74a77ad7e9b0266f7e37e07ab77c1bde33
import LoginForm from "./components/LoginForm";
import AccountPage from "./pages/AccountPage";
import PaymentPage from "./pages/PaymentPage";
import BillsPage from "./pages/BillsPage";
import DepositPage from "./pages/DepositPage";
import ETaxPage from "./pages/ETaxPage";
import EServices from "./pages/EServices";
import Request from "./pages/Request";
<<<<<<< HEAD
import UsefullLinks from "./pages/UsefullLinks";
import "./App.css";
=======
import UserLinks from "./pages/UserLinks";
>>>>>>> 631e2c74a77ad7e9b0266f7e37e07ab77c1bde33
// import AccountPage from "./pages/AccountPage";
export default function App() {
  // auto-restore last visited module
  // const last = localStorage.getItem("lastPage") || "accounts";

  return (
    <>
   
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loginform" element={<LoginForm />} />
<<<<<<< HEAD
        
         <Route path="/accounts" element={<AccountPage />} />
         <Route path="/payments" element={<PaymentPage />} />
               <Route path="/bills" element={<BillsPage />} />
               <Route path="/deposit" element={<DepositPage />} />
               <Route path="/tax" element={<ETaxPage />} />
               <Route path="/services" element={<EServices />} />
               <Route path="/requests" element={<Request />} />
               <Route path="/links" element={<UsefullLinks />} />
=======
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/accounts" element={<AccountPage />} />
>>>>>>> 631e2c74a77ad7e9b0266f7e37e07ab77c1bde33
          <Route path="/accounts/:section" element={<AccountPage />} />
               <Route path="/payments/:section" element={<PaymentPage />} />
               <Route path="/bills/:section" element={<BillsPage />} />
               <Route path="/deposit/:section" element={<DepositPage />} />
               <Route path="/tax/:section" element={<ETaxPage />} />
               <Route path="/services/:section" element={<EServices />} />
<<<<<<< HEAD
               <Route path="/requests/:section" element={<Request />} />
               <Route path="/links/:section" element={<UsefullLinks />} />
=======
               <Route path="/request/:section" element={<Request />} />
               <Route path="/userlinks/:section" element={<UserLinks />} />
>>>>>>> 631e2c74a77ad7e9b0266f7e37e07ab77c1bde33
          {/* <Route path="/accounts" element={<AccountPage />}/> */}
      </Routes>
     {/* <Login /> */}
   
   </>
  );
}
