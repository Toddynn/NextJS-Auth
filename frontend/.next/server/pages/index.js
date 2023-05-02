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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_services_auth_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/services/auth/authService */ \"./src/services/auth/authService.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_services_auth_authService__WEBPACK_IMPORTED_MODULE_2__]);\n_src_services_auth_authService__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction Login() {\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        _src_services_auth_authService__WEBPACK_IMPORTED_MODULE_2__.authService.login({\n            username: username,\n            password: password\n        }).then(()=>{\n            router.push('/AuthPageStatic');\n        }).catch((err)=>{\n            alert(err.message);\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"username\",\n                        children: \"Usu\\xe1rio\"\n                    }, void 0, false, {\n                        fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Digite seu usu\\xe1rio\",\n                        name: \"username\",\n                        id: \"username\",\n                        type: \"text\",\n                        onChange: (e)=>setUsername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        children: \"Senha\"\n                    }, void 0, false, {\n                        fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Digite sua senha\",\n                        name: \"password\",\n                        id: \"password\",\n                        type: \"password\",\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Entrar\"\n                        }, void 0, false, {\n                            fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/index.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vinicius/Documentos/GitHub/NextJS-Auth/frontend/pages/index.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this));\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDZ0M7QUFDdkI7QUFFeEIsUUFBUSxDQUFDRyxLQUFLLEdBQUcsQ0FBQztJQUMvQixLQUFLLE1BQUVDLFFBQVEsTUFBRUMsV0FBVyxNQUFJTCwrQ0FBUSxDQUFDLENBQUU7SUFDM0MsS0FBSyxNQUFFTSxRQUFRLE1BQUVDLFdBQVcsTUFBSVAsK0NBQVEsQ0FBQyxDQUFFO0lBRTNDLEtBQUssQ0FBQ1EsTUFBTSxHQUFHTixzREFBUztJQUV4QixLQUFLLENBQUNPLFlBQVksSUFBSUMsQ0FBQyxHQUFLLENBQUM7UUFDM0JBLENBQUMsQ0FBQ0MsY0FBYztRQUNoQlYsNkVBQ00sQ0FBQyxDQUFDO1lBQ05LLFFBQVEsRUFBRUEsUUFBUTtZQUNsQkYsUUFBUSxFQUFFQSxRQUFRO1FBQ3BCLENBQUMsRUFDQVMsSUFBSSxLQUFLLENBQUM7WUFDVEwsTUFBTSxDQUFDTSxJQUFJLENBQUMsQ0FBaUI7UUFDL0IsQ0FBQyxFQUNBQyxLQUFLLEVBQUVDLEdBQUcsR0FBRyxDQUFDO1lBQ2JDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDRSxPQUFPO1FBQ25CLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSw2RUFDSEMsQ0FBRzs7d0ZBQ0RDLENBQUU7MEJBQUMsQ0FBSzs7Ozs7O3dGQUNSQyxDQUFJO2dCQUFDQyxRQUFRLEVBQUViLFlBQVk7O2dHQUN6QmMsQ0FBSzt3QkFBQ0MsT0FBTyxFQUFDLENBQVU7a0NBQUMsQ0FBTzs7Ozs7O2dHQUMvQkMsQ0FBSTt3QkFBQ0MsV0FBVyxFQUFDLENBQW9CO3dCQUFDQyxJQUFJLEVBQUMsQ0FBVTt3QkFBQ0MsRUFBRSxFQUFDLENBQVU7d0JBQUNDLElBQUksRUFBQyxDQUFNO3dCQUFDQyxRQUFRLEdBQUdwQixDQUFDLEdBQUdILFdBQVcsQ0FBQ0csQ0FBQyxDQUFDcUIsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Z0dBQzFIVCxDQUFLO3dCQUFDQyxPQUFPLEVBQUMsQ0FBVTtrQ0FBQyxDQUFLOzs7Ozs7Z0dBQzlCQyxDQUFLO3dCQUFDQyxXQUFXLEVBQUMsQ0FBa0I7d0JBQUNDLElBQUksRUFBQyxDQUFVO3dCQUFDQyxFQUFFLEVBQUMsQ0FBVTt3QkFBQ0MsSUFBSSxFQUFDLENBQVU7d0JBQUNDLFFBQVEsR0FBR3BCLENBQUMsR0FBR0wsV0FBVyxDQUFDSyxDQUFDLENBQUNxQixNQUFNLENBQUNDLEtBQUs7Ozs7OztnR0FDNUhiLENBQUc7OEdBQ0RjLENBQU07c0NBQUMsQ0FFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3Vyc28wMy1uZXh0anMtZnJvbnQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc3JjL3NlcnZpY2VzL2F1dGgvYXV0aFNlcnZpY2UnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF1dGhTZXJ2aWNlXG4gICAgLmxvZ2luKHtcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgIH0pXG4gICAgLnRoZW4oKCk9PntcbiAgICAgIHJvdXRlci5wdXNoKCcvQXV0aFBhZ2VTdGF0aWMnKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKT0+e1xuICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xuICAgIH0pXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkxvZ2luPC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlcm5hbWUnPlVzdcOhcmlvPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiRGlnaXRlIHNldSB1c3XDoXJpb1wiIG5hbWU9XCJ1c2VybmFtZVwiIGlkPSd1c2VybmFtZScgdHlwZT0ndGV4dCcgb25DaGFuZ2U9eyhlKT0+c2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdwYXNzd29yZCc+U2VuaGE8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJEaWdpdGUgc3VhIHNlbmhhXCIgbmFtZT1cInBhc3N3b3JkXCIgaWQ9J3Bhc3N3b3JkJyB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17KGUpPT5zZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgRW50cmFyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXV0aFNlcnZpY2UiLCJ1c2VSb3V0ZXIiLCJMb2dpbiIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibG9naW4iLCJ0aGVuIiwicHVzaCIsImNhdGNoIiwiZXJyIiwiYWxlcnQiLCJtZXNzYWdlIiwiZGl2IiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwibmFtZSIsImlkIiwidHlwZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./src/services/auth/authService.js":
/*!******************************************!*\
  !*** ./src/services/auth/authService.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authService\": () => (/* binding */ authService)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _tokenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenService */ \"./src/services/auth/tokenService.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst baseURL = 'http://localhost:4000';\nconst authService = {\n    async login ({ username , password  }) {\n        const data = {\n            username,\n            password\n        };\n        return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`${baseURL}/api/login`, data).then((res)=>{\n            if (res.status === 200) {\n                const body = res.data;\n                _tokenService__WEBPACK_IMPORTED_MODULE_1__.tokenService.save(body.data.access_token);\n            } else {\n                throw new Error('Usu\\xe1rio ou senha inv\\xe1lidos');\n            }\n        });\n    },\n    async getSession (ctx = null) {\n        const token = _tokenService__WEBPACK_IMPORTED_MODULE_1__.tokenService.get(ctx);\n        if (token) {\n            return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`${baseURL}/api/session`, {\n                method: 'GET',\n                headers: {\n                    Authorization: `Bearer ${token}`\n                }\n            }).then((response)=>{\n                if (response.status === 200) {\n                    return response.data;\n                } else {\n                    throw new Error('Falha na autentica\\xe7\\xe3o');\n                }\n            });\n        }\n    },\n    async logout () {\n        _tokenService__WEBPACK_IMPORTED_MODULE_1__.tokenService.remove();\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXV0aC9hdXRoU2VydmljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDb0I7QUFFN0MsS0FBSyxDQUFDRSxPQUFPLEdBQUcsQ0FBdUI7QUFFaEMsS0FBSyxDQUFDQyxXQUFXLEdBQUcsQ0FBQztVQUNsQkMsS0FBSyxFQUFFLENBQUNDLENBQUFBLFFBQVEsR0FBRUMsUUFBUSxHQUFDLEVBQUMsQ0FBQztRQUMvQixLQUFLLENBQUNDLElBQUksR0FBRyxDQUFDRjtZQUFBQSxRQUFRO1lBQUVDLFFBQVE7UUFBQSxDQUFDO1FBQ2pDLE1BQU0sQ0FBQ04sa0RBQVUsSUFBSUUsT0FBTyxDQUFDLFVBQVUsR0FBR0ssSUFBSSxFQUN6Q0UsSUFBSSxFQUFFQyxHQUFHLEdBQUssQ0FBQztZQUNaLEVBQUUsRUFBQ0EsR0FBRyxDQUFDQyxNQUFNLEtBQUssR0FBRyxFQUFDLENBQUM7Z0JBQ25CLEtBQUssQ0FBQ0MsSUFBSSxHQUFHRixHQUFHLENBQUNILElBQUk7Z0JBQ3JCTiw0REFBaUIsQ0FBQ1csSUFBSSxDQUFDTCxJQUFJLENBQUNPLFlBQVk7WUFDNUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ0osS0FBSyxDQUFDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDLENBQTRCO1lBQzlDLENBQUQ7UUFDTCxDQUFDO0lBQ1QsQ0FBQztVQUNLQyxVQUFVLEVBQUNDLEdBQUcsR0FBRyxJQUFJLEVBQUMsQ0FBQztRQUN6QixLQUFLLENBQUNDLEtBQUssR0FBR2pCLDJEQUFnQixDQUFDZ0IsR0FBRztRQUNsQyxFQUFFLEVBQUNDLEtBQUssRUFBQyxDQUFDO1lBQ04sTUFBTSxDQUFDbEIsaURBQVMsSUFBSUUsT0FBTyxDQUFDLFlBQVksR0FBRyxDQUFDO2dCQUN4Q2tCLE1BQU0sRUFBRSxDQUFLO2dCQUNiQyxPQUFPLEVBQUUsQ0FBQztvQkFDTkMsYUFBYSxHQUFHLE9BQU8sRUFBRUosS0FBSztnQkFDbEMsQ0FBQztZQUNMLENBQUMsRUFBRVQsSUFBSSxFQUFFYyxRQUFRLEdBQUssQ0FBQztnQkFDbkIsRUFBRSxFQUFDQSxRQUFRLENBQUNaLE1BQU0sS0FBSyxHQUFHLEVBQUMsQ0FBQztvQkFDeEIsTUFBTSxDQUFDWSxRQUFRLENBQUNoQixJQUFJO2dCQUN4QixDQUFDLE1BQUksQ0FBQztvQkFDRixLQUFLLENBQUMsR0FBRyxDQUFDUSxLQUFLLENBQUMsQ0FBdUI7Z0JBQzNDLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztJQUVMLENBQUM7VUFDS1MsTUFBTSxJQUFFLENBQUM7UUFDWHZCLDhEQUFtQjtJQUN2QixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2N1cnNvMDMtbmV4dGpzLWZyb250Ly4vc3JjL3NlcnZpY2VzL2F1dGgvYXV0aFNlcnZpY2UuanM/M2FmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB0b2tlblNlcnZpY2UgfSBmcm9tIFwiLi90b2tlblNlcnZpY2VcIjtcblxuY29uc3QgYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnXG5cbmV4cG9ydCBjb25zdCBhdXRoU2VydmljZSA9IHtcbiAgICBhc3luYyBsb2dpbiAoe3VzZXJuYW1lLCBwYXNzd29yZH0pe1xuICAgICAgICBjb25zdCBkYXRhID0ge3VzZXJuYW1lLCBwYXNzd29yZH07XG4gICAgICAgIHJldHVybiBheGlvcy5wb3N0KGAke2Jhc2VVUkx9L2FwaS9sb2dpbmAsIGRhdGEpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9keSA9IHJlcy5kYXRhXG4gICAgICAgICAgICAgICAgICAgIHRva2VuU2VydmljZS5zYXZlKGJvZHkuZGF0YS5hY2Nlc3NfdG9rZW4pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc3XDoXJpbyBvdSBzZW5oYSBpbnbDoWxpZG9zJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH0sXG4gICAgYXN5bmMgZ2V0U2Vzc2lvbihjdHggPSBudWxsKXtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlblNlcnZpY2UuZ2V0KGN0eClcbiAgICAgICAgaWYodG9rZW4pe1xuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLmdldChgJHtiYXNlVVJMfS9hcGkvc2Vzc2lvbmAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWxoYSBuYSBhdXRlbnRpY2HDp8OjbycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9LFxuICAgIGFzeW5jIGxvZ291dCgpe1xuICAgICAgICB0b2tlblNlcnZpY2UucmVtb3ZlKClcbiAgICB9XG59Il0sIm5hbWVzIjpbImF4aW9zIiwidG9rZW5TZXJ2aWNlIiwiYmFzZVVSTCIsImF1dGhTZXJ2aWNlIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGF0YSIsInBvc3QiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiYm9keSIsInNhdmUiLCJhY2Nlc3NfdG9rZW4iLCJFcnJvciIsImdldFNlc3Npb24iLCJjdHgiLCJ0b2tlbiIsImdldCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJsb2dvdXQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/auth/authService.js\n");

