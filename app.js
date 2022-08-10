const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let  items = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));




app.listen(3000,function(){
    console.log("Server started");
    app.get("/",function(req,res){
        app.post('/', (req, res) => {
            let item = req.body.addItem;
             items.push(item);
            console.log("added",item);
            res.redirect("/");
            
        });
        let today = new Date();
        let options ={
            weekday:"long",
            day : "numeric",
            month:"long"
        }
        let day=today.toLocaleDateString("en-US",options);
        res.render("list",{ kindOfDay:day, newItems:items});
});
});