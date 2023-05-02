"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/AuthPageSSR";
exports.ids = ["pages/AuthPageSSR"];
exports.modules = {

/***/ "./pages/AuthPageSSR.js":
/*!******************************!*\
  !*** ./pages/AuthPageSSR.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthPageSSR),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_services_auth_tokenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/services/auth/tokenService */ \"./src/services/auth/tokenService.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction AuthPageSSR(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"AuthPageSSR\"\n            }, void 0, false, {\n                fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/AuthPageSSR.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(props, null, 2)\n            }, void 0, false, {\n                fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/AuthPageSSR.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n};\nasync function getServerSideProps(ctx) {\n    return {\n        props: {\n            token: _src_services_auth_tokenService__WEBPACK_IMPORTED_MODULE_1__.tokenService.get(ctx)\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9BdXRoUGFnZVNTUi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnRTtBQUNuQztBQUVkLFFBQVEsQ0FBQ0UsV0FBVyxDQUFDQyxLQUFLLEVBQUMsQ0FBQztJQUN2QyxNQUFNLDZFQUFDOzt3RkFFRUMsQ0FBRTswQkFBQyxDQUFXOzs7Ozs7d0ZBQ2RDLENBQUc7MEJBRUlDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7Ozs7Ozs7O0FBS2pELENBQUM7QUFFTSxlQUFlSyxrQkFBa0IsQ0FBQ0MsR0FBRyxFQUFDLENBQUM7SUFDMUMsTUFBTSxDQUFDLENBQUM7UUFDSk4sS0FBSyxFQUFFLENBQUM7WUFDSk8sS0FBSyxFQUFFViw2RUFBZ0IsQ0FBQ1MsR0FBRztRQUMvQixDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdXJzbzAzLW5leHRqcy1mcm9udC8uL3BhZ2VzL0F1dGhQYWdlU1NSLmpzPzRjMTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9rZW5TZXJ2aWNlIH0gZnJvbSBcIi4uL3NyYy9zZXJ2aWNlcy9hdXRoL3Rva2VuU2VydmljZVwiXG5pbXBvcnQgbm9va2llcyBmcm9tICdub29raWVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aFBhZ2VTU1IocHJvcHMpe1xuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT5BdXRoUGFnZVNTUjwvaDE+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocHJvcHMsIG51bGwsIDIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0b2tlbjogdG9rZW5TZXJ2aWNlLmdldChjdHgpLFxuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJ0b2tlblNlcnZpY2UiLCJub29raWVzIiwiQXV0aFBhZ2VTU1IiLCJwcm9wcyIsImgxIiwicHJlIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsInRva2VuIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/AuthPageSSR.js\n");

/***/ }),

