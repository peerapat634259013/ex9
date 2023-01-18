import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Search from "./pages/Search";
import Restaurants from "./pages/Restaurants";
import Register from "./pages/Register";
import Navbar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Restaurants />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Register" element={<Register />} />
          <Route path="Update/:restaurantId" element={<Update />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
