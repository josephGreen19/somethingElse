// Express Server

const express = require("express")
const app = express()

// Data
const movies = [
    {title: "Matrix", 
     actor: "Keanu Reeves",
     genre: "action"},

    {title: "Rocky", 
     actor: "Sylvester Stallone",
     genre: "action"},
     
    {title: "Scoobydoo",
     actor: "Scoobydoo",
     gere: "family"}
    
]

app.get("/movies/", (req, res) => {
    res.send(movies)
})





// 1:Port   2:CallBack

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})