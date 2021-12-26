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

            {post.categories && post.categories.length > 0 && <div className="postCats">
                {post.categories?.map((c,i)=>(
                <Link to ={`/categories/#${c}`} title={c} key={i} rel="stylesheet" className="postCat link" key={i}>{c}</Link>
                ))}
            </div>
            }
            <Link to={`/post/${post._id}`} className="link">
                <span className="postDesc">
                    {post.desc}
                </span>
            </Link>
            <p className="postDate">{"Created by " + post.username + " on "+ new Date(post.createdAt).toDateString()}</p>
        </div>
    )
}
