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

/***/ "./src/services/auth/authService.js":
/*!******************************************!*\
  !*** ./src/services/auth/authService.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authService\": function() { return /* binding */ authService; }\n/* harmony export */ });\n/* harmony import */ var _home_vinicius_Documentos_GitHub_NextJS_Auth_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_vinicius_Documentos_GitHub_NextJS_Auth_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_vinicius_Documentos_GitHub_NextJS_Auth_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"../../../../node_modules/axios/index.js\");\n/* harmony import */ var _tokenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenService */ \"./src/services/auth/tokenService.js\");\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar baseURL = 'http://localhost:4000';\nvar authService = {\n    login: function login(param) {\n        var username = param.username, password = param.password;\n        return _asyncToGenerator(_home_vinicius_Documentos_GitHub_NextJS_Auth_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return _home_vinicius_Documentos_GitHub_NextJS_Auth_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        data = {\n                            username: username,\n                            password: password\n                        };\n                        return _ctx.abrupt(\"return\", axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"\".concat(baseURL, \"/api/login\"), data).then(function(res) {\n                            if (res.status === 200) {\n                                var body = res.data;\n                                _tokenService__WEBPACK_IMPORTED_MODULE_1__.tokenService.save(body.data.access_token);\n                            } else {\n                                throw new Error('Usu\\xe1rio ou senha inv\\xe1lidos');\n                            }\n                        }));\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))();\n    },\n    getSession: function getSession() {\n        var ctx = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;\n        return _asyncToGenerator(_home_vinicius_Documentos_GitHub_NextJS_Auth_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var token;\n            return _home_vinicius_Documentos_GitHub_NextJS_Auth_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        token = _tokenService__WEBPACK_IMPORTED_MODULE_1__.tokenService.get(ctx);\n                        if (!token) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(baseURL, \"/api/session\"), {\n                            method: 'GET',\n                            headers: {\n                                Authorization: \"Bearer \".concat(token)\n                            }\n                        }).then(function(response) {\n                            if (response.status === 200) {\n                                return response.data;\n                            } else {\n                                throw new Error('Falha na autentica\\xe7\\xe3o');\n                            }\n                        }));\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))();\n    },\n    logout: function logout() {\n        return _asyncToGenerator(_home_vinicius_Documentos_GitHub_NextJS_Auth_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_vinicius_Documentos_GitHub_NextJS_Auth_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _tokenService__WEBPACK_IMPORTED_MODULE_1__.tokenService.remove();\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))();\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXV0aC9hdXRoU2VydmljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxHQUFLLENBQUNFLE9BQU8sR0FBRyxDQUF1QjtBQUVoQyxHQUFLLENBQUNDLFdBQVcsR0FBRyxDQUFDO0lBQ2xCQyxLQUFLLEVBQVgsUUFBUSxDQUFGQSxLQUFLLENBQUUsS0FBb0I7WUFBbkJDLFFBQVEsR0FBVCxLQUFvQixDQUFuQkEsUUFBUSxFQUFFQyxRQUFRLEdBQW5CLEtBQW9CLENBQVRBLFFBQVE7a01BQUUsUUFDaEMsV0FEZ0MsQ0FBQztnQkFDekJDLElBQUk7Ozs7d0JBQUpBLElBQUksR0FBRyxDQUFDRjs0QkFBQUEsUUFBUSxFQUFSQSxRQUFROzRCQUFFQyxRQUFRLEVBQVJBLFFBQVE7d0JBQUEsQ0FBQztxREFDMUJOLGtEQUFVLENBQUUsR0FBVSxNQUFVLENBQWxCRSxPQUFPLEVBQUMsQ0FBVSxjQUFHSyxJQUFJLEVBQ3pDRSxJQUFJLENBQUMsUUFBUSxDQUFQQyxHQUFHLEVBQUssQ0FBQzs0QkFDWixFQUFFLEVBQUNBLEdBQUcsQ0FBQ0MsTUFBTSxLQUFLLEdBQUcsRUFBQyxDQUFDO2dDQUNuQixHQUFLLENBQUNDLElBQUksR0FBR0YsR0FBRyxDQUFDSCxJQUFJO2dDQUNyQk4sNERBQWlCLENBQUNXLElBQUksQ0FBQ0wsSUFBSSxDQUFDTyxZQUFZOzRCQUM1QyxDQUFDLE1BQU0sQ0FBQztnQ0FDSixLQUFLLENBQUMsR0FBRyxDQUFDQyxLQUFLLENBQUMsQ0FBNEI7NEJBQzlDLENBQUQ7d0JBQ0wsQ0FBQzs7Ozs7O1FBQ1QsQ0FBQzs7SUFDS0MsVUFBVSxFQUFoQixRQUFRLENBQUZBLFVBQVU7WUFBQ0MsR0FBRyxvRUFBRyxJQUFJO2tNQUFDLFFBQzFCLFdBRDBCLENBQUM7Z0JBQ25CQyxLQUFLOzs7O3dCQUFMQSxLQUFLLEdBQUdqQiwyREFBZ0IsQ0FBQ2dCLEdBQUc7NkJBQy9CQyxLQUFLOzs7O3FEQUNHbEIsaURBQVMsQ0FBRSxHQUFVLE1BQVksQ0FBcEJFLE9BQU8sRUFBQyxDQUFZLGdCQUFHLENBQUM7NEJBQ3hDa0IsTUFBTSxFQUFFLENBQUs7NEJBQ2JDLE9BQU8sRUFBRSxDQUFDO2dDQUNOQyxhQUFhLEVBQUcsQ0FBTyxTQUFRLE9BQU5KLEtBQUs7NEJBQ2xDLENBQUM7d0JBQ0wsQ0FBQyxFQUFFVCxJQUFJLENBQUMsUUFBUSxDQUFQYyxRQUFRLEVBQUssQ0FBQzs0QkFDbkIsRUFBRSxFQUFDQSxRQUFRLENBQUNaLE1BQU0sS0FBSyxHQUFHLEVBQUMsQ0FBQztnQ0FDeEIsTUFBTSxDQUFDWSxRQUFRLENBQUNoQixJQUFJOzRCQUN4QixDQUFDLE1BQUksQ0FBQztnQ0FDRixLQUFLLENBQUMsR0FBRyxDQUFDUSxLQUFLLENBQUMsQ0FBdUI7NEJBQzNDLENBQUM7d0JBQ0wsQ0FBQzs7Ozs7O1FBR1QsQ0FBQzs7SUFDS1MsTUFBTSxFQUFaLFFBQVEsQ0FBRkEsTUFBTTtrTUFBRSxRQUNaLFdBRFksQ0FBQzs7Ozt3QkFDWHZCLDhEQUFtQjs7Ozs7O1FBQ3ZCLENBQUM7O0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvYXV0aC9hdXRoU2VydmljZS5qcz8zYWY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHRva2VuU2VydmljZSB9IGZyb20gXCIuL3Rva2VuU2VydmljZVwiO1xuXG5jb25zdCBiYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCdcblxuZXhwb3J0IGNvbnN0IGF1dGhTZXJ2aWNlID0ge1xuICAgIGFzeW5jIGxvZ2luICh7dXNlcm5hbWUsIHBhc3N3b3JkfSl7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7dXNlcm5hbWUsIHBhc3N3b3JkfTtcbiAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7YmFzZVVSTH0vYXBpL2xvZ2luYCwgZGF0YSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2R5ID0gcmVzLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5TZXJ2aWNlLnNhdmUoYm9keS5kYXRhLmFjY2Vzc190b2tlbilcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzdcOhcmlvIG91IHNlbmhhIGludsOhbGlkb3MnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfSxcbiAgICBhc3luYyBnZXRTZXNzaW9uKGN0eCA9IG51bGwpe1xuICAgICAgICBjb25zdCB0b2tlbiA9IHRva2VuU2VydmljZS5nZXQoY3R4KVxuICAgICAgICBpZih0b2tlbil7XG4gICAgICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGAke2Jhc2VVUkx9L2FwaS9zZXNzaW9uYCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhbGhhIG5hIGF1dGVudGljYcOnw6NvJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0sXG4gICAgYXN5bmMgbG9nb3V0KCl7XG4gICAgICAgIHRva2VuU2VydmljZS5yZW1vdmUoKVxuICAgIH1cbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJ0b2tlblNlcnZpY2UiLCJiYXNlVVJMIiwiYXV0aFNlcnZpY2UiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJkYXRhIiwicG9zdCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJib2R5Iiwic2F2ZSIsImFjY2Vzc190b2tlbiIsIkVycm9yIiwiZ2V0U2Vzc2lvbiIsImN0eCIsInRva2VuIiwiZ2V0IiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImxvZ291dCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/auth/authService.js\n");

/***/ })

});