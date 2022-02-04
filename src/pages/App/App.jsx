import './App.css';
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import AuthPage from "../AuthPage/AuthPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <HomePage/>
      {/* <AuthPage setUser={setUser} /> */}
        {/* <>
        <NavBar setUser={setUser} user={user}/>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        
        </> */}
        
      
    </main>
  );
}

export default App;