/***/ }),

/***/ "./src/services/auth/tokenService.js":
/*!*******************************************!*\
  !*** ./src/services/auth/tokenService.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tokenService\": () => (/* binding */ tokenService)\n/* harmony export */ });\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';\nconst ONE_SECOND = 1;\nconst ONE_MINUTE = ONE_SECOND * 60;\nconst ONE_HOUR = ONE_MINUTE * 60;\nconst ONE_DAY = ONE_HOUR * 24;\nconst ONE_YEAR = ONE_DAY * 365;\nconst tokenService = {\n    save (access_token, ctx = null) {\n        var ref, ref1;\n        globalThis === null || globalThis === void 0 ? void 0 : (ref = globalThis.localStorage) === null || ref === void 0 ? void 0 : ref.setItem(ACCESS_TOKEN_KEY, access_token);\n        globalThis === null || globalThis === void 0 ? void 0 : (ref1 = globalThis.sessionStorage) === null || ref1 === void 0 ? void 0 : ref1.setItem(ACCESS_TOKEN_KEY, access_token);\n        nookies__WEBPACK_IMPORTED_MODULE_0___default().set(ctx, ACCESS_TOKEN_KEY, access_token, {\n            maxAge: ONE_YEAR,\n            path: '/'\n        });\n    },\n    get (ctx = null) {\n        const cookies = nookies__WEBPACK_IMPORTED_MODULE_0___default().get(ctx);\n        return cookies[ACCESS_TOKEN_KEY] || '';\n    //return globalThis?.localStorage?.getItem(ACCESS_TOKEN_KEY) || globalThis?.sessionStorage?.getItem(ACCESS_TOKEN_KEY)\n    },\n    delete () {\n        var ref, ref2;\n        globalThis === null || globalThis === void 0 ? void 0 : (ref = globalThis.localStorage) === null || ref === void 0 ? void 0 : ref.removeItem(ACCESS_TOKEN_KEY);\n        globalThis === null || globalThis === void 0 ? void 0 : (ref2 = globalThis.sessionStorage) === null || ref2 === void 0 ? void 0 : ref2.removeItem(ACCESS_TOKEN_KEY);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXV0aC90b2tlblNlcnZpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZCO0FBQzdCLEtBQUssQ0FBQ0MsZ0JBQWdCLEdBQUcsQ0FBa0I7QUFHM0MsS0FBSyxDQUFDQyxVQUFVLEdBQUcsQ0FBQztBQUNwQixLQUFLLENBQUNDLFVBQVUsR0FBR0QsVUFBVSxHQUFHLEVBQUU7QUFDbEMsS0FBSyxDQUFDRSxRQUFRLEdBQUdELFVBQVUsR0FBRyxFQUFFO0FBQ2hDLEtBQUssQ0FBQ0UsT0FBTyxHQUFHRCxRQUFRLEdBQUcsRUFBRTtBQUM3QixLQUFLLENBQUNFLFFBQVEsR0FBR0QsT0FBTyxHQUFHLEdBQUc7QUFFdkIsS0FBSyxDQUFDRSxZQUFZLEdBQUcsQ0FBQztJQUN6QkMsSUFBSSxFQUFDQyxZQUFZLEVBQUVDLEdBQUcsR0FBRyxJQUFJLEVBQUMsQ0FBQztZQUMzQkMsR0FBd0IsRUFDeEJBLElBQTBCO1FBRDFCQSxVQUFVLGFBQVZBLFVBQVUsS0FBVkEsSUFBSSxDQUFKQSxDQUF3QixHQUF4QkEsSUFBSSxDQUFKQSxDQUF3QixJQUF4QkEsR0FBd0IsR0FBeEJBLFVBQVUsQ0FBRUMsWUFBWSxjQUF4QkQsR0FBd0IsS0FBeEJBLElBQUksQ0FBSkEsQ0FBd0IsR0FBeEJBLElBQUksQ0FBSkEsQ0FBd0IsR0FBeEJBLEdBQXdCLENBQUVFLE9BQU8sQ0FBQ1osZ0JBQWdCLEVBQUVRLFlBQVk7UUFDaEVFLFVBQVUsYUFBVkEsVUFBVSxLQUFWQSxJQUFJLENBQUpBLENBQTBCLEdBQTFCQSxJQUFJLENBQUpBLENBQTBCLElBQTFCQSxJQUEwQixHQUExQkEsVUFBVSxDQUFFRyxjQUFjLGNBQTFCSCxJQUEwQixLQUExQkEsSUFBSSxDQUFKQSxDQUEwQixHQUExQkEsSUFBSSxDQUFKQSxDQUEwQixHQUExQkEsSUFBMEIsQ0FBRUUsT0FBTyxDQUFDWixnQkFBZ0IsRUFBRVEsWUFBWTtRQUNsRVQsa0RBQVcsQ0FBQ1UsR0FBRyxFQUFFVCxnQkFBZ0IsRUFBRVEsWUFBWSxFQUFFLENBQUM7WUFDOUNPLE1BQU0sRUFBRVYsUUFBUTtZQUNoQlcsSUFBSSxFQUFFLENBQUc7UUFDYixDQUFDO0lBQ0wsQ0FBQztJQUNEQyxHQUFHLEVBQUNSLEdBQUcsR0FBRyxJQUFJLEVBQUMsQ0FBQztRQUNaLEtBQUssQ0FBQ1MsT0FBTyxHQUFHbkIsa0RBQVcsQ0FBQ1UsR0FBRztRQUMvQixNQUFNLENBQUNTLE9BQU8sQ0FBQ2xCLGdCQUFnQixLQUFLLENBQUU7SUFDdEMsRUFBcUg7SUFDekgsQ0FBQztJQUNEbUIsTUFBTSxJQUFFLENBQUM7WUFDTFQsR0FBd0IsRUFDeEJBLElBQTBCO1FBRDFCQSxVQUFVLGFBQVZBLFVBQVUsS0FBVkEsSUFBSSxDQUFKQSxDQUF3QixHQUF4QkEsSUFBSSxDQUFKQSxDQUF3QixJQUF4QkEsR0FBd0IsR0FBeEJBLFVBQVUsQ0FBRUMsWUFBWSxjQUF4QkQsR0FBd0IsS0FBeEJBLElBQUksQ0FBSkEsQ0FBd0IsR0FBeEJBLElBQUksQ0FBSkEsQ0FBd0IsR0FBeEJBLEdBQXdCLENBQUVVLFVBQVUsQ0FBQ3BCLGdCQUFnQjtRQUNyRFUsVUFBVSxhQUFWQSxVQUFVLEtBQVZBLElBQUksQ0FBSkEsQ0FBMEIsR0FBMUJBLElBQUksQ0FBSkEsQ0FBMEIsSUFBMUJBLElBQTBCLEdBQTFCQSxVQUFVLENBQUVHLGNBQWMsY0FBMUJILElBQTBCLEtBQTFCQSxJQUFJLENBQUpBLENBQTBCLEdBQTFCQSxJQUFJLENBQUpBLENBQTBCLEdBQTFCQSxJQUEwQixDQUFFVSxVQUFVLENBQUNwQixnQkFBZ0I7SUFDM0QsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdXJzbzAzLW5leHRqcy1mcm9udC8uL3NyYy9zZXJ2aWNlcy9hdXRoL3Rva2VuU2VydmljZS5qcz9hYzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub29raWVzIGZyb20gJ25vb2tpZXMnO1xuY29uc3QgQUNDRVNTX1RPS0VOX0tFWSA9ICdBQ0NFU1NfVE9LRU5fS0VZJ1xuXG5cbmNvbnN0IE9ORV9TRUNPTkQgPSAxO1xuY29uc3QgT05FX01JTlVURSA9IE9ORV9TRUNPTkQgKiA2MDtcbmNvbnN0IE9ORV9IT1VSID0gT05FX01JTlVURSAqIDYwO1xuY29uc3QgT05FX0RBWSA9IE9ORV9IT1VSICogMjQ7XG5jb25zdCBPTkVfWUVBUiA9IE9ORV9EQVkgKiAzNjU7XG5cbmV4cG9ydCBjb25zdCB0b2tlblNlcnZpY2UgPSB7XG4gICAgc2F2ZShhY2Nlc3NfdG9rZW4sIGN0eCA9IG51bGwpe1xuICAgICAgICBnbG9iYWxUaGlzPy5sb2NhbFN0b3JhZ2U/LnNldEl0ZW0oQUNDRVNTX1RPS0VOX0tFWSwgYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgZ2xvYmFsVGhpcz8uc2Vzc2lvblN0b3JhZ2U/LnNldEl0ZW0oQUNDRVNTX1RPS0VOX0tFWSwgYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgbm9va2llcy5zZXQoY3R4LCBBQ0NFU1NfVE9LRU5fS0VZLCBhY2Nlc3NfdG9rZW4sIHtcbiAgICAgICAgICAgIG1heEFnZTogT05FX1lFQVIsXG4gICAgICAgICAgICBwYXRoOiAnLydcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXQoY3R4ID0gbnVsbCl7XG4gICAgICAgIGNvbnN0IGNvb2tpZXMgPSBub29raWVzLmdldChjdHgpO1xuICAgICAgICByZXR1cm4gY29va2llc1tBQ0NFU1NfVE9LRU5fS0VZXSB8fCAnJztcbiAgICAgICAgLy9yZXR1cm4gZ2xvYmFsVGhpcz8ubG9jYWxTdG9yYWdlPy5nZXRJdGVtKEFDQ0VTU19UT0tFTl9LRVkpIHx8IGdsb2JhbFRoaXM/LnNlc3Npb25TdG9yYWdlPy5nZXRJdGVtKEFDQ0VTU19UT0tFTl9LRVkpXG4gICAgfSxcbiAgICBkZWxldGUoKXtcbiAgICAgICAgZ2xvYmFsVGhpcz8ubG9jYWxTdG9yYWdlPy5yZW1vdmVJdGVtKEFDQ0VTU19UT0tFTl9LRVkpO1xuICAgICAgICBnbG9iYWxUaGlzPy5zZXNzaW9uU3RvcmFnZT8ucmVtb3ZlSXRlbShBQ0NFU1NfVE9LRU5fS0VZKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIm5vb2tpZXMiLCJBQ0NFU1NfVE9LRU5fS0VZIiwiT05FX1NFQ09ORCIsIk9ORV9NSU5VVEUiLCJPTkVfSE9VUiIsIk9ORV9EQVkiLCJPTkVfWUVBUiIsInRva2VuU2VydmljZSIsInNhdmUiLCJhY2Nlc3NfdG9rZW4iLCJjdHgiLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNlc3Npb25TdG9yYWdlIiwic2V0IiwibWF4QWdlIiwicGF0aCIsImdldCIsImNvb2tpZXMiLCJkZWxldGUiLCJyZW1vdmVJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/auth/tokenService.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();