/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 204);
/******/ })
/************************************************************************/
/******/ ({

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(205);


/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_index_js__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_ccos_js__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_components_sidenav_js__ = __webpack_require__(208);




Object(__WEBPACK_IMPORTED_MODULE_2__views_components_sidenav_js__["a" /* default */])(document.getElementById('sidenavMenu'), document.getElementById('leftSidenavToggle'), document.getElementById('rightSidenavToggle'));

if (window.pageId === 'index') {
	Object(__WEBPACK_IMPORTED_MODULE_0__views_index_js__["a" /* default */])({
		experianLogoNode: document.getElementById('experianLogo'),
		experianDialogNode: document.getElementById('experianDialog'),
		rsiLogoNode: document.getElementById('rsiLogo'),
		rsiDialogNode: document.getElementById('rsiDialog')
	});
}

if (window.pageId === 'ccos') {
	Object(__WEBPACK_IMPORTED_MODULE_1__views_ccos_js__["a" /* default */])(document.querySelectorAll('.step'), document.querySelectorAll('.step-text'));
}

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initIndex;
/* global bootstrap */

var experianLogoNode = void 0;
var experianModal = void 0;
var rsiLogoNode = void 0;
var rsiModal = void 0;

function initIndex(options) {
	experianModal = new bootstrap.Modal(options.experianDialogNode);
	experianLogoNode = options.experianLogoNode;
	rsiModal = new bootstrap.Modal(options.rsiDialogNode);
	rsiLogoNode = options.rsiLogoNode;

	experianLogoNode.addEventListener('click', showExperianModal);
	rsiLogoNode.addEventListener('click', showRsiModal);
}

function showExperianModal() {
	experianModal.show();
}

function showRsiModal() {
	rsiModal.show();
}

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function initCcos(stepNode, stepTextNode) {
	window.addEventListener('scroll', function () {
		for (var i = 0; i < stepNode.length; i++) {
			if (window.scrollY + window.innerHeight - 300 > stepNode[i].offsetTop) {
				stepNode[i].classList.add('fade-in-top');
				stepNode[i].classList.remove('fade-out-top');
				stepTextNode[i].classList.add('fade-in-left');
				stepTextNode[i].classList.remove('fade-out-left');
			} else {
				stepNode[i].classList.add('fade-out-top');
				stepNode[i].classList.remove('fade-in-top');
				stepTextNode[i].classList.add('fade-out-left');
				stepTextNode[i].classList.remove('fade-in-left');
			}
		}
	});
}

/* harmony default export */ __webpack_exports__["a"] = (initCcos);

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ESCAPE_KEY = 27;

function initSideNavigator(node, leftToggleButton, rightToggleButton) {
	if (!node || !leftToggleButton || !rightToggleButton) {
		return;
	}

	var closeButton = node.querySelector('.close');
	var overlay = document.getElementById('overlay');
	var sidenavIsOpen = false;

	function toggleSideNavigator(event) {
		var forceClosed = event instanceof Event ? false : event;

		if (forceClosed || sidenavIsOpen) {
			document.body.style.overflow = 'auto';
			overlay.classList.remove('overlay');
			node.classList.remove('navFadeIn');
			node.classList.remove('animated');
			node.classList.remove('open');
			sidenavIsOpen = false;
		} else {
			document.body.style.overflow = 'hidden';
			overlay.classList.add('overlay');
			node.classList.add('open');
			node.classList.add('animated');
			node.classList.add('navFadeIn');

			setTimeout(function () {
				sidenavIsOpen = true;
			}, 0);
		}
	}

	leftToggleButton.addEventListener('click', toggleSideNavigator);
	rightToggleButton.addEventListener('click', toggleSideNavigator);
	closeButton.addEventListener('click', toggleSideNavigator);

	overlay.addEventListener('click', function (event) {
		if (sidenavIsOpen && !node.contains(event.target)) {
			toggleSideNavigator(true);
		}
	});

	document.addEventListener('keydown', function (event) {
		if (sidenavIsOpen && event.keyCode === ESCAPE_KEY) {
			toggleSideNavigator(true);
		}
	});
}

/* harmony default export */ __webpack_exports__["a"] = (initSideNavigator);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map