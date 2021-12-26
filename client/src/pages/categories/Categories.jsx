import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import "./categories.css";
import axios from "axios";
import { useLocation } from "react-router";
import CategoryPosts from "../../components/categoryPosts/categoryPosts";
const server = "https://stark-falls-12636.herokuapp.com/api"
export default function Categories() {
    const [posts, setPosts] = useState([]);
    const [cats, setCats] = useState([]);
    const [categories, setCategories] = useState({});
    let map = new Map()

  const { pathname, hash, key } = useLocation();
    useEffect(()=>{
        const getCats = async()=>{
            const catResult = await axios.get(server+"/categories");
            const category = catResult.data.map(e=> e.name);
            setCats(category);
            const postResult = await axios.get(server+"/posts")
            const posts = postResult.data;
            let cate = {};
            posts.map(post=>{
                post.categories.forEach(e => {
                    cate[e] = cate[e]?  cate[e] :[];
                    cate[e].push(post)
                })
            })
            setCategories(cate);
            // if not a hash link, scroll to top
            if (hash === '') {
                window.scrollTo(0, 0);
            }
            // else scroll to id
            else {
                setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
                }, 0);
            }
        }
        getCats();
    },[])

    return (
        <>
        <Header/>
        <div className="container">
            <div className="categories">
                <div className="categoryList">
                {cats.map((category,i) => ( 
                    <span className="categoryListItem" key={category+i+ 1}>
                        <a className="link" href={`#${category}`}>{category}</a>
                    </span>))}
                    </div>
                <div className="posts">
                    {cats.map((category,i) =>  
                        (categories[category] !== [] &&
                            <div key={category+i+ 0}  id={category}>
                                <div className="categoryItem">
                                    <span className="categoryName" key={category+i+ 1}>{category}</span>
                                    <CategoryPosts posts={categories[category]} key={category+i+ 2}/>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
        </>
    )
}
