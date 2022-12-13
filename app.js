const express = require("express")
const path = require("path")
const app = express();
// 
const port = 3000;

app.use("/static", express.static("static"))
app.use(express.urlencoded())

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))


app.get("/", (req, res) => {
    res.status(200).render("home.pug")

})
app.get("/Form", (req, res) => {
    res.status(200).render("Form.pug")

})

app.listen(port, () => {
    console.log(`Jldi khol  port  ${port}  ko  , Chrome pe likh localhost:3000`)
})