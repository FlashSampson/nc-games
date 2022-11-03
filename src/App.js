import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Login } from "./Components/Login";
import { useState } from "react";
import { UserContext } from "./UserContext";
import { Reviews } from "./Components/Reviews";
import { ReviewOptions } from "./Components/ReviewOptions";
import { SingleReview } from "./Components/SingleReview";
import { Link } from "react-router-dom";
function App() {
  const [user, setUser] = useState("user");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="title-box">
          <Link to={"/Reviews"} >
          <h1>NC Games</h1>
          </Link>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/Reviews/Options" element={<ReviewOptions />} />
            <Route path="/category/:categoryname" element={<Reviews />} />
            <Route path="/reviews/:review_id" element={<SingleReview />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
