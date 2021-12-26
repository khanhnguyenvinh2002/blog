import axios from "axios"
import { useContext, useState, useEffect } from "react"
import { Context } from "../../context/Context"
import Select from "react-select"
import "./write.css"
const server = "https://stark-falls-12636.herokuapp.com/api"

export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState(null);
    const [categories, setCategories] = useState([]);
    const [chosenCategories, setChosenCategories] = useState([]);
    const {user} = useContext(Context);

    useEffect(()=>{

        const getCategories = async ()=> {
            const res = await axios.get(server+"/categories");
            setCategories(res.data)
            
        }
        getCategories()
    }, [])
    const handleSubmit = async (e)=> {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
            content,
            categories: chosenCategories
        }
        if(file){
            const data = new FormData();
            const filename = Date.now() +file.name;
            data.append("name", filename);
            data.append("file",file);
            newPost.photo = filename;
            try{
                await axios.post(server+"/upload", data)
            }catch(err){

            }
        }
        try{
            const res = await axios.post(server+"/posts", newPost)
            window.location.replace("/post/"+ res.data._id)
        } catch (err){

        }
    }
    const handelSelect = (e)=>{
        setChosenCategories(Array.isArray(e)?e.map(x=> x.name):[])
    }
    return (
        <div className="write">
            {file && (
            <img 
            className="writeImg" 
            src={URL.createObjectURL(file)}
            alt="" 
            />)
            }
            <form className="writeForm" onSubmit={handleSubmit}>
                <Select isMulti={true} options={categories} onChange={handelSelect}  getOptionLabel={option => `${option.name}`}
            getOptionValue={option => `${option.name}`}
            ></Select>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon far fa-plus"></i>
                    </label>
                    <input 
                        type="file" 
                        id="fileInput" 
                        style={{display:"none"}} 
                        onChange={e=> setFile(e.target.files[0])}/>
                    <input 
                        type="text" 
                        placeholder="title"  
                        className="writeInput" 
                        autoFocus={true}
                        onChange={e=> setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                    placeholder="Write the description" 
                    type="text" 
                    className="writeInput" 
                    onChange={e=> setDesc(e.target.value)}
                ></textarea>
                </div>
                <div className="writeFormGroup">
                    <textarea 
                    placeholder="Write your story..." 
                    type="text" 
                    className="writeInput writeText" 
                    onChange={e=> setContent(e.target.value)}
                ></textarea>
                <button className="writeSubmit" type="submit">Publish</button>
                </div>
            </form>
        </div>
    )
}
