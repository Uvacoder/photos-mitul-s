/*jslint browser: true*/
/* eslint-env es6 */

// Grabbing the date for footer //
let date = new Date();
document.getElementById("date").innerHTML = date.getFullYear();


// Sticky Navbar //
const nav = document.getElementById("navbar");
const navTop = nav.offsetTop;

function fixedNav(){
  // If they scroll past the nac
  if(window.scrollY >= navTop){
    // Make the nav stick to the top
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
    document.querySelector('.open-slide').style.display = "none";
  } else {
    // Remove sticky nav
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
    document.querySelector('.open-slide').style.display = "inline";
  }
}
// Listen how far user scrolls
window.addEventListener("scroll", fixedNav);



// SIDEMENU

function openSlideMenu(){
  // Open the side menu by moving the main content
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu(){
  // Close the side menu by moving the main content
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}



// Image Protection //
// Select all displayed photos
const image = document.querySelectorAll(".photo-item");

// Loop through nodeList and disable right click & drag
for(let i = 0; i < image.length; i++){
  image[i].setAttribute("draggable", false);
  image[i].addEventListener("contextmenu", function(event){
    event.preventDefault();
  });
}


// Lightbox Gallery //
Array.prototype.forEach.call(document.querySelectorAll('.photo-item'), function(element) {
	element.onclick = function(e) {
		const src  = element.getAttribute('data-src');
		const html = '<img src="' + src + '">';

		basicLightbox.create(html).show();
	};
});


// IMAGE SLIDER
let sliderImages = document.querySelectorAll('.slide'),
    arrowRight = document.querySelector('#arrow-right'),
    arrowLeft = document.querySelector('#arrow-left'),
    current = 0;

// Clear all images
function resetSlide(){
  for(let i = 0; i < sliderImages.length; i++){
    sliderImages[i].style.display = 'none';
  }
}

// Initialize slider
function startSlide(){
  resetSlide();
  sliderImages[0].style.display = 'block';
}

// Show previous photo
function slideLeft(){
  resetSlide();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

// Show next photo
function slideRight() {
  resetSlide();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

// Right arrow click listener
arrowRight.addEventListener('click', function() {
  if(current === sliderImages.length - 1){
    current = -1;
  }
  slideRight();
});

// Left arrow click listener
arrowLeft.addEventListener('click', function() {
  if(current === 0){
    current = sliderImages.length;
  }
  slideLeft();
});

startSlide();
