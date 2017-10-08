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
  } else {
    // Remove sticky nav
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}
// Listen how far user scrolls
window.addEventListener("scroll", fixedNav);



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

// Remove grid on small screens
const gridDiv  = document.querySelectorAll("#grid");
const gridSm   = document.querySelectorAll("#grid-sm");

window.addEventListener("resize", function() {
   for(let i = 0; i < gridDiv.length; i++) {
     if(window.innerWidth > 768) {
      gridDiv[i].classList.add("grid");
     } else {
      gridDiv[i].classList.remove("grid");
     }
   }

	for(let i = 0; i < gridSm.length; i++) {
     if(window.innerWidth > 768) {
      gridSm[i].classList.add("grid-small");
     } else {
      gridSm[i].classList.remove("grid-small");
     }
   }
});
