const express = require("express")
const app = express()
const port = 3001
app.use(express.json())

app.get("/nome", (req, res) => {
    res.json({nome: "Eduarda", 
idade: "16"
})
  })
  

app.listen(port, ()=>{
    console.log("API rodano na porta" + port)
})