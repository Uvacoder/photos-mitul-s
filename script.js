/*jslint browser: true*/

// Grabbing the date for footer
let date = new Date();
document.getElementById("date").innerHTML = date.getFullYear();

// Sticky Navbar //
const nav = document.getElementById("navbar");
const navTop = nav.offsetTop;

function fixedNav(){
  if(window.scrollY >= navTop){
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixedNav);

// Image Protection //
const image = document.querySelectorAll(".photo-item");

for(let i = 0; i < image.length; i++){
  image[i].setAttribute("draggable", false);
  image[i].addEventListener("contextmenu", function(event){
    event.preventDefault();
  });
}

// Gallery //
Array.prototype.forEach.call(document.querySelectorAll('.photo-item'), function(element) {
	element.onclick = function(e) {
		const src  = element.getAttribute('data-src')
		const html = '<img src="' + src + '">'

		basicLightbox.create(html).show()
	}
})
