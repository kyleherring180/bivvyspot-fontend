import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Navbar from "./components/layout/Navbar.tsx";

function App() {
    return (
        <Router>
            {/* Navbar is placed outside the Routes, so it appears on all pages */}
            <Navbar isLoggedIn={false} /> {/* Pass props like isLoggedIn if needed */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Uncomment or add additional routes */}
                {/* <Route path="/post/:id" element={<PostDetails />} /> */}
                {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
