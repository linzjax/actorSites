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

imagesArray.forEach(function(image){
	image.addEventListener('click', function(e){
		console.log(image.childNodes[1].getAttribute('src'));
	});
});

//});

import "styles/styles.scss";