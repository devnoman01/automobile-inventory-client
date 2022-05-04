import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header/Header";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import "./Styles/App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/blogs" element={<Blogs />} />
        {/* Protected Routes */}

        {/* Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
