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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/theme */ \"./src/context/theme.tsx\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.useTheme)();\n    var cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\n    var settheme = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_3__.ThemeContext).settheme;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        children:  true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"H1_Kanit_Light_32px\",\n                    children: \"Theme\"\n                }, void 0, false, {\n                    fileName: \"/Users/siriwats/project/template-project/src/pages/index.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    variant: \"contained\",\n                    onClick: function() {\n                        (0,nookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)(null, \"default\", cookies.default === \"default\" ? \"dark\" : \"default\");\n                    },\n                    children: \"ssss\"\n                }, void 0, false, {\n                    fileName: \"/Users/siriwats/project/template-project/src/pages/index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/siriwats/project/template-project/src/pages/index.tsx\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ 0\n    }, void 0, false, {\n        fileName: \"/Users/siriwats/project/template-project/src/pages/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"XVuuEJeQ+S2QP5dWNsvejoP+W+E=\", false, function() {\n    return [\n        _mui_material__WEBPACK_IMPORTED_MODULE_4__.useTheme\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUFrRTtBQUVoQjtBQUNMO0FBQ0c7O0FBRWhELElBQU1TLElBQUksR0FBYSxXQUFNOztJQUMzQixJQUFNQyxLQUFLLEdBQUdQLHVEQUFRLEVBQUU7SUFDeEIsSUFBTVEsT0FBTyxHQUFHUCxxREFBWSxFQUFFO0lBQzlCLElBQU0sUUFBVSxHQUFLRyxpREFBVSxDQUFDQyx3REFBWSxDQUFDLENBQXJDSSxRQUFRO0lBRWhCLHFCQUNFLDhEQUFDWiw4Q0FBRztrQkFDRCxLQUE2QixpQkFDNUIsOERBQUNNLDJDQUFROzs4QkFDUCw4REFBQ0oscURBQVU7b0JBQUNXLE9BQU8sRUFBQyxxQkFBcUI7OEJBQUMsT0FBSzs7Ozs7eUJBQWE7OEJBQzVELDhEQUFDWixpREFBTTtvQkFDTFksT0FBTyxFQUFDLFdBQVc7b0JBQ25CQyxPQUFPLEVBQUUsV0FBTTt3QkFDYlQsa0RBQVMsQ0FDUCxJQUFJLEVBQ0pVLFNBQTZCLEVBQzdCSixPQUFPLENBQUNPLE9BQU8sS0FBSyxTQUFTLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FDbkQsQ0FBQztxQkFDSDs4QkFDRixNQUVEOzs7Ozt5QkFBUzs7Ozs7O2lCQUNBLGlCQUVYLENBQVc7Ozs7O2FBRVQsQ0FDTjtDQUNIO0dBNUJLVCxJQUFJOztRQUNNTixtREFBUTs7O0FBRGxCTSxLQUFBQSxJQUFJO0FBOEJWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHBhcnNlQ29va2llcywgc2V0Q29va2llIH0gZnJvbSBcIm5vb2tpZXNcIjtcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC90aGVtZVwiO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBjb29raWVzID0gcGFyc2VDb29raWVzKCk7XG4gIGNvbnN0IHsgc2V0dGhlbWUgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICB7dHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJIMV9LYW5pdF9MaWdodF8zMnB4XCI+VGhlbWU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldENvb2tpZShcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1RIRU1FLFxuICAgICAgICAgICAgICAgIGNvb2tpZXMuZGVmYXVsdCA9PT0gXCJkZWZhdWx0XCIgPyBcImRhcmtcIiA6IFwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHNzc3NcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCb3g+PC9Cb3g+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwidXNlVGhlbWUiLCJwYXJzZUNvb2tpZXMiLCJzZXRDb29raWUiLCJGcmFnbWVudCIsInVzZUNvbnRleHQiLCJUaGVtZUNvbnRleHQiLCJIb21lIiwidGhlbWUiLCJjb29raWVzIiwic2V0dGhlbWUiLCJ2YXJpYW50Iiwib25DbGljayIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19USEVNRSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});