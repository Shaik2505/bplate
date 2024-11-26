import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Body from "./components/Body";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Routes>
      {/* Login Route */}
      <Route path="/" element={<Login />} />
      
      {/* Wrap the Body component and add its child routes */}
      <Route path="/body" element={<Body />}>
        <Route path="home" element={<Home />} /> {/* Relative path */}
        <Route path="about" element={<AboutUs />} /> {/* Relative path */}
        <Route path="contactUs" element={<Contact />} /> {/* Relative path */}
      </Route>
    </Routes>
  );
};

export default App;
