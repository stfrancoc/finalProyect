import activeBurger from "./burger.js";
import quitar from "./quitar.js";

document.addEventListener("DOMContentLoaded", () => {
  activeBurger("burger", "nav", "main", "html");
  const quita = document.addEventListener("click",(e)=>{quitar(e)});
});
