import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router"
import ReactMarkdown from 'react-markdown'
import "./singlePost.css"
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
const server = "http://localhost:5000/api"
export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost]= useState({});
    const {user} = useContext(Context);
    const PF = "http://localhost:5000/images/"
    const [title, setTitle]=useState("")
    const [desc, setDesc]=useState("")
    const [content, setContent]=useState("")
    const [updateMode, setUpdateMode]=useState(false)
    useEffect(()=>{
        const getPost = async ()=> {
            const res = await axios.get(server+"/posts/"+path)
            setPost(res.data);
            setTitle(res.data.title)
            setDesc(res.data.desc)
            setContent(res.data.content)
        }
        getPost()
    },[])

    const handleDelete = async ()=>{
        try{
            await axios.delete(server+"/posts/"+path, {
                data: {username: user.username}});
            window.location.replace("/")
        }catch(err){

        }
    }

    const handleUpdate = async () => {
        try{
            await axios.put(server+"/posts/"+path, {
                username: user.username, title, desc, content});
            setUpdateMode(false)
        }catch(err){

        }
    }
    return (
        <div className="singlePost col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12">
            <div className="singlePostWrapper">
                {post.photo &&
                <img 
                    className="singlePostImg"
                    src={PF + post.photo}
                    alt="" 
                />}
                {
                    updateMode ? 
                    <input 
                        type="text" 
                        value={title} autoFocus
                        className="singlePostTitleInput"
                        onChange={(e)=>setTitle(e.target.value)}/> : (
                        <h1 className="singlePostTitle">
                        {title}
                        {post.username ===user?.username &&
                        <div className="singlePostEdit">
                            <i className="singlePostIcon far fa-edit" onClick={()=>{
                                setUpdateMode(true)
                            }}></i>
                            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                        </div>}
    
                    </h1>
                    )
                }
               
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <Link to={`/?user=${post.username}`} className="link"><b>{post.username}</b>
                    </Link></span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <div className="singlePostCats">
                    {post.categories?.map(c=>(
                    <div className="singlePostCat">{c}</div>
                    ))}
                </div>
                {updateMode ? 
                <textarea 
                    className="singlePostDescInput" 
                    value={desc} 
                    onChange={(e)=>setDesc(e.target.value)}/>
                : 
                <ReactMarkdown className="singlePostDesc">{desc}</ReactMarkdown>}

                {updateMode ? 
                <textarea 
                    className="singlePostContentInput" 
                    value={content} 
                    onChange={(e)=>setContent(e.target.value)}/>
                : 
                <ReactMarkdown className="singlePostContent">{content}</ReactMarkdown>}
                {updateMode 
                && 
                <button className="singlePostButton" onClick={handleUpdate}>Update</button>
                }               
                <ul className="pager">
                  <li className="previous"><a className="link" href="#">Previous</a></li>
                  <li className="next"><a className="link" href="#">Next</a></li>
                </ul>
            </div>
        </div>
    )
}
