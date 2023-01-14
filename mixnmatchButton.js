var sliderimg = document.querySelector('.slider-img');
var images = ['blackbodysuit.jpeg', 'creamblouse.jpeg', 'creamsweater.jpeg', 'crosstank.jpeg', 'graysweatshirt.jpeg', 'graytop.jpeg', 'greenbutton.jpeg', 'pinktop.jpeg', 'polotop.jpeg', 'whitetop.jpeg'];
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