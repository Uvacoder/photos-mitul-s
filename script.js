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

// Gallery
Array.prototype.forEach.call(document.querySelectorAll('.photo-item'), function(element) {
	element.onclick = function(e) {
		const src  = element.getAttribute('data-src')
		const html = '<img src="' + src + '">'

		basicLightbox.create(html).show()
	}
})

// const getSrc = (elem) => elem.getAttribute('data-src')
//
// const getPrev = (elem) => document.getElementById(elem.getAttribute('data-prev'))
// const getNext = (elem) => document.getElementById(elem.getAttribute('data-next'))
//
// const open = function(elem) {
//
// 	const init = (instance) => {
//
// 		// Remove current src first. It stays until the second image has loaded.
// 		// You can also show a spinner in the meanwhile.
// 		instance.element().querySelector('img').src = ''
//
// 		instance.element().querySelector('img').src = getSrc(elem)
//
// 		const prev = instance.element().querySelector('#prev')
// 		const next = instance.element().querySelector('#next')
//
// 		prev.onclick = (e) => {
//
// 			elem = getPrev(elem)
//
// 			init(instance)
//
// 		}
//
// 		next.onclick = (e) => {
//
// 			elem = getNext(elem)
//
// 			init(instance)
//
// 		}
//
// 	}
//
// 	basicLightbox.create('<img>', {
// 		beforePlaceholder : '<button id="prev">&#8592;</button>',
// 		afterPlaceholder  : '<button id="next">&#8594;</button>',
// 		beforeShow        : init
// 	}).show()
//
// }
//
// Array.prototype.forEach.call(document.querySelectorAll('.photo-item'), function(elem) {
//
// 	elem.onclick = (e) => open(elem)
//
// })
