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
exports.id = "pages/api/refresh";
exports.ids = ["pages/api/refresh"];
exports.modules = {

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ "(api)/./pages/api/refresh.js":
/*!******************************!*\
  !*** ./pages/api/refresh.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_infra_HttpClient_HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/infra/HttpClient/HttpClient */ \"(api)/./src/infra/HttpClient/HttpClient.js\");\n/* harmony import */ var _src_services_auth_tokenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/services/auth/tokenService */ \"(api)/./src/services/auth/tokenService.js\");\n\n\n\nconst baseURL_BACK_END = 'http://localhost:4000';\nconst baseURL_FRONT_END = 'http://localhost:3000';\nconst REFRESH_TOKEN_KEY = 'REFRESH_TOKEN_KEY';\nconst controllers = {\n    async storeRefreshToken (req, res) {\n        const ctx = {\n            req,\n            res\n        };\n        nookies__WEBPACK_IMPORTED_MODULE_0___default().set(ctx, REFRESH_TOKEN_KEY, req.body.refresh_token, {\n            httpOnly: true,\n            sameSite: 'lax',\n            path: '/'\n        });\n        res.json({\n            data: {\n                message: 'Stored with success'\n            }\n        });\n    },\n    async displayCookies (req, res) {\n        const ctx = {\n            req,\n            res\n        };\n        res.json({\n            data: {\n                cookies: nookies__WEBPACK_IMPORTED_MODULE_0___default().get(ctx)\n            }\n        });\n    },\n    async regenerateTokens (req, res) {\n        const ctx = {\n            req,\n            res\n        };\n        const cookies = nookies__WEBPACK_IMPORTED_MODULE_0___default().get(ctx);\n        const refresh_token = cookies[REFRESH_TOKEN_KEY] || req.body.refresh_token;\n        const refreshResponse = await (0,_src_infra_HttpClient_HttpClient__WEBPACK_IMPORTED_MODULE_1__.HttpClient)(`${baseURL_BACK_END}/api/refresh`, {\n            method: 'POST',\n            body: {\n                refresh_token\n            }\n        });\n        if (!refreshResponse.ok) {\n            res.json({\n                status: 401,\n                message: 'N\\xe3o autorizado'\n            });\n        } else {\n            const body = refreshResponse.body;\n            nookies__WEBPACK_IMPORTED_MODULE_0___default().set(ctx, REFRESH_TOKEN_KEY, body.data.refresh_token, {\n                httpOnly: true,\n                sameSite: 'lax',\n                path: '/'\n            });\n            _src_services_auth_tokenService__WEBPACK_IMPORTED_MODULE_2__.tokenService.save(body.data.access_token, ctx);\n            res.json({\n                status: 200,\n                message: 'Token regenerado com sucesso',\n                body: body.data\n            });\n        }\n    }\n};\nconst controllerBy = {\n    POST: controllers.storeRefreshToken,\n    GET: controllers.regenerateTokens,\n    PUT: controllers.regenerateTokens,\n    DELETE: (req, res)=>{\n        const ctx = {\n            req,\n            res\n        };\n        nookies__WEBPACK_IMPORTED_MODULE_0___default().destroy(ctx, REFRESH_TOKEN_KEY, {\n            httpOnly: true,\n            sameSite: 'lax',\n            path: '/'\n        });\n        res.json({\n            data: {\n                status: 200,\n                message: 'Token deleted successfully'\n            }\n        });\n    }\n};\nfunction handler(request, response) {\n    if (controllerBy[request.method]) {\n        const requestMethod = request.method;\n        return controllerBy[requestMethod](request, response);\n    } else {\n        response.status(404).json({\n            status: 404,\n            message: 'Not found'\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy9hcGkvcmVmcmVzaC5qcz9kZWE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub29raWVzIGZyb20gJ25vb2tpZXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJy4uLy4uL3NyYy9pbmZyYS9IdHRwQ2xpZW50L0h0dHBDbGllbnQnO1xuaW1wb3J0IHsgdG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc3JjL3NlcnZpY2VzL2F1dGgvdG9rZW5TZXJ2aWNlJztcblxuY29uc3QgYmFzZVVSTF9CQUNLX0VORCA9ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnO1xuY29uc3QgYmFzZVVSTF9GUk9OVF9FTkQgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcbmNvbnN0IFJFRlJFU0hfVE9LRU5fS0VZID0gJ1JFRlJFU0hfVE9LRU5fS0VZJztcblxuY29uc3QgY29udHJvbGxlcnMgPSB7XG4gICAgYXN5bmMgc3RvcmVSZWZyZXNoVG9rZW4ocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3QgY3R4ID0geyByZXEsIHJlcyB9OyBcbiAgICAgICAgbm9va2llcy5zZXQoY3R4LCBSRUZSRVNIX1RPS0VOX0tFWSwgcmVxLmJvZHkucmVmcmVzaF90b2tlbiwge1xuICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgICBzYW1lU2l0ZTogJ2xheCcsXG4gICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTdG9yZWQgd2l0aCBzdWNjZXNzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgYXN5bmMgZGlzcGxheUNvb2tpZXMocmVxLCByZXMpe1xuICAgICAgICBjb25zdCBjdHggPSB7IHJlcSwgcmVzIH07XG5cbiAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgZGF0YTp7XG4gICAgICAgICAgICAgICAgY29va2llczogbm9va2llcy5nZXQoY3R4KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgYXN5bmMgcmVnZW5lcmF0ZVRva2VucyhyZXEsIHJlcyl7XG4gICAgICAgIGNvbnN0IGN0eCA9IHsgcmVxLCByZXMgfTtcbiAgICAgICAgY29uc3QgY29va2llcyA9IG5vb2tpZXMuZ2V0KGN0eCk7XG4gICAgICAgIGNvbnN0IHJlZnJlc2hfdG9rZW4gPSBjb29raWVzW1JFRlJFU0hfVE9LRU5fS0VZXSB8fCByZXEuYm9keS5yZWZyZXNoX3Rva2VuO1xuXG4gICAgICAgIGNvbnN0IHJlZnJlc2hSZXNwb25zZSA9IGF3YWl0IEh0dHBDbGllbnQoYCR7YmFzZVVSTF9CQUNLX0VORH0vYXBpL3JlZnJlc2hgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IHsgcmVmcmVzaF90b2tlbiB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgXG4gICAgICAgIGlmKCFyZWZyZXNoUmVzcG9uc2Uub2spe1xuICAgICAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgICAgIHN0YXR1czogNDAxLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdOw6NvIGF1dG9yaXphZG8nLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zdCBib2R5ID0gcmVmcmVzaFJlc3BvbnNlLmJvZHlcbiAgICAgICAgICAgIG5vb2tpZXMuc2V0KGN0eCwgUkVGUkVTSF9UT0tFTl9LRVksIGJvZHkuZGF0YS5yZWZyZXNoX3Rva2VuLCB7XG4gICAgICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgICAgICAgc2FtZVNpdGU6ICdsYXgnLFxuICAgICAgICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0b2tlblNlcnZpY2Uuc2F2ZShib2R5LmRhdGEuYWNjZXNzX3Rva2VuLCBjdHgpO1xuICAgICAgICBcbiAgICAgICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVG9rZW4gcmVnZW5lcmFkbyBjb20gc3VjZXNzbycsXG4gICAgICAgICAgICAgICAgYm9keTogYm9keS5kYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufSBcblxuY29uc3QgY29udHJvbGxlckJ5ID0ge1xuICAgIFBPU1Q6IGNvbnRyb2xsZXJzLnN0b3JlUmVmcmVzaFRva2VuLFxuICAgIEdFVDogY29udHJvbGxlcnMucmVnZW5lcmF0ZVRva2VucyxcbiAgICBQVVQ6IGNvbnRyb2xsZXJzLnJlZ2VuZXJhdGVUb2tlbnMsXG4gICAgREVMRVRFOiAocmVxLHJlcyk9PntcbiAgICAgICAgY29uc3QgY3R4ID0ge3JlcSwgcmVzfTtcbiAgICAgICAgbm9va2llcy5kZXN0cm95KGN0eCwgUkVGUkVTSF9UT0tFTl9LRVksIHtcbiAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICAgICAgc2FtZVNpdGU6ICdsYXgnLFxuICAgICAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICB9KVxuXG4gICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUb2tlbiBkZWxldGVkIHN1Y2Nlc3NmdWxseSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxdWVzdCwgcmVzcG9uc2Upe1xuICAgIGlmKGNvbnRyb2xsZXJCeVtyZXF1ZXN0Lm1ldGhvZF0pe1xuICAgICAgICBjb25zdCByZXF1ZXN0TWV0aG9kID0gcmVxdWVzdC5tZXRob2Q7XG4gICAgICAgIHJldHVybiBjb250cm9sbGVyQnlbcmVxdWVzdE1ldGhvZF0ocmVxdWVzdCwgcmVzcG9uc2UpO1xuICAgIH1lbHNle1xuICAgICAgICByZXNwb25zZS5zdGF0dXMoNDA0KS5qc29uKHtcbiAgICAgICAgICAgIHN0YXR1czogNDA0LFxuICAgICAgICAgICAgbWVzc2FnZTogJ05vdCBmb3VuZCdcbiAgICAgICAgfSlcbiAgICB9XG59Il0sIm5hbWVzIjpbIm5vb2tpZXMiLCJIdHRwQ2xpZW50IiwidG9rZW5TZXJ2aWNlIiwiYmFzZVVSTF9CQUNLX0VORCIsImJhc2VVUkxfRlJPTlRfRU5EIiwiUkVGUkVTSF9UT0tFTl9LRVkiLCJjb250cm9sbGVycyIsInN0b3JlUmVmcmVzaFRva2VuIiwicmVxIiwicmVzIiwiY3R4Iiwic2V0IiwiYm9keSIsInJlZnJlc2hfdG9rZW4iLCJodHRwT25seSIsInNhbWVTaXRlIiwicGF0aCIsImpzb24iLCJkYXRhIiwibWVzc2FnZSIsImRpc3BsYXlDb29raWVzIiwiY29va2llcyIsImdldCIsInJlZ2VuZXJhdGVUb2tlbnMiLCJyZWZyZXNoUmVzcG9uc2UiLCJtZXRob2QiLCJvayIsInN0YXR1cyIsInNhdmUiLCJhY2Nlc3NfdG9rZW4iLCJjb250cm9sbGVyQnkiLCJQT1NUIiwiR0VUIiwiUFVUIiwiREVMRVRFIiwiZGVzdHJveSIsImhhbmRsZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJyZXF1ZXN0TWV0aG9kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/refresh.js\n");

