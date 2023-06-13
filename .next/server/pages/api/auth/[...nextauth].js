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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/mongodb */ \"./util/mongodb.js?748b\");\n/* harmony import */ var _util_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/auth */ \"./util/auth.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        jwt: true,\n        strategy: 'jwt'\n    },\n    secret: process.env.SECRET,\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            async authorize (credentials) {\n                const { db  } = await (0,_util_mongodb__WEBPACK_IMPORTED_MODULE_2__.connectToDatabase)();\n                if (!db) throw new Error('Database Connection Failed!');\n                if (credentials.is_admin) {\n                    const adminsCollectionn = db.collection('admins');\n                    const admin = await adminsCollectionn.findOne({\n                        email: credentials.email,\n                        password: credentials.password\n                    });\n                    if (!admin) throw new Error('Invalid Credentials!');\n                    const newData = {\n                        ...admin,\n                        is_admin: true\n                    };\n                    return {\n                        name: newData\n                    };\n                }\n                const usersCollection = db.collection('users');\n                const user = await usersCollection.findOne({\n                    email: credentials.email\n                });\n                if (!user) {\n                    throw new Error('User not exists!');\n                }\n                const isValid = await (0,_util_auth__WEBPACK_IMPORTED_MODULE_3__.verifyPassword)(credentials.password, user.password);\n                if (!isValid) {\n                    throw new Error('Invalid Password!');\n                }\n                let sendingData = {\n                    ...user\n                };\n                delete sendingData.password;\n                return {\n                    name: sendingData\n                };\n            }\n        }), \n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDaUM7QUFFUjtBQUNOO0FBRW5ELGlFQUFlQSxnREFBUSxDQUFDLENBQUM7SUFDdkJJLE9BQU8sRUFBRSxDQUFDO1FBQ1JDLEdBQUcsRUFBRSxJQUFJO1FBQ1RDLFFBQVEsRUFBRSxDQUFLO0lBQ2pCLENBQUM7SUFDREMsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsTUFBTTtJQUMxQkMsU0FBUyxFQUFFLENBQUM7UUFDVlYsc0VBQW1CLENBQUMsQ0FBQztrQkFDYlcsU0FBUyxFQUFDQyxXQUFXLEVBQUUsQ0FBQztnQkFDNUIsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsRUFBRSxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNaLGdFQUFpQjtnQkFFdEMsRUFBRSxHQUFHWSxFQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDLENBQTZCO2dCQUV0RCxFQUFFLEVBQUVGLFdBQVcsQ0FBQ0csUUFBUSxFQUFFLENBQUM7b0JBQ3pCLEtBQUssQ0FBQ0MsaUJBQWlCLEdBQUdILEVBQUUsQ0FBQ0ksVUFBVSxDQUFDLENBQVE7b0JBQ2hELEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQ0YsaUJBQWlCLENBQUNHLE9BQU8sQ0FBQyxDQUFDO3dCQUM3Q0MsS0FBSyxFQUFFUixXQUFXLENBQUNRLEtBQUs7d0JBQ3hCQyxRQUFRLEVBQUVULFdBQVcsQ0FBQ1MsUUFBUTtvQkFDaEMsQ0FBQztvQkFDRCxFQUFFLEdBQUdILEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDSixLQUFLLENBQUMsQ0FBc0I7b0JBQ2xELEtBQUssQ0FBQ1EsT0FBTyxHQUFHLENBQUM7MkJBQ1pKLEtBQUs7d0JBQ1JILFFBQVEsRUFBRSxJQUFJO29CQUNoQixDQUFDO29CQUNELE1BQU0sQ0FBQyxDQUFDO3dCQUFDUSxJQUFJLEVBQUVELE9BQU87b0JBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCxLQUFLLENBQUNFLGVBQWUsR0FBR1gsRUFBRSxDQUFDSSxVQUFVLENBQUMsQ0FBTztnQkFFN0MsS0FBSyxDQUFDUSxJQUFJLEdBQUcsS0FBSyxDQUFDRCxlQUFlLENBQUNMLE9BQU8sQ0FBQyxDQUFDO29CQUMxQ0MsS0FBSyxFQUFFUixXQUFXLENBQUNRLEtBQUs7Z0JBQzFCLENBQUM7Z0JBRUQsRUFBRSxHQUFHSyxJQUFJLEVBQUUsQ0FBQztvQkFDVixLQUFLLENBQUMsR0FBRyxDQUFDWCxLQUFLLENBQUMsQ0FBa0I7Z0JBQ3BDLENBQUM7Z0JBRUQsS0FBSyxDQUFDWSxPQUFPLEdBQUcsS0FBSyxDQUFDeEIsMERBQWMsQ0FDbENVLFdBQVcsQ0FBQ1MsUUFBUSxFQUNwQkksSUFBSSxDQUFDSixRQUFRO2dCQUVmLEVBQUUsR0FBR0ssT0FBTyxFQUFFLENBQUM7b0JBQ2IsS0FBSyxDQUFDLEdBQUcsQ0FBQ1osS0FBSyxDQUFDLENBQW1CO2dCQUNyQyxDQUFDO2dCQUVELEdBQUcsQ0FBQ2EsV0FBVyxHQUFHLENBQUM7dUJBQ2RGLElBQUk7Z0JBQ1QsQ0FBQztnQkFDRCxNQUFNLENBQUNFLFdBQVcsQ0FBQ04sUUFBUTtnQkFFM0IsTUFBTSxDQUFDLENBQUM7b0JBQUNFLElBQUksRUFBRUksV0FBVztnQkFBQyxDQUFDO1lBQzlCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXZlbnRzLXBsYXRmb3JtLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XG5cbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9tb25nb2RiJztcbmltcG9ydCB7IHZlcmlmeVBhc3N3b3JkIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9hdXRoJztcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBzZXNzaW9uOiB7XG4gICAgand0OiB0cnVlLFxuICAgIHN0cmF0ZWd5OiAnand0JyxcbiAgfSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVQsXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG5cbiAgICAgICAgaWYgKCFkYikgdGhyb3cgbmV3IEVycm9yKCdEYXRhYmFzZSBDb25uZWN0aW9uIEZhaWxlZCEnKTtcblxuICAgICAgICBpZiAoY3JlZGVudGlhbHMuaXNfYWRtaW4pIHtcbiAgICAgICAgICBjb25zdCBhZG1pbnNDb2xsZWN0aW9ubiA9IGRiLmNvbGxlY3Rpb24oJ2FkbWlucycpO1xuICAgICAgICAgIGNvbnN0IGFkbWluID0gYXdhaXQgYWRtaW5zQ29sbGVjdGlvbm4uZmluZE9uZSh7XG4gICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKCFhZG1pbikgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIENyZWRlbnRpYWxzIScpO1xuICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICAgICAgICAuLi5hZG1pbixcbiAgICAgICAgICAgIGlzX2FkbWluOiB0cnVlLFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHsgbmFtZTogbmV3RGF0YSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbigndXNlcnMnKTtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlcnNDb2xsZWN0aW9uLmZpbmRPbmUoe1xuICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIG5vdCBleGlzdHMhJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgdmVyaWZ5UGFzc3dvcmQoXG4gICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgdXNlci5wYXNzd29yZFxuICAgICAgICApO1xuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUGFzc3dvcmQhJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VuZGluZ0RhdGEgPSB7XG4gICAgICAgICAgLi4udXNlcixcbiAgICAgICAgfTtcbiAgICAgICAgZGVsZXRlIHNlbmRpbmdEYXRhLnBhc3N3b3JkO1xuXG4gICAgICAgIHJldHVybiB7IG5hbWU6IHNlbmRpbmdEYXRhIH07XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJ2ZXJpZnlQYXNzd29yZCIsInNlc3Npb24iLCJqd3QiLCJzdHJhdGVneSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVQiLCJwcm92aWRlcnMiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsImRiIiwiRXJyb3IiLCJpc19hZG1pbiIsImFkbWluc0NvbGxlY3Rpb25uIiwiY29sbGVjdGlvbiIsImFkbWluIiwiZmluZE9uZSIsImVtYWlsIiwicGFzc3dvcmQiLCJuZXdEYXRhIiwibmFtZSIsInVzZXJzQ29sbGVjdGlvbiIsInVzZXIiLCJpc1ZhbGlkIiwic2VuZGluZ0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "./util/auth.js":
/*!**********************!*\
  !*** ./util/auth.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hashPassword\": () => (/* binding */ hashPassword),\n/* harmony export */   \"verifyPassword\": () => (/* binding */ verifyPassword)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function hashPassword(password) {\n    const hashedPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n    return hashedPassword;\n}\nasync function verifyPassword(password, hashedPassword) {\n    const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hashedPassword);\n    return isValid;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUVqQyxlQUFlRSxZQUFZLENBQUNDLFFBQVEsRUFBRSxDQUFDO0lBQzVDLEtBQUssQ0FBQ0MsY0FBYyxHQUFHLEtBQUssQ0FBQ0gsOENBQUksQ0FBQ0UsUUFBUSxFQUFFLEVBQUU7SUFFOUMsTUFBTSxDQUFDQyxjQUFjO0FBQ3ZCLENBQUM7QUFFTSxlQUFlQyxjQUFjLENBQUNGLFFBQVEsRUFBRUMsY0FBYyxFQUFFLENBQUM7SUFDOUQsS0FBSyxDQUFDRSxPQUFPLEdBQUcsS0FBSyxDQUFDTixpREFBTyxDQUFDRyxRQUFRLEVBQUVDLGNBQWM7SUFFdEQsTUFBTSxDQUFDRSxPQUFPO0FBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldmVudHMtcGxhdGZvcm0vLi91dGlsL2F1dGguanM/MTViOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wYXJlLCBoYXNoIH0gZnJvbSAnYmNyeXB0anMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaChwYXNzd29yZCwgMTIpO1xuXG4gIHJldHVybiBoYXNoZWRQYXNzd29yZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVBhc3N3b3JkKHBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCkge1xuICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgY29tcGFyZShwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xuXG4gIHJldHVybiBpc1ZhbGlkO1xufVxuIl0sIm5hbWVzIjpbImNvbXBhcmUiLCJoYXNoIiwiaGFzaFBhc3N3b3JkIiwicGFzc3dvcmQiLCJoYXNoZWRQYXNzd29yZCIsInZlcmlmeVBhc3N3b3JkIiwiaXNWYWxpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/auth.js\n");

