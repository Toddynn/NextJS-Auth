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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthPageStatic; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_services_auth_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/services/auth/authService */ \"./src/services/auth/authService.js\");\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nfunction AuthPageStatic(props) {\n    _s();\n    var ref = useSession(), loading = ref.loading, error = ref.error, data = ref.data;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"AuthPageSSR\"\n            }, void 0, false, {\n                fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/AuthPageStatic.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(props, null, 2)\n            }, void 0, false, {\n                fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/AuthPageStatic.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(AuthPageStatic, \"jlcbUc/6nKsTym9R8FY1QGCXQDw=\", false, function() {\n    return [\n        useSession\n    ];\n});\n_c = AuthPageStatic;\nfunction useSession() {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), session = ref[0], setSession = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), error = ref2[0], setError = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _src_services_auth_authService__WEBPACK_IMPORTED_MODULE_2__.authService.getSession().then(function(res) {\n            setSession(res.body);\n        }).catch(function(err) {\n            alert(err.message);\n        }).finally(function() {\n            setLoading(false);\n        });\n    }, []);\n    return {\n        loading: loading,\n        error: error,\n        data: session\n    };\n}\n_s1(useSession, \"BndDeahihZ4zenqMOCAvigXoXQs=\");\nvar _c;\n$RefreshReg$(_c, \"AuthPageStatic\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9BdXRoUGFnZVN0YXRpYy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBQ3FCOztBQUUvQyxRQUFRLENBQUNHLGNBQWMsQ0FBQ0MsS0FBSyxFQUFDLENBQUM7O0lBQzFDLEdBQUssQ0FBMEJDLEdBQVksR0FBWkEsVUFBVSxJQUFsQ0MsT0FBTyxHQUFpQkQsR0FBWSxDQUFwQ0MsT0FBTyxFQUFFQyxLQUFLLEdBQVVGLEdBQVksQ0FBM0JFLEtBQUssRUFBRUMsSUFBSSxHQUFJSCxHQUFZLENBQXBCRyxJQUFJO0lBRTNCLE1BQU0sNkVBQUM7O3dGQUVFQyxDQUFFOzBCQUFDLENBQVc7Ozs7Ozt3RkFDZEMsQ0FBRzswQkFFSUMsSUFBSSxDQUFDQyxTQUFTLENBQUNSLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7QUFLakQsQ0FBQztHQWJ1QkQsY0FBYzs7UUFDSEUsVUFBVTs7O0tBRHJCRixjQUFjO1NBZTdCRSxVQUFVLEdBQUUsQ0FBQzs7SUFDbEIsR0FBSyxDQUF5QkwsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBcENhLE9BQU8sR0FBZ0JiLEdBQWMsS0FBNUJjLFVBQVUsR0FBSWQsR0FBYztJQUM1QyxHQUFLLENBQXlCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFwQ00sT0FBTyxHQUFnQk4sSUFBYyxLQUE1QmUsVUFBVSxHQUFJZixJQUFjO0lBQzVDLEdBQUssQ0FBcUJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQWhDTyxLQUFLLEdBQWNQLElBQWMsS0FBMUJnQixRQUFRLEdBQUloQixJQUFjO0lBRXhDQyxnREFBUyxDQUFDLFFBQ1osR0FEZ0IsQ0FBQztRQUNYQyxrRkFBc0IsR0FDckJnQixJQUFJLENBQUMsUUFBUSxDQUFQQyxHQUFHLEVBQUcsQ0FBQztZQUNWTCxVQUFVLENBQUNLLEdBQUcsQ0FBQ0MsSUFBSTtRQUN2QixDQUFDLEVBQUVDLEtBQUssQ0FBQyxRQUFRLENBQVBDLEdBQUcsRUFBRyxDQUFDO1lBQ2JDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDRSxPQUFPO1FBQ3JCLENBQUMsRUFBRUMsT0FBTyxDQUFDLFFBQ2pCLEdBRHFCLENBQUM7WUFDWlYsVUFBVSxDQUFDLEtBQUs7UUFDcEIsQ0FBQztJQUNMLENBQUMsRUFBQyxDQUFDLENBQUM7SUFFSixNQUFNLENBQUMsQ0FBQztRQUNKVCxPQUFPLEVBQVBBLE9BQU87UUFDUEMsS0FBSyxFQUFMQSxLQUFLO1FBQ0xDLElBQUksRUFBRUssT0FBTztJQUNqQixDQUFDO0FBQ0wsQ0FBQztJQXJCUVIsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9BdXRoUGFnZVN0YXRpYy5qcz85Nzk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBhdXRoU2VydmljZSB9IGZyb20gJy4uL3NyYy9zZXJ2aWNlcy9hdXRoL2F1dGhTZXJ2aWNlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aFBhZ2VTdGF0aWMocHJvcHMpe1xuICAgIGNvbnN0IHtsb2FkaW5nLCBlcnJvciwgZGF0YX0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+QXV0aFBhZ2VTU1I8L2gxPlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHByb3BzLCBudWxsLCAyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIHVzZVNlc3Npb24oKXtcbiAgICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGF1dGhTZXJ2aWNlLmdldFNlc3Npb24oKVxuICAgICAgICAudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgc2V0U2Vzc2lvbihyZXMuYm9keSlcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSkuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgfSxbXSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkaW5nLFxuICAgICAgICBlcnJvcixcbiAgICAgICAgZGF0YTogc2Vzc2lvblxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF1dGhTZXJ2aWNlIiwiQXV0aFBhZ2VTdGF0aWMiLCJwcm9wcyIsInVzZVNlc3Npb24iLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiaDEiLCJwcmUiLCJKU09OIiwic3RyaW5naWZ5Iiwic2Vzc2lvbiIsInNldFNlc3Npb24iLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJnZXRTZXNzaW9uIiwidGhlbiIsInJlcyIsImJvZHkiLCJjYXRjaCIsImVyciIsImFsZXJ0IiwibWVzc2FnZSIsImZpbmFsbHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/AuthPageStatic.js\n");

/***/ })

});