/***/ }),

/***/ "(api)/./src/infra/HttpClient/HttpClient.js":
/*!********************************************!*\
  !*** ./src/infra/HttpClient/HttpClient.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HttpClient\": () => (/* binding */ HttpClient)\n/* harmony export */ });\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_auth_tokenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth/tokenService */ \"(api)/./src/services/auth/tokenService.js\");\n\n\nconst REFRESH_TOKEN_KEY = 'REFRESH_TOKEN_KEY';\nasync function HttpClient(fetchUrl, fetchOptions = {}) {\n    const defaultHeaders = fetchOptions.headers || {};\n    const options = {\n        ...fetchOptions,\n        headers: {\n            'Content-Type': 'application/json',\n            ...defaultHeaders\n        },\n        body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null\n    };\n    return fetch(fetchUrl, options).then(async (respostaDoServidor)=>{\n        return {\n            ok: respostaDoServidor.ok,\n            status: respostaDoServidor.status,\n            statusText: respostaDoServidor.statusText,\n            body: await respostaDoServidor.json()\n        };\n    }).then(async (response)=>{\n        var ref, ref1;\n        if (!fetchOptions.refresh) return response;\n        if (response.status !== 401) return response;\n        console.log('Middleware: Rodar c\\xf3digo para atualizar o token');\n        const isServer = Boolean(fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.ctx);\n        const currentRefreshToken = fetchOptions === null || fetchOptions === void 0 ? void 0 : (ref = fetchOptions.ctx) === null || ref === void 0 ? void 0 : (ref1 = ref.req) === null || ref1 === void 0 ? void 0 : ref1.cookies[REFRESH_TOKEN_KEY];\n        try {\n            // [Tentar atualizar os tokens]\n            const refreshResponse = await HttpClient('http://localhost:3000/api/refresh', {\n                method: isServer ? 'PUT' : 'GET',\n                body: isServer ? {\n                    refresh_token: currentRefreshToken\n                } : undefined\n            });\n            const refreshBody = refreshResponse.body;\n            const newAccessToken = refreshBody.data.access_token;\n            const newRefreshToken = refreshBody.data.refresh_token;\n            // [Guarda os Tokens]\n            if (isServer) {\n                nookies__WEBPACK_IMPORTED_MODULE_0___default().set(fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.ctx, REFRESH_TOKEN_KEY, newRefreshToken, {\n                    httpOnly: true,\n                    sameSite: 'lax',\n                    path: '/'\n                });\n            }\n            _services_auth_tokenService__WEBPACK_IMPORTED_MODULE_1__.tokenService.save(newAccessToken);\n            // [Tentar rodar o request anterior]\n            const retryResponse = await HttpClient(fetchUrl, {\n                ...options,\n                refresh: false,\n                headers: {\n                    'Authorization': `Bearer ${newAccessToken}`\n                }\n            });\n            // console.log('retryResponse', retryResponse);\n            return retryResponse;\n        } catch (err) {\n            console.error(err);\n            return response;\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvaW5mcmEvSHR0cENsaWVudC9IdHRwQ2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkI7QUFDa0M7QUFFL0QsS0FBSyxDQUFDRSxpQkFBaUIsR0FBRyxDQUFtQjtBQUV0QyxlQUFlQyxVQUFVLENBQUNDLFFBQVEsRUFBRUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0QsS0FBSyxDQUFDQyxjQUFjLEdBQUdELFlBQVksQ0FBQ0UsT0FBTyxJQUFJLENBQUMsQ0FBQztJQUNqRCxLQUFLLENBQUNDLE9BQU8sR0FBRyxDQUFDO1dBQ1ZILFlBQVk7UUFDZkUsT0FBTyxFQUFFLENBQUM7WUFDTixDQUFjLGVBQUUsQ0FBa0I7ZUFDL0JELGNBQWM7UUFDckIsQ0FBQztRQUNERyxJQUFJLEVBQUVKLFlBQVksQ0FBQ0ksSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sWUFBWSxDQUFDSSxJQUFJLElBQUksSUFBSTtJQUN0RSxDQUFDO0lBQ0QsTUFBTSxDQUFDRyxLQUFLLENBQUNSLFFBQVEsRUFBRUksT0FBTyxFQUN6QkssSUFBSSxRQUFRQyxrQkFBa0IsR0FBSyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxDQUFDO1lBQ0pDLEVBQUUsRUFBRUQsa0JBQWtCLENBQUNDLEVBQUU7WUFDekJDLE1BQU0sRUFBRUYsa0JBQWtCLENBQUNFLE1BQU07WUFDakNDLFVBQVUsRUFBRUgsa0JBQWtCLENBQUNHLFVBQVU7WUFDekNSLElBQUksRUFBRSxLQUFLLENBQUNLLGtCQUFrQixDQUFDSSxJQUFJO1FBQ3ZDLENBQUM7SUFDTCxDQUFDLEVBQ0FMLElBQUksUUFBUU0sUUFBUSxHQUFLLENBQUM7WUFNS2QsR0FBaUI7UUFMN0MsRUFBRSxHQUFFQSxZQUFZLENBQUNlLE9BQU8sRUFBRSxNQUFNLENBQUNELFFBQVE7UUFDekMsRUFBRSxFQUFDQSxRQUFRLENBQUNILE1BQU0sS0FBSyxHQUFHLEVBQUUsTUFBTSxDQUFDRyxRQUFRO1FBQzNDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFpRDtRQUU3RCxLQUFLLENBQUNDLFFBQVEsR0FBR0MsT0FBTyxDQUFDbkIsWUFBWSxhQUFaQSxZQUFZLEtBQVpBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLFlBQVksQ0FBRW9CLEdBQUc7UUFDMUMsS0FBSyxDQUFDQyxtQkFBbUIsR0FBR3JCLFlBQVksYUFBWkEsWUFBWSxLQUFaQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLElBQWpCQSxHQUFpQixHQUFqQkEsWUFBWSxDQUFFb0IsR0FBRyxjQUFqQnBCLEdBQWlCLEtBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLFdBQWpCQSxHQUFpQixDQUFFc0IsR0FBRyx1QkFBdEJ0QixJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLFFBQU91QixPQUFPLENBQUMxQixpQkFBaUI7UUFDakYsR0FBRyxDQUFDLENBQUM7WUFFRCxFQUErQjtZQUMvQixLQUFLLENBQUMyQixlQUFlLEdBQUcsS0FBSyxDQUFDMUIsVUFBVSxDQUFDLENBQW1DLG9DQUFFLENBQUM7Z0JBQzNFMkIsTUFBTSxFQUFFUCxRQUFRLEdBQUcsQ0FBSyxPQUFFLENBQUs7Z0JBQy9CZCxJQUFJLEVBQUVjLFFBQVEsR0FBRyxDQUFDO29CQUFDUSxhQUFhLEVBQUVMLG1CQUFtQjtnQkFBQyxDQUFDLEdBQUdNLFNBQVM7WUFDbkUsQ0FBQztZQUVMLEtBQUssQ0FBQ0MsV0FBVyxHQUFHSixlQUFlLENBQUNwQixJQUFJO1lBRXhDLEtBQUssQ0FBQ3lCLGNBQWMsR0FBR0QsV0FBVyxDQUFDRSxJQUFJLENBQUNDLFlBQVk7WUFDcEQsS0FBSyxDQUFDQyxlQUFlLEdBQUdKLFdBQVcsQ0FBQ0UsSUFBSSxDQUFDSixhQUFhO1lBRXRELEVBQXFCO1lBQ3JCLEVBQUUsRUFBQ1IsUUFBUSxFQUFFLENBQUM7Z0JBQ1Z2QixrREFBVyxDQUFDSyxZQUFZLGFBQVpBLFlBQVksS0FBWkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsWUFBWSxDQUFFb0IsR0FBRyxFQUFFdkIsaUJBQWlCLEVBQUVtQyxlQUFlLEVBQUUsQ0FBQztvQkFDaEVFLFFBQVEsRUFBRSxJQUFJO29CQUNkQyxRQUFRLEVBQUUsQ0FBSztvQkFDZkMsSUFBSSxFQUFFLENBQUc7Z0JBQ2IsQ0FBQztZQUNMLENBQUM7WUFDRHhDLDBFQUFpQixDQUFDaUMsY0FBYztZQUVoQyxFQUFvQztZQUNwQyxLQUFLLENBQUNTLGFBQWEsR0FBRyxLQUFLLENBQUN4QyxVQUFVLENBQUNDLFFBQVEsRUFBRSxDQUFDO21CQUMzQ0ksT0FBTztnQkFDVlksT0FBTyxFQUFFLEtBQUs7Z0JBQ2RiLE9BQU8sRUFBRSxDQUFDO29CQUNOLENBQWUsaUJBQUcsT0FBTyxFQUFFMkIsY0FBYztnQkFDN0MsQ0FBQztZQUNMLENBQUM7WUFDRCxFQUErQztZQUMvQyxNQUFNLENBQUNTLGFBQWE7UUFFeEIsQ0FBQyxDQUFDLEtBQUssRUFBQ0MsR0FBRyxFQUFFLENBQUM7WUFDVnZCLE9BQU8sQ0FBQ3dCLEtBQUssQ0FBQ0QsR0FBRztZQUNqQixNQUFNLENBQUN6QixRQUFRO1FBQ25CLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2N1cnNvMDMtbmV4dGpzLWZyb250Ly4vc3JjL2luZnJhL0h0dHBDbGllbnQvSHR0cENsaWVudC5qcz80ZjU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub29raWVzIGZyb20gJ25vb2tpZXMnO1xuaW1wb3J0IHsgdG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC90b2tlblNlcnZpY2UnO1xuXG5jb25zdCBSRUZSRVNIX1RPS0VOX0tFWSA9ICdSRUZSRVNIX1RPS0VOX0tFWSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBIdHRwQ2xpZW50KGZldGNoVXJsLCBmZXRjaE9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRIZWFkZXJzID0gZmV0Y2hPcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgLi4uZmV0Y2hPcHRpb25zLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgLi4uZGVmYXVsdEhlYWRlcnMsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGZldGNoT3B0aW9ucy5ib2R5ID8gSlNPTi5zdHJpbmdpZnkoZmV0Y2hPcHRpb25zLmJvZHkpIDogbnVsbCxcbiAgICB9O1xuICAgIHJldHVybiBmZXRjaChmZXRjaFVybCwgb3B0aW9ucylcbiAgICAgICAgLnRoZW4oYXN5bmMgKHJlc3Bvc3RhRG9TZXJ2aWRvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvazogcmVzcG9zdGFEb1NlcnZpZG9yLm9rLFxuICAgICAgICAgICAgICAgIHN0YXR1czogcmVzcG9zdGFEb1NlcnZpZG9yLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiByZXNwb3N0YURvU2Vydmlkb3Iuc3RhdHVzVGV4dCxcbiAgICAgICAgICAgICAgICBib2R5OiBhd2FpdCByZXNwb3N0YURvU2Vydmlkb3IuanNvbigpLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmKCFmZXRjaE9wdGlvbnMucmVmcmVzaCkgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzICE9PSA0MDEpIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNaWRkbGV3YXJlOiBSb2RhciBjw7NkaWdvIHBhcmEgYXR1YWxpemFyIG8gdG9rZW4nKTtcblxuICAgICAgICAgICAgY29uc3QgaXNTZXJ2ZXIgPSBCb29sZWFuKGZldGNoT3B0aW9ucz8uY3R4KTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSZWZyZXNoVG9rZW4gPSBmZXRjaE9wdGlvbnM/LmN0eD8ucmVxPy5jb29raWVzW1JFRlJFU0hfVE9LRU5fS0VZXTtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgLy8gW1RlbnRhciBhdHVhbGl6YXIgb3MgdG9rZW5zXVxuICAgICAgICAgICAgY29uc3QgcmVmcmVzaFJlc3BvbnNlID0gYXdhaXQgSHR0cENsaWVudCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9yZWZyZXNoJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogaXNTZXJ2ZXIgPyAnUFVUJyA6J0dFVCcsXG4gICAgICAgICAgICAgICAgYm9keTogaXNTZXJ2ZXIgPyB7IHJlZnJlc2hfdG9rZW46IGN1cnJlbnRSZWZyZXNoVG9rZW4gfSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgcmVmcmVzaEJvZHkgPSByZWZyZXNoUmVzcG9uc2UuYm9keTtcblxuICAgICAgICAgICAgY29uc3QgbmV3QWNjZXNzVG9rZW4gPSByZWZyZXNoQm9keS5kYXRhLmFjY2Vzc190b2tlbjtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlZnJlc2hUb2tlbiA9IHJlZnJlc2hCb2R5LmRhdGEucmVmcmVzaF90b2tlbjsgIFxuXG4gICAgICAgICAgICAvLyBbR3VhcmRhIG9zIFRva2Vuc11cbiAgICAgICAgICAgIGlmKGlzU2VydmVyKSB7XG4gICAgICAgICAgICAgICAgbm9va2llcy5zZXQoZmV0Y2hPcHRpb25zPy5jdHgsIFJFRlJFU0hfVE9LRU5fS0VZLCBuZXdSZWZyZXNoVG9rZW4sIHtcbiAgICAgICAgICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNhbWVTaXRlOiAnbGF4JyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJy8nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRva2VuU2VydmljZS5zYXZlKG5ld0FjY2Vzc1Rva2VuKTtcblxuICAgICAgICAgICAgLy8gW1RlbnRhciByb2RhciBvIHJlcXVlc3QgYW50ZXJpb3JdXG4gICAgICAgICAgICBjb25zdCByZXRyeVJlc3BvbnNlID0gYXdhaXQgSHR0cENsaWVudChmZXRjaFVybCwge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgcmVmcmVzaDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtuZXdBY2Nlc3NUb2tlbn1gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmV0cnlSZXNwb25zZScsIHJldHJ5UmVzcG9uc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHJldHJ5UmVzcG9uc2U7XG5cbiAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuICAgIH0pO1xufSJdLCJuYW1lcyI6WyJub29raWVzIiwidG9rZW5TZXJ2aWNlIiwiUkVGUkVTSF9UT0tFTl9LRVkiLCJIdHRwQ2xpZW50IiwiZmV0Y2hVcmwiLCJmZXRjaE9wdGlvbnMiLCJkZWZhdWx0SGVhZGVycyIsImhlYWRlcnMiLCJvcHRpb25zIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb3N0YURvU2Vydmlkb3IiLCJvayIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJqc29uIiwicmVzcG9uc2UiLCJyZWZyZXNoIiwiY29uc29sZSIsImxvZyIsImlzU2VydmVyIiwiQm9vbGVhbiIsImN0eCIsImN1cnJlbnRSZWZyZXNoVG9rZW4iLCJyZXEiLCJjb29raWVzIiwicmVmcmVzaFJlc3BvbnNlIiwibWV0aG9kIiwicmVmcmVzaF90b2tlbiIsInVuZGVmaW5lZCIsInJlZnJlc2hCb2R5IiwibmV3QWNjZXNzVG9rZW4iLCJkYXRhIiwiYWNjZXNzX3Rva2VuIiwibmV3UmVmcmVzaFRva2VuIiwic2V0IiwiaHR0cE9ubHkiLCJzYW1lU2l0ZSIsInBhdGgiLCJzYXZlIiwicmV0cnlSZXNwb25zZSIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/infra/HttpClient/HttpClient.js\n");

