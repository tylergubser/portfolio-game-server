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

/***/ "./src/img/skills.gif":
/*!****************************!*\
  !*** ./src/img/skills.gif ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "843921662c5304c6a1110c977715e17b.gif");

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
/* harmony import */ var _img_skills_gif__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/skills.gif */ "./src/img/skills.gif");
/* harmony import */ var _img_redux_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/redux.png */ "./src/img/redux.png");
/* harmony import */ var _img_signs_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../img/signs.png */ "./src/img/signs.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






















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
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;else this.velocity.y = 0;
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
  x: 970,
  y: -100,
  image: createImage(_img_skills_gif__WEBPACK_IMPORTED_MODULE_18__["default"])
}), new ResumeObject({
  x: 1530,
  y: 300,
  image: createImage(_img_redux_png__WEBPACK_IMPORTED_MODULE_19__["default"])
}), new ResumeObject({
  x: 2400,
  y: 600,
  image: createImage(_img_signs_png__WEBPACK_IMPORTED_MODULE_20__["default"])
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
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
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
    } else if (keys.left.pressed && scrollOffset > 0) {
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