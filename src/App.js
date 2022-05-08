import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header/Header";
import Login from "./Pages/Auth/Login/Login";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home/Home";
import ManageInventories from "./Pages/Inventory/ManageInventories/ManageInventories";
import ManageItem from "./Pages/Inventory/ManageItem/ManageItem";
import NotFound from "./Pages/NotFound/NotFound";
import "./Styles/App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manageInventories" element={<ManageInventories />} />
        <Route path="//inventory/:id" element={<ManageItem />} />

        <Route path="/blogs" element={<Blogs />} />
        {/* Protected Routes */}
        <Route path="/login" element={<Login />} />

        {/* Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
