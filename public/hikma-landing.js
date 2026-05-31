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

/***/ "./src/assets/js/hikma-landing.js":
/*!****************************************!*\
  !*** ./src/assets/js/hikma-landing.js ***!
  \****************************************/
/***/ (() => {

eval("{(function () {\n  var root = document.querySelector('.hikma-landing');\n  if (!root) return;\n  root.querySelectorAll('a[href^=\"#\"]').forEach(function (anchor) {\n    anchor.addEventListener('click', function (e) {\n      var id = anchor.getAttribute('href');\n      if (!id || id === '#') return;\n      var target = root.querySelector(id);\n      if (!target) return;\n      e.preventDefault();\n      target.scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    });\n  });\n  var form = root.querySelector('[data-hikma-contact-form]');\n  if (form) {\n    form.addEventListener('submit', function (e) {\n      e.preventDefault();\n    });\n  }\n})();\n\n//# sourceURL=webpack://theme-raed/./src/assets/js/hikma-landing.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/hikma-landing.js"]();
/******/ 	
/******/ })()
;