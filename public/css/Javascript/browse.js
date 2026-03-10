fetch("/api/trending")

.then(res=>res.json())

.then(data=>{

const container=document.getElementById("movies")

data.forEach(movie=>{

let img=document.createElement("img")

img.src="https://image.tmdb.org/t/p/w500"+movie.poster_path

img.onclick=()=>{

saveMovie(movie)

}

container.appendChild(img)

})

})

function saveMovie(movie){

let list=JSON.parse(localStorage.getItem("mylist"))||[]

list.push(movie)

localStorage.setItem("mylist",JSON.stringify(list))

alert("Added to My List")

}