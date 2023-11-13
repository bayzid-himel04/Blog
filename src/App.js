import TopBar from "./Components/TopBar/TopBar";
import Home from './Pages/Home/Home';
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Setting/Settings";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const user = false; // You can set this based on your authentication logic

  return (
    <div>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Register/> } />
          <Route path="/settings" element={user ? <Settings /> : <Register/>} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
