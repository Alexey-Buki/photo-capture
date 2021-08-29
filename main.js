/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://photo-capture/./src/styles.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\nfunction ready () {\n  (function () {\n\n    var width = 320;    // We will scale the photo width to this\n      var height = 0;     // This will be computed based on the input stream\n\n      var streaming = false;\n\n      var video = document.getElementById('video');\n      var canvas = document.getElementById('canvas');\n      var photo = document.getElementById('photo');\n      var startbutton = document.getElementById('startbutton');\n\n\n      function startup() {\n        navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(function(stream) {\n            video.srcObject = stream;\n            video.play();\n        }).catch(function(err) {\n            console.log(\"An error occurred: \" + err);\n        });\n      }\n\n      video.addEventListener('canplay', function(ev){\n        if (!streaming) {\n          height = video.videoHeight / (video.videoWidth/width);\n\n          video.setAttribute('width', width);\n          video.setAttribute('height', height);\n          canvas.setAttribute('width', width);\n          canvas.setAttribute('height', height);\n          streaming = true;\n        }\n      }, false);\n\n      startbutton.addEventListener('click', function(ev){\n        takepicture();\n        ev.preventDefault();\n      }, false);\n\n\n      function takepicture() {\n        var context = canvas.getContext('2d');\n\n        if (width && height) {\n          canvas.width = width;\n          canvas.height = height;\n          context.drawImage(video, 0, 0, width, height);\n\n          var data = canvas.toDataURL('image/png');\n          photo.setAttribute('src', data);\n        } else {\n          clearphoto();\n        }\n      }\n\n      function clearphoto() {\n        var context = canvas.getContext('2d');\n        context.fillStyle = \"#AAA\";\n        context.fillRect(0, 0, canvas.width, canvas.height);\n\n        var data = canvas.toDataURL('image/png');\n        photo.setAttribute('src', data);\n      }\n\n      startup();\n  })();\n}\n\n\ndocument.addEventListener(\"DOMContentLoaded\", ready);\n\n//# sourceURL=webpack://photo-capture/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;