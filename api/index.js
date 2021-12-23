const express = require("express");
const app = express();
const cors = require("cors")
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path")
const port = process.env.PORT || 5000;
dotenv.config();
app.use(cors());
//enable sending json files
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")))
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");
const multer = require("multer");
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true}).then(()=>{
    console.log('connected to mongoDB')
  }).catch(err => console.log(err));
const storage = multer.diskStorage({
    destination:(req,file, cb)=>{
        cb(null,"images")
    }, filename: (req,file,cb)=>{
        cb(null, req.body.name)
    }
})

const upload = multer({storage: storage})
app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
})
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoriesRoute);

app.listen(port,()=>{
    console.log("backend is running.")
})