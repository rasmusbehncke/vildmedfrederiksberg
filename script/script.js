const bars = document.querySelector(".fa-bars");
const nav = document.querySelector("header nav");

const openNav = () => {
    nav.style.display = "block";
}

bars.addEventListener("click", openNav)