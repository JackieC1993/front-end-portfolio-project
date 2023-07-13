// const buttonClicker = document.querySelector("button");
const h2 = document.querySelectorAll("h2");
const p = document.querySelectorAll(".qstn");
const a = document.querySelectorAll("article.card p.hidden")
buttonClicker.addEventListener("click", (event) => {
  event.preventDefault();
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((json) => {
      const pokedex = json.results;
      let i = 1;
      for (let result of results) {
        if (i < h2.length) {
          h2[i].textContent = pokedex.category;
          p[i].textContent = pokedex.question;
          a[i].textContent = pokedex.correct_answer;
          i++;
        }
      }})
    })
// let buttonClicker = document.querySelector("button")

//  let loginForm = document.getElementById("loginForm");
 
//  buttonClicker.addEventListener("submit", (e) => {
//    e.preventDefault();
 
//    let username = document.getElementById("username").textContent;
//    let password = document.getElementById("password").textContent;
 
//    if (username == "" || password == "") {
//      alert("Ensure you input a value in both fields!");
//    } else {
//      // perform operation with form input
//      alert("This form has been successfully submitted!");
//      console.log(
//        `This form has a username of ${username} and password of ${password}`
//      );
 
//      username = "";
//      password = "";

//    }
//  });

