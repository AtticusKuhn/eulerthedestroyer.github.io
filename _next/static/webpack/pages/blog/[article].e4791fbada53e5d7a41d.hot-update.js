webpackHotUpdate_N_E("pages/blog/[article]",{

/***/ "./pages/blog/[article].js":
/*!*********************************!*\
  !*** ./pages/blog/[article].js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module, __prefresh_utils__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/preact/compat/dist/compat.module.js\");\n/* harmony import */ var _components_ArticleViewer_ArticleViewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ArticleViewer/ArticleViewer */ \"./components/ArticleViewer/ArticleViewer.js\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/eulerthedestroyer/personal_site/pages/blog/[article].js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement;\n\n\n\nvar Article = function Article(_ref) {\n  var article = _ref.article,\n      length = _ref.length,\n      rawText = _ref.rawText;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__[\"NextSeo\"], {\n    openGraph: {\n      title: article.title,\n      description: rawText.substring(0, 100),\n      url: \"https://eulerthedestroyer.github.io/blog/\".concat(article.id),\n      type: 'article',\n      article: {\n        publishedTime: article.date,\n        authors: ['https://eulerthedestroyer.github.io'],\n        tags: ['coding', 'programming', 'hacking', 'cryptocurrency', 'javascript', 'python', 'haskell']\n      }\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, article.title), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, \"published \", new Date(article.date).toString().split(\" \").slice(0, 4).join(\" \"), \" |  \", length, \" minute read\"), __jsx(_components_ArticleViewer_ArticleViewer__WEBPACK_IMPORTED_MODULE_1__[\"ArticleViewer\"], {\n    article: article,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c = Article;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\nvar _c;\n\n$RefreshReg$(_c, \"Article\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n\nconst isPrefreshComponent = __prefresh_utils__.shouldBind(module);\n\n  if (true) {\n    const currentExports = __prefresh_utils__.getExports(module);\n    const previousHotModuleExports =\n      module.hot.data && module.hot.data.moduleExports;\n\n    __prefresh_utils__.registerExports(currentExports, module.i);\n\n    if (isPrefreshComponent) {\n      if (previousHotModuleExports) {\n        try {\n          __prefresh_utils__.flush();\n          if (\n            typeof __prefresh_errors__ !== 'undefined' &&\n            __prefresh_errors__ &&\n            __prefresh_errors__.clearRuntimeErrors\n          ) {\n            __prefresh_errors__.clearRuntimeErrors();\n          }\n        } catch (e) {\n          // Only available in newer webpack versions.\n          if (module.hot.invalidate) {\n            module.hot.invalidate();\n          } else {\n            self.location.reload();\n          }\n        }\n      }\n\n      module.hot.dispose(data => {\n        data.moduleExports = __prefresh_utils__.getExports(module);\n      });\n\n      module.hot.accept(function errorRecovery() {\n        if (\n          typeof __prefresh_errors__ !== 'undefined' &&\n          __prefresh_errors__ &&\n          __prefresh_errors__.handleRuntimeError\n        ) {\n          __prefresh_errors__.handleRuntimeError(error);\n        }\n\n        __webpack_require__.c[module.i].hot.accept(errorRecovery);\n      });\n    }\n  }\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! ./node_modules/@prefresh/webpack/src/utils/prefresh.js */ \"./node_modules/@prefresh/webpack/src/utils/prefresh.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bYXJ0aWNsZV0uanM/NDRmZSJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiYXJ0aWNsZSIsImxlbmd0aCIsInJhd1RleHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3Vic3RyaW5nIiwidXJsIiwiaWQiLCJ0eXBlIiwicHVibGlzaGVkVGltZSIsImRhdGUiLCJhdXRob3JzIiwidGFncyIsIkRhdGUiLCJ0b1N0cmluZyIsInNwbGl0Iiwic2xpY2UiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUE4QjtBQUFBLE1BQTVCQyxPQUE0QixRQUE1QkEsT0FBNEI7QUFBQSxNQUFuQkMsTUFBbUIsUUFBbkJBLE1BQW1CO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQzVDLFNBQU8sb0VBQ0gsTUFBQyxnREFBRDtBQUNBLGFBQVMsRUFBRTtBQUNUQyxXQUFLLEVBQUVILE9BQU8sQ0FBQ0csS0FETjtBQUVUQyxpQkFBVyxFQUFFRixPQUFPLENBQUNHLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBb0IsR0FBcEIsQ0FGSjtBQUdUQyxTQUFHLHFEQUE4Q04sT0FBTyxDQUFDTyxFQUF0RCxDQUhNO0FBSVRDLFVBQUksRUFBRSxTQUpHO0FBS1RSLGFBQU8sRUFBRTtBQUNQUyxxQkFBYSxFQUFFVCxPQUFPLENBQUNVLElBRGhCO0FBRVBDLGVBQU8sRUFBRSxDQUNQLHFDQURPLENBRkY7QUFLUEMsWUFBSSxFQUFFLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsU0FBMUIsRUFBcUMsZ0JBQXJDLEVBQXVELFlBQXZELEVBQXFFLFFBQXJFLEVBQStFLFNBQS9FO0FBTEM7QUFMQSxLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERyxFQWdCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtaLE9BQU8sQ0FBQ0csS0FBYixDQWhCSyxFQWlCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFjLElBQUlVLElBQUosQ0FBU2IsT0FBTyxDQUFDVSxJQUFqQixFQUF1QkksUUFBdkIsR0FBa0NDLEtBQWxDLENBQXdDLEdBQXhDLEVBQTZDQyxLQUE3QyxDQUFtRCxDQUFuRCxFQUFxRCxDQUFyRCxFQUF3REMsSUFBeEQsQ0FBNkQsR0FBN0QsQ0FBZCxVQUFxRmhCLE1BQXJGLGlCQWpCSyxFQWtCTCxNQUFDLHFGQUFEO0FBQWUsV0FBTyxFQUFFRCxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEJLLENBQVA7QUFvQkQsQ0FyQkQ7O0tBQU1ELE87O0FBbURTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cvW2FydGljbGVdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QmxvZ0FydGljbGVzIH0gZnJvbSBcIkAvbGliL2dlbmVyYXRlU3RhdGljRGF0YS9ibG9nR2VuZXJhdG9yXCJcbmltcG9ydCB7QXJ0aWNsZVZpZXdlcn0gZnJvbSBcIkAvY29tcG9uZW50cy9BcnRpY2xlVmlld2VyL0FydGljbGVWaWV3ZXJcIlxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcblxuY29uc3QgQXJ0aWNsZSA9ICh7YXJ0aWNsZSwgbGVuZ3RoLCByYXdUZXh0fSk9PntcbiAgcmV0dXJuIDw+XG4gICAgICA8TmV4dFNlb1xuICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgIHRpdGxlOiBhcnRpY2xlLnRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogcmF3VGV4dC5zdWJzdHJpbmcoMCwxMDApLFxuICAgICAgICB1cmw6IGBodHRwczovL2V1bGVydGhlZGVzdHJveWVyLmdpdGh1Yi5pby9ibG9nLyR7YXJ0aWNsZS5pZH1gLFxuICAgICAgICB0eXBlOiAnYXJ0aWNsZScsXG4gICAgICAgIGFydGljbGU6IHtcbiAgICAgICAgICBwdWJsaXNoZWRUaW1lOiBhcnRpY2xlLmRhdGUsXG4gICAgICAgICAgYXV0aG9yczogW1xuICAgICAgICAgICAgJ2h0dHBzOi8vZXVsZXJ0aGVkZXN0cm95ZXIuZ2l0aHViLmlvJyxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRhZ3M6IFsnY29kaW5nJywgJ3Byb2dyYW1taW5nJywgJ2hhY2tpbmcnLCAnY3J5cHRvY3VycmVuY3knLCAnamF2YXNjcmlwdCcsICdweXRob24nLCAnaGFza2VsbCddLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICAvPlxuICAgIDxoMT57YXJ0aWNsZS50aXRsZX08L2gxPlxuICAgIDxwPnB1Ymxpc2hlZCB7bmV3IERhdGUoYXJ0aWNsZS5kYXRlKS50b1N0cmluZygpLnNwbGl0KFwiIFwiKS5zbGljZSgwLDQpLmpvaW4oXCIgXCIpfSB8ICB7bGVuZ3RofSBtaW51dGUgcmVhZDwvcD5cbiAgICA8QXJ0aWNsZVZpZXdlciBhcnRpY2xlPXthcnRpY2xlfSAvPlxuICA8Lz5cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSl7XG4gIGNvbnN0IGFydGljbGVzTGlzdCA9IGF3YWl0IGdldEJsb2dBcnRpY2xlcygpXG4gIGNvbnN0IGFydGljbGUgPSBhcnRpY2xlc0xpc3QuZmluZChhPT5hLmlkPT09cGFyYW1zLmFydGljbGUpXG4gIGNvbnN0IHJhd1RleHQ9ICBhcnRpY2xlLmZpbGUucmVwbGFjZSgvPFtePl0rPi9nLCAnJylcbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5jZWlsKChyYXdUZXh0Lmxlbmd0aCkvODYzKVxuICAvLyBjb25zb2xlLmxvZyhcImZpbGU6XFxuXFxuXFxuXCIsIGFydGljbGUuZmlsZSlcbiAgLy8gY29uc29sZS5sb2coYXJ0aWNsZS5maWxlKVxuICByZXR1cm4ge3Byb3BzOntcbiAgICByYXdUZXh0LFxuICAgIGFydGljbGUsXG4gICAgbGVuZ3RoLFxuICB9fVxuXG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKXtcbiAgY29uc3QgYXJ0aWNsZXNMaXN0ID0gYXdhaXQgZ2V0QmxvZ0FydGljbGVzKClcbiAgICByZXR1cm4ge1xuICAgIHBhdGhzOiBhcnRpY2xlc0xpc3QubWFwKChhKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGFydGljbGU6IGEuaWRcbiAgICAgIH1cbiAgICB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlXG4gIH07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[article].js\n");

/***/ })

})