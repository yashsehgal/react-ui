import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServersSidebar from "./components/ServersSidebar/index";
import Home from './pages/Home/index';
import Profile from './pages/Profile/index';

export default function App() {
  return (
    <div className="app">
        <BrowserRouter>
        <ServersSidebar />
          <div className="m-left-14">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  )
}