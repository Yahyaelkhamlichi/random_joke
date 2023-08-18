let jokep =document.getElementById("pjok")
let btn =document.getElementById("btn")
let card =document.getElementById("card")
let url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&idRange=0-42"
async function getjok(){
    jokep.classList.remove("jj")
    let respnse =await   fetch(url)
    let data =await respnse.json()
    jokep.innerHTML=data.joke
    jokep.classList.add("jj")
    
}


