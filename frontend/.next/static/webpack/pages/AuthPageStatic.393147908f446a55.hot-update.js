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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthPageStatic; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_services_auth_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/services/auth/authService */ \"./src/services/auth/authService.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction useSession() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), session = ref[0], setSession = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), error = ref2[0], setError = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _src_services_auth_authService__WEBPACK_IMPORTED_MODULE_2__.authService.getSession().then(function(userSession) {\n            setSession(userSession);\n        }).catch(function(err) {\n            setError(err);\n            alert(err.message);\n        }).finally(function() {\n            setLoading(false);\n        });\n    }, []);\n    return {\n        loading: loading,\n        error: error,\n        data: {\n            session: session\n        }\n    };\n}\n_s(useSession, \"BndDeahihZ4zenqMOCAvigXoXQs=\");\nfunction withSessionHOC(component) {\n    var _s1 = $RefreshSig$();\n    return _s1(function Wrapper() {\n        _s1();\n        var session = useSession();\n        var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n        if (session.error && !session.loading) {\n            router.push('/');\n        }\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Component, {}, void 0, false, {\n            fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/AuthPageStatic.js\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, this));\n    }, \"CFyt82WsygxLBSuQDqWmh+XY7Ew=\", false, function() {\n        return [\n            useSession,\n            next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n        ];\n    });\n}\nfunction AuthPageStatic() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"AuthPageSSR\"\n            }, void 0, false, {\n                fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/AuthPageStatic.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(session, null, 2)\n            }, void 0, false, {\n                fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/AuthPageStatic.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = AuthPageStatic;\nvar _c;\n$RefreshReg$(_c, \"AuthPageStatic\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9BdXRoUGFnZVN0YXRpYy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUM7QUFDcUI7QUFDdkI7QUFDTjs7U0FFeEJLLFVBQVUsR0FBRSxDQUFDOztJQUNsQixHQUFLLENBQXlCTCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFwQ00sT0FBTyxHQUFnQk4sR0FBYyxLQUE1Qk8sVUFBVSxHQUFJUCxHQUFjO0lBQzVDLEdBQUssQ0FBeUJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXBDUSxPQUFPLEdBQWdCUixJQUFjLEtBQTVCUyxVQUFVLEdBQUlULElBQWM7SUFDNUMsR0FBSyxDQUFxQkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBaENVLEtBQUssR0FBY1YsSUFBYyxLQUExQlcsUUFBUSxHQUFJWCxJQUFjO0lBRXhDQyxnREFBUyxDQUFDLFFBQ1osR0FEZ0IsQ0FBQztRQUNYQyxrRkFBc0IsR0FDckJXLElBQUksQ0FBQyxRQUFRLENBQVBDLFdBQVcsRUFBRyxDQUFDO1lBQ2xCUCxVQUFVLENBQUNPLFdBQVc7UUFDMUIsQ0FBQyxFQUNBQyxLQUFLLENBQUMsUUFBUSxDQUFQQyxHQUFHLEVBQUcsQ0FBQztZQUNYTCxRQUFRLENBQUNLLEdBQUc7WUFDWkMsS0FBSyxDQUFDRCxHQUFHLENBQUNFLE9BQU87UUFDckIsQ0FBQyxFQUNBQyxPQUFPLENBQUMsUUFDZixHQURtQixDQUFDO1lBQ1ZWLFVBQVUsQ0FBQyxLQUFLO1FBQ3BCLENBQUM7SUFDTCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRUosTUFBTSxDQUFDLENBQUM7UUFDSkQsT0FBTyxFQUFQQSxPQUFPO1FBQ1BFLEtBQUssRUFBTEEsS0FBSztRQUNMVSxJQUFJLEVBQUUsQ0FBQ2Q7WUFBQUEsT0FBTyxFQUFQQSxPQUFPO1FBQUEsQ0FBQztJQUNuQixDQUFDO0FBQ0wsQ0FBQztHQXhCUUQsVUFBVTtTQTBCVmdCLGNBQWMsQ0FBQ0MsU0FBUyxFQUFDLENBQUM7O0lBQy9CLE1BQU0sS0FBQyxRQUFRLENBQUNDLE9BQU8sR0FBRSxDQUFDOztRQUN0QixHQUFLLENBQUNqQixPQUFPLEdBQUdELFVBQVU7UUFFMUIsR0FBSyxDQUFDbUIsTUFBTSxHQUFHckIsc0RBQVM7UUFFeEIsRUFBRSxFQUFDRyxPQUFPLENBQUNJLEtBQUssS0FBS0osT0FBTyxDQUFDRSxPQUFPLEVBQUMsQ0FBQztZQUNsQ2dCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQUc7UUFDbkIsQ0FBQztRQUNELE1BQU0sNkVBQ0RyQiw0Q0FBUzs7Ozs7SUFFbEIsQ0FBQzs7WUFWbUJDLFVBQVU7WUFFWEYsa0RBQVM7OztBQVNoQyxDQUFDO0FBRWMsUUFBUSxDQUFDdUIsY0FBYyxHQUFFLENBQUM7SUFDckMsTUFBTSw2RUFBQzs7d0ZBRUVDLENBQUU7MEJBQUMsQ0FBVzs7Ozs7O3dGQUNkQyxDQUFHOzBCQUVJQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ3hCLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7QUFLbkQsQ0FBQztLQVh1Qm9CLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQXV0aFBhZ2VTdGF0aWMuanM/OTc5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zcmMvc2VydmljZXMvYXV0aC9hdXRoU2VydmljZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHVzZVNlc3Npb24oKXtcbiAgICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGF1dGhTZXJ2aWNlLmdldFNlc3Npb24oKVxuICAgICAgICAudGhlbigodXNlclNlc3Npb24pPT57XG4gICAgICAgICAgICBzZXRTZXNzaW9uKHVzZXJTZXNzaW9uKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICBzZXRFcnJvcihlcnIpO1xuICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgfSxbXSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkaW5nLFxuICAgICAgICBlcnJvcixcbiAgICAgICAgZGF0YToge3Nlc3Npb259XG4gICAgfVxufVxuXG5mdW5jdGlvbiB3aXRoU2Vzc2lvbkhPQyhjb21wb25lbnQpe1xuICAgIHJldHVybiBmdW5jdGlvbiBXcmFwcGVyKCl7XG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XG5cbiAgICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgICAgIFxuICAgICAgICBpZihzZXNzaW9uLmVycm9yICYmICFzZXNzaW9uLmxvYWRpbmcpe1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8Q29tcG9uZW50PjwvQ29tcG9uZW50PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoUGFnZVN0YXRpYygpe1xuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT5BdXRoUGFnZVNTUjwvaDE+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc2Vzc2lvbiwgbnVsbCwgMilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXV0aFNlcnZpY2UiLCJ1c2VSb3V0ZXIiLCJDb21wb25lbnQiLCJ1c2VTZXNzaW9uIiwic2Vzc2lvbiIsInNldFNlc3Npb24iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJnZXRTZXNzaW9uIiwidGhlbiIsInVzZXJTZXNzaW9uIiwiY2F0Y2giLCJlcnIiLCJhbGVydCIsIm1lc3NhZ2UiLCJmaW5hbGx5IiwiZGF0YSIsIndpdGhTZXNzaW9uSE9DIiwiY29tcG9uZW50IiwiV3JhcHBlciIsInJvdXRlciIsInB1c2giLCJBdXRoUGFnZVN0YXRpYyIsImgxIiwicHJlIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/AuthPageStatic.js\n");

/***/ })

});