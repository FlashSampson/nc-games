import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Login } from "./Components/Login";
import { useState } from "react";
import { UserContext } from "./UserContext";
import { Reviews } from "./Components/Reviews";
import { ReviewCategories } from "./Components/ReviewCategoriesCard";
import { ReviewOptions } from "./Components/ReviewOptions";

function App() {
  const [user, setUser] = useState("user");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="App">
          <h1>NC Games</h1>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/Reviews/Options" element={<ReviewOptions />} />
            <Route path="/category/:categoryname" element={<Reviews/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
