document.getElementById("search").addEventListener("keyup",function(){

let query=this.value

fetch("/api/search/"+query)

.then(res=>res.json())

.then(data=>{

const container=document.getElementById("movies")

container.innerHTML=""

data.forEach(movie=>{

let img=document.createElement("img")

img.src="https://image.tmdb.org/t/p/w500"+movie.poster_path

container.appendChild(img)

})

})

})