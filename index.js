import express from "express";
import bodyParser from "body-parser";

const app= express();
const port= 3000;


const apikey = "AIzaSyBA0gkr5XN2jsOCiIkW_w58PXIIU4xMTLY";

app.use( bodyParser.urlencoded({ extended : true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/read", (req, res) => {
    res.render("read.ejs");
})

app.get("/write", (req, res) => {
    res.render("write.ejs");
})

app.get("/update", (req, res) => {
    res.render("update.ejs");
})

app.get("/delete", (req, res) => {
    res.render("delete.ejs");
})

app.post("/post", (req, res) => {
    var blog= req.body['new-post'];
    res.render('posted.ejs', { blog_content : blog });
})



app.listen(port, () =>{
    console.log(`listening to ${port}...`);
})