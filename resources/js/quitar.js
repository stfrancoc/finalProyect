const quitar = (quitarReference) =>{
    const datoQuitarIcon = quitarReference.path[0]
    const datoQuitar = quitarReference.path[3]
    if((datoQuitar.classList[0] == "note-card") && (datoQuitarIcon.classList[1] == "fa-trash-can"))
    {
      datoQuitar.classList.toggle("quitar");
    }
}

export default quitar;

/*
const quita = document.addEventListener("click",(e)=>{
    const datoQuitar = e.path[3]
    console.log(datoQuitar.classList)
    if(datoQuitar.classList[0] == "note-card")
    {
      datoQuitar.classList.toggle("quitar");
    }
  });

const quitar = document.addEventListener("click",(e)=>{
    const datoQuitarIcon = e.path[0]
    const datoQuitar = e.path[3]
    console.log(datoQuitarIcon.classList)
    console.log(datoQuitar.classList)
    if((datoQuitar.classList[0] == "note-card") && (datoQuitarIcon.classList[1] == "fa-trash-can"))
    {
      datoQuitar.classList.toggle("quitar");
    }
  });
*/
