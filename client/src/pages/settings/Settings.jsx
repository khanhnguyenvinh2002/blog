import axios from "axios";
import { useContext, useState } from "react"
import { unstable_HistoryRouter } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar"
import { Context } from "../../context/Context"
import "./settings.css"
const server = "http://localhost:5000/api"
const PF = "http://localhost:5000/images/"
export default function Settings() {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const {user, dispatch} = useContext(Context);

    const handleSubmit = async (e)=> {
        console.log("in")
        dispatch({type:"UPDATE_START"});
        e.preventDefault();
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password
        }
        if(file){
            const data = new FormData();
            const filename = Date.now() +file.name;
            data.append("name", filename);
            data.append("file",file);
            updatedUser.profilePic = filename;
            try{
                const res = await axios.post(server+"/upload", data)
                setSuccess(true)
                dispatch({type:"UPDATE_SUCCESS", payload: res.data});
            }catch(err){
                dispatch({type:"UPDATE_FAILURE"});
            }
        }
        try{
            await axios.put(server+"/users/" +user._id, updatedUser)
        } catch (err){
            dispatch({type:"UPDATE_FAILURE"});
        }
    }
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
                <form className="settingsForm" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src={file ? URL.createObjectURL(file): (PF + user.profilePic)} alt="" />
                    <label htmlFor="fileInput">
                        <i class="settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input 
                        type="file" 
                        id="fileInput" 
                        style={{display: "none"}} 
                        onChange={e=> setFile(e.target.files[0])}
                    />  
                </div>
                <label>Username</label>
                <input 
                    type="text" 
                    placeholder={user.username} 
                    onChange={(e)=> setUsername(e.target.value)}/>
                <label>Email</label>
                <input 
                    type="email" 
                    placeholder={user.email}
                    onChange={(e)=> setEmail(e.target.value)}/>
                <label>Password</label>
                <input 
                    type="password" 
                    onChange={(e)=> setPassword(e.target.value)}/>
                <button className="settingsSubmit" type="submit">Update</button>
                {success && <span style={{color: "green"}}>Profile has been updated</span>}
            </form>
            </div>
          
                <Sidebar/>
        </div>
    )
}
