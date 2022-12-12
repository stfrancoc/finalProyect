import activeBurger from "./burger.js";
import quitar from "./quitar.js";

document.addEventListener("DOMContentLoaded", () => {
  activeBurger("burger", "nav", "main", "html", "burger-close");
  const quita = document.addEventListener("click",(e)=>{quitar(e)});
});
