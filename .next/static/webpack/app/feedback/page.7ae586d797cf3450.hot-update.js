"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/feedback/page",{

/***/ "(app-pages-browser)/./src/app/feedback/page.jsx":
/*!***********************************!*\
  !*** ./src/app/feedback/page.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Feedback = ()=>{\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    //console.log(session)\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (session.data) {\n            var _session_data;\n            const user = session === null || session === void 0 ? void 0 : (_session_data = session.data) === null || _session_data === void 0 ? void 0 : _session_data.user;\n            setData(user);\n        }\n    }, [\n        session\n    ]);\n    console.log(data === null || data === void 0 ? void 0 : data.name);\n    // const { email,name} =user;\n    // console.log(email,name)\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        rating: 5,\n        comments: \"\"\n    });\n    const [isSubmitted, setIsSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // Send the formData to your server or API for processing\n        // Set isSubmitted to true and display a \"Thank You\" message\n        setIsSubmitted(true);\n    };\n    const clearForm = ()=>{\n        setFormData({\n            name: \"\",\n            email: \"\",\n            rating: 5,\n            comments: \"\"\n        });\n        setIsSubmitted(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-xl mx-auto p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Share Your Experience\"\n            }, void 0, false, {\n                fileName: \"D:\\\\level-2\\\\assignment\\\\event-planning\\\\think-best\\\\src\\\\app\\\\feedback\\\\page.jsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"D:\\\\level-2\\\\assignment\\\\event-planning\\\\think-best\\\\src\\\\app\\\\feedback\\\\page.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"D:\\\\level-2\\\\assignment\\\\event-planning\\\\think-best\\\\src\\\\app\\\\feedback\\\\page.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\level-2\\\\assignment\\\\event-planning\\\\think-best\\\\src\\\\app\\\\feedback\\\\page.jsx\",\n                lineNumber: 68,\n                columnNumber: 12\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\level-2\\\\assignment\\\\event-planning\\\\think-best\\\\src\\\\app\\\\feedback\\\\page.jsx\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Feedback, \"v8M84SUnAw6PceO0DDs1ohSJCuc=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Feedback;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feedback);\nvar _c;\n$RefreshReg$(_c, \"Feedback\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZmVlZGJhY2svcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRDtBQUNHO0FBQ3ZCO0FBRy9CLE1BQU1NLFdBQVc7O0lBQ2IsTUFBTUMsVUFBVUgsMkRBQVVBO0lBQzFCLHNCQUFzQjtJQUV0QixNQUFNLENBQUNJLE1BQU1DLFFBQVEsR0FBRVAsK0NBQVFBLENBQUMsQ0FBQztJQUNqQ0QsZ0RBQVNBLENBQUM7UUFFTixJQUFJTSxRQUFRQyxJQUFJLEVBQUU7Z0JBR0hEO1lBQVosTUFBTUcsT0FBTUgsb0JBQUFBLCtCQUFBQSxnQkFBQUEsUUFBU0MsSUFBSSxjQUFiRCxvQ0FBQUEsY0FBZUcsSUFBSTtZQUcvQkQsUUFBUUM7UUFDWDtJQUVKLEdBQUc7UUFBQ0g7S0FBUTtJQUNaSSxRQUFRQyxHQUFHLENBQUNKLGlCQUFBQSwyQkFBQUEsS0FBTUssSUFBSTtJQUV0Qiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBRTFCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFFYiwrQ0FBUUEsQ0FBQyxDQUFDO0lBRXpDLE1BQU0sQ0FBQ2MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQztRQUNyQ1csTUFBTTtRQUNOSyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsVUFBVTtJQUNkO0lBQ0EsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNcUIsZUFBZSxDQUFDQztRQUNsQixNQUFNLEVBQUVYLElBQUksRUFBRVksS0FBSyxFQUFFLEdBQUdELEVBQUVFLE1BQU07UUFDaENULFlBQVk7WUFDUixHQUFHRCxRQUFRO1lBQ1gsQ0FBQ0gsS0FBSyxFQUFFWTtRQUNaO0lBQ0o7SUFFQSxNQUFNRSxlQUFlLENBQUNIO1FBQ2xCQSxFQUFFSSxjQUFjO1FBQ2hCLHlEQUF5RDtRQUN6RCw0REFBNEQ7UUFDNUROLGVBQWU7SUFDbkI7SUFFQSxNQUFNTyxZQUFZO1FBQ2RaLFlBQVk7WUFDUkosTUFBTTtZQUNOSyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsVUFBVTtRQUNkO1FBQ0FFLGVBQWU7SUFDbkI7SUFFQSxxQkFDSSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEwQjs7Ozs7OzBCQUV6Qyw4REFBQ0Q7O2tDQUNBLDhEQUFDQTs7Ozs7a0NBR0QsOERBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1iO0dBdkVNeEI7O1FBQ2NGLHVEQUFVQTs7O0tBRHhCRTtBQXlFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2ZlZWRiYWNrL3BhZ2UuanN4PzhkOWIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5cclxuY29uc3QgRmVlZGJhY2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhzZXNzaW9uKVxyXG4gICAgXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPXVzZVN0YXRlKHt9KVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKHNlc3Npb24uZGF0YSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICBjb25zdCB1c2VyID1zZXNzaW9uPy5kYXRhPy51c2VyO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIHNldERhdGEodXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSwgW3Nlc3Npb25dKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGE/Lm5hbWUpO1xyXG4gICAgXHJcbiAgICAvLyBjb25zdCB7IGVtYWlsLG5hbWV9ID11c2VyO1xyXG4gICAgLy8gY29uc29sZS5sb2coZW1haWwsbmFtZSlcclxuICAgXHJcbiAgICBjb25zdCBbdXNlckRhdGEgLHNldFVzZXJEYXRhXSA9dXNlU3RhdGUoe30pXHJcbiAgXHJcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcmF0aW5nOiA1LFxyXG4gICAgICAgIGNvbW1lbnRzOiAnJyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2lzU3VibWl0dGVkLCBzZXRJc1N1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgICAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgICAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBTZW5kIHRoZSBmb3JtRGF0YSB0byB5b3VyIHNlcnZlciBvciBBUEkgZm9yIHByb2Nlc3NpbmdcclxuICAgICAgICAvLyBTZXQgaXNTdWJtaXR0ZWQgdG8gdHJ1ZSBhbmQgZGlzcGxheSBhIFwiVGhhbmsgWW91XCIgbWVzc2FnZVxyXG4gICAgICAgIHNldElzU3VibWl0dGVkKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjbGVhckZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICByYXRpbmc6IDUsXHJcbiAgICAgICAgICAgIGNvbW1lbnRzOiAnJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRJc1N1Ym1pdHRlZChmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy14bCBteC1hdXRvIHAtNFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj5TaGFyZSBZb3VyIEV4cGVyaWVuY2U8L2gxPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlZWRiYWNrO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiSW1hZ2UiLCJGZWVkYmFjayIsInNlc3Npb24iLCJkYXRhIiwic2V0RGF0YSIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZW1haWwiLCJyYXRpbmciLCJjb21tZW50cyIsImlzU3VibWl0dGVkIiwic2V0SXNTdWJtaXR0ZWQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNsZWFyRm9ybSIsImRpdiIsImNsYXNzTmFtZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/feedback/page.jsx\n"));

/***/ })

});