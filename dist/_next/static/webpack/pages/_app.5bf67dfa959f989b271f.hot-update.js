webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/useShortcut.js":
/*!****************************!*\
  !*** ./lib/useShortcut.js ***!
  \****************************/
/*! exports provided: useShortcut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module, __prefresh_utils__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useShortcut\", function() { return useShortcut; });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/preact/compat/dist/compat.module.js\");\nvar _s = $RefreshSig$();\n\n// this file contains global shortcuts for my site\n// import Router from 'next/router'\n\n\nfunction useShortcut() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var keys = {};\n\n    document.onkeydown = function (e) {\n      keys[e.key.toLowerCase()] = true;\n      console.log(\"keyup\");\n      console.log(keys);\n      if (keys[\"b\"] && keys[\"Shift\"]) return router.push(\"/blog\");\n      if (e.key === \"h\" && e.shiftKey) return router.push(\"/\");\n      if (e.key === \"p\" && e.shiftKey) return router.push(\"/my-projects\");\n    };\n\n    document.onkeyup = function (e) {\n      keys[e.key.toLowerCase()] = false;\n    }; // if (e.which == 77) {\n    //   alert(\"M key was pressed\");\n    // } else if (e.ctrlKey && e.which == 66) {\n    //   alert(\"Ctrl + B shortcut combination was pressed\");\n    // } else if (e.ctrlKey && e.altKey && e.which == 89) {\n    //   alert(\"Ctrl + Alt + Y shortcut combination was pressed\");\n    // } else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {\n    //   alert(\"Ctrl + Alt + Shift + U shortcut combination was pressed\");\n    // }\n\n  }, []);\n}\n\n_s(useShortcut, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"]];\n});\n\n;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n\nconst isPrefreshComponent = __prefresh_utils__.shouldBind(module);\n\n  if (true) {\n    const currentExports = __prefresh_utils__.getExports(module);\n    const previousHotModuleExports =\n      module.hot.data && module.hot.data.moduleExports;\n\n    __prefresh_utils__.registerExports(currentExports, module.i);\n\n    if (isPrefreshComponent) {\n      if (previousHotModuleExports) {\n        try {\n          __prefresh_utils__.flush();\n          if (\n            typeof __prefresh_errors__ !== 'undefined' &&\n            __prefresh_errors__ &&\n            __prefresh_errors__.clearRuntimeErrors\n          ) {\n            __prefresh_errors__.clearRuntimeErrors();\n          }\n        } catch (e) {\n          // Only available in newer webpack versions.\n          if (module.hot.invalidate) {\n            module.hot.invalidate();\n          } else {\n            self.location.reload();\n          }\n        }\n      }\n\n      module.hot.dispose(data => {\n        data.moduleExports = __prefresh_utils__.getExports(module);\n      });\n\n      module.hot.accept(function errorRecovery() {\n        if (\n          typeof __prefresh_errors__ !== 'undefined' &&\n          __prefresh_errors__ &&\n          __prefresh_errors__.handleRuntimeError\n        ) {\n          __prefresh_errors__.handleRuntimeError(error);\n        }\n\n        __webpack_require__.c[module.i].hot.accept(errorRecovery);\n      });\n    }\n  }\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! ./node_modules/@prefresh/webpack/src/utils/prefresh.js */ \"./node_modules/@prefresh/webpack/src/utils/prefresh.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZVNob3J0Y3V0LmpzPzZiZjkiXSwibmFtZXMiOlsidXNlU2hvcnRjdXQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJrZXlzIiwiZG9jdW1lbnQiLCJvbmtleWRvd24iLCJlIiwia2V5IiwidG9Mb3dlckNhc2UiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInNoaWZ0S2V5Iiwib25rZXl1cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0EsV0FBVCxHQUFzQjtBQUFBOztBQUMzQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBSTtBQUNaLFFBQUlDLElBQUksR0FBRyxFQUFYOztBQUNBQyxZQUFRLENBQUNDLFNBQVQsR0FBcUIsVUFBQ0MsQ0FBRCxFQUFLO0FBQ3hCSCxVQUFJLENBQUNHLENBQUMsQ0FBQ0MsR0FBRixDQUFNQyxXQUFOLEVBQUQsQ0FBSixHQUE0QixJQUE1QjtBQUVBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FELGFBQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFaO0FBQ0EsVUFBR0EsSUFBSSxDQUFDLEdBQUQsQ0FBSixJQUFhQSxJQUFJLENBQUMsT0FBRCxDQUFwQixFQUErQixPQUFPSCxNQUFNLENBQUNXLElBQVAsQ0FBWSxPQUFaLENBQVA7QUFDL0IsVUFBR0wsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsR0FBVixJQUFpQkQsQ0FBQyxDQUFDTSxRQUF0QixFQUFnQyxPQUFPWixNQUFNLENBQUNXLElBQVAsQ0FBWSxHQUFaLENBQVA7QUFDaEMsVUFBR0wsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsR0FBVixJQUFpQkQsQ0FBQyxDQUFDTSxRQUF0QixFQUFnQyxPQUFPWixNQUFNLENBQUNXLElBQVAsQ0FBWSxjQUFaLENBQVA7QUFDakMsS0FSRDs7QUFTQVAsWUFBUSxDQUFDUyxPQUFULEdBQW1CLFVBQUNQLENBQUQsRUFBTztBQUN4QkgsVUFBSSxDQUFDRyxDQUFDLENBQUNDLEdBQUYsQ0FBTUMsV0FBTixFQUFELENBQUosR0FBNEIsS0FBNUI7QUFDRCxLQUZELENBWFksQ0FjWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7O0FBQ0MsR0F2QlEsRUF1QlAsRUF2Qk8sQ0FBVDtBQXdCRDs7R0EzQmVULFc7VUFDQ0UscUQ7OztBQTBCaEIiLCJmaWxlIjoiLi9saWIvdXNlU2hvcnRjdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGZpbGUgY29udGFpbnMgZ2xvYmFsIHNob3J0Y3V0cyBmb3IgbXkgc2l0ZVxuLy8gaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNob3J0Y3V0KCl7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGxldCBrZXlzID0ge31cbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSAoZSk9PntcbiAgICAgIGtleXNbZS5rZXkudG9Mb3dlckNhc2UoKV0gPSB0cnVlO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImtleXVwXCIpXG4gICAgICBjb25zb2xlLmxvZyhrZXlzKVxuICAgICAgaWYoa2V5c1tcImJcIl0gJiYga2V5c1tcIlNoaWZ0XCJdKSByZXR1cm4gcm91dGVyLnB1c2goXCIvYmxvZ1wiKVxuICAgICAgaWYoZS5rZXkgPT09IFwiaFwiICYmIGUuc2hpZnRLZXkpIHJldHVybiByb3V0ZXIucHVzaChcIi9cIilcbiAgICAgIGlmKGUua2V5ID09PSBcInBcIiAmJiBlLnNoaWZ0S2V5KSByZXR1cm4gcm91dGVyLnB1c2goXCIvbXktcHJvamVjdHNcIilcbiAgICB9XG4gICAgZG9jdW1lbnQub25rZXl1cCA9IChlKSA9PiB7XG4gICAgICBrZXlzW2Uua2V5LnRvTG93ZXJDYXNlKCldID0gZmFsc2U7XG4gICAgfTtcbiAgICAvLyBpZiAoZS53aGljaCA9PSA3Nykge1xuICAgIC8vICAgYWxlcnQoXCJNIGtleSB3YXMgcHJlc3NlZFwiKTtcbiAgICAvLyB9IGVsc2UgaWYgKGUuY3RybEtleSAmJiBlLndoaWNoID09IDY2KSB7XG4gICAgLy8gICBhbGVydChcIkN0cmwgKyBCIHNob3J0Y3V0IGNvbWJpbmF0aW9uIHdhcyBwcmVzc2VkXCIpO1xuICAgIC8vIH0gZWxzZSBpZiAoZS5jdHJsS2V5ICYmIGUuYWx0S2V5ICYmIGUud2hpY2ggPT0gODkpIHtcbiAgICAvLyAgIGFsZXJ0KFwiQ3RybCArIEFsdCArIFkgc2hvcnRjdXQgY29tYmluYXRpb24gd2FzIHByZXNzZWRcIik7XG4gICAgLy8gfSBlbHNlIGlmIChlLmN0cmxLZXkgJiYgZS5hbHRLZXkgJiYgZS5zaGlmdEtleSAmJiBlLndoaWNoID09IDg1KSB7XG4gICAgLy8gICBhbGVydChcIkN0cmwgKyBBbHQgKyBTaGlmdCArIFUgc2hvcnRjdXQgY29tYmluYXRpb24gd2FzIHByZXNzZWRcIik7XG4gIC8vIH1cbiAgfSxbXSlcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/useShortcut.js\n");

/***/ })

})