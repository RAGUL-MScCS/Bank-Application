import "./styles.css";
import UserContext from "./context";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './navbar';
import Footer from './footer';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Signin from './createaccount';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import Alldata from './Alldata';
export default function App() {
  return (
    <Router>
      <Navbar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "",
              email: "",
              password: "",
              balance: ""
            }
          ]
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/alldata" element={<Alldata />} />
         
     </Routes>
      </UserContext.Provider>
      <Footer />
    </Router>
  );
}
