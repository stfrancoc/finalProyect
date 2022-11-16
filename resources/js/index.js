document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector("#burger");
  const options = document.querySelector("#nav");
  const main = document.getElementById("main");
  const html = document.querySelector("html");

  burger.addEventListener("click", () => {
    options.classList.toggle("active");
    main.classList.toggle("main-disabled");
    html.classList.toggle("block-scroll");
  });

  document.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