/***/ }),

/***/ "(api)/./src/services/auth/tokenService.js":
/*!*******************************************!*\
  !*** ./src/services/auth/tokenService.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tokenService\": () => (/* binding */ tokenService)\n/* harmony export */ });\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';\nconst ONE_SECOND = 1;\nconst ONE_MINUTE = ONE_SECOND * 60;\nconst ONE_HOUR = ONE_MINUTE * 60;\nconst ONE_DAY = ONE_HOUR * 24;\nconst ONE_YEAR = ONE_DAY * 365;\nconst tokenService = {\n    save (access_token, ctx = null) {\n        var ref, ref1;\n        globalThis === null || globalThis === void 0 ? void 0 : (ref = globalThis.localStorage) === null || ref === void 0 ? void 0 : ref.setItem(ACCESS_TOKEN_KEY, access_token);\n        globalThis === null || globalThis === void 0 ? void 0 : (ref1 = globalThis.sessionStorage) === null || ref1 === void 0 ? void 0 : ref1.setItem(ACCESS_TOKEN_KEY, access_token);\n        nookies__WEBPACK_IMPORTED_MODULE_0___default().set(ctx, ACCESS_TOKEN_KEY, access_token, {\n            maxAge: ONE_YEAR,\n            path: '/'\n        });\n    },\n    get (ctx = null) {\n        const cookies = nookies__WEBPACK_IMPORTED_MODULE_0___default().get(ctx);\n        return cookies[ACCESS_TOKEN_KEY] || '';\n    //return globalThis?.localStorage?.getItem(ACCESS_TOKEN_KEY) || globalThis?.sessionStorage?.getItem(ACCESS_TOKEN_KEY)\n    },\n    delete () {\n        var ref, ref2;\n        globalThis === null || globalThis === void 0 ? void 0 : (ref = globalThis.localStorage) === null || ref === void 0 ? void 0 : ref.removeItem(ACCESS_TOKEN_KEY);\n        globalThis === null || globalThis === void 0 ? void 0 : (ref2 = globalThis.sessionStorage) === null || ref2 === void 0 ? void 0 : ref2.removeItem(ACCESS_TOKEN_KEY);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvYXV0aC90b2tlblNlcnZpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZCO0FBRTdCLEtBQUssQ0FBQ0MsZ0JBQWdCLEdBQUcsQ0FBa0I7QUFFM0MsS0FBSyxDQUFDQyxVQUFVLEdBQUcsQ0FBQztBQUNwQixLQUFLLENBQUNDLFVBQVUsR0FBR0QsVUFBVSxHQUFHLEVBQUU7QUFDbEMsS0FBSyxDQUFDRSxRQUFRLEdBQUdELFVBQVUsR0FBRyxFQUFFO0FBQ2hDLEtBQUssQ0FBQ0UsT0FBTyxHQUFHRCxRQUFRLEdBQUcsRUFBRTtBQUM3QixLQUFLLENBQUNFLFFBQVEsR0FBR0QsT0FBTyxHQUFHLEdBQUc7QUFFdkIsS0FBSyxDQUFDRSxZQUFZLEdBQUcsQ0FBQztJQUN6QkMsSUFBSSxFQUFDQyxZQUFZLEVBQUVDLEdBQUcsR0FBRyxJQUFJLEVBQUMsQ0FBQztZQUMzQkMsR0FBd0IsRUFDeEJBLElBQTBCO1FBRDFCQSxVQUFVLGFBQVZBLFVBQVUsS0FBVkEsSUFBSSxDQUFKQSxDQUF3QixHQUF4QkEsSUFBSSxDQUFKQSxDQUF3QixJQUF4QkEsR0FBd0IsR0FBeEJBLFVBQVUsQ0FBRUMsWUFBWSxjQUF4QkQsR0FBd0IsS0FBeEJBLElBQUksQ0FBSkEsQ0FBd0IsR0FBeEJBLElBQUksQ0FBSkEsQ0FBd0IsR0FBeEJBLEdBQXdCLENBQUVFLE9BQU8sQ0FBQ1osZ0JBQWdCLEVBQUVRLFlBQVk7UUFDaEVFLFVBQVUsYUFBVkEsVUFBVSxLQUFWQSxJQUFJLENBQUpBLENBQTBCLEdBQTFCQSxJQUFJLENBQUpBLENBQTBCLElBQTFCQSxJQUEwQixHQUExQkEsVUFBVSxDQUFFRyxjQUFjLGNBQTFCSCxJQUEwQixLQUExQkEsSUFBSSxDQUFKQSxDQUEwQixHQUExQkEsSUFBSSxDQUFKQSxDQUEwQixHQUExQkEsSUFBMEIsQ0FBRUUsT0FBTyxDQUFDWixnQkFBZ0IsRUFBRVEsWUFBWTtRQUNsRVQsa0RBQVcsQ0FBQ1UsR0FBRyxFQUFFVCxnQkFBZ0IsRUFBRVEsWUFBWSxFQUFFLENBQUM7WUFDOUNPLE1BQU0sRUFBRVYsUUFBUTtZQUNoQlcsSUFBSSxFQUFFLENBQUc7UUFDYixDQUFDO0lBQ0wsQ0FBQztJQUNEQyxHQUFHLEVBQUNSLEdBQUcsR0FBQyxJQUFJLEVBQUMsQ0FBQztRQUNWLEtBQUssQ0FBQ1MsT0FBTyxHQUFHbkIsa0RBQVcsQ0FBQ1UsR0FBRztRQUMvQixNQUFNLENBQUNTLE9BQU8sQ0FBQ2xCLGdCQUFnQixLQUFLLENBQUU7SUFDdEMsRUFBcUg7SUFDekgsQ0FBQztJQUNEbUIsTUFBTSxJQUFFLENBQUM7WUFDTFQsR0FBd0IsRUFDeEJBLElBQTBCO1FBRDFCQSxVQUFVLGFBQVZBLFVBQVUsS0FBVkEsSUFBSSxDQUFKQSxDQUF3QixHQUF4QkEsSUFBSSxDQUFKQSxDQUF3QixJQUF4QkEsR0FBd0IsR0FBeEJBLFVBQVUsQ0FBRUMsWUFBWSxjQUF4QkQsR0FBd0IsS0FBeEJBLElBQUksQ0FBSkEsQ0FBd0IsR0FBeEJBLElBQUksQ0FBSkEsQ0FBd0IsR0FBeEJBLEdBQXdCLENBQUVVLFVBQVUsQ0FBQ3BCLGdCQUFnQjtRQUNyRFUsVUFBVSxhQUFWQSxVQUFVLEtBQVZBLElBQUksQ0FBSkEsQ0FBMEIsR0FBMUJBLElBQUksQ0FBSkEsQ0FBMEIsSUFBMUJBLElBQTBCLEdBQTFCQSxVQUFVLENBQUVHLGNBQWMsY0FBMUJILElBQTBCLEtBQTFCQSxJQUFJLENBQUpBLENBQTBCLEdBQTFCQSxJQUFJLENBQUpBLENBQTBCLEdBQTFCQSxJQUEwQixDQUFFVSxVQUFVLENBQUNwQixnQkFBZ0I7SUFDM0QsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdXJzbzAzLW5leHRqcy1mcm9udC8uL3NyYy9zZXJ2aWNlcy9hdXRoL3Rva2VuU2VydmljZS5qcz9hYzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub29raWVzIGZyb20gJ25vb2tpZXMnO1xuXG5jb25zdCBBQ0NFU1NfVE9LRU5fS0VZID0gJ0FDQ0VTU19UT0tFTl9LRVknO1xuXG5jb25zdCBPTkVfU0VDT05EID0gMTtcbmNvbnN0IE9ORV9NSU5VVEUgPSBPTkVfU0VDT05EICogNjA7XG5jb25zdCBPTkVfSE9VUiA9IE9ORV9NSU5VVEUgKiA2MDtcbmNvbnN0IE9ORV9EQVkgPSBPTkVfSE9VUiAqIDI0O1xuY29uc3QgT05FX1lFQVIgPSBPTkVfREFZICogMzY1O1xuXG5leHBvcnQgY29uc3QgdG9rZW5TZXJ2aWNlID0ge1xuICAgIHNhdmUoYWNjZXNzX3Rva2VuLCBjdHggPSBudWxsKXtcbiAgICAgICAgZ2xvYmFsVGhpcz8ubG9jYWxTdG9yYWdlPy5zZXRJdGVtKEFDQ0VTU19UT0tFTl9LRVksIGFjY2Vzc190b2tlbik7XG4gICAgICAgIGdsb2JhbFRoaXM/LnNlc3Npb25TdG9yYWdlPy5zZXRJdGVtKEFDQ0VTU19UT0tFTl9LRVksIGFjY2Vzc190b2tlbik7XG4gICAgICAgIG5vb2tpZXMuc2V0KGN0eCwgQUNDRVNTX1RPS0VOX0tFWSwgYWNjZXNzX3Rva2VuLCB7XG4gICAgICAgICAgICBtYXhBZ2U6IE9ORV9ZRUFSLFxuICAgICAgICAgICAgcGF0aDogJy8nXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0KGN0eD1udWxsKXtcbiAgICAgICAgY29uc3QgY29va2llcyA9IG5vb2tpZXMuZ2V0KGN0eCk7XG4gICAgICAgIHJldHVybiBjb29raWVzW0FDQ0VTU19UT0tFTl9LRVldIHx8ICcnO1xuICAgICAgICAvL3JldHVybiBnbG9iYWxUaGlzPy5sb2NhbFN0b3JhZ2U/LmdldEl0ZW0oQUNDRVNTX1RPS0VOX0tFWSkgfHwgZ2xvYmFsVGhpcz8uc2Vzc2lvblN0b3JhZ2U/LmdldEl0ZW0oQUNDRVNTX1RPS0VOX0tFWSlcbiAgICB9LFxuICAgIGRlbGV0ZSgpe1xuICAgICAgICBnbG9iYWxUaGlzPy5sb2NhbFN0b3JhZ2U/LnJlbW92ZUl0ZW0oQUNDRVNTX1RPS0VOX0tFWSk7XG4gICAgICAgIGdsb2JhbFRoaXM/LnNlc3Npb25TdG9yYWdlPy5yZW1vdmVJdGVtKEFDQ0VTU19UT0tFTl9LRVkpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsibm9va2llcyIsIkFDQ0VTU19UT0tFTl9LRVkiLCJPTkVfU0VDT05EIiwiT05FX01JTlVURSIsIk9ORV9IT1VSIiwiT05FX0RBWSIsIk9ORV9ZRUFSIiwidG9rZW5TZXJ2aWNlIiwic2F2ZSIsImFjY2Vzc190b2tlbiIsImN0eCIsImdsb2JhbFRoaXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXQiLCJtYXhBZ2UiLCJwYXRoIiwiZ2V0IiwiY29va2llcyIsImRlbGV0ZSIsInJlbW92ZUl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/services/auth/tokenService.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/refresh.js"));
module.exports = __webpack_exports__;

})();