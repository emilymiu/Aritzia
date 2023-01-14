var sliderimgtop = document.getElementById("slider-img-top");
var sliderimgbottom = document.getElementById("slider-img-bottom");

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
  "blackshort.jpeg",
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
  if (iTop <= 0) iTop = imagesTop.length;
  iTop--;
  setTopImg();
}

function nextTop() {
  if (iTop >= imagesTop.length - 1) iTop = -1;
  iTop++;
  setTopImg();
}

function setTopImg() {
  sliderimgtop.setAttribute("src", "img/top/" + imagesTop[iTop]);
}

function prevBottom() {
  if (iBottom <= 0) iBottom = imagesBottom.length;
  iBottom--;
  setBottomImg();
}

function nextBottom() {
  if (iBottom >= imagesBottom.length - 1) iBottom = -1;
  iBottom++;
  setBottomImg();
}

function setBottomImg() {
  sliderimgbottom.setAttribute("src", "img/bottom/" + imagesBottom[iBottom]);
}


const selectedImages = [];

function wishlistTop() {
  selectedImages.push("img/top/" + imagesTop[iTop]);
  console.log(selectedImages);
  localStorage.setItem('wishlistImages', JSON.stringify(selectedImages));
}

function wishlistBottom() {
  selectedImages.push("img/bottom/" + imagesBottom[iBottom]);
  console.log(selectedImages);
  localStorage.setItem('wishlistImages', JSON.stringify(selectedImages));
}