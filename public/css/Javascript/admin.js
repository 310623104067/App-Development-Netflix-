function addMovie(){

let title=document.getElementById("title").value
let poster=document.getElementById("poster").value

let img=document.createElement("img")

img.src=poster

document.getElementById("adminMovies").appendChild(img)

}