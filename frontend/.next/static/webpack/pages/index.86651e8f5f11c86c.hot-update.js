"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_services_auth_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/services/auth/authService */ \"./src/services/auth/authService.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Login() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), password = ref[0], setPassword = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), username = ref1[0], setUsername = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        _src_services_auth_authService__WEBPACK_IMPORTED_MODULE_2__.authService.login({\n            username: username,\n            password: password\n        }).then(function() {\n            router.push('/AuthPageStatic');\n        }).catch(function(err) {\n            alert(err.message);\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"username\",\n                        children: \"Usu\\xe1rio\"\n                    }, void 0, false, {\n                        fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Digite seu usu\\xe1rio\",\n                        name: \"username\",\n                        id: \"username\",\n                        type: \"text\",\n                        onChange: function(e) {\n                            return setUsername(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        children: \"Senha\"\n                    }, void 0, false, {\n                        fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Digite sua senha\",\n                        name: \"password\",\n                        id: \"password\",\n                        type: \"password\",\n                        onChange: function(e) {\n                            return setPassword(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Entrar\"\n                        }, void 0, false, {\n                            fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/index.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/index.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this));\n};\n_s(Login, \"keIcopZUMvmEQNgz2FG1jphesYY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEI7QUFDZ0M7QUFDdkI7O0FBRXhCLFFBQVEsQ0FBQ0csS0FBSyxHQUFHLENBQUM7O0lBQy9CLEdBQUssQ0FBMkJILEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQXBDSSxRQUFRLEdBQWlCSixHQUFZLEtBQTNCSyxXQUFXLEdBQUlMLEdBQVk7SUFDNUMsR0FBSyxDQUEyQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBcENNLFFBQVEsR0FBaUJOLElBQVksS0FBM0JPLFdBQVcsR0FBSVAsSUFBWTtJQUU1QyxHQUFLLENBQUNRLE1BQU0sR0FBR04sc0RBQVM7SUFFeEIsR0FBSyxDQUFDTyxZQUFZLEdBQUcsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztRQUMzQkEsQ0FBQyxDQUFDQyxjQUFjO1FBQ2hCViw2RUFDTSxDQUFDLENBQUM7WUFDTkssUUFBUSxFQUFFQSxRQUFRO1lBQ2xCRixRQUFRLEVBQUVBLFFBQVE7UUFDcEIsQ0FBQyxFQUNBUyxJQUFJLENBQUMsUUFDUixHQURZLENBQUM7WUFDVEwsTUFBTSxDQUFDTSxJQUFJLENBQUMsQ0FBaUI7UUFDL0IsQ0FBQyxFQUNBQyxLQUFLLENBQUMsUUFBUSxDQUFQQyxHQUFHLEVBQUcsQ0FBQztZQUNiQyxLQUFLLENBQUNELEdBQUcsQ0FBQ0UsT0FBTztRQUNuQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sNkVBQ0hDLENBQUc7O3dGQUNEQyxDQUFFOzBCQUFDLENBQUs7Ozs7Ozt3RkFDUkMsQ0FBSTtnQkFBQ0MsUUFBUSxFQUFFYixZQUFZOztnR0FDekJjLENBQUs7d0JBQUNDLE9BQU8sRUFBQyxDQUFVO2tDQUFDLENBQU87Ozs7OztnR0FDL0JDLENBQUk7d0JBQUNDLFdBQVcsRUFBQyxDQUFvQjt3QkFBQ0MsSUFBSSxFQUFDLENBQVU7d0JBQUNDLEVBQUUsRUFBQyxDQUFVO3dCQUFDQyxJQUFJLEVBQUMsQ0FBTTt3QkFBQ0MsUUFBUSxFQUFFLFFBQVEsQ0FBUHBCLENBQUM7NEJBQUdILE1BQU0sQ0FBTkEsV0FBVyxDQUFDRyxDQUFDLENBQUNxQixNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Z0dBQzFIVCxDQUFLO3dCQUFDQyxPQUFPLEVBQUMsQ0FBVTtrQ0FBQyxDQUFLOzs7Ozs7Z0dBQzlCQyxDQUFLO3dCQUFDQyxXQUFXLEVBQUMsQ0FBa0I7d0JBQUNDLElBQUksRUFBQyxDQUFVO3dCQUFDQyxFQUFFLEVBQUMsQ0FBVTt3QkFBQ0MsSUFBSSxFQUFDLENBQVU7d0JBQUNDLFFBQVEsRUFBRSxRQUFRLENBQVBwQixDQUFDOzRCQUFHTCxNQUFNLENBQU5BLFdBQVcsQ0FBQ0ssQ0FBQyxDQUFDcUIsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7O2dHQUM1SGIsQ0FBRzs4R0FDRGMsQ0FBTTtzQ0FBQyxDQUVSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtWLENBQUM7R0FyQ3VCOUIsS0FBSzs7UUFJWkQsa0RBQVM7OztLQUpGQyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zcmMvc2VydmljZXMvYXV0aC9hdXRoU2VydmljZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXV0aFNlcnZpY2VcbiAgICAubG9naW4oe1xuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgfSlcbiAgICAudGhlbigoKT0+e1xuICAgICAgcm91dGVyLnB1c2goJy9BdXRoUGFnZVN0YXRpYycpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpPT57XG4gICAgICBhbGVydChlcnIubWVzc2FnZSk7XG4gICAgfSlcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+TG9naW48L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VybmFtZSc+VXN1w6FyaW88L2xhYmVsPlxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJEaWdpdGUgc2V1IHVzdcOhcmlvXCIgbmFtZT1cInVzZXJuYW1lXCIgaWQ9J3VzZXJuYW1lJyB0eXBlPSd0ZXh0JyBvbkNoYW5nZT17KGUpPT5zZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3Bhc3N3b3JkJz5TZW5oYTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBzdWEgc2VuaGFcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD0ncGFzc3dvcmQnIHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXsoZSk9PnNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICBFbnRyYXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJhdXRoU2VydmljZSIsInVzZVJvdXRlciIsIkxvZ2luIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJsb2dpbiIsInRoZW4iLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJhbGVydCIsIm1lc3NhZ2UiLCJkaXYiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJuYW1lIiwiaWQiLCJ0eXBlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});