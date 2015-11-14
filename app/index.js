'use strict';



//document.addEventListener('load', function(){
document.getElementById('about').addEventListener('click', function(e){
	e.preventDefault();
	console.log(document.getElementsByClassName('bio-box')[0]);
	document.getElementsByClassName('bio-box')[0].classList.remove('hidden');
});

document.getElementById('name-link').addEventListener('click', function(e){
	e.preventDefault();
	document.getElementsByClassName('bio-box')[0].classList.add('hidden');
});

var images = document.getElementsByClassName('image');
var imagesArray = Array.prototype.slice.call(images);

var $lightbox = document.getElementsByClassName('gallery-lightbox')[0];

imagesArray.forEach(function(image){
	image.addEventListener('click', function(e){
		var src = image.childNodes[1].getAttribute('src');
		$lightbox.childNodes[1].childNodes[1].setAttribute('src', src);
		$lightbox.classList.remove('hidden');
	});
});


$lightbox.addEventListener('click', function(e){
	$lightbox.classList.add('hidden');
});

//});

import "styles/styles.scss";