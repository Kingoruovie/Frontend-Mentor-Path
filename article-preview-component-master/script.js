let showBtn = document.body.querySelector(".profile button");
let hideBtn = document.body.querySelector(".socials button");
let socials = document.body.querySelector(".socials");

showBtn.addEventListener("click", () => {
    socials.classList.toggle("flex");
});

hideBtn.addEventListener("click", () => {
    socials.classList.toggle("flex");
})