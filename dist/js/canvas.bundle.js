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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/blog.png":
/*!**************************!*\
  !*** ./src/img/blog.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fc6a9f8001e44e63d09a93e93173bc6e.png");

/***/ }),

/***/ "./src/img/blog1.png":
/*!***************************!*\
  !*** ./src/img/blog1.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "552b3d2147181a2a5fcf2b029c03ca92.png");

/***/ }),

/***/ "./src/img/blog2.png":
/*!***************************!*\
  !*** ./src/img/blog2.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cb827166489ba0f34f89bbb6b69d53cc.png");

/***/ }),

/***/ "./src/img/blog3.png":
/*!***************************!*\
  !*** ./src/img/blog3.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "84bc2403e8e89af77169dc172870a34b.png");

/***/ }),

/***/ "./src/img/blogs.png":
/*!***************************!*\
  !*** ./src/img/blogs.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "05bea3dc2b9143cfd0e9ae34b7d786b7.png");

/***/ }),

/***/ "./src/img/css.png":
/*!*************************!*\
  !*** ./src/img/css.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0e67005b69194491cf963880d13f397f.png");

/***/ }),

/***/ "./src/img/direction.png":
/*!*******************************!*\
  !*** ./src/img/direction.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "64dbc16ca0094b6539eb00a616645e2b.png");

/***/ }),

/***/ "./src/img/downarrow.png":
/*!*******************************!*\
  !*** ./src/img/downarrow.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b748f78857f78664e24d3ebd568ee474.png");

/***/ }),

/***/ "./src/img/drink.png":
/*!***************************!*\
  !*** ./src/img/drink.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8dea544ccbc171d56c8a07bcfa307050.png");

/***/ }),

/***/ "./src/img/education.png":
/*!*******************************!*\
  !*** ./src/img/education.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0e62cf398f7ae21f41b3ecd46f85e073.png");

/***/ }),

/***/ "./src/img/fish.png":
/*!**************************!*\
  !*** ./src/img/fish.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "beb7ecfca514aeda5deb62c1f937dead.png");

/***/ }),

/***/ "./src/img/game.png":
/*!**************************!*\
  !*** ./src/img/game.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7e15447c3baac1a57accdf6dfd90ac25.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/html.png":
/*!**************************!*\
  !*** ./src/img/html.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f94c64e7716c2cefaf114bedd885cb50.png");

/***/ }),

/***/ "./src/img/javascript.png":
/*!********************************!*\
  !*** ./src/img/javascript.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "211dd84e7ab13eabe4a45d94b576f5b4.png");

/***/ }),

/***/ "./src/img/movement.png":
/*!******************************!*\
  !*** ./src/img/movement.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "56a7903746206a1f2615358008111553.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/img/projects.png":
/*!******************************!*\
  !*** ./src/img/projects.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d7dab7c6573fd0b534418448602a8cd4.png");

/***/ }),

/***/ "./src/img/rails.png":
/*!***************************!*\
  !*** ./src/img/rails.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c56a6dfd192c2faece0ff27ef43d3b1e.png");

/***/ }),

/***/ "./src/img/react.png":
/*!***************************!*\
  !*** ./src/img/react.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "257e081fbb213ee5ff153519ed0b79f4.png");

/***/ }),

/***/ "./src/img/redux.png":
/*!***************************!*\
  !*** ./src/img/redux.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f5456fa55a717c657d6645616f5674a6.png");

/***/ }),

/***/ "./src/img/resume.png":
/*!****************************!*\
  !*** ./src/img/resume.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ac677c382e7f0a96b7bf770043e2ee1d.png");

/***/ }),

/***/ "./src/img/resume2.png":
/*!*****************************!*\
  !*** ./src/img/resume2.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "41f404d970c3d25fa1d66de010ce9f86.png");

/***/ }),

/***/ "./src/img/resume3.png":
/*!*****************************!*\
  !*** ./src/img/resume3.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9638a37155f80838e78665b5c0ed635b.png");

/***/ }),

