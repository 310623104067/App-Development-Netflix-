const express=require("express")
const cors=require("cors")
const axios=require("axios")
const path=require("path")

const app=express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"public")))

const API_KEY="YOUR_TMDB_API_KEY"

app.get("/api/trending",async(req,res)=>{

try{

const response=await axios.get(
`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
)

res.json(response.data.results)

}catch(err){

res.status(500).json({error:"API error"})

}

})

app.get("/api/search/:query",async(req,res)=>{

try{

const query=req.params.query

const response=await axios.get(
`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
)

res.json(response.data.results)

}catch(err){

res.status(500).json({error:"Search error"})

}

})

app.listen(3000,()=>{

console.log("Server running at http://localhost:3000")

})