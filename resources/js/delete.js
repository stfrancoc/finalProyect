const deleteNote = (deleteReference) =>{
    const datodeleteIcon = deleteReference.path[0]
    const datodelete = deleteReference.path[3]
    if((datodelete.classList[0] == "note-card") && (datodeleteIcon.classList[1] == "fa-trash-can"))
    {
      datodelete.classList.toggle("delete");
    }
}

export default deleteNote;

/*
const quita = document.addEventListener("click",(e)=>{
    const datodelete = e.path[3]
    console.log(datodelete.classList)
    if(datodelete.classList[0] == "note-card")
    {
      datodelete.classList.toggle("delete");
    }
  });

const delete = document.addEventListener("click",(e)=>{
    const datodeleteIcon = e.path[0]
    const datodelete = e.path[3]
    console.log(datodeleteIcon.classList)
    console.log(datodelete.classList)
    if((datodelete.classList[0] == "note-card") && (datodeleteIcon.classList[1] == "fa-trash-can"))
    {
      datodelete.classList.toggle("delete");
    }
  });
*/
