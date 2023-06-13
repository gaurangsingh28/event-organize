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
exports.id = "pages/api/institutes";
exports.ids = ["pages/api/institutes"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "./pages/api/institutes.js":
/*!*********************************!*\
  !*** ./pages/api/institutes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mongodb */ \"./util/mongodb.js?748b\");\n\nasync function handler(req, res) {\n    if (req.method === 'GET') {\n        const { db  } = await (0,_util_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n        const collected = await db.collection('institutes').find({\n        }).toArray();\n        var institutes = [];\n        collected.map((item)=>{\n            institutes.push({\n                id: item._id.toString(),\n                name: item.name\n            });\n        });\n        res.status(201).json({\n            institutes\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5zdGl0dXRlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFzRDtlQUV2Q0MsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBSyxNQUFFLENBQUM7UUFDekIsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsRUFBRSxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNMLGdFQUFpQjtRQUN0QyxLQUFLLENBQUNNLFNBQVMsR0FBRyxLQUFLLENBQUNELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLENBQVksYUFBRUMsSUFBSSxDQUFDLENBQUM7UUFBQSxDQUFDLEVBQUVDLE9BQU87UUFDcEUsR0FBRyxDQUFDQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ25CSixTQUFTLENBQUNLLEdBQUcsRUFBRUMsSUFBSSxHQUFLLENBQUM7WUFDdkJGLFVBQVUsQ0FBQ0csSUFBSSxDQUFDLENBQUM7Z0JBQ2ZDLEVBQUUsRUFBRUYsSUFBSSxDQUFDRyxHQUFHLENBQUNDLFFBQVE7Z0JBQ3JCQyxJQUFJLEVBQUVMLElBQUksQ0FBQ0ssSUFBSTtZQUNqQixDQUFDO1FBQ0gsQ0FBQztRQUNEZCxHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNULFVBQVU7UUFBQyxDQUFDO0lBQ3JDLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVULE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V2ZW50cy1wbGF0Zm9ybS8uL3BhZ2VzL2FwaS9pbnN0aXR1dGVzLmpzPzFhODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tICcuLi8uLi91dGlsL21vbmdvZGInO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gICAgY29uc3QgY29sbGVjdGVkID0gYXdhaXQgZGIuY29sbGVjdGlvbignaW5zdGl0dXRlcycpLmZpbmQoe30pLnRvQXJyYXkoKTtcbiAgICB2YXIgaW5zdGl0dXRlcyA9IFtdO1xuICAgIGNvbGxlY3RlZC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGluc3RpdHV0ZXMucHVzaCh7XG4gICAgICAgIGlkOiBpdGVtLl9pZC50b1N0cmluZygpLFxuICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IGluc3RpdHV0ZXMgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJjb25uZWN0VG9EYXRhYmFzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYiIsImNvbGxlY3RlZCIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsImluc3RpdHV0ZXMiLCJtYXAiLCJpdGVtIiwicHVzaCIsImlkIiwiX2lkIiwidG9TdHJpbmciLCJuYW1lIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/institutes.js\n");

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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/institutes.js"));
module.exports = __webpack_exports__;

})();