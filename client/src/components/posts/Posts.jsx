import Post from "../post/Post"
import "./posts.css"

export default function Posts({posts}) {
    return (
        <div className="posts col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">{posts?.map((p,i)=>(
            
            <Post post={p} key={i}/>
        ))}

        </div>
    )
}
