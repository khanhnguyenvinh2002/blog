import React, { useContext , useState} from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./topbar.css"

const PF = "http://localhost:5000/images/"
export default function TopBar() {
    const {user, dispatch} = useContext(Context);
    const [toggled, setToggled] = useState(false);
    const [box, setBox] = useState("toggle");
    const [ulBox, setUlBox] = useState("menu");
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
        <div className="top">
            <div className="topLeft">
                <Link to="/" className="link logo">Andrew Nguyen</Link>
            </div>
            <div className="topCenter">
                <ul className={ulBox}>
                    <li className="topListItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/about" className="link">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/contact" className="link">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write" className="link">WRITE</Link>
                    </li>
                    {user && <li className="topListItem" onClick={handleLogout}>
                       <a className="link">LOG OUT</a>
                    </li>}
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
                        <Link to="/contact" className="link">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write" className="link">WRITE</Link>
                    </li>
                    {user ?
                    <> 
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
                   }
                </ul>
            </div>
            <div className="topRight deletable">
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
            </div>
            <div className={box} onClick={handleToggle}></div>
        </div>
    )
}
