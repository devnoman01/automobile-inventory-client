import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import RequireAuth from "./Pages/Auth/RequireAuth/RequireAuth";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home/Home";
import AddItem from "./Pages/AddItem/AddItem";
import ManageInventories from "./Pages/Inventory/ManageInventories/ManageInventories";
import ManageItem from "./Pages/Inventory/ManageItem/ManageItem";
import ManagesItems from "./Pages/Inventory/ManagesItems/ManagesItems";
import NotFound from "./Pages/NotFound/NotFound";
import "./Styles/App.css";
import MyItems from "./Pages/Inventory/MyItems/MyItems";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />

        {/* authentication related route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/manageInventories"
          element={
            <RequireAuth>
              <ManageInventories />
            </RequireAuth>
          }
        />
        <Route
          path="/manageItems"
          element={
            <RequireAuth>
              <ManagesItems />
            </RequireAuth>
          }
        />
        <Route
          path="/addItem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory/:vehicleId"
          element={
            <RequireAuth>
              <ManageItem />
            </RequireAuth>
          }
        />
        <Route
          path="/myItems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />

        {/* Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
