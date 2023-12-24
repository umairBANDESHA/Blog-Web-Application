import fs from "fs";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 5050;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("main.ejs");
});



app.listen(port, () => {
    console.log(`Server is running on  port:${port}......`);
})
