import AOS from "aos";
import "aos/dist/aos.css";
import Channels from "pages/channels";
import HomePage from "pages/home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/channels" element={<Channels />} />
    </Routes>
  );
}
AOS.init();
export default App;
