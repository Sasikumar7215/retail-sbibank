
import './App.css';
import Login from "./components/Login";
import EnquiryStatementConfirm from './components/EnquiryStatementConfirm';
import StatementByDate from './components/StatementByDate';
import AccountStatement from './components/AccountStatement';
import EnquiryTransactionStatement from './components/EnquiryTransactionStatement';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    
      <Router>
   <div className="App container-fluid">
      
        <Routes>
        
          <Route path="/retail/login.htm" element={<Login />} />
          <Route path="/retail/enquirytransactionstatement.htm" element={<EnquiryTransactionStatement/>} />
          <Route path="/retail/enquirystatementconfirm.htm" element={<EnquiryStatementConfirm />} />
          <Route path="/retail/statementbydate.htm" element={<StatementByDate />} />
          <Route path="/retail/accountstatement.htm" element={<AccountStatement />} />
        </Routes>
        <Login />
    </div>
   </Router>
  
  );
}

export default App;
