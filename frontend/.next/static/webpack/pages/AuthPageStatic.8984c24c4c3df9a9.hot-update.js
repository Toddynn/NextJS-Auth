"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/AuthPageStatic",{

/***/ "./pages/AuthPageStatic.js":
/*!*********************************!*\
  !*** ./pages/AuthPageStatic.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthPageStatic; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_services_auth_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/services/auth/authService */ \"./src/services/auth/authService.js\");\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nfunction AuthPageStatic(props) {\n    _s();\n    var ref = useSession(), loading = ref.loading, error = ref.error, data = ref.data;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"AuthPageSSR\"\n            }, void 0, false, {\n                fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/AuthPageStatic.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(props.session, null, 2)\n            }, void 0, false, {\n                fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/AuthPageStatic.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(AuthPageStatic, \"jlcbUc/6nKsTym9R8FY1QGCXQDw=\", false, function() {\n    return [\n        useSession\n    ];\n});\n_c = AuthPageStatic;\nfunction useSession() {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), session = ref[0], setSession = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), error = ref2[0], setError = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _src_services_auth_authService__WEBPACK_IMPORTED_MODULE_2__.authService.getSession().then(function(userSession) {\n            console.log(userSession);\n            setSession(userSession);\n        }).catch(function(err) {\n            alert(err.message);\n        }).finally(function() {\n            setLoading(false);\n        });\n    }, []);\n    return {\n        loading: loading,\n        error: error,\n        data: session\n    };\n}\n_s1(useSession, \"BndDeahihZ4zenqMOCAvigXoXQs=\");\nvar _c;\n$RefreshReg$(_c, \"AuthPageStatic\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9BdXRoUGFnZVN0YXRpYy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBQ3FCOztBQUUvQyxRQUFRLENBQUNHLGNBQWMsQ0FBQ0MsS0FBSyxFQUFDLENBQUM7O0lBQzFDLEdBQUssQ0FBMEJDLEdBQVksR0FBWkEsVUFBVSxJQUFsQ0MsT0FBTyxHQUFpQkQsR0FBWSxDQUFwQ0MsT0FBTyxFQUFFQyxLQUFLLEdBQVVGLEdBQVksQ0FBM0JFLEtBQUssRUFBRUMsSUFBSSxHQUFJSCxHQUFZLENBQXBCRyxJQUFJO0lBRTNCLE1BQU0sNkVBQUM7O3dGQUVFQyxDQUFFOzBCQUFDLENBQVc7Ozs7Ozt3RkFDZEMsQ0FBRzswQkFFSUMsSUFBSSxDQUFDQyxTQUFTLENBQUNSLEtBQUssQ0FBQ1MsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOzs7Ozs7OztBQUt6RCxDQUFDO0dBYnVCVixjQUFjOztRQUNIRSxVQUFVOzs7S0FEckJGLGNBQWM7U0FlN0JFLFVBQVUsR0FBRSxDQUFDOztJQUNsQixHQUFLLENBQXlCTCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFwQ2EsT0FBTyxHQUFnQmIsR0FBYyxLQUE1QmMsVUFBVSxHQUFJZCxHQUFjO0lBQzVDLEdBQUssQ0FBeUJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXBDTSxPQUFPLEdBQWdCTixJQUFjLEtBQTVCZSxVQUFVLEdBQUlmLElBQWM7SUFDNUMsR0FBSyxDQUFxQkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBaENPLEtBQUssR0FBY1AsSUFBYyxLQUExQmdCLFFBQVEsR0FBSWhCLElBQWM7SUFFeENDLGdEQUFTLENBQUMsUUFDWixHQURnQixDQUFDO1FBQ1hDLGtGQUFzQixHQUNyQmdCLElBQUksQ0FBQyxRQUFRLENBQVBDLFdBQVcsRUFBRyxDQUFDO1lBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsV0FBVztZQUN2QkwsVUFBVSxDQUFDSyxXQUFXO1FBQzFCLENBQUMsRUFBRUcsS0FBSyxDQUFDLFFBQVEsQ0FBUEMsR0FBRyxFQUFHLENBQUM7WUFDYkMsS0FBSyxDQUFDRCxHQUFHLENBQUNFLE9BQU87UUFDckIsQ0FBQyxFQUFFQyxPQUFPLENBQUMsUUFDakIsR0FEcUIsQ0FBQztZQUNaWCxVQUFVLENBQUMsS0FBSztRQUNwQixDQUFDO0lBQ0wsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUVKLE1BQU0sQ0FBQyxDQUFDO1FBQ0pULE9BQU8sRUFBUEEsT0FBTztRQUNQQyxLQUFLLEVBQUxBLEtBQUs7UUFDTEMsSUFBSSxFQUFFSyxPQUFPO0lBQ2pCLENBQUM7QUFDTCxDQUFDO0lBdEJRUixVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0F1dGhQYWdlU3RhdGljLmpzPzk3OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc3JjL3NlcnZpY2VzL2F1dGgvYXV0aFNlcnZpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoUGFnZVN0YXRpYyhwcm9wcyl7XG4gICAgY29uc3Qge2xvYWRpbmcsIGVycm9yLCBkYXRhfSA9IHVzZVNlc3Npb24oKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT5BdXRoUGFnZVNTUjwvaDE+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocHJvcHMuc2Vzc2lvbiwgbnVsbCwgMilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiB1c2VTZXNzaW9uKCl7XG4gICAgY29uc3QgW3Nlc3Npb24sIHNldFNlc3Npb25dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBhdXRoU2VydmljZS5nZXRTZXNzaW9uKClcbiAgICAgICAgLnRoZW4oKHVzZXJTZXNzaW9uKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2codXNlclNlc3Npb24pXG4gICAgICAgICAgICBzZXRTZXNzaW9uKHVzZXJTZXNzaW9uKVxuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9KS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICB9LFtdKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIGVycm9yLFxuICAgICAgICBkYXRhOiBzZXNzaW9uXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXV0aFNlcnZpY2UiLCJBdXRoUGFnZVN0YXRpYyIsInByb3BzIiwidXNlU2Vzc2lvbiIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJoMSIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXNzaW9uIiwic2V0U2Vzc2lvbiIsInNldExvYWRpbmciLCJzZXRFcnJvciIsImdldFNlc3Npb24iLCJ0aGVuIiwidXNlclNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJhbGVydCIsIm1lc3NhZ2UiLCJmaW5hbGx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/AuthPageStatic.js\n");

/***/ })

});