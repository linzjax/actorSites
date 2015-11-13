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

//});

import "styles/styles.scss";