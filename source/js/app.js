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

ymaps.ready(init);
var myMap;
function init () {
  myMap = new ymaps.Map("map", {
    center: [59.938945, 30.323261],
    behaviors: ['default', 'scrollZoom'],
    zoom: 18
  });

  myPlacemark0 = new ymaps.Placemark([59.938945,30.323261], {
    iconImageHref: 'img/icon-map-pin.svg',
    iconImageSize: [70, 100],
    iconImageOffset: [-35, -64]
  });

  myMap.geoObjects.add(myPlacemark0);
}
