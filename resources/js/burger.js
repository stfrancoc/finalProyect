const activeBurger = (
  burgerIdSelector,
  optionsMenuIdSelector,
  mainIdSelector,
  htmlTagSelector,
  burgerCloseIdSelector
) => {
  const burger = document.getElementById(burgerIdSelector);
  const burgerClose = document.getElementById(burgerCloseIdSelector);
  const options = document.getElementById(optionsMenuIdSelector);
  const main = document.getElementById(mainIdSelector);
  const html = document.querySelector(htmlTagSelector);
  const plusIcon = document.getElementById("plus-icon");

  burger.addEventListener("click", () => {
    options.classList.toggle("active");
    main.classList.toggle("main-disabled");
    html.classList.toggle("block-scroll");
    burger.classList.toggle("none")
    burgerClose.classList.toggle("none")
    plusIcon.classList.toggle("none");
  });

  burgerClose.addEventListener("click", () => {
    options.classList.toggle("active");
    main.classList.toggle("main-disabled");
    html.classList.toggle("block-scroll");
    burger.classList.toggle("none")
    burgerClose.classList.toggle("none")
    plusIcon.classList.toggle("none");
  });
};


export default activeBurger;
