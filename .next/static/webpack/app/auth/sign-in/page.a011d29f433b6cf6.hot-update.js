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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DynamicLogo: function() { return /* binding */ DynamicLogo; },\n/* harmony export */   Logo: function() { return /* binding */ Logo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/useTheme.js\");\n/* harmony import */ var _components_core_no_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/core/no-ssr */ \"(app-pages-browser)/./src/components/core/no-ssr.tsx\");\n/* __next_internal_client_entry_do_not_use__ Logo,DynamicLogo auto */ \nvar _s = $RefreshSig$();\n\n\n // Use useTheme instead of useColorScheme\n\nfunction Logo(param) {\n    let { color = \"dark\", emblem } = param;\n    let url;\n    if (emblem) {\n        url = color === \"light\" ? \"/assets/unitfactor.svg\" : \"/assets/ufLogo.svg\";\n    } else {\n        url = color === \"light\" ? \"/assets/ufLogo.svg\" : \"/assets/unitfactor.svg\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        component: \"img\",\n        alt: \"logo\",\n        src: url,\n        width: 100,\n        height: 150\n    }, void 0, false, {\n        fileName: \"/home/jawad/Downloads/uf/product/src/components/core/logo.tsx\",\n        lineNumber: 28,\n        columnNumber: 10\n    }, this);\n}\n_c = Logo;\nfunction DynamicLogo(param) {\n    let { colorDark = \"light\", colorLight = \"dark\", height = HEIGHT, width = WIDTH, ...props } = param;\n    _s();\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const colorScheme = theme.palette.mode; // Access the color scheme from theme\n    const color = colorScheme === \"dark\" ? colorDark : colorLight;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_core_no_ssr__WEBPACK_IMPORTED_MODULE_2__.NoSsr, {\n        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            sx: {\n                height: \"\".concat(height, \"px\"),\n                width: \"\".concat(width, \"px\")\n            }\n        }, void 0, false, {\n            fileName: \"/home/jawad/Downloads/uf/product/src/components/core/logo.tsx\",\n            lineNumber: 51,\n            columnNumber: 22\n        }, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {\n            color: color,\n            height: height,\n            width: width,\n            ...props\n        }, void 0, false, {\n            fileName: \"/home/jawad/Downloads/uf/product/src/components/core/logo.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/jawad/Downloads/uf/product/src/components/core/logo.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(DynamicLogo, \"VrMvFCCB9Haniz3VCRPNUiCauHs=\", false, function() {\n    return [\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c1 = DynamicLogo;\nvar _c, _c1;\n$RefreshReg$(_c, \"Logo\");\n$RefreshReg$(_c1, \"DynamicLogo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvcmUvbG9nby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNLO0FBQ1ksQ0FBQyx5Q0FBeUM7QUFFekM7QUFZMUMsU0FBU0ksS0FBSyxLQUFxQztRQUFyQyxFQUFFQyxRQUFRLE1BQU0sRUFBRUMsTUFBTSxFQUFhLEdBQXJDO0lBQ25CLElBQUlDO0lBRUosSUFBSUQsUUFBUTtRQUNWQyxNQUFNRixVQUFVLFVBQVUsMkJBQTJCO0lBQ3ZELE9BQU87UUFDTEUsTUFBTUYsVUFBVSxVQUFVLHVCQUF1QjtJQUNuRDtJQUVBLHFCQUFPLDhEQUFDSix5REFBR0E7UUFBQ08sV0FBVTtRQUFNQyxLQUFJO1FBQU9DLEtBQUtIO1FBQUtJLE9BQU87UUFBS0MsUUFBUTs7Ozs7O0FBQ3ZFO0tBVmdCUjtBQW9CVCxTQUFTUyxZQUFZLEtBTVQ7UUFOUyxFQUMxQkMsWUFBWSxPQUFPLEVBQ25CQyxhQUFhLE1BQU0sRUFDbkJILFNBQVNJLE1BQU0sRUFDZkwsUUFBUU0sS0FBSyxFQUNiLEdBQUdDLE9BQ2MsR0FOUzs7SUFPMUIsTUFBTUMsUUFBUWpCLGdFQUFRQTtJQUN0QixNQUFNa0IsY0FBY0QsTUFBTUUsT0FBTyxDQUFDQyxJQUFJLEVBQUUscUNBQXFDO0lBQzdFLE1BQU1qQixRQUFRZSxnQkFBZ0IsU0FBU04sWUFBWUM7SUFFbkQscUJBQ0UsOERBQUNaLDBEQUFLQTtRQUFDb0Isd0JBQVUsOERBQUN0Qix5REFBR0E7WUFBQ3VCLElBQUk7Z0JBQUVaLFFBQVEsR0FBVSxPQUFQQSxRQUFPO2dCQUFLRCxPQUFPLEdBQVMsT0FBTkEsT0FBTTtZQUFJOzs7Ozs7a0JBQ3JFLDRFQUFDUDtZQUFLQyxPQUFPQTtZQUFPTyxRQUFRQTtZQUFRRCxPQUFPQTtZQUFRLEdBQUdPLEtBQUs7Ozs7Ozs7Ozs7O0FBR2pFO0dBaEJnQkw7O1FBT0FYLDREQUFRQTs7O01BUFJXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvcmUvbG9nby50c3g/ODFiOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7IC8vIFVzZSB1c2VUaGVtZSBpbnN0ZWFkIG9mIHVzZUNvbG9yU2NoZW1lXG5cbmltcG9ydCB7IE5vU3NyIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvcmUvbm8tc3NyJztcblxuXG5cbnR5cGUgQ29sb3IgPSAnZGFyaycgfCAnbGlnaHQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvZ29Qcm9wcyB7XG4gIGNvbG9yPzogQ29sb3I7XG4gIGVtYmxlbT86IGJvb2xlYW47XG4gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2dvKHsgY29sb3IgPSAnZGFyaycsIGVtYmxlbSB9OiBMb2dvUHJvcHMpOiBSZWFjdC5KU1guRWxlbWVudCB7XG4gIGxldCB1cmw6IHN0cmluZztcblxuICBpZiAoZW1ibGVtKSB7XG4gICAgdXJsID0gY29sb3IgPT09ICdsaWdodCcgPyAnL2Fzc2V0cy91bml0ZmFjdG9yLnN2ZycgOiAnL2Fzc2V0cy91ZkxvZ28uc3ZnJztcbiAgfSBlbHNlIHtcbiAgICB1cmwgPSBjb2xvciA9PT0gJ2xpZ2h0JyA/ICcvYXNzZXRzL3VmTG9nby5zdmcnIDogJy9hc3NldHMvdW5pdGZhY3Rvci5zdmcnO1xuICB9XG5cbiAgcmV0dXJuIDxCb3ggY29tcG9uZW50PVwiaW1nXCIgYWx0PVwibG9nb1wiIHNyYz17dXJsfSB3aWR0aD17MTAwfSBoZWlnaHQ9ezE1MH0vPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljTG9nb1Byb3BzIHtcbiAgY29sb3JEYXJrPzogQ29sb3I7XG4gIGNvbG9yTGlnaHQ/OiBDb2xvcjtcbiAgZW1ibGVtPzogYm9vbGVhbjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICB3aWR0aD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIER5bmFtaWNMb2dvKHtcbiAgY29sb3JEYXJrID0gJ2xpZ2h0JyxcbiAgY29sb3JMaWdodCA9ICdkYXJrJyxcbiAgaGVpZ2h0ID0gSEVJR0hULFxuICB3aWR0aCA9IFdJRFRILFxuICAuLi5wcm9wc1xufTogRHluYW1pY0xvZ29Qcm9wcyk6IFJlYWN0LkpTWC5FbGVtZW50IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBjb2xvclNjaGVtZSA9IHRoZW1lLnBhbGV0dGUubW9kZTsgLy8gQWNjZXNzIHRoZSBjb2xvciBzY2hlbWUgZnJvbSB0aGVtZVxuICBjb25zdCBjb2xvciA9IGNvbG9yU2NoZW1lID09PSAnZGFyaycgPyBjb2xvckRhcmsgOiBjb2xvckxpZ2h0O1xuXG4gIHJldHVybiAoXG4gICAgPE5vU3NyIGZhbGxiYWNrPXs8Qm94IHN4PXt7IGhlaWdodDogYCR7aGVpZ2h0fXB4YCwgd2lkdGg6IGAke3dpZHRofXB4YCB9fSAvPn0+XG4gICAgICA8TG9nbyBjb2xvcj17Y29sb3J9IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17d2lkdGh9IHsuLi5wcm9wc30gLz5cbiAgICA8L05vU3NyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwidXNlVGhlbWUiLCJOb1NzciIsIkxvZ28iLCJjb2xvciIsImVtYmxlbSIsInVybCIsImNvbXBvbmVudCIsImFsdCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiRHluYW1pY0xvZ28iLCJjb2xvckRhcmsiLCJjb2xvckxpZ2h0IiwiSEVJR0hUIiwiV0lEVEgiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JTY2hlbWUiLCJwYWxldHRlIiwibW9kZSIsImZhbGxiYWNrIiwic3giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/core/logo.tsx\n"));

/***/ })

});