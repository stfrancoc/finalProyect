import activeBurger from "./burger.js";
import deleteNote from "./delete.js";

document.addEventListener("DOMContentLoaded", () => {
  activeBurger("burger", "nav", "main", "html", "burger-close");
  const quita = document.addEventListener("click",(e)=>{
    if(e.path[3].classList[0] == "note-card"){deleteNote(e)}
  });
});
