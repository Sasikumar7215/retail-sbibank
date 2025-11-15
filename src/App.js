import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import AccountPage from "./pages/AccountPage";
import PaymentPage from "./pages/PaymentPage";
import BillsPage from "./pages/BillsPage";
import DepositPage from "./pages/DepositPage";
import ETaxPage from "./pages/ETaxPage";
import EServices from "./pages/EServices";
import Request from "./pages/Request";
import UserLinks from "./pages/UserLinks";
// import AccountPage from "./pages/AccountPage";
export default function App() {
  // auto-restore last visited module
  // const last = localStorage.getItem("lastPage") || "accounts";

  return (
    <>
   
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loginform" element={<LoginForm />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/accounts" element={<AccountPage />} />
          <Route path="/accounts/:section" element={<AccountPage />} />
               <Route path="/payments/:section" element={<PaymentPage />} />
               <Route path="/bills/:section" element={<BillsPage />} />
               <Route path="/deposit/:section" element={<DepositPage />} />
               <Route path="/tax/:section" element={<ETaxPage />} />
               <Route path="/services/:section" element={<EServices />} />
               <Route path="/request/:section" element={<Request />} />
               <Route path="/userlinks/:section" element={<UserLinks />} />
          {/* <Route path="/accounts" element={<AccountPage />}/> */}
      </Routes>
     {/* <Login /> */}
   
   </>
  );
}
