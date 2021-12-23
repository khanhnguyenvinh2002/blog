import { Link } from "react-router-dom"
import "./post.css"

export default function Post({post}) {
    const PF = "https://stark-falls-12636.herokuapp.com/images/"
    return (
        <div className="post">
            <div className="postInfo">
                <Link to={`/post/${post._id}`} className="link">
                <span className="postTitle">
                    {post.title}
                </span></Link>
            </div>

            <div className="postCats">
                {post.categories?.map((c,i)=>(
                <div className="postCat" key={i}>{c}</div>
                ))}
            </div>
            <span className="postDesc">
                {post.desc}
            </span>
            <p className="postDate">{"Created by " + post.username + " at "+ new Date(post.createdAt).toDateString()}</p>
        </div>
    )
}
