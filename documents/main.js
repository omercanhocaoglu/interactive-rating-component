const mainDiv = document.querySelector("#mainDiv");
const thankYouDiv = document.querySelector("#thankYouDiv"); 
const submitButton = document.querySelector("#submit-button");
const rating = document.querySelector("#rating");
let buttons = document.querySelectorAll(".btn");

buttons.forEach( (rate) => { 
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    });
});

submitButton.addEventListener("click", () => {
    mainDiv.classList.add("hidden");
    thankYouDiv.classList.remove("hidden");
});