import express from "express";
import render from "./render"
const app = express();

app.use(express.static("./public"))

app.get("*", render)

app.listen(9526, () => {
   console.log('server start in 9526')
})