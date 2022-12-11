import activeBurger from "./burger.js";
import quitar from "./quitar.js";

document.addEventListener("DOMContentLoaded", () => {
  activeBurger("burger", "nav", "main", "html");
  const quita = document.addEventListener("click",(e)=>{quitar(e)});

  
  const edita = document.addEventListener("click",(e)=>{
    const datoEditarIcon = e.path[0].classList[1]
    const datoEditar = e
    console.log(datoEditarIcon)
    console.log(datoEditar)
    /*
    if((datoQuitar.classList[0] == "note-card") && (datoEditarIcon.classList[1] == "fa-trash-can"))
    {
      datoQuitar.classList.toggle("quitar");
    }
    */
  });

});
