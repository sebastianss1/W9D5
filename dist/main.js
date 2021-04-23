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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nclass Clock {\n    constructor() {\n        // 1. Create a Date object.\n        const currentTime = new Date();\n\n        // 2. Store the hour, minute, and second.\n        this.hours = currentTime.getHours();\n        this.minutes = currentTime.getMinutes();\n        this.seconds = currentTime.getSeconds();\n\n        // 3. Call printTime.\n        this.printTime();\n\n        // 4. Schedule the tick at 1 second intervals.\n        setInterval(this._tick.bind(this), 1000);\n    }\n\n    printTime() {\n        // Format the time in HH:MM:SS\n        const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n        // Use console.log to print it.\n        return timeString;\n    }\n\n    _tick() {\n        // 1. Increment the time by one second.\n        this._incrementSeconds();\n       \n\n        // 2. Call printTime.\n        (0,_warmup__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(clock.printTime(), clockElement)\n    }\n\n    _incrementSeconds() {\n        // 1. Increment the time by one second.\n        this.seconds += 1;\n        if (this.seconds === 60) {\n            this.seconds = 0;\n            this._incrementMinutes();\n        }\n    }\n\n    _incrementMinutes() {\n        this.minutes += 1;\n        if (this.minutes === 60) {\n            this.minutes = 0;\n            this._incrementHours();\n        }\n    }\n\n    _incrementHours() {\n        this.hours = (this.hours + 1) % 24;\n    }\n}\n\nconst clockElement = document.getElementById('clock');\nconst clock = new Clock();\n(0,_warmup__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(clock.printTime(), clockElement)\n\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/***/ (() => {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator(dogs) {\n  const dogLinks = [];\n  const dogNames = Object.keys(dogs);\n  dogNames.forEach( (dog) => {\n    const dogA = document.createElement('a');\n    const dogLi = document.createElement('li');\n    dogA.innerHTML = dog;\n    dogA.href = dogs[dog];\n    dogLi.classList = 'dog-link';\n    dogLi.appendChild(dogA);\n    dogLinks.push(dogLi);\n  })\n  return dogLinks;\n}\n\nfunction attachDogLinks( ) {\n  const dogLinks = dogLinkCreator(dogs);\n  const ul = document.querySelector('.drop-down-dog-list');\n  dogLinks.forEach( (dog) => {\n    ul.appendChild(dog);\n  })\n\n}\n\nfunction handleEnter () {  \n  const dogLink = document.querySelectorAll('.dog-link');\n  dogLink.forEach((link) => {\n    link.classList.toggle('showing');\n  })\n}\n\nfunction handleLeave () {\n  const dogLink = document.querySelectorAll('.dog-link');\n  dogLink.forEach((link) => {\n    link.classList.toggle('showing');\n  })\n}\n\nattachDogLinks();\n\n\n//Event Listeners\nconst nav = document.querySelector('.drop-down-dog-nav');\n  nav.addEventListener('mouseenter', handleEnter);\n  nav.addEventListener('mouseleave', handleLeave);\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/***/ (() => {

eval("const toDos = JSON.parse(localStorage.getItem('todos')) || [];\nconst ul = document.querySelector('.todos');\nconst form = document.querySelector('.add-todo-form');\nconst checkboxes = document.querySelectorAll('input[type=\"checkbox\"]')\n\nfunction addTodo(e) {\n    e.preventDefault();\n    const input = document.querySelector('input[name=\"add-todo\"]');\n    const inputValue = input.value;\n    const todo = {\n        inputValue,\n        done: false\n    }\n    toDos.push(todo);\n    form.reset()\n    populateList([toDos[toDos.length - 1]])\n\n    localStorage.setItem('todos', JSON.stringify(toDos))\n}\n\n\nfunction populateList(todos) {\n    todos.forEach(todo => {\n        const label = document.createElement(\"label\");\n        label.innerHTML = todo[\"inputValue\"];\n\n        const input = document.createElement(\"input\");\n        input.setAttribute(\"data-todo\", todo[\"inputValue\"])\n        input.setAttribute(\"type\", \"checkbox\");\n        if (todo[\"done\"] === \"true\") {\n        input.checked = true;\n        }\n        const li = document.createElement(\"li\");\n        li.appendChild(label);\n        li.appendChild(input);\n\n        const ul = document.querySelector(\".todos\");\n        ul.appendChild(li);\n    });\n\n}\n\n\nform.addEventListener(\"submit\", addTodo)\nul.addEventListener(\"click\", (e) => {\n    if (e.target.type === \"checkbox\") {\n        const todo = e.target.getAttribute(\"data-todo\")\n        const ls = JSON.parse(localStorage.getItem('todos'))\n        for (i = 0; i < ls.length; i ++) {\n            const obj = ls[i]\n            if (obj[\"inputValue\"] === todo) {\n                // obj[\"done\"] = \"true\"; \n                obj[\"done\"] = obj[\"done\"] === \"true\" ? \"false\" : \"true\";\n            }\n        }\n        localStorage.setItem('todos', JSON.stringify(ls))\n\n    }\n})\npopulateList(toDos);\n\n\n// localStorage.setItem('todos', JSON.stringify(toDos))\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => (/* binding */ htmlGenerator)\n/* harmony export */ });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    const p = document.createElement(\"p\");\n    p.innerText = string; \n    if (htmlElement.hasChildNodes()) {\n        Array.from(htmlElement.children).forEach((child) => {\n            htmlElement.removeChild(child)}); \n    };\n    htmlElement.appendChild(p);\n\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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