import Post from "../post/Post"
import "./posts.css"

export default function Posts({posts}) {
    return (
        <>
        {posts?.map((p,i)=>(
            
            <Post post={p} key={i}/>
        ))}
        </>
    )
}
