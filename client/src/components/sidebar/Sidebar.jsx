import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./sidebar.css"
const server = "http://localhost:5000/api"

export default function Sidebar() {
    const PF = "http://localhost:5000/images/"
    const [cats, setCats] = useState([]);

    useEffect(()=>{
        const getCats = async()=>{
            const res = await axios.get(server+"/categories");
            setCats(res.data);
        }
        getCats();
    },[])
    return (
        <div className="sidebar col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="sidebarItem">
                <h5 className="sidebarTitle">About Me</h5>
                <img src={PF + "ava.jpeg"} alt="" />
                <p>
                    This is a short description
                </p>
            </div>
            <div className="sidebarItem">
                <h5 className="sidebarTitle">Categories</h5>
                <ul className="sidebarList">
                    {cats.map((c,i)=>(
                    <Link to ={`/?cat=${c.name}`}className="link" key={i}>
                        <li className="sidebarListItem" key={i}><span className="sidebarListItemSpan" key={i}>{c.name}</span></li>
                    </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <h5 className="sidebarTitle">Follow us</h5>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-github-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-linkedin"></i> 
                </div>
            </div>
        </div>
    )
}
