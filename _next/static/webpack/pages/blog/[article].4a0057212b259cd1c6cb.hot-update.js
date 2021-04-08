webpackHotUpdate_N_E("pages/blog/[article]",{

/***/ "./pages/blog/[article].js":
/*!*********************************!*\
  !*** ./pages/blog/[article].js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module, __prefresh_utils__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/preact/compat/dist/compat.module.js\");\n/* harmony import */ var _components_CodeViewer_CodeViewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CodeViewer/CodeViewer */ \"./components/CodeViewer/CodeViewer.js\");\n/* harmony import */ var react_jsx_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jsx-parser */ \"./node_modules/react-jsx-parser/dist/umd/react-jsx-parser.min.js\");\n/* harmony import */ var react_jsx_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_parser__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/home/eulerthedestroyer/personal_site/pages/blog/[article].js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement;\n\n\n\nvar Article = function Article(_ref) {\n  var article = _ref.article,\n      length = _ref.length;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Fragment, null, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, article.title), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, \"published \", new Date(article.date).toString().split(\" \").slice(0, 4).join(\" \"), \" |  \", length, \" minute read\"), __jsx(react_jsx_parser__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    components: {\n      AceCodeViewer: _components_CodeViewer_CodeViewer__WEBPACK_IMPORTED_MODULE_1__[\"AceCodeViewer\"]\n    },\n    css: article.css,\n    jsx: article.file,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c = Article;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\nvar _c;\n\n$RefreshReg$(_c, \"Article\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n\nconst isPrefreshComponent = __prefresh_utils__.shouldBind(module);\n\n  if (true) {\n    const currentExports = __prefresh_utils__.getExports(module);\n    const previousHotModuleExports =\n      module.hot.data && module.hot.data.moduleExports;\n\n    __prefresh_utils__.registerExports(currentExports, module.i);\n\n    if (isPrefreshComponent) {\n      if (previousHotModuleExports) {\n        try {\n          __prefresh_utils__.flush();\n          if (\n            typeof __prefresh_errors__ !== 'undefined' &&\n            __prefresh_errors__ &&\n            __prefresh_errors__.clearRuntimeErrors\n          ) {\n            __prefresh_errors__.clearRuntimeErrors();\n          }\n        } catch (e) {\n          // Only available in newer webpack versions.\n          if (module.hot.invalidate) {\n            module.hot.invalidate();\n          } else {\n            self.location.reload();\n          }\n        }\n      }\n\n      module.hot.dispose(data => {\n        data.moduleExports = __prefresh_utils__.getExports(module);\n      });\n\n      module.hot.accept(function errorRecovery() {\n        if (\n          typeof __prefresh_errors__ !== 'undefined' &&\n          __prefresh_errors__ &&\n          __prefresh_errors__.handleRuntimeError\n        ) {\n          __prefresh_errors__.handleRuntimeError(error);\n        }\n\n        __webpack_require__.c[module.i].hot.accept(errorRecovery);\n      });\n    }\n  }\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! ./node_modules/@prefresh/webpack/src/utils/prefresh.js */ \"./node_modules/@prefresh/webpack/src/utils/prefresh.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bYXJ0aWNsZV0uanM/NDRmZSJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiYXJ0aWNsZSIsImxlbmd0aCIsInRpdGxlIiwiRGF0ZSIsImRhdGUiLCJ0b1N0cmluZyIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwiQWNlQ29kZVZpZXdlciIsImNzcyIsImZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFxQjtBQUFBLE1BQW5CQyxPQUFtQixRQUFuQkEsT0FBbUI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDbkMsU0FBTyxvRUFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtELE9BQU8sQ0FBQ0UsS0FBYixDQURLLEVBRUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBYyxJQUFJQyxJQUFKLENBQVNILE9BQU8sQ0FBQ0ksSUFBakIsRUFBdUJDLFFBQXZCLEdBQWtDQyxLQUFsQyxDQUF3QyxHQUF4QyxFQUE2Q0MsS0FBN0MsQ0FBbUQsQ0FBbkQsRUFBcUQsQ0FBckQsRUFBd0RDLElBQXhELENBQTZELEdBQTdELENBQWQsVUFBcUZQLE1BQXJGLGlCQUZLLEVBSUwsTUFBQyx1REFBRDtBQUNBLGNBQVUsRUFBRTtBQUFFUSxtQkFBYSxFQUFiQSwrRUFBYUE7QUFBZixLQURaO0FBRUEsT0FBRyxFQUFFVCxPQUFPLENBQUNVLEdBRmI7QUFHQSxPQUFHLEVBQUVWLE9BQU8sQ0FBQ1csSUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkssQ0FBUDtBQVVELENBWEQ7O0tBQU1aLE87O0FBc0NTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cvW2FydGljbGVdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QmxvZ0FydGljbGVzIH0gZnJvbSBcIkAvbGliL2dlbmVyYXRlU3RhdGljRGF0YS9ibG9nR2VuZXJhdG9yXCJcbmltcG9ydCB7QWNlQ29kZVZpZXdlcn0gZnJvbSBcIkAvY29tcG9uZW50cy9Db2RlVmlld2VyL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IEpzeFBhcnNlciBmcm9tICdyZWFjdC1qc3gtcGFyc2VyJ1xuXG5jb25zdCBBcnRpY2xlID0gKHthcnRpY2xlLCBsZW5ndGh9KT0+e1xuICByZXR1cm4gPD5cbiAgICA8aDE+e2FydGljbGUudGl0bGV9PC9oMT5cbiAgICA8cD5wdWJsaXNoZWQge25ldyBEYXRlKGFydGljbGUuZGF0ZSkudG9TdHJpbmcoKS5zcGxpdChcIiBcIikuc2xpY2UoMCw0KS5qb2luKFwiIFwiKX0gfCAge2xlbmd0aH0gbWludXRlIHJlYWQ8L3A+XG4gICAgey8qIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6YXJ0aWNsZS5maWxlfX0gY3NzPXthcnRpY2xlLnN0eWxlfSAvPiAqL31cbiAgICA8SnN4UGFyc2VyXG4gICAgY29tcG9uZW50cz17eyBBY2VDb2RlVmlld2VyIH19XG4gICAgY3NzPXthcnRpY2xlLmNzc31cbiAgICBqc3g9e2FydGljbGUuZmlsZX1cbiAgLz5cbiAgPC8+XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pe1xuICBjb25zdCBhcnRpY2xlc0xpc3QgPSBhd2FpdCBnZXRCbG9nQXJ0aWNsZXMoKVxuICBjb25zdCBhcnRpY2xlID0gYXJ0aWNsZXNMaXN0LmZpbmQoYT0+YS5pZD09PXBhcmFtcy5hcnRpY2xlKVxuICBjb25zdCBsZW5ndGggPSBNYXRoLmNlaWwoKGFydGljbGUuZmlsZS5yZXBsYWNlKC88W14+XSs+L2csICcnKS5sZW5ndGgpLzg2MylcbiAgY29uc29sZS5sb2coYXJ0aWNsZS5maWxlKVxuICByZXR1cm4ge3Byb3BzOntcbiAgICBhcnRpY2xlLFxuICAgIGxlbmd0aCxcbiAgfX1cblxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCl7XG4gIGNvbnN0IGFydGljbGVzTGlzdCA9IGF3YWl0IGdldEJsb2dBcnRpY2xlcygpXG4gICAgcmV0dXJuIHtcbiAgICBwYXRoczogYXJ0aWNsZXNMaXN0Lm1hcCgoYSkgPT4gKHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBhcnRpY2xlOiBhLmlkXG4gICAgICB9XG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[article].js\n");

/***/ })

})