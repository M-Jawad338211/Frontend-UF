"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/sign-in/page",{

/***/ "(app-pages-browser)/./src/components/core/logo.tsx":
/*!**************************************!*\
  !*** ./src/components/core/logo.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DynamicLogo: function() { return /* binding */ DynamicLogo; },\n/* harmony export */   Logo: function() { return /* binding */ Logo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/CssVarsProvider.js\");\n/* harmony import */ var _components_core_no_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/core/no-ssr */ \"(app-pages-browser)/./src/components/core/no-ssr.tsx\");\n/* __next_internal_client_entry_do_not_use__ Logo,DynamicLogo auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst HEIGHT = 200;\nconst WIDTH = 200;\nfunction Logo(param) {\n    let { color = \"dark\", emblem, height = HEIGHT, width = WIDTH } = param;\n    let url;\n    if (emblem) {\n        url = color === \"light\" ? \"/assets/unitfactor.svg\" : \"/assets/ufLogo.svg\";\n    } else {\n        url = color === \"light\" ? \"/assets/ufLogo.svg\" : \"/assets/unitfactor.svg\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        alt: \"logo\",\n        component: \"img\",\n        height: height,\n        src: url,\n        width: width\n    }, void 0, false, {\n        fileName: \"/home/jawad/Downloads/uf/product/src/components/core/logo.tsx\",\n        lineNumber: 30,\n        columnNumber: 10\n    }, this);\n}\n_c = Logo;\nfunction DynamicLogo(param) {\n    let { colorDark = \"light\", colorLight = \"dark\", height = HEIGHT, width = WIDTH, ...props } = param;\n    _s();\n    const { colorScheme } = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useColorScheme)();\n    const color = colorScheme === \"dark\" ? colorDark : colorLight;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_core_no_ssr__WEBPACK_IMPORTED_MODULE_2__.NoSsr, {\n        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            sx: {\n                height: \"\".concat(height, \"px\"),\n                width: \"\".concat(width, \"px\")\n            }\n        }, void 0, false, {\n            fileName: \"/home/jawad/Downloads/uf/product/src/components/core/logo.tsx\",\n            lineNumber: 52,\n            columnNumber: 22\n        }, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {\n            color: color,\n            height: height,\n            width: width,\n            ...props\n        }, void 0, false, {\n            fileName: \"/home/jawad/Downloads/uf/product/src/components/core/logo.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/jawad/Downloads/uf/product/src/components/core/logo.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(DynamicLogo, \"kvh20ztb42GLx/98+NDT27DO54k=\", false, function() {\n    return [\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useColorScheme\n    ];\n});\n_c1 = DynamicLogo;\nvar _c, _c1;\n$RefreshReg$(_c, \"Logo\");\n$RefreshReg$(_c1, \"DynamicLogo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvcmUvbG9nby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNLO0FBQ2tCO0FBRUw7QUFFakQsTUFBTUksU0FBUztBQUNmLE1BQU1DLFFBQVE7QUFXUCxTQUFTQyxLQUFLLEtBQXFFO1FBQXJFLEVBQUVDLFFBQVEsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFNBQVNMLE1BQU0sRUFBRU0sUUFBUUwsS0FBSyxFQUFhLEdBQXJFO0lBQ25CLElBQUlNO0lBRUosSUFBSUgsUUFBUTtRQUNWRyxNQUFNSixVQUFVLFVBQVUsMkJBQTJCO0lBQ3ZELE9BQU87UUFDTEksTUFBTUosVUFBVSxVQUFVLHVCQUF1QjtJQUNuRDtJQUVBLHFCQUFPLDhEQUFDTix5REFBR0E7UUFBQ1csS0FBSTtRQUFPQyxXQUFVO1FBQU1KLFFBQVFBO1FBQVFLLEtBQUtIO1FBQUtELE9BQU9BOzs7Ozs7QUFDMUU7S0FWZ0JKO0FBb0JULFNBQVNTLFlBQVksS0FNVDtRQU5TLEVBQzFCQyxZQUFZLE9BQU8sRUFDbkJDLGFBQWEsTUFBTSxFQUNuQlIsU0FBU0wsTUFBTSxFQUNmTSxRQUFRTCxLQUFLLEVBQ2IsR0FBR2EsT0FDYyxHQU5TOztJQU8xQixNQUFNLEVBQUVDLFdBQVcsRUFBRSxHQUFHakIsb0VBQWNBO0lBQ3RDLE1BQU1LLFFBQVFZLGdCQUFnQixTQUFTSCxZQUFZQztJQUVuRCxxQkFDRSw4REFBQ2QsMERBQUtBO1FBQUNpQix3QkFBVSw4REFBQ25CLHlEQUFHQTtZQUFDb0IsSUFBSTtnQkFBRVosUUFBUSxHQUFVLE9BQVBBLFFBQU87Z0JBQUtDLE9BQU8sR0FBUyxPQUFOQSxPQUFNO1lBQUk7Ozs7OztrQkFDckUsNEVBQUNKO1lBQUtDLE9BQU9BO1lBQU9FLFFBQVFBO1lBQVFDLE9BQU9BO1lBQVEsR0FBR1EsS0FBSzs7Ozs7Ozs7Ozs7QUFHakU7R0FmZ0JIOztRQU9VYixnRUFBY0E7OztNQVB4QmEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29yZS9sb2dvLnRzeD84MWI4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgeyB1c2VDb2xvclNjaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcblxuaW1wb3J0IHsgTm9Tc3IgfSBmcm9tICdAL2NvbXBvbmVudHMvY29yZS9uby1zc3InO1xuXG5jb25zdCBIRUlHSFQgPSAyMDA7XG5jb25zdCBXSURUSCA9IDIwMDtcblxudHlwZSBDb2xvciA9ICdkYXJrJyB8ICdsaWdodCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nb1Byb3BzIHtcbiAgY29sb3I/OiBDb2xvcjtcbiAgZW1ibGVtPzogYm9vbGVhbjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICB3aWR0aD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExvZ28oeyBjb2xvciA9ICdkYXJrJywgZW1ibGVtLCBoZWlnaHQgPSBIRUlHSFQsIHdpZHRoID0gV0lEVEggfTogTG9nb1Byb3BzKTogUmVhY3QuSlNYLkVsZW1lbnQge1xuICBsZXQgdXJsOiBzdHJpbmc7XG5cbiAgaWYgKGVtYmxlbSkge1xuICAgIHVybCA9IGNvbG9yID09PSAnbGlnaHQnID8gJy9hc3NldHMvdW5pdGZhY3Rvci5zdmcnIDogJy9hc3NldHMvdWZMb2dvLnN2Zyc7XG4gIH0gZWxzZSB7XG4gICAgdXJsID0gY29sb3IgPT09ICdsaWdodCcgPyAnL2Fzc2V0cy91ZkxvZ28uc3ZnJyA6ICcvYXNzZXRzL3VuaXRmYWN0b3Iuc3ZnJztcbiAgfVxuXG4gIHJldHVybiA8Qm94IGFsdD1cImxvZ29cIiBjb21wb25lbnQ9XCJpbWdcIiBoZWlnaHQ9e2hlaWdodH0gc3JjPXt1cmx9IHdpZHRoPXt3aWR0aH0gLz47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHluYW1pY0xvZ29Qcm9wcyB7XG4gIGNvbG9yRGFyaz86IENvbG9yO1xuICBjb2xvckxpZ2h0PzogQ29sb3I7XG4gIGVtYmxlbT86IGJvb2xlYW47XG4gIGhlaWdodD86IG51bWJlcjtcbiAgd2lkdGg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEeW5hbWljTG9nbyh7XG4gIGNvbG9yRGFyayA9ICdsaWdodCcsXG4gIGNvbG9yTGlnaHQgPSAnZGFyaycsXG4gIGhlaWdodCA9IEhFSUdIVCxcbiAgd2lkdGggPSBXSURUSCxcbiAgLi4ucHJvcHNcbn06IER5bmFtaWNMb2dvUHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgY29sb3JTY2hlbWUgfSA9IHVzZUNvbG9yU2NoZW1lKCk7XG4gIGNvbnN0IGNvbG9yID0gY29sb3JTY2hlbWUgPT09ICdkYXJrJyA/IGNvbG9yRGFyayA6IGNvbG9yTGlnaHQ7XG5cbiAgcmV0dXJuIChcbiAgICA8Tm9Tc3IgZmFsbGJhY2s9ezxCb3ggc3g9e3sgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLCB3aWR0aDogYCR7d2lkdGh9cHhgIH19IC8+fT5cbiAgICAgIDxMb2dvIGNvbG9yPXtjb2xvcn0gaGVpZ2h0PXtoZWlnaHR9IHdpZHRoPXt3aWR0aH0gey4uLnByb3BzfSAvPlxuICAgIDwvTm9Tc3I+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJ1c2VDb2xvclNjaGVtZSIsIk5vU3NyIiwiSEVJR0hUIiwiV0lEVEgiLCJMb2dvIiwiY29sb3IiLCJlbWJsZW0iLCJoZWlnaHQiLCJ3aWR0aCIsInVybCIsImFsdCIsImNvbXBvbmVudCIsInNyYyIsIkR5bmFtaWNMb2dvIiwiY29sb3JEYXJrIiwiY29sb3JMaWdodCIsInByb3BzIiwiY29sb3JTY2hlbWUiLCJmYWxsYmFjayIsInN4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/core/logo.tsx\n"));

/***/ })

});