let now = new Date();

let h2 = document.querySelector("h2");


let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate(); 


let hours = now.getHours();
let minutes = now.getMinutes(); 
let seconds = now.getSeconds()



function search(event){

    event.preventDefault();
    alert(h2.innerHTML = `The current date and time is: ${date}.${month}.${year} , ${hours}:${minutes}:${seconds}`)
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);