import './App.css';
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useContext, useState } from 'react';
import { Context } from './context/Context';
import Footer from './components/footer/Footer';
function App() {
  const {user} = useContext(Context);

  const [ulBox, setUlBox] = useState("");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.opacity = "1";
 } else {
    document.getElementById("myBtn").style.opacity = "0";
 }
  // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //   setUlBox("block")
  // } else {
  //   setUlBox("")
  // }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scroll({top: 0, left: 0, behavior: 'smooth' })
  // document.body.scrollTop = 0; // For Safari
  // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
  return (
    <Router>
      <div className="App">
        <TopBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={user? <Home/>: <Register/>} />
          <Route path="/login" element={user? <Home/>: <Login/>} />
          <Route path="/write" element={user? <Write/>: <Register/>} />
          <Route path="/settings" element={user? <Settings/>: <Register/>} />
          <Route path="/post/:postId" element={<Single/>} />
        </Routes>
        <button onClick={topFunction} className={ulBox} id="myBtn" title="Go to top">Top</button>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
