"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/article/[slug]",{

/***/ "./pages/article/[slug].js":
/*!*********************************!*\
  !*** ./pages/article/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/seo */ \"./components/seo.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/media */ \"./lib/media.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar Article = function(param) {\n    var article = param.article, categories = param.categories;\n    var imageUrl = (0,_lib_media__WEBPACK_IMPORTED_MODULE_4__.getStrapiMedia)(article.attributes.image);\n    var seo = {\n        metaTitle: article.attributes.title,\n        metaDescription: article.attributes.description,\n        shareImage: article.attributes.image,\n        article: true\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        categories: categories.data,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                seo: seo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Younes\\\\Desktop\\\\strapi-starter\\\\frontend\\\\pages\\\\article\\\\[slug].js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"banner\",\n                className: \"uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin\",\n                \"data-src\": imageUrl,\n                \"data-srcset\": imageUrl,\n                \"data-uk-img\": true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: article.attributes.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Younes\\\\Desktop\\\\strapi-starter\\\\frontend\\\\pages\\\\article\\\\[slug].js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Younes\\\\Desktop\\\\strapi-starter\\\\frontend\\\\pages\\\\article\\\\[slug].js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"uk-section\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"uk-container uk-container-small\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: article.attributes.content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Younes\\\\Desktop\\\\strapi-starter\\\\frontend\\\\pages\\\\article\\\\[slug].js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                            className: \"uk-divider-small\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Younes\\\\Desktop\\\\strapi-starter\\\\frontend\\\\pages\\\\article\\\\[slug].js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"uk-grid-small uk-flex-left\",\n                            \"data-uk-grid\": \"true\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: article.attributes.author.data.attributes.picture && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_4__.getStrapiMedia)(article.attributes.author.data.attributes.picture),\n                                        alt: article.attributes.author.data.attributes.picture.data.attributes.alternativeText,\n                                        style: {\n                                            position: \"static\",\n                                            borderRadius: \"20%\",\n                                            height: 60\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Younes\\\\Desktop\\\\strapi-starter\\\\frontend\\\\pages\\\\article\\\\[slug].js\",\n                                        lineNumber: 39,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Younes\\\\Desktop\\\\strapi-starter\\\\frontend\\\\pages\\\\article\\\\[slug].js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"uk-width-expand\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"uk-margin-remove-bottom\",\n                                            children: [\n                                                \"By \",\n                                                article.attributes.author.data.attributes.name\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Younes\\\\Desktop\\\\strapi-starter\\\\frontend\\\\pages\\\\article\\\\[slug].js\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"uk-text-meta uk-margin-remove-top\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                format: \"MMM Do YYYY\",\n                                                children: article.attributes.published_at\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Younes\\\\Desktop\\\\strapi-starter\\\\frontend\\\\pages\\\\article\\\\[slug].js\",\n                                                lineNumber: 60,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Younes\\\\Desktop\\\\strapi-starter\\\\frontend\\\\pages\\\\article\\\\[slug].js\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Younes\\\\Desktop\\\\strapi-starter\\\\frontend\\\\pages\\\\article\\\\[slug].js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Younes\\\\Desktop\\\\strapi-starter\\\\frontend\\\\pages\\\\article\\\\[slug].js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Younes\\\\Desktop\\\\strapi-starter\\\\frontend\\\\pages\\\\article\\\\[slug].js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Younes\\\\Desktop\\\\strapi-starter\\\\frontend\\\\pages\\\\article\\\\[slug].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Younes\\\\Desktop\\\\strapi-starter\\\\frontend\\\\pages\\\\article\\\\[slug].js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_c = Article;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\nvar _c;\n$RefreshReg$(_c, \"Article\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7aUNBQ0Y7Ozs7Ozt5QkFDRjs7Ozs7cUJBQ0Y7Ozs7OzthQUNDLENBQ1Y7Q0FDRjtBQTVES3JDLEtBQUFBLE9BQU87O0FBNkZiLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FydGljbGUvW3NsdWddLmpzPzQ0MjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vbWVudCBmcm9tIFwicmVhY3QtbW9tZW50XCJcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcclxuXHJcbmltcG9ydCBTZW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VvXCJcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIlxyXG5cclxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiXHJcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uLy4uL2xpYi9tZWRpYVwiXHJcblxyXG5jb25zdCBBcnRpY2xlID0gKHsgYXJ0aWNsZSwgY2F0ZWdvcmllcyB9KSA9PiB7XHJcbiAgY29uc3QgaW1hZ2VVcmwgPSBnZXRTdHJhcGlNZWRpYShhcnRpY2xlLmF0dHJpYnV0ZXMuaW1hZ2UpXHJcblxyXG4gIGNvbnN0IHNlbyA9IHtcclxuICAgIG1ldGFUaXRsZTogYXJ0aWNsZS5hdHRyaWJ1dGVzLnRpdGxlLFxyXG4gICAgbWV0YURlc2NyaXB0aW9uOiBhcnRpY2xlLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICBzaGFyZUltYWdlOiBhcnRpY2xlLmF0dHJpYnV0ZXMuaW1hZ2UsXHJcbiAgICBhcnRpY2xlOiB0cnVlLFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllcy5kYXRhfT5cclxuICAgICAgPFNlbyBzZW89e3Nlb30gLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGlkPVwiYmFubmVyXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJ1ay1oZWlnaHQtbWVkaXVtIHVrLWZsZXggdWstZmxleC1jZW50ZXIgdWstZmxleC1taWRkbGUgdWstYmFja2dyb3VuZC1jb3ZlciB1ay1saWdodCB1ay1wYWRkaW5nIHVrLW1hcmdpblwiXHJcbiAgICAgICAgZGF0YS1zcmM9e2ltYWdlVXJsfVxyXG4gICAgICAgIGRhdGEtc3Jjc2V0PXtpbWFnZVVybH1cclxuICAgICAgICBkYXRhLXVrLWltZ1xyXG4gICAgICA+XHJcbiAgICAgICAgPGgxPnthcnRpY2xlLmF0dHJpYnV0ZXMudGl0bGV9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstc2VjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1zbWFsbFwiPlxyXG4gICAgICAgICAgPFJlYWN0TWFya2Rvd24gY2hpbGRyZW49e2FydGljbGUuYXR0cmlidXRlcy5jb250ZW50fSAvPlxyXG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInVrLWRpdmlkZXItc21hbGxcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1ncmlkLXNtYWxsIHVrLWZsZXgtbGVmdFwiIGRhdGEtdWstZ3JpZD1cInRydWVcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7YXJ0aWNsZS5hdHRyaWJ1dGVzLmF1dGhvci5kYXRhLmF0dHJpYnV0ZXMucGljdHVyZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17Z2V0U3RyYXBpTWVkaWEoXHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5hdHRyaWJ1dGVzLmF1dGhvci5kYXRhLmF0dHJpYnV0ZXMucGljdHVyZVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGUuYXR0cmlidXRlcy5hdXRob3IuZGF0YS5hdHRyaWJ1dGVzLnBpY3R1cmUuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmF0dHJpYnV0ZXMuYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstd2lkdGgtZXhwYW5kXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidWstbWFyZ2luLXJlbW92ZS1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIEJ5IHthcnRpY2xlLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1ay10ZXh0LW1ldGEgdWstbWFyZ2luLXJlbW92ZS10b3BcIj5cclxuICAgICAgICAgICAgICAgIDxNb21lbnQgZm9ybWF0PVwiTU1NIERvIFlZWVlcIj5cclxuICAgICAgICAgICAgICAgICAge2FydGljbGUuYXR0cmlidXRlcy5wdWJsaXNoZWRfYXR9XHJcbiAgICAgICAgICAgICAgICA8L01vbWVudD5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgYXJ0aWNsZXNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9hcnRpY2xlc1wiLCB7XHJcbiAgICBsb2NhbGU6IFwiYXJcIixcclxuICAgIGZpZWxkczogW1wic2x1Z1wiXSxcclxuICB9KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IGFydGljbGVzUmVzLmRhdGEubWFwKChhcnRpY2xlKSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBzbHVnOiBhcnRpY2xlLmF0dHJpYnV0ZXMuc2x1ZyxcclxuICAgICAgfSxcclxuICAgIH0pKSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgYXJ0aWNsZXNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9hcnRpY2xlc1wiLCB7XHJcbiAgICBmaWx0ZXJzOiB7XHJcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnLFxyXG4gICAgfSxcclxuICAgIHBvcHVsYXRlOiBbXCJpbWFnZVwiLCBcImNhdGVnb3J5XCIsIFwiYXV0aG9yLnBpY3R1cmVcIl0sXHJcbiAgfSlcclxuICBjb25zdCBjYXRlZ29yaWVzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgYXJ0aWNsZTogYXJ0aWNsZXNSZXMuZGF0YVswXSwgY2F0ZWdvcmllczogY2F0ZWdvcmllc1JlcyB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVcclxuIl0sIm5hbWVzIjpbIk1vbWVudCIsIlJlYWN0TWFya2Rvd24iLCJTZW8iLCJMYXlvdXQiLCJnZXRTdHJhcGlNZWRpYSIsIkFydGljbGUiLCJhcnRpY2xlIiwiY2F0ZWdvcmllcyIsImltYWdlVXJsIiwiYXR0cmlidXRlcyIsImltYWdlIiwic2VvIiwibWV0YVRpdGxlIiwidGl0bGUiLCJtZXRhRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInNoYXJlSW1hZ2UiLCJkYXRhIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJkYXRhLXNyYyIsImRhdGEtc3Jjc2V0IiwiZGF0YS11ay1pbWciLCJoMSIsImNoaWxkcmVuIiwiY29udGVudCIsImhyIiwiZGF0YS11ay1ncmlkIiwiYXV0aG9yIiwicGljdHVyZSIsImltZyIsInNyYyIsImFsdCIsImFsdGVybmF0aXZlVGV4dCIsInN0eWxlIiwicG9zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJwIiwibmFtZSIsImZvcm1hdCIsInB1Ymxpc2hlZF9hdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/article/[slug].js\n"));

/***/ })

});