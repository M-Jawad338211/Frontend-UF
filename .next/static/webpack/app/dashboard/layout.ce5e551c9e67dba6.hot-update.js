"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-pages-browser)/./src/components/core/logo.tsx":
/*!**************************************!*\
  !*** ./src/components/core/logo.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DynamicLogo: function() { return /* binding */ DynamicLogo; },\n/* harmony export */   Logo: function() { return /* binding */ Logo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/CssVarsProvider.js\");\n/* harmony import */ var _components_core_no_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/core/no-ssr */ \"(app-pages-browser)/./src/components/core/no-ssr.tsx\");\n/* __next_internal_client_entry_do_not_use__ Logo,DynamicLogo auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst HEIGHT = 200;\nconst WIDTH = 200;\nfunction Logo(param) {\n    let { color = \"dark\", emblem, height = HEIGHT, width = WIDTH } = param;\n    let url;\n    if (emblem) {\n        url = color === \"light\" ? \"/assets/unitfactor.png\" : \"/assets/ufLogo.svg\";\n    } else {\n        url = color === \"light\" ? \"/assets/unitfactor.png\" : \"/assets/unitfactor.png\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        alt: \"logo\",\n        component: \"img\",\n        height: height,\n        src: url,\n        width: width\n    }, void 0, false, {\n        fileName: \"/home/jawad/Downloads/uf/product/src/components/core/logo.tsx\",\n        lineNumber: 30,\n        columnNumber: 10\n    }, this);\n}\n_c = Logo;\nfunction DynamicLogo(param) {\n    let { colorDark = \"light\", colorLight = \"dark\", height = HEIGHT, width = WIDTH, ...props } = param;\n    _s();\n    const { colorScheme } = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useColorScheme)();\n    const color = colorScheme === \"dark\" ? colorDark : colorLight;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_core_no_ssr__WEBPACK_IMPORTED_MODULE_2__.NoSsr, {\n        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            sx: {\n                height: \"\".concat(height, \"px\"),\n                width: \"\".concat(width, \"px\")\n            }\n        }, void 0, false, {\n            fileName: \"/home/jawad/Downloads/uf/product/src/components/core/logo.tsx\",\n            lineNumber: 52,\n            columnNumber: 22\n        }, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {\n            color: color,\n            height: height,\n            width: width,\n            ...props\n        }, void 0, false, {\n            fileName: \"/home/jawad/Downloads/uf/product/src/components/core/logo.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/jawad/Downloads/uf/product/src/components/core/logo.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(DynamicLogo, \"kvh20ztb42GLx/98+NDT27DO54k=\", false, function() {\n    return [\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useColorScheme\n    ];\n});\n_c1 = DynamicLogo;\nvar _c, _c1;\n$RefreshReg$(_c, \"Logo\");\n$RefreshReg$(_c1, \"DynamicLogo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvcmUvbG9nby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNLO0FBQ2tCO0FBRUw7QUFFakQsTUFBTUksU0FBUztBQUNmLE1BQU1DLFFBQVE7QUFXUCxTQUFTQyxLQUFLLEtBQXFFO1FBQXJFLEVBQUVDLFFBQVEsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFNBQVNMLE1BQU0sRUFBRU0sUUFBUUwsS0FBSyxFQUFhLEdBQXJFO0lBQ25CLElBQUlNO0lBRUosSUFBSUgsUUFBUTtRQUNWRyxNQUFNSixVQUFVLFVBQVUsMkJBQTJCO0lBQ3ZELE9BQU87UUFDTEksTUFBTUosVUFBVSxVQUFVLDJCQUEyQjtJQUN2RDtJQUVBLHFCQUFPLDhEQUFDTix5REFBR0E7UUFBQ1csS0FBSTtRQUFPQyxXQUFVO1FBQU1KLFFBQVFBO1FBQVFLLEtBQUtIO1FBQUtELE9BQU9BOzs7Ozs7QUFDMUU7S0FWZ0JKO0FBb0JULFNBQVNTLFlBQVksS0FNVDtRQU5TLEVBQzFCQyxZQUFZLE9BQU8sRUFDbkJDLGFBQWEsTUFBTSxFQUNuQlIsU0FBU0wsTUFBTSxFQUNmTSxRQUFRTCxLQUFLLEVBQ2IsR0FBR2EsT0FDYyxHQU5TOztJQU8xQixNQUFNLEVBQUVDLFdBQVcsRUFBRSxHQUFHakIsb0VBQWNBO0lBQ3RDLE1BQU1LLFFBQVFZLGdCQUFnQixTQUFTSCxZQUFZQztJQUVuRCxxQkFDRSw4REFBQ2QsMERBQUtBO1FBQUNpQix3QkFBVSw4REFBQ25CLHlEQUFHQTtZQUFDb0IsSUFBSTtnQkFBRVosUUFBUSxHQUFVLE9BQVBBLFFBQU87Z0JBQUtDLE9BQU8sR0FBUyxPQUFOQSxPQUFNO1lBQUk7Ozs7OztrQkFDckUsNEVBQUNKO1lBQUtDLE9BQU9BO1lBQU9FLFFBQVFBO1lBQVFDLE9BQU9BO1lBQVEsR0FBR1EsS0FBSzs7Ozs7Ozs7Ozs7QUFHakU7R0FmZ0JIOztRQU9VYixnRUFBY0E7OztNQVB4QmEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29yZS9sb2dvLnRzeD84MWI4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgeyB1c2VDb2xvclNjaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcblxuaW1wb3J0IHsgTm9Tc3IgfSBmcm9tICdAL2NvbXBvbmVudHMvY29yZS9uby1zc3InO1xuXG5jb25zdCBIRUlHSFQgPSAyMDA7XG5jb25zdCBXSURUSCA9IDIwMDtcblxudHlwZSBDb2xvciA9ICdkYXJrJyB8ICdsaWdodCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nb1Byb3BzIHtcbiAgY29sb3I/OiBDb2xvcjtcbiAgZW1ibGVtPzogYm9vbGVhbjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICB3aWR0aD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExvZ28oeyBjb2xvciA9ICdkYXJrJywgZW1ibGVtLCBoZWlnaHQgPSBIRUlHSFQsIHdpZHRoID0gV0lEVEggfTogTG9nb1Byb3BzKTogUmVhY3QuSlNYLkVsZW1lbnQge1xuICBsZXQgdXJsOiBzdHJpbmc7XG5cbiAgaWYgKGVtYmxlbSkge1xuICAgIHVybCA9IGNvbG9yID09PSAnbGlnaHQnID8gJy9hc3NldHMvdW5pdGZhY3Rvci5wbmcnIDogJy9hc3NldHMvdWZMb2dvLnN2Zyc7XG4gIH0gZWxzZSB7XG4gICAgdXJsID0gY29sb3IgPT09ICdsaWdodCcgPyAnL2Fzc2V0cy91bml0ZmFjdG9yLnBuZycgOiAnL2Fzc2V0cy91bml0ZmFjdG9yLnBuZyc7XG4gIH1cblxuICByZXR1cm4gPEJveCBhbHQ9XCJsb2dvXCIgY29tcG9uZW50PVwiaW1nXCIgaGVpZ2h0PXtoZWlnaHR9IHNyYz17dXJsfSB3aWR0aD17d2lkdGh9IC8+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIER5bmFtaWNMb2dvUHJvcHMge1xuICBjb2xvckRhcms/OiBDb2xvcjtcbiAgY29sb3JMaWdodD86IENvbG9yO1xuICBlbWJsZW0/OiBib29sZWFuO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRHluYW1pY0xvZ28oe1xuICBjb2xvckRhcmsgPSAnbGlnaHQnLFxuICBjb2xvckxpZ2h0ID0gJ2RhcmsnLFxuICBoZWlnaHQgPSBIRUlHSFQsXG4gIHdpZHRoID0gV0lEVEgsXG4gIC4uLnByb3BzXG59OiBEeW5hbWljTG9nb1Byb3BzKTogUmVhY3QuSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IGNvbG9yU2NoZW1lIH0gPSB1c2VDb2xvclNjaGVtZSgpO1xuICBjb25zdCBjb2xvciA9IGNvbG9yU2NoZW1lID09PSAnZGFyaycgPyBjb2xvckRhcmsgOiBjb2xvckxpZ2h0O1xuXG4gIHJldHVybiAoXG4gICAgPE5vU3NyIGZhbGxiYWNrPXs8Qm94IHN4PXt7IGhlaWdodDogYCR7aGVpZ2h0fXB4YCwgd2lkdGg6IGAke3dpZHRofXB4YCB9fSAvPn0+XG4gICAgICA8TG9nbyBjb2xvcj17Y29sb3J9IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17d2lkdGh9IHsuLi5wcm9wc30gLz5cbiAgICA8L05vU3NyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwidXNlQ29sb3JTY2hlbWUiLCJOb1NzciIsIkhFSUdIVCIsIldJRFRIIiwiTG9nbyIsImNvbG9yIiwiZW1ibGVtIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1cmwiLCJhbHQiLCJjb21wb25lbnQiLCJzcmMiLCJEeW5hbWljTG9nbyIsImNvbG9yRGFyayIsImNvbG9yTGlnaHQiLCJwcm9wcyIsImNvbG9yU2NoZW1lIiwiZmFsbGJhY2siLCJzeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/core/logo.tsx\n"));

/***/ })

});