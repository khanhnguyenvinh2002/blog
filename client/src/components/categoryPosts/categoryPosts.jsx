import CategoryPost from "../categoryPost/categoryPost"
import "./categoryPosts.css"

export default function CategoryPosts({posts}) {
    return (
        <>
        {posts?.map((p,i)=>(
            
            <CategoryPost categoryPost={p} key={i}/>
        ))}
        </>
    )
}