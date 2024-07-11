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

/***/ "./src/layouts/Settings.js":
/*!*********************************!*\
  !*** ./src/layouts/Settings.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/context */ \"./src/context/context.js\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar colors = [\n    \"#4169e1\",\n    \"#66B95C\",\n    \"#ff9800\",\n    \"#ff5e94\",\n    \"#fa5b0f\",\n    \"#f39977\",\n    \"#9200ee\",\n    \"#00D4BD\",\n    \"#5e9e9f\",\n    \"#EB4A4C\",\n    \"#666d41\",\n    \"#fe0000\", \n];\nvar Settings = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), toggle = ref[0], setToggle = ref[1];\n    var colorContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.context);\n    var colorChange = colorContext.colorChange, getColor = colorContext.getColor, changeCursor = colorContext.changeCursor, getMagicCursor = colorContext.getMagicCursor, megicCursor = colorContext.megicCursor;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getColor(\"#eb4a4c\");\n        getMagicCursor(\"show\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"_tm_settings \".concat(toggle ? \"opened\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"icon\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"svg\",\n                        src: \"img/setting.svg\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\layouts\\\\Settings.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"link\",\n                        href: \"#\",\n                        onClick: function() {\n                            return setToggle(!toggle);\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\layouts\\\\Settings.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\layouts\\\\Settings.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"title\",\n                        children: \"Unlimited Colors\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\layouts\\\\Settings.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"colors\",\n                        children: colors.map(function(color, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    \"data-color\": color,\n                                    style: {\n                                        backgroundColor: color,\n                                        marginRight: \"5px\"\n                                    },\n                                    onClick: function() {\n                                        return colorChange(color);\n                                    }\n                                }, i, false, {\n                                    fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\layouts\\\\Settings.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, _this1)\n                            }, i, false, {\n                                fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\layouts\\\\Settings.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\layouts\\\\Settings.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"title\",\n                        children: \"Magic Cursor\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\layouts\\\\Settings.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"cursor\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"\".concat(megicCursor == \"show\" ? \"showme\" : \"\", \" show\"),\n                                    onClick: function() {\n                                        return changeCursor(\"show\");\n                                    },\n                                    href: \"#\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\layouts\\\\Settings.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\layouts\\\\Settings.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"\".concat(megicCursor != \"show\" ? \"showme\" : \"hide\"),\n                                    href: \"#\",\n                                    onClick: function() {\n                                        return changeCursor(\"hide\");\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"svg\",\n                                        src: \"img/arrow.svg\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\layouts\\\\Settings.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\layouts\\\\Settings.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\layouts\\\\Settings.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\layouts\\\\Settings.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\layouts\\\\Settings.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\WEB\\\\@@.TEMPLATES\\\\portfolio\\\\src\\\\layouts\\\\Settings.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(Settings, \"Mb+ZywcASN0v2FMEX9rto1I9gfU=\");\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsTUFBTSxDQUFDO3FDQUFBO29DQUNuQ1MsSUFBSSxFQUFDLEdBQUc7Ozs7O3lDQUNSOzs7OztxQ0FDQzswQ0FDTCw4REFBQ08sSUFBRTswQ0FDRCw0RUFBQ1IsR0FBQztvQ0FDQUosU0FBUyxFQUFFLEVBQUMsQ0FBNEMsT0FBMUNGLFdBQVcsSUFBSSxNQUFNLEdBQUcsUUFBUSxHQUFHLE1BQU0sQ0FBRTtvQ0FDekRPLElBQUksRUFBQyxHQUFHO29DQUNSQyxPQUFPLEVBQUU7K0NBQU1WLFlBQVksQ0FBQyxNQUFNLENBQUM7cUNBQUE7OENBRW5DLDRFQUFDSyxLQUFHO3dDQUFDRCxTQUFTLEVBQUMsS0FBSzt3Q0FBQ0UsR0FBRyxFQUFDLGVBQWU7d0NBQUNDLEdBQUcsRUFBQyxFQUFFOzs7Ozs2Q0FBRzs7Ozs7eUNBQ2hEOzs7OztxQ0FDRDs7Ozs7OzZCQUNGOzs7Ozs7cUJBQ0Q7Ozs7OzthQUNGLENBQ047Q0FDSDtHQXBES2IsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBcURkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvU2V0dGluZ3MuanM/YjdhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0XCI7XHJcblxyXG5jb25zdCBjb2xvcnMgPSBbXHJcbiAgXCIjNDE2OWUxXCIsXHJcbiAgXCIjNjZCOTVDXCIsXHJcbiAgXCIjZmY5ODAwXCIsXHJcbiAgXCIjZmY1ZTk0XCIsXHJcbiAgXCIjZmE1YjBmXCIsXHJcbiAgXCIjZjM5OTc3XCIsXHJcbiAgXCIjOTIwMGVlXCIsXHJcbiAgXCIjMDBENEJEXCIsXHJcbiAgXCIjNWU5ZTlmXCIsXHJcbiAgXCIjRUI0QTRDXCIsXHJcbiAgXCIjNjY2ZDQxXCIsXHJcbiAgXCIjZmUwMDAwXCIsXHJcbl07XHJcblxyXG5jb25zdCBTZXR0aW5ncyA9ICgpID0+IHtcclxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNvbG9yQ29udGV4dCA9IHVzZUNvbnRleHQoY29udGV4dCk7XHJcbiAgY29uc3QgeyBjb2xvckNoYW5nZSwgZ2V0Q29sb3IsIGNoYW5nZUN1cnNvciwgZ2V0TWFnaWNDdXJzb3IsIG1lZ2ljQ3Vyc29yIH0gPVxyXG4gICAgY29sb3JDb250ZXh0O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRDb2xvcihcIiNlYjRhNGNcIik7XHJcbiAgICBnZXRNYWdpY0N1cnNvcihcInNob3dcIik7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YF90bV9zZXR0aW5ncyAke3RvZ2dsZSA/IFwib3BlbmVkXCIgOiBcIlwifWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInN2Z1wiIHNyYz1cImltZy9zZXR0aW5nLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKCF0b2dnbGUpfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5VbmxpbWl0ZWQgQ29sb3JzPC9zcGFuPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2xvcnNcIj5cclxuICAgICAgICAgIHtjb2xvcnMubWFwKChjb2xvciwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1jb2xvcj17Y29sb3J9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLCBtYXJnaW5SaWdodDogYDVweGAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbG9yQ2hhbmdlKGNvbG9yKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPk1hZ2ljIEN1cnNvcjwvc3Bhbj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3Vyc29yXCI+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHttZWdpY0N1cnNvciA9PSBcInNob3dcIiA/IFwic2hvd21lXCIgOiBcIlwifSBzaG93YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDdXJzb3IoXCJzaG93XCIpfVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHttZWdpY0N1cnNvciAhPSBcInNob3dcIiA/IFwic2hvd21lXCIgOiBcImhpZGVcIn1gfVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDdXJzb3IoXCJoaWRlXCIpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzdmdcIiBzcmM9XCJpbWcvYXJyb3cuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29udGV4dCIsImNvbG9ycyIsIlNldHRpbmdzIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwiY29sb3JDb250ZXh0IiwiY29sb3JDaGFuZ2UiLCJnZXRDb2xvciIsImNoYW5nZUN1cnNvciIsImdldE1hZ2ljQ3Vyc29yIiwibWVnaWNDdXJzb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJhIiwiaHJlZiIsIm9uQ2xpY2siLCJzcGFuIiwidWwiLCJtYXAiLCJjb2xvciIsImkiLCJsaSIsImRhdGEtY29sb3IiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpblJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layouts/Settings.js\n");

/***/ })

});