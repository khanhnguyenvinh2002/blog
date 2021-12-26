import React, { useContext , useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./topbar.css"

const PF = "https://stark-falls-12636.herokuapp.com/images/"
export default function TopBar() {
    const {user, dispatch} = useContext(Context);
    const [toggled, setToggled] = useState(false);
    var lastScroll = 0;
    const [box, setBox] = useState("toggle");
    const [ulBox, setUlBox] = useState("menu");

  const [show, setShow] = useState(false)
  const controlNavbar = () => {
      if(window.scrollY < 20){
        setShow(true)
        document.getElementById("top").style.opacity = "1";
        return
      }
    if (window.scrollY >= lastScroll ) {
        setShow(true)
        document.getElementById("top").style.opacity = "1";
    }else{
      setShow(false)
      document.getElementById("top").style.opacity = "0";
    }
    lastScroll = window.scrollY;


}

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, [])
    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
    }
    const handleToggle = () => {
        if(toggled){
            setBox("toggle")
            setUlBox("menu")
        }
        else{
            setBox("toggle active")
            setUlBox("menu active-menu")
        }
        setToggled(!toggled)
    }
    return (
        <div className="top" id="top">
            <div className="topLeft">
                <Link to="/" className="link logo">Andrew Nguyen</Link>
            </div>
            <div className="topRight">
                <ul className={ulBox}>
                    <li className="topListItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/about" className="link">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/portfolio" className="link">PORTFOLIO</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/categories" className="link">CATEGORY</Link>
                    </li>
                    {user && 
                    <>

                    <li className="topListItem">
                        <Link to="/write" className="link">WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                       <a className="link">LOG OUT</a>
                    </li>
                    </>}
                </ul>
            </div>
            <div className="topCenterSmall">
                <ul className={ulBox}>
                    <li className="topListItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/about" className="link">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/portfolio" className="link">PORTFOLIO</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/categories" className="link">CATEGORY</Link>
                    </li>
                    {/* {user ?
                    <> 

                    <li className="topListItem">
                        <Link to="/write" className="link">WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                       <div className="link">LOG OUT</div>
                    </li>

                    <li className="topListItem" onClick={handleLogout}>
                       <Link to="/settings"  className="link">SETTINGS</Link>
                    </li>
                    </>
                   : (

                    <li className="topListItem">
                        <Link to="/login" className="link">LOGIN</Link>
                    </li>)
                   } */}
                </ul>
            </div>
            {/* <div className="topRight deletable">
                {user? (

                <Link to="/settings">
                    <img className="topImg" src={PF + user.profilePic} alt="" />  
                    </Link> 
                ) : (
                    
                <ul className="menu ">
                    <li className="topListItem">
                        <Link to="/login" className="link">LOGIN</Link>
                    </li>
                </ul>
                )}
            </div> */}
            <div className={box} onClick={handleToggle}></div>
        </div>
    )
}
