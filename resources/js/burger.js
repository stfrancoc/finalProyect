const activeBurger = (
  burgerIdSelector,
  optionsMenuIdSelector,
  mainIdSelector,
  htmlTagSelector
) => {
  const burger = document.getElementById(burgerIdSelector);
  const options = document.getElementById(optionsMenuIdSelector);
  const main = document.getElementById(mainIdSelector);
  const html = document.querySelector(htmlTagSelector);

  burger.addEventListener("click", () => {
    options.classList.toggle("active");
    main.classList.toggle("main-disabled");
    html.classList.toggle("block-scroll");
  });
};


export default activeBurger;
