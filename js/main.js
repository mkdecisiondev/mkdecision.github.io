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
/******/ 	return __webpack_require__(__webpack_require__.s = 216);
/******/ })
/************************************************************************/
/******/ ({

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(217);


/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_index_js__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_components_ccosDiagram_js__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_components_ccosDiagramMobile_js__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_components_sidenav_js__ = __webpack_require__(221);





Object(__WEBPACK_IMPORTED_MODULE_3__views_components_sidenav_js__["a" /* default */])(document.getElementById('sidenavMenu'), document.getElementById('leftSidenavToggle'), document.getElementById('rightSidenavToggle'));

if (window.pageId === 'index') {
	Object(__WEBPACK_IMPORTED_MODULE_0__views_index_js__["a" /* default */])({
		experianLogoNode: document.getElementById('experianLogo'),
		experianDialogNode: document.getElementById('experianDialog'),
		rsiLogoNode: document.getElementById('rsiLogo'),
		rsiDialogNode: document.getElementById('rsiDialog')
	});
}

if (window.pageId === 'ccos') {
	Object(__WEBPACK_IMPORTED_MODULE_1__views_components_ccosDiagram_js__["a" /* default */])(document.querySelectorAll('.step'), document.querySelectorAll('.step-info'));

	Object(__WEBPACK_IMPORTED_MODULE_2__views_components_ccosDiagramMobile_js__["a" /* default */])(document.querySelectorAll('.step-mobile'), document.querySelectorAll('.step-info-mobile'));
}

/***/ }),

/***/ 218:
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

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function initDiagram(stepNode, stepInfoNode) {
	window.addEventListener('scroll', function () {
		for (var i = 0; i < stepNode.length; i++) {
			if (window.pageYOffset + window.innerHeight - 300 > stepNode[i].offsetTop) {
				stepNode[i].classList.add('fade-in-top');
				stepNode[i].classList.remove('fade-out-top');
				stepInfoNode[i].classList.add('fade-in-left');
				stepInfoNode[i].classList.remove('fade-out-left');
			} else {
				stepNode[i].classList.add('fade-out-top');
				stepNode[i].classList.remove('fade-in-top');
				stepInfoNode[i].classList.add('fade-out-left');
				stepInfoNode[i].classList.remove('fade-in-left');
			}
		}
	});
}

/* harmony default export */ __webpack_exports__["a"] = (initDiagram);

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function initDiagramMobile(stepMobileNode, stepInfoMobileNode) {
	for (var i = 0; i < stepMobileNode.length; i++) {
		stepMobileNode[i].setAttribute('index', i);

		stepMobileNode[i].addEventListener('click', function () {
			var currentIndex = this.getAttribute('index');

			if (stepInfoMobileNode[currentIndex].classList.contains('right')) {
				if (stepInfoMobileNode[currentIndex].classList.contains('fade-in-right')) {
					stepInfoMobileNode[currentIndex].classList.remove('fade-in-right');
				} else {
					stepInfoMobileNode[currentIndex].classList.add('fade-in-right');
				}
			} else if (stepInfoMobileNode[currentIndex].classList.contains('fade-in-left')) {
				stepInfoMobileNode[currentIndex].classList.remove('fade-in-left');
			} else {
				stepInfoMobileNode[currentIndex].classList.add('fade-in-left');
			}
		});
	}
}

/* harmony default export */ __webpack_exports__["a"] = (initDiagramMobile);

/***/ }),

/***/ 221:
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