import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { useState } from "react";
import {UserContext} from './UserContext'
import UserCard from "./Components/UserCard";
import { HomePage } from "./Components/HomePage";
import { Reviews } from "./Components/Reviews";

function App() {
  const [user, setUser] = useState('user');
  return (
    <UserContext.Provider value={ {user, setUser} }>
    <BrowserRouter>

      <div className="App">
        <h1>NC Games</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Reviews" element={<Reviews />} />
          {/* <Route path="/HomePage" element={<HomePage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
