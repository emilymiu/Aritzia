var sliderimg = document.querySelector(".slider-img");
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
  "bluejean.jpeg",
  "blueshorts.jpeg",
  "brownskirt.jpeg",
  "grayskirt.jpeg",
  "graysweats.jpeg",
  "slimjean.jpeg",
  "tancargo.jpeg",
  "tanpants.jpeg",
  "whitepant.jpeg",
];
var i = 0;
var iBottom = 0;

function prevTop() {
  if (i <= 0) i = imagesTop.length;
  i--;
  return setTopImg();
}

function nextTop() {
  if (i >= imagesTop.length - 1) i = -1;
  i++;
  return setTopImg();
}

function setTopImg() {
  return sliderimg.setAttribute("src", "img/top/" + imagesTop[i]);
}

function prevBottom() {
  if (i <= 0) i = imagesBottom.length;
  i--;
  return setBottomImg();
}

function nextBottom() {
  if (i >= imagesBottom.length - 1) i = -1;
  i++;
  return setBottomImg();
}

function setBottomImg() {
  return sliderimg.setAttribute("src", "img/bottom/" + imagesBottom[i]);
}