/***/ "./src/img/resume4.png":
/*!*****************************!*\
  !*** ./src/img/resume4.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffefe238e1141429d958ae2e39d0e25b.png");

/***/ }),

/***/ "./src/img/ruby.png":
/*!**************************!*\
  !*** ./src/img/ruby.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "db398eb8408384e18287169946f5e3ca.png");

/***/ }),

/***/ "./src/img/sign.png":
/*!**************************!*\
  !*** ./src/img/sign.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cad0e69cdb189c524858f0eb5050de7e.png");

/***/ }),

/***/ "./src/img/sign1.png":
/*!***************************!*\
  !*** ./src/img/sign1.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e325fc50e9340c7983c4bf23842e37e6.png");

/***/ }),

/***/ "./src/img/sign2.png":
/*!***************************!*\
  !*** ./src/img/sign2.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "668f8da1dc4ba71831c00357d95d0aae.png");

/***/ }),

/***/ "./src/img/signs.png":
/*!***************************!*\
  !*** ./src/img/signs.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e1b717f6d63dce99ba1e50969cc8531f.png");

/***/ }),

/***/ "./src/img/skills.png":
/*!****************************!*\
  !*** ./src/img/skills.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5099e7d7f41d81318d4907345d990a1a.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/img/tailwind.png":
/*!******************************!*\
  !*** ./src/img/tailwind.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1a6a772f800f7aca866e854edfcba604.png");

/***/ }),

/***/ "./src/img/techstack.png":
/*!*******************************!*\
  !*** ./src/img/techstack.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e683bee242e4defc7a8f60cd07fb7745.png");

/***/ }),

/***/ "./src/img/techstack1.png":
/*!********************************!*\
  !*** ./src/img/techstack1.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01d3e0b927fa5cfcaa9c15dd27570f85.png");

/***/ }),

/***/ "./src/img/techstack2.png":
/*!********************************!*\
  !*** ./src/img/techstack2.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5c4127a90e456dab4581a91ad0209f47.png");

/***/ }),

/***/ "./src/img/tradport.png":
/*!******************************!*\
  !*** ./src/img/tradport.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "283ba36728d01540112ad91705fcaf9c.png");

/***/ }),

/***/ "./src/img/work.png":
/*!**************************!*\
  !*** ./src/img/work.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "70e519c697ac4cd14dd0aaec94284ac1.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_javascript_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/javascript.png */ "./src/img/javascript.png");
/* harmony import */ var _img_ruby_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/ruby.png */ "./src/img/ruby.png");
/* harmony import */ var _img_sign_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/sign.png */ "./src/img/sign.png");
/* harmony import */ var _img_direction_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/direction.png */ "./src/img/direction.png");
/* harmony import */ var _img_movement_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/movement.png */ "./src/img/movement.png");
/* harmony import */ var _img_react_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/react.png */ "./src/img/react.png");
/* harmony import */ var _img_rails_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/rails.png */ "./src/img/rails.png");
/* harmony import */ var _img_html_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/html.png */ "./src/img/html.png");
/* harmony import */ var _img_css_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/css.png */ "./src/img/css.png");
/* harmony import */ var _img_tailwind_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/tailwind.png */ "./src/img/tailwind.png");
/* harmony import */ var _img_skills_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/skills.png */ "./src/img/skills.png");
/* harmony import */ var _img_redux_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/redux.png */ "./src/img/redux.png");
/* harmony import */ var _img_signs_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../img/signs.png */ "./src/img/signs.png");
/* harmony import */ var _img_resume_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../img/resume.png */ "./src/img/resume.png");
/* harmony import */ var _img_resume2_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../img/resume2.png */ "./src/img/resume2.png");
/* harmony import */ var _img_resume3_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../img/resume3.png */ "./src/img/resume3.png");
/* harmony import */ var _img_resume4_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../img/resume4.png */ "./src/img/resume4.png");
/* harmony import */ var _img_sign1_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../img/sign1.png */ "./src/img/sign1.png");
/* harmony import */ var _img_sign2_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../img/sign2.png */ "./src/img/sign2.png");
/* harmony import */ var _img_blog_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../img/blog.png */ "./src/img/blog.png");
/* harmony import */ var _img_blog1_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../img/blog1.png */ "./src/img/blog1.png");
/* harmony import */ var _img_blog2_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../img/blog2.png */ "./src/img/blog2.png");
/* harmony import */ var _img_blogs_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../img/blogs.png */ "./src/img/blogs.png");
/* harmony import */ var _img_blog3_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../img/blog3.png */ "./src/img/blog3.png");
/* harmony import */ var _img_game_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../img/game.png */ "./src/img/game.png");
/* harmony import */ var _img_drink_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../img/drink.png */ "./src/img/drink.png");
/* harmony import */ var _img_projects_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../img/projects.png */ "./src/img/projects.png");
/* harmony import */ var _img_fish_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../img/fish.png */ "./src/img/fish.png");
/* harmony import */ var _img_techstack_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../img/techstack.png */ "./src/img/techstack.png");
/* harmony import */ var _img_techstack1_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../img/techstack1.png */ "./src/img/techstack1.png");
/* harmony import */ var _img_techstack2_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../img/techstack2.png */ "./src/img/techstack2.png");
/* harmony import */ var _img_tradport_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../img/tradport.png */ "./src/img/tradport.png");
/* harmony import */ var _img_downarrow_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../img/downarrow.png */ "./src/img/downarrow.png");
/* harmony import */ var _img_work_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../img/work.png */ "./src/img/work.png");
/* harmony import */ var _img_education_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../img/education.png */ "./src/img/education.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











































 // document.addEventListener("DOMContentLoaded", function(event) {
