// select all the images of the slider and store them in an array
const imgs = document.querySelectorAll(".header-slider ul img");

// select the previous arrow button
const prev_btn = document.querySelector(".control_prev");

// select the next arrow button
const next_btn = document.querySelector(".control_next");

// first image
let n = 0;

function changeSlide() {
    // this selects all the images one by one and hides them
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    // then we just display the image number n which is updated in 
    // eventlisteners of prev and nex btns.
    imgs[n].style.display = "block"
}
changeSlide();

//Now select the prev and next buttons so when we click on them they 
//decrement or increment the value of n respectively

prev_btn.addEventListener("click", (e) => {
    // if the display image number is greater than 0 which means it is not the first image
    // we go to the previous image on click.
    if (n > 0) {
        n--;
    //if the image number is equal to 0 we go to the last image 
    // now the if part can be executed again.
    }else {
        n = imgs.length - 1;
    }
    changeSlide();
});

next_btn.addEventListener("click", (e) => {
    // if the image is not the last image then display then 
    // increment n by 1.
    if (n < imgs.length - 1) {
        n++;
        // if the image displayed is the last image then 
        // loop back to the first image.
    }else {
        n = 0;
    }
    changeSlide();
});

// for sliding .product-slider .products

const scrollContainer = document.querySelectorAll(".products");

for (const item of scrollContainer){
    item.addEventListener("wheel", (evt) =>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}
