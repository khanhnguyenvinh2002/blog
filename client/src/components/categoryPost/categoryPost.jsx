import { Link } from "react-router-dom"
import "./categoryPost.css"

export default function CategoryPost({categoryPost}) {
    const PF = "https://stark-falls-12636.herokuapp.com/images/"
    return (
        <div className="categoryPost">
            <div className="categoryPostInfo">
                <Link to={`/post/${categoryPost._id}`} className="link">
                <span className="categoryPostTitle">
                    {categoryPost.title}
                </span></Link>
            </div>
        </div>
    )
}
