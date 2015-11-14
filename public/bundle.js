/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//document.addEventListener('load', function(){

	//});

	__webpack_require__(2);

	document.getElementById('about').addEventListener('click', function (e) {
		e.preventDefault();
		console.log(document.getElementsByClassName('bio-box')[0]);
		document.getElementsByClassName('bio-box')[0].classList.remove('hidden');
	});

	document.getElementById('name-link').addEventListener('click', function (e) {
		e.preventDefault();
		document.getElementsByClassName('bio-box')[0].classList.add('hidden');
	});

	var images = document.getElementsByClassName('image');
	var imagesArray = Array.prototype.slice.call(images);

	var $lightbox = document.getElementsByClassName('gallery-lightbox')[0];

	imagesArray.forEach(function (image) {
		image.addEventListener('click', function (e) {
			var src = image.childNodes[1].getAttribute('src');
			$lightbox.childNodes[1].childNodes[1].setAttribute('src', src);
			$lightbox.classList.remove('hidden');
		});
	});

	$lightbox.addEventListener('click', function (e) {
		$lightbox.classList.add('hidden');
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);