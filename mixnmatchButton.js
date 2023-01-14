var sliderimg = document.querySelector('.slider-img');
var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg'];
var i = 0;

function prev() {
    if(i <= 0) i = images.length;
    i--;
    return setImg();
}

function next() {
    if (i = images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return sliderimg.setAttribute('src', 'img/' + images[i]);
}