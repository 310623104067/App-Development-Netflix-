let list=JSON.parse(localStorage.getItem("mylist"))||[]

const container=document.getElementById("list")

list.forEach(movie=>{

let img=document.createElement("img")

img.src="https://image.tmdb.org/t/p/w500"+movie.poster_path

container.appendChild(img)

})