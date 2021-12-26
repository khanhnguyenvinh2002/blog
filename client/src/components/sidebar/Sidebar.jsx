import ava from "../../assets/img/ava.jpeg"
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./sidebar.css"
const server = "https://stark-falls-12636.herokuapp.com/api"

export default function Sidebar() {
    const PF = "https://stark-falls-12636.herokuapp.com/images/"
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
                <h2 className="sidebarTitle">About Me</h2>
                <img src={ava} alt="" />
                <p style={{marginBottom: "15px"}}>
                    Hi everyone! My name is Andrew Nguyen and welcome to my portfolio. Visit all my projects here:
                <div className="projectLink" >
                    <Link to ="/portfolio" title="portfolio" className="link" style={{fontSize: "18px"}}>
                        Khanh Nguyen's projects
                    </Link>
                </div>
                </p>
            </div>
            <div className="sidebarItem">
                <h2 className="sidebarTitle">Categories</h2>
                <ul className="sidebarList">
                    {cats.map((c,i)=>(
                    <Link to ={`/categories/#${c.name}`} title={c.name} className="link" key={i} rel="stylesheet">
                        <li className="sidebarListItem" key={i}><span className="sidebarListItemSpan" key={i}>{c.name}</span></li>
                    </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <h2 className="sidebarTitle">Follow me</h2>
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