/***/ }),

/***/ "./util/mongodb.js?748b":
/*!*************************!*\
  !*** ./util/mongodb.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { MONGODB_URI , MONGODB_DB  } = process.env;\nif (!MONGODB_URI) {\n    throw new Error('MONGODB_URI is missing.');\n}\nif (!MONGODB_DB) {\n    throw new Error('MONGODB_DB is missing.');\n}\nlet cached = global.mongo;\nif (!cached) {\n    cached = global.mongo = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectToDatabase() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        };\n        cached.promise = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(MONGODB_URI, opts).then((client)=>{\n            return {\n                client,\n                db: client.db(MONGODB_DB)\n            };\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL21vbmdvZGIuanM/NzQ4Yi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxHQUFFQyxVQUFVLEVBQUMsQ0FBQyxHQUFHQyxPQUFPLENBQUNDLEdBQUc7QUFFL0MsRUFBRSxHQUFHSCxXQUFXLEVBQUUsQ0FBQztJQUNqQixLQUFLLENBQUMsR0FBRyxDQUFDSSxLQUFLLENBQUMsQ0FBeUI7QUFDM0MsQ0FBQztBQUVELEVBQUUsR0FBR0gsVUFBVSxFQUFFLENBQUM7SUFDaEIsS0FBSyxDQUFDLEdBQUcsQ0FBQ0csS0FBSyxDQUFDLENBQXdCO0FBQzFDLENBQUM7QUFFRCxHQUFHLENBQUNDLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxLQUFLO0FBRXpCLEVBQUUsR0FBR0YsTUFBTSxFQUFFLENBQUM7SUFDWkEsTUFBTSxHQUFHQyxNQUFNLENBQUNDLEtBQUssR0FBRyxDQUFDO1FBQUNDLElBQUksRUFBRSxJQUFJO1FBQUVDLE9BQU8sRUFBRSxJQUFJO0lBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRU0sZUFBZUMsaUJBQWlCLEdBQUcsQ0FBQztJQUN6QyxFQUFFLEVBQUVMLE1BQU0sQ0FBQ0csSUFBSSxFQUFFLENBQUM7UUFDaEIsTUFBTSxDQUFDSCxNQUFNLENBQUNHLElBQUk7SUFDcEIsQ0FBQztJQUNELEVBQUUsR0FBR0gsTUFBTSxDQUFDSSxPQUFPLEVBQUUsQ0FBQztRQUNwQixLQUFLLENBQUNFLElBQUksR0FBRyxDQUFDO1lBQ1pDLGVBQWUsRUFBRSxJQUFJO1lBQ3JCQyxrQkFBa0IsRUFBRSxJQUFJO1FBQzFCLENBQUM7UUFDRFIsTUFBTSxDQUFDSSxPQUFPLEdBQUcsS0FBSyxDQUFDVix3REFBbUIsQ0FBQ0MsV0FBVyxFQUFFVyxJQUFJLEVBQUVJLElBQUksRUFDL0RDLE1BQU0sR0FBSyxDQUFDO1lBQ1gsTUFBTSxDQUFDLENBQUM7Z0JBQ05BLE1BQU07Z0JBQ05DLEVBQUUsRUFBRUQsTUFBTSxDQUFDQyxFQUFFLENBQUNoQixVQUFVO1lBQzFCLENBQUM7UUFDSCxDQUFDO0lBRUwsQ0FBQztJQUNESSxNQUFNLENBQUNHLElBQUksR0FBRyxLQUFLLENBQUNILE1BQU0sQ0FBQ0ksT0FBTztJQUNsQyxNQUFNLENBQUNKLE1BQU0sQ0FBQ0csSUFBSTtBQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXZlbnRzLXBsYXRmb3JtLy4vdXRpbC9tb25nb2RiLmpzPzQ1MDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuY29uc3QgeyBNT05HT0RCX1VSSSwgTU9OR09EQl9EQiB9ID0gcHJvY2Vzcy5lbnY7XG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdNT05HT0RCX1VSSSBpcyBtaXNzaW5nLicpO1xufVxuXG5pZiAoIU1PTkdPREJfREIpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdNT05HT0RCX0RCIGlzIG1pc3NpbmcuJyk7XG59XG5cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ287XG5cbmlmICghY2FjaGVkKSB7XG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nbyA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjYWNoZWQuY29ubikge1xuICAgIHJldHVybiBjYWNoZWQuY29ubjtcbiAgfVxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICB9O1xuICAgIGNhY2hlZC5wcm9taXNlID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbihcbiAgICAgIChjbGllbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjbGllbnQsXG4gICAgICAgICAgZGI6IGNsaWVudC5kYihNT05HT0RCX0RCKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn1cbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsIk1PTkdPREJfVVJJIiwiTU9OR09EQl9EQiIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsIm1vbmdvIiwiY29ubiIsInByb21pc2UiLCJjb25uZWN0VG9EYXRhYmFzZSIsIm9wdHMiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0IiwidGhlbiIsImNsaWVudCIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./util/mongodb.js?748b\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();