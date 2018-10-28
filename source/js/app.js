document.querySelector(".header__nav-toggle").onclick = function () {
  if (document.querySelector(".header__nav-toggle--opened")) {
    this.classList.remove("header__nav-toggle--opened");
    document.querySelector(".main-nav__site-list").style.display = "none";
    document.querySelector(".main-nav__buttons-list").style.display = "none";
  } else {
    document.querySelector(".main-nav__site-list").style.display = "block";
    document.querySelector(".main-nav__buttons-list").style.display = "block";
    document.querySelector(".header__nav-toggle").classList.add("header__nav-toggle--opened");
  }
}

document.querySelector(".week-offer__button").onclick = function () {
  document.querySelector(".modal--fixed").style.display = "flex";
  document.querySelector("add-form__button").style.display = "none"
}