//   setTimeout(animate(), 10000)
// });

var canvas = document.querySelector("canvas");
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
var gravity = 0.5;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 66;
    this.height = 150;
    this.image = createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        left: createImage(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        left: createImage(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        cropWidth: 341,
        width: 127.875
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 177;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) this.frames = 0;else if (this.frames > 29 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var ResumeObject = /*#__PURE__*/function () {
  function ResumeObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, ResumeObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(ResumeObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return ResumeObject;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var player = new Player();
var platforms = [new Platform({
  x: 0,
  y: 850,
  image: platformImage
}), new Platform({
  x: 500,
  y: 850,
  image: platformImage
}), // new Platform({x: 550, y: 500, image: platformImage}),
// new Platform({x: 1200, y: 600, image: platformImage}), 
new Platform({
  x: 1000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 1500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 2000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 2500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 3000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 3500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 4000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 4500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 5000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 5500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 6000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 6500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 7000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 7500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 8000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 8500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 9000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 9500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 10000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 10500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 11000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 11500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 12000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 12500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 13000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 13500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 14000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 14500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 15000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 15500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 16000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 16500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 17000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 17500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 18000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 18500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 19000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 19500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 20000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 20500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 21000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 21500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 2000,
  y: 600,
  image: platformImage
}), new Platform({
  x: 2700,
  y: 400,
  image: platformImage
}), new Platform({
  x: 3300,
  y: 200,
  image: platformImage
}), new Platform({
  x: 3800,
  y: 400,
  image: platformImage
}), new Platform({
  x: 5300,
  y: 500,
  image: platformImage
}), new Platform({
  x: 5800,
  y: 500,
  image: platformImage
}), new Platform({
  x: 6800,
  y: 600,
  image: platformImage
}), new Platform({
  x: 7300,
  y: 600,
  image: platformImage
}), new Platform({
  x: 8000,
  y: 500,
  image: platformImage
}), new Platform({
  x: 8800,
  y: 600,
  image: platformImage
}), new Platform({
  x: 10000,
  y: 600,
  image: platformImage
}), new Platform({
  x: 10700,
  y: 500,
  image: platformImage
}), new Platform({
  x: 11300,
  y: 400,
  image: platformImage
}), new Platform({
  x: 15000,
  y: 726,
  image: platformImage
}), new Platform({
  x: 14500,
  y: 726,
  image: platformImage
}), new Platform({
  x: 14000,
  y: 726,
  image: platformImage
}), new Platform({
  x: 15500,
  y: 726,
  image: platformImage
}), new Platform({
  x: 16000,
  y: 726,
  image: platformImage
}), new Platform({
  x: 16500,
  y: 726,
  image: platformImage
}), new Platform({
  x: 17000,
  y: 726,
  image: platformImage
}), new Platform({
  x: 17500,
  y: 726,
  image: platformImage
}), new Platform({
  x: 18000,
  y: 726,
  image: platformImage
}), new Platform({
  x: 18500,
  y: 726,
  image: platformImage
}), new Platform({
  x: 19000,
  y: 726,
  image: platformImage
}), new Platform({
  x: 19500,
  y: 726,
  image: platformImage
}), new Platform({
  x: 22000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 22500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 23000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 23500,
  y: 850,
  image: platformImage
}), new Platform({
  x: 25000,
  y: 850,
  image: platformImage
}), new Platform({
  x: 25500,
  y: 850,
  image: platformImage
})];
var resumeObjects = [// new ResumeObject({x: 0, y: 150, image: createImage(background)}),
// new ResumeObject({x: 0, y: -1, image: createImage(background)}),
new ResumeObject({
  x: 0,
  y: 300,
  image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
}), new ResumeObject({
  x: 1100,
  y: 600,
  image: createImage(_img_javascript_png__WEBPACK_IMPORTED_MODULE_8__["default"])
}), new ResumeObject({
  x: 850,
  y: 600,
  image: createImage(_img_ruby_png__WEBPACK_IMPORTED_MODULE_9__["default"])
}), new ResumeObject({
  x: 510,
  y: 600,
  image: createImage(_img_sign_png__WEBPACK_IMPORTED_MODULE_10__["default"])
}), new ResumeObject({
  x: 100,
  y: 200,
  image: createImage(_img_direction_png__WEBPACK_IMPORTED_MODULE_11__["default"])
}), new ResumeObject({
  x: 75,
  y: 0,
  image: createImage(_img_movement_png__WEBPACK_IMPORTED_MODULE_12__["default"])
}), new ResumeObject({
  x: 1300,
  y: 600,
  image: createImage(_img_react_png__WEBPACK_IMPORTED_MODULE_13__["default"])
}), new ResumeObject({
  x: 1530,
  y: 600,
  image: createImage(_img_rails_png__WEBPACK_IMPORTED_MODULE_14__["default"])
}), new ResumeObject({
  x: 850,
  y: 300,
  image: createImage(_img_html_png__WEBPACK_IMPORTED_MODULE_15__["default"])
}), new ResumeObject({
  x: 1100,
  y: 300,
  image: createImage(_img_css_png__WEBPACK_IMPORTED_MODULE_16__["default"])
}), new ResumeObject({
  x: 1320,
  y: 300,
  image: createImage(_img_tailwind_png__WEBPACK_IMPORTED_MODULE_17__["default"])
}), new ResumeObject({
  x: 1100,
  y: 0,
  image: createImage(_img_skills_png__WEBPACK_IMPORTED_MODULE_18__["default"])
}), new ResumeObject({
  x: 1530,
  y: 300,
  image: createImage(_img_redux_png__WEBPACK_IMPORTED_MODULE_19__["default"])
}), new ResumeObject({
  x: 2400,
  y: 600,
  image: createImage(_img_signs_png__WEBPACK_IMPORTED_MODULE_20__["default"])
}), new ResumeObject({
  x: 2700,
  y: -90,
  image: createImage(_img_education_png__WEBPACK_IMPORTED_MODULE_42__["default"])
}), new ResumeObject({
  x: 2800,
  y: 280,
  image: createImage(_img_resume2_png__WEBPACK_IMPORTED_MODULE_22__["default"])
}), new ResumeObject({
  x: 4300,
  y: -20,
  image: createImage(_img_work_png__WEBPACK_IMPORTED_MODULE_41__["default"])
}), new ResumeObject({
  x: 4380,
  y: 280,
  image: createImage(_img_resume3_png__WEBPACK_IMPORTED_MODULE_23__["default"])
}), new ResumeObject({
  x: 4380,
  y: 680,
  image: createImage(_img_resume4_png__WEBPACK_IMPORTED_MODULE_24__["default"])
}), new ResumeObject({
  x: 5100,
  y: 600,
  image: createImage(_img_sign1_png__WEBPACK_IMPORTED_MODULE_25__["default"])
}), new ResumeObject({
  x: 5550,
  y: 150,
  image: createImage(_img_blog_png__WEBPACK_IMPORTED_MODULE_27__["default"])
}), new ResumeObject({
  x: 5800,
  y: 150,
  image: createImage(_img_blog1_png__WEBPACK_IMPORTED_MODULE_28__["default"])
}), new ResumeObject({
  x: 6600,
  y: 150,
  image: createImage(_img_blog2_png__WEBPACK_IMPORTED_MODULE_29__["default"])
}), new ResumeObject({
  x: 6130,
  y: 10,
  image: createImage(_img_blogs_png__WEBPACK_IMPORTED_MODULE_30__["default"])
}), new ResumeObject({
  x: 6860,
  y: 150,
  image: createImage(_img_blog3_png__WEBPACK_IMPORTED_MODULE_31__["default"])
}), new ResumeObject({
  x: 6900,
  y: 475,
  image: createImage(_img_sign2_png__WEBPACK_IMPORTED_MODULE_26__["default"])
}), new ResumeObject({
  x: 7600,
  y: 200,
  image: createImage(_img_game_png__WEBPACK_IMPORTED_MODULE_32__["default"])
}), new ResumeObject({
  x: 8200,
  y: 200,
  image: createImage(_img_drink_png__WEBPACK_IMPORTED_MODULE_33__["default"])
}), new ResumeObject({
  x: 8350,
  y: 0,
  image: createImage(_img_projects_png__WEBPACK_IMPORTED_MODULE_34__["default"])
}), new ResumeObject({
  x: 8850,
  y: 200,
  image: createImage(_img_fish_png__WEBPACK_IMPORTED_MODULE_35__["default"])
}), new ResumeObject({
  x: 8330,
  y: 500,
  image: createImage(_img_techstack_png__WEBPACK_IMPORTED_MODULE_36__["default"])
}), new ResumeObject({
  x: 8990,
  y: 500,
  image: createImage(_img_techstack1_png__WEBPACK_IMPORTED_MODULE_37__["default"])
}), new ResumeObject({
  x: 7710,
  y: 500,
  image: createImage(_img_techstack2_png__WEBPACK_IMPORTED_MODULE_38__["default"])
}), new ResumeObject({
  x: 10000,
  y: 200,
  image: createImage(_img_tradport_png__WEBPACK_IMPORTED_MODULE_39__["default"])
}), new ResumeObject({
  x: 10000,
  y: 500,
  image: createImage(_img_downarrow_png__WEBPACK_IMPORTED_MODULE_40__["default"])
})];
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  resumeObjects.forEach(function (resumeObject) {
    resumeObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 2;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 2) {
    player.velocity.x = -2;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += 5;
      platforms.forEach(function (platform) {
        platform.position.x -= 5;
      });
      resumeObjects.forEach(function (resumeObject) {
        resumeObject.position.x -= 2;
      });
    } else if (keys.left.pressed && scrollOffset > 2) {
      scrollOffset += 5;
      platforms.forEach(function (platform) {
        platform.position.x += 5;
      });
      resumeObjects.forEach(function (resumeObject) {
        resumeObject.position.x += 2;
      });
    }
  } // Platform Collision detection


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); // sprite switching

  if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } // if (scrollOffset > 3000) {
  //     console.log("You Win")
  // }
  // if (player.position.y > canvas.height) {
  //   window.location.href = "https://portfolio-2022-tylergubser.vercel.app/";
  // }

}

animate();
addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = true;
      lastKey = "left";
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = true;
      lastKey = 'right';
      break;

    case 87:
      console.log('up');
      player.velocity.y -= 20;
      break;
  }
});
addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;

  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = false;
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = false;
      break;

    case 87:
      console.log('up');
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map