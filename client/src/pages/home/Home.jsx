import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
const server = "https://stark-falls-12636.herokuapp.com/api"
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
                <div className="posts col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <Posts posts={posts}/>
                </div>
                <Sidebar/>
            </div>
        </div>
        </>
    )
}
