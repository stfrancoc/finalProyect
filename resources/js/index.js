document.addEventListener('DOMContentLoaded',()=>{
    const burger = document.querySelector("#burger")
    const options = document.querySelector("#opti")
    
    burger.addEventListener('click',() => {
        console.log("sisas")
        options.classList.toggle("hidden")
    })
})

