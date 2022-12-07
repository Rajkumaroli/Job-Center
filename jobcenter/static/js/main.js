let sliderContainer = document.getElementById('sliderContainer');
let slider = document.getElementById('slider');
let cards = document.getElementsByTagName('li');
let elementsToShow = 3;
if(document.body.clientWidth<1000){
    elementsToShow = 1;
}else if(document.body.clientWidth<1500){
    elementsToShow = 4;
}
let sliderContainerWidth = sliderContainer.clientWidth;
let cardsWidth = sliderContainerWidth / elementsToShow;
slider.style.width = cards.length*cardsWidth+'px';
slider.style.transition = 'margin';
slider.style.transitionDuration='1s';

// for(let index=0; index<cards.length; index++){
//     const element = cards[index];
//     element.style.width = cardsWidth+'px';
// }

function prev(){
    if(+slider.style.marginLeft.slice(0,-2)!= -cardsWidth*(cards.length - elementsToShow))
  slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2))-cardsWidth)+'px';
}

function next(){
    if(+slider.style.marginLeft.slice(0,-2)!=0)
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))+cardsWidth)+'px';
}