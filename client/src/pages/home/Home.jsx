import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
const server = "http://localhost:5000/api"
export default function Home() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
    useEffect(()=>{
        const fetchPost = async ()=>{
            const res = await axios.get(server+"/posts"+search)
            setPosts(res.data)
        }
        fetchPost();
    },[search])
    return (
        <>
        <Header/>
        <div className="container">
        <div className="home">
            <Posts posts={posts}/>
            <Sidebar/>
        </div>
        </div>
        </>
    )
}