/***/ "./src/services/auth/tokenService.js":
/*!*******************************************!*\
  !*** ./src/services/auth/tokenService.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tokenService\": () => (/* binding */ tokenService)\n/* harmony export */ });\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';\nconst ONE_SECOND = 1;\nconst ONE_MINUTE = ONE_SECOND * 60;\nconst ONE_HOUR = ONE_MINUTE * 60;\nconst ONE_DAY = ONE_HOUR * 24;\nconst ONE_YEAR = ONE_DAY * 365;\nconst tokenService = {\n    save (access_token, ctx = null) {\n        var ref, ref1;\n        globalThis === null || globalThis === void 0 ? void 0 : (ref = globalThis.localStorage) === null || ref === void 0 ? void 0 : ref.setItem(ACCESS_TOKEN_KEY, access_token);\n        globalThis === null || globalThis === void 0 ? void 0 : (ref1 = globalThis.sessionStorage) === null || ref1 === void 0 ? void 0 : ref1.setItem(ACCESS_TOKEN_KEY, access_token);\n        nookies__WEBPACK_IMPORTED_MODULE_0___default().set(ctx, ACCESS_TOKEN_KEY, access_token, {\n            maxAge: ONE_YEAR,\n            path: '/'\n        });\n    },\n    get (ctx = null) {\n        const cookies = nookies__WEBPACK_IMPORTED_MODULE_0___default().get(ctx);\n        return cookies[ACCESS_TOKEN_KEY] || '';\n    //return globalThis?.localStorage?.getItem(ACCESS_TOKEN_KEY) || globalThis?.sessionStorage?.getItem(ACCESS_TOKEN_KEY)\n    },\n    delete () {\n        var ref, ref2;\n        globalThis === null || globalThis === void 0 ? void 0 : (ref = globalThis.localStorage) === null || ref === void 0 ? void 0 : ref.removeItem(ACCESS_TOKEN_KEY);\n        globalThis === null || globalThis === void 0 ? void 0 : (ref2 = globalThis.sessionStorage) === null || ref2 === void 0 ? void 0 : ref2.removeItem(ACCESS_TOKEN_KEY);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXV0aC90b2tlblNlcnZpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZCO0FBQzdCLEtBQUssQ0FBQ0MsZ0JBQWdCLEdBQUcsQ0FBa0I7QUFHM0MsS0FBSyxDQUFDQyxVQUFVLEdBQUcsQ0FBQztBQUNwQixLQUFLLENBQUNDLFVBQVUsR0FBR0QsVUFBVSxHQUFHLEVBQUU7QUFDbEMsS0FBSyxDQUFDRSxRQUFRLEdBQUdELFVBQVUsR0FBRyxFQUFFO0FBQ2hDLEtBQUssQ0FBQ0UsT0FBTyxHQUFHRCxRQUFRLEdBQUcsRUFBRTtBQUM3QixLQUFLLENBQUNFLFFBQVEsR0FBR0QsT0FBTyxHQUFHLEdBQUc7QUFFdkIsS0FBSyxDQUFDRSxZQUFZLEdBQUcsQ0FBQztJQUN6QkMsSUFBSSxFQUFDQyxZQUFZLEVBQUVDLEdBQUcsR0FBRyxJQUFJLEVBQUMsQ0FBQztZQUMzQkMsR0FBd0IsRUFDeEJBLElBQTBCO1FBRDFCQSxVQUFVLGFBQVZBLFVBQVUsS0FBVkEsSUFBSSxDQUFKQSxDQUF3QixHQUF4QkEsSUFBSSxDQUFKQSxDQUF3QixJQUF4QkEsR0FBd0IsR0FBeEJBLFVBQVUsQ0FBRUMsWUFBWSxjQUF4QkQsR0FBd0IsS0FBeEJBLElBQUksQ0FBSkEsQ0FBd0IsR0FBeEJBLElBQUksQ0FBSkEsQ0FBd0IsR0FBeEJBLEdBQXdCLENBQUVFLE9BQU8sQ0FBQ1osZ0JBQWdCLEVBQUVRLFlBQVk7UUFDaEVFLFVBQVUsYUFBVkEsVUFBVSxLQUFWQSxJQUFJLENBQUpBLENBQTBCLEdBQTFCQSxJQUFJLENBQUpBLENBQTBCLElBQTFCQSxJQUEwQixHQUExQkEsVUFBVSxDQUFFRyxjQUFjLGNBQTFCSCxJQUEwQixLQUExQkEsSUFBSSxDQUFKQSxDQUEwQixHQUExQkEsSUFBSSxDQUFKQSxDQUEwQixHQUExQkEsSUFBMEIsQ0FBRUUsT0FBTyxDQUFDWixnQkFBZ0IsRUFBRVEsWUFBWTtRQUNsRVQsa0RBQVcsQ0FBQ1UsR0FBRyxFQUFFVCxnQkFBZ0IsRUFBRVEsWUFBWSxFQUFFLENBQUM7WUFDOUNPLE1BQU0sRUFBRVYsUUFBUTtZQUNoQlcsSUFBSSxFQUFFLENBQUc7UUFDYixDQUFDO0lBQ0wsQ0FBQztJQUNEQyxHQUFHLEVBQUNSLEdBQUcsR0FBRyxJQUFJLEVBQUMsQ0FBQztRQUNaLEtBQUssQ0FBQ1MsT0FBTyxHQUFHbkIsa0RBQVcsQ0FBQ1UsR0FBRztRQUMvQixNQUFNLENBQUNTLE9BQU8sQ0FBQ2xCLGdCQUFnQixLQUFLLENBQUU7SUFDdEMsRUFBcUg7SUFDekgsQ0FBQztJQUNEbUIsTUFBTSxJQUFFLENBQUM7WUFDTFQsR0FBd0IsRUFDeEJBLElBQTBCO1FBRDFCQSxVQUFVLGFBQVZBLFVBQVUsS0FBVkEsSUFBSSxDQUFKQSxDQUF3QixHQUF4QkEsSUFBSSxDQUFKQSxDQUF3QixJQUF4QkEsR0FBd0IsR0FBeEJBLFVBQVUsQ0FBRUMsWUFBWSxjQUF4QkQsR0FBd0IsS0FBeEJBLElBQUksQ0FBSkEsQ0FBd0IsR0FBeEJBLElBQUksQ0FBSkEsQ0FBd0IsR0FBeEJBLEdBQXdCLENBQUVVLFVBQVUsQ0FBQ3BCLGdCQUFnQjtRQUNyRFUsVUFBVSxhQUFWQSxVQUFVLEtBQVZBLElBQUksQ0FBSkEsQ0FBMEIsR0FBMUJBLElBQUksQ0FBSkEsQ0FBMEIsSUFBMUJBLElBQTBCLEdBQTFCQSxVQUFVLENBQUVHLGNBQWMsY0FBMUJILElBQTBCLEtBQTFCQSxJQUFJLENBQUpBLENBQTBCLEdBQTFCQSxJQUFJLENBQUpBLENBQTBCLEdBQTFCQSxJQUEwQixDQUFFVSxVQUFVLENBQUNwQixnQkFBZ0I7SUFDM0QsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdXJzbzAzLW5leHRqcy1mcm9udC8uL3NyYy9zZXJ2aWNlcy9hdXRoL3Rva2VuU2VydmljZS5qcz9hYzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub29raWVzIGZyb20gJ25vb2tpZXMnO1xuY29uc3QgQUNDRVNTX1RPS0VOX0tFWSA9ICdBQ0NFU1NfVE9LRU5fS0VZJ1xuXG5cbmNvbnN0IE9ORV9TRUNPTkQgPSAxO1xuY29uc3QgT05FX01JTlVURSA9IE9ORV9TRUNPTkQgKiA2MDtcbmNvbnN0IE9ORV9IT1VSID0gT05FX01JTlVURSAqIDYwO1xuY29uc3QgT05FX0RBWSA9IE9ORV9IT1VSICogMjQ7XG5jb25zdCBPTkVfWUVBUiA9IE9ORV9EQVkgKiAzNjU7XG5cbmV4cG9ydCBjb25zdCB0b2tlblNlcnZpY2UgPSB7XG4gICAgc2F2ZShhY2Nlc3NfdG9rZW4sIGN0eCA9IG51bGwpe1xuICAgICAgICBnbG9iYWxUaGlzPy5sb2NhbFN0b3JhZ2U/LnNldEl0ZW0oQUNDRVNTX1RPS0VOX0tFWSwgYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgZ2xvYmFsVGhpcz8uc2Vzc2lvblN0b3JhZ2U/LnNldEl0ZW0oQUNDRVNTX1RPS0VOX0tFWSwgYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgbm9va2llcy5zZXQoY3R4LCBBQ0NFU1NfVE9LRU5fS0VZLCBhY2Nlc3NfdG9rZW4sIHtcbiAgICAgICAgICAgIG1heEFnZTogT05FX1lFQVIsXG4gICAgICAgICAgICBwYXRoOiAnLydcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXQoY3R4ID0gbnVsbCl7XG4gICAgICAgIGNvbnN0IGNvb2tpZXMgPSBub29raWVzLmdldChjdHgpO1xuICAgICAgICByZXR1cm4gY29va2llc1tBQ0NFU1NfVE9LRU5fS0VZXSB8fCAnJztcbiAgICAgICAgLy9yZXR1cm4gZ2xvYmFsVGhpcz8ubG9jYWxTdG9yYWdlPy5nZXRJdGVtKEFDQ0VTU19UT0tFTl9LRVkpIHx8IGdsb2JhbFRoaXM/LnNlc3Npb25TdG9yYWdlPy5nZXRJdGVtKEFDQ0VTU19UT0tFTl9LRVkpXG4gICAgfSxcbiAgICBkZWxldGUoKXtcbiAgICAgICAgZ2xvYmFsVGhpcz8ubG9jYWxTdG9yYWdlPy5yZW1vdmVJdGVtKEFDQ0VTU19UT0tFTl9LRVkpO1xuICAgICAgICBnbG9iYWxUaGlzPy5zZXNzaW9uU3RvcmFnZT8ucmVtb3ZlSXRlbShBQ0NFU1NfVE9LRU5fS0VZKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIm5vb2tpZXMiLCJBQ0NFU1NfVE9LRU5fS0VZIiwiT05FX1NFQ09ORCIsIk9ORV9NSU5VVEUiLCJPTkVfSE9VUiIsIk9ORV9EQVkiLCJPTkVfWUVBUiIsInRva2VuU2VydmljZSIsInNhdmUiLCJhY2Nlc3NfdG9rZW4iLCJjdHgiLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNlc3Npb25TdG9yYWdlIiwic2V0IiwibWF4QWdlIiwicGF0aCIsImdldCIsImNvb2tpZXMiLCJkZWxldGUiLCJyZW1vdmVJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/auth/tokenService.js\n");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/AuthPageSSR.js"));
module.exports = __webpack_exports__;

})();