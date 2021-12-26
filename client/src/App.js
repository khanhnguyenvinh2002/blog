import './App.css';
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Categories from './pages/categories/Categories';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { Context } from './context/Context';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Porfolio from './pages/portfolio/Portfolio';
function App() {
  const {user} = useContext(Context);

  const [ulBox, setUlBox] = useState("");

  window.onscroll = function() {scrollFunction()};

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.opacity = "1";
    } else {
        document.getElementById("myBtn").style.opacity = "0";
    }
  }

  const topFunction = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <Router>
      <div className="App">
        <TopBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Porfolio/>} />
          {/* <Route path="/register" element={user? <Home/>: <Register/>} /> */}
          <Route path="/login" element={user? <Home/>: <Login/>} />
          <Route path="/write" element={user? <Write/>: <Login/>} />
          <Route path="/settings" element={user? <Settings/>: <Login/>} />
          <Route path="/post/:postId" element={<Single/>} />
        </Routes>
        <button onClick={topFunction} className={ulBox} id="myBtn" title="Go to top">Top</button>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
