var sliderimgtop = document.querySelector(".slider-img-top");
var sliderimgbottom = document.querySelector(".slider-img-bottom");

var imagesTop = [
  "blackbodysuit.jpeg",
  "creamblouse.jpeg",
  "creamsweater.jpeg",
  "crosstank.jpeg",
  "graysweatshirt.jpeg",
  "graytop.jpeg",
  "greenbutton.jpeg",
  "pinktop.jpeg",
  "polotop.jpeg",
  "whitetop.jpeg",
];
var imagesBottom = [
  "blackleggings.jpeg",
  "blackmelina.jpeg",
  "blueshorts.jpg",
  "brownskirt.jpeg",
  "grayskirt.jpeg",
  "graysweats.jpeg",
  "slimjean.jpeg",
  "tancargo.jpeg",
  "tanpants.jpeg",
  "whitepant.jpeg",
];

var iTop = 0;
var iBottom = 0;

function prevTop() {
  console.log("blicked previous")
  if (iTop <= 0) iTop = imagesTop.length;
  iTop--;
  return setTopImg();
}

function nextTop() {
  if (iTop >= imagesTop.length - 1) iTop = -1;
  iTop++;
  return setTopImg();
}

function setTopImg() {
  return sliderimgtop.setAttribute("src", "img/top/" + imagesTop[iTop]);
}

function prevBottom() {
  if (iBottom <= 0) iBottom = imagesBottom.length;
  iBottom--;
  return setBottomImg();
}

function nextBottom() {
  if (iBottom >= imagesBottom.length - 1) iBottom = -1;
  iBottom++;
  return setBottomImg();
}

function setBottomImg() {
  return sliderimgbottom.setAttribute("src", "img/bottom/" + imagesBottom[iBottom]);
}
