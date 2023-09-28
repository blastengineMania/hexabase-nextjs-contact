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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hexabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hexabase */ \"./pages/hexabase.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const defaultValue = {\n        company: \"\",\n        name: \"\",\n        email: \"\",\n        type: \"\",\n        message: \"\"\n    };\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(defaultValue);\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [project, setProject] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const initialize = async ()=>{\n        await _hexabase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setToken(\"eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjI2NDE4ODE5OTMsImlhdCI6MTY5NTgwMTk5Mywic3ViIjoiNjJiYWMwZmQyYzg3YjljMmJmMjNhMzEzIiwidW4iOiIifQ.RnhVhhb0hUGrFfBzI1sDfO6cw7qIQtlsGh0upGBlFw9D0KW6OiAMvsxOInS10D9tr57pTF_lK_AYH1vJ5c9UftIYjS34ncQx8QgTm7nkdF6JwVh5mfU8z93qjK355_bkEW-z2rl2FfFuj6ac3SGPjK5XW3tLbCiADIq9ivZyOEjR1JBq4699kd2XCIyzhF1iVIjIEH3GM5OhawNk63RsbXqy38SV19SgLsYSy5a_xn7YUWBxnFrvaki6i7w7I7THXUlOBJnzg_zPEUuUSon4ZTLeaIRdMNZVL75X6AwFJSMJ6niYM5u0YcrXQQO9xdJdyjU-M18MEqLZuec0_HXTkg\");\n        await _hexabase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setWorkspace(\"644f6e5ab30d853869ec919f\");\n        const project = await _hexabase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].currentWorkspace.project(\"650a30501222568b1ae7a2c2\");\n        const datastore = await project.datastore(\"6513e27c8737426a5bfcc2ba\");\n        setProject(project);\n        const field = await datastore.field(\"type\");\n        const options = await field.options();\n        setForm({\n            ...form,\n            ...{\n                type: options[0].id\n            }\n        });\n        setOptions(options.map((option)=>{\n            return {\n                value: option.id,\n                label: option.value.ja\n            };\n        }));\n    };\n    const send = async (e)=>{\n        e.preventDefault();\n        const datastore = await project.datastore(\"6513e27c8737426a5bfcc2ba\");\n        const field = await datastore.field(\"type\");\n        const options = await field.options();\n        const option = options.find((option)=>option.id === form.type);\n        console.log(option);\n        const item = await datastore.item();\n        await item.set(\"company\", form.company).set(\"name\", form.name).set(\"type\", option.id).set(\"email\", form.email).set(\"message\", form.message).save();\n        alert(\"送信しました\");\n        setForm(defaultValue);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        initialize();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"お問い合わせ\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                            children: \"お問い合わせ\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"container\",\n                            onSubmit: send,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"company block\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"frm-company\",\n                                            children: \"会社名\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"frm-company\",\n                                            type: \"text\",\n                                            value: form.company,\n                                            autoComplete: \"company\",\n                                            onChange: (e)=>setForm({\n                                                    ...form,\n                                                    ...{\n                                                        company: e.target.value\n                                                    }\n                                                }),\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"account block\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"frm-name\",\n                                            children: \"名前\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                                            lineNumber: 104,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"frm-name\",\n                                            type: \"text\",\n                                            value: form.name,\n                                            autoComplete: \"name\",\n                                            onChange: (e)=>setForm({\n                                                    ...form,\n                                                    ...{\n                                                        name: e.target.value\n                                                    }\n                                                }),\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"email block\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"frm-email\",\n                                            children: \"メールアドレス\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                                            lineNumber: 117,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"frm-email\",\n                                            type: \"email\",\n                                            value: form.email,\n                                            autoComplete: \"email\",\n                                            onChange: (e)=>setForm({\n                                                    ...form,\n                                                    ...{\n                                                        email: e.target.value\n                                                    }\n                                                }),\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                                            lineNumber: 118,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"block type\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"frm-type\",\n                                            children: \"お問い合わせ種別\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                                            lineNumber: 130,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                            onChange: (e)=>setForm({\n                                                    ...form,\n                                                    ...{\n                                                        type: e.target.value\n                                                    }\n                                                }),\n                                            children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: option.value,\n                                                    children: option.label\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                                                    lineNumber: 137,\n                                                    columnNumber: 19\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                                            lineNumber: 131,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"message block\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"frm-message\",\n                                            children: \"Message\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                                            lineNumber: 142,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            id: \"frm-message\",\n                                            rows: 6,\n                                            value: form.message,\n                                            onChange: (e)=>setForm({\n                                                    ...form,\n                                                    ...{\n                                                        message: e.target.value\n                                                    }\n                                                })\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                                            lineNumber: 143,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: send,\n                                    children: \"送信\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                                    lineNumber: 153,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nakatsugawa/Downloads/stackblitz-starters-zzhs4a/pages/index.tsx\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"Ul4t9ieeKE1erExvFGo+HTOl3VU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLOzhEQUFHRCxPQUFPRSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJaEQsOERBQUNZO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ2I7NENBQU1tQixTQUFRO3NEQUFjOzs7Ozs7c0RBQzdCLDhEQUFDTzs0Q0FDQzlCLElBQUc7NENBQ0grQixNQUFNOzRDQUNONUIsT0FBT3JCLEtBQUtELE9BQU87NENBQ25CNkMsVUFBVSxDQUFDbkIsSUFDVHhCLFFBQVE7b0RBQUUsR0FBR0QsSUFBSTtvREFBRSxHQUFHO3dEQUFFRCxTQUFTMEIsRUFBRW9CLE1BQU0sQ0FBQ3hCLEtBQUs7b0RBQUMsQ0FBQztnREFBQzs7Ozs7Ozs7Ozs7OzhDQUt4RCw4REFBQzZCO29DQUFPQyxTQUFTM0I7OENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkM7R0EzSXdCL0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgY2xpZW50LCB7IEl0ZW0sIFByb2plY3QgfSBmcm9tICcuL2hleGFiYXNlJztcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBmb3JtRGF0YSA9IHtcbiAgY29tcGFueTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufTtcblxudHlwZSBTZWxlY3RPcHRpb24gPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBkZWZhdWx0VmFsdWU6IGZvcm1EYXRhID0ge1xuICAgIGNvbXBhbnk6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICB0eXBlOiAnJyxcbiAgICBtZXNzYWdlOiAnJyxcbiAgfTtcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGU8Zm9ybURhdGE+KGRlZmF1bHRWYWx1ZSk7XG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlPFNlbGVjdE9wdGlvbltdPihbXSk7XG4gIGNvbnN0IFtwcm9qZWN0LCBzZXRQcm9qZWN0XSA9IHVzZVN0YXRlPFByb2plY3Q+KG51bGwpO1xuXG4gIGNvbnN0IGluaXRpYWxpemUgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgY2xpZW50LnNldFRva2VuKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BVQkxJQ19UT0tFTiEpO1xuICAgIGF3YWl0IGNsaWVudC5zZXRXb3Jrc3BhY2UocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV09SS1NQQUNFX0lEISk7XG4gICAgY29uc3QgcHJvamVjdCA9IGF3YWl0IGNsaWVudC5jdXJyZW50V29ya3NwYWNlLnByb2plY3QoXG4gICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QUk9KRUNUX0lEIVxuICAgICk7XG4gICAgY29uc3QgZGF0YXN0b3JlID0gYXdhaXQgcHJvamVjdC5kYXRhc3RvcmUoXG4gICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19EQVRBU1RPUkVfSUQhXG4gICAgKTtcbiAgICBzZXRQcm9qZWN0KHByb2plY3QpO1xuICAgIGNvbnN0IGZpZWxkID0gYXdhaXQgZGF0YXN0b3JlLmZpZWxkKCd0eXBlJyk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGF3YWl0IGZpZWxkLm9wdGlvbnMoKTtcbiAgICBzZXRGb3JtKHsgLi4uZm9ybSwgLi4ueyB0eXBlOiBvcHRpb25zWzBdLmlkIH0gfSk7XG4gICAgc2V0T3B0aW9ucyhcbiAgICAgIG9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uLmlkLFxuICAgICAgICAgIGxhYmVsOiBvcHRpb24udmFsdWUuamEsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3Qgc2VuZCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRhdGFzdG9yZSA9IGF3YWl0IHByb2plY3QuZGF0YXN0b3JlKFxuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREFUQVNUT1JFX0lEIVxuICAgICk7XG4gICAgY29uc3QgZmllbGQgPSBhd2FpdCBkYXRhc3RvcmUuZmllbGQoJ3R5cGUnKTtcbiAgICBjb25zdCBvcHRpb25zID0gYXdhaXQgZmllbGQub3B0aW9ucygpO1xuICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbnMuZmluZCgob3B0aW9uKSA9PiBvcHRpb24uaWQgPT09IGZvcm0udHlwZSk7XG4gICAgY29uc29sZS5sb2cob3B0aW9uKTtcbiAgICBjb25zdCBpdGVtID0gYXdhaXQgZGF0YXN0b3JlLml0ZW0oKTtcbiAgICBhd2FpdCBpdGVtXG4gICAgICAuc2V0KCdjb21wYW55JywgZm9ybS5jb21wYW55KVxuICAgICAgLnNldCgnbmFtZScsIGZvcm0ubmFtZSlcbiAgICAgIC5zZXQoJ3R5cGUnLCBvcHRpb24uaWQpXG4gICAgICAuc2V0KCdlbWFpbCcsIGZvcm0uZW1haWwpXG4gICAgICAuc2V0KCdtZXNzYWdlJywgZm9ybS5tZXNzYWdlKVxuICAgICAgLnNhdmUoKTtcbiAgICBhbGVydCgn6YCB5L+h44GX44G+44GX44GfJyk7XG4gICAgc2V0Rm9ybShkZWZhdWx0VmFsdWUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5pdGlhbGl6ZSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+44GK5ZWP44GE5ZCI44KP44GbPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+44GK5ZWP44GE5ZCI44KP44GbPC9oMz5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjb250YWluZXJcIiBvblN1Ym1pdD17c2VuZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnkgYmxvY2tcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmcm0tY29tcGFueVwiPuS8muekvuWQjTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwiZnJtLWNvbXBhbnlcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5jb21wYW55fVxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImNvbXBhbnlcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgIHNldEZvcm0oeyAuLi5mb3JtLCAuLi57IGNvbXBhbnk6IGUudGFyZ2V0LnZhbHVlIH0gfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50IGJsb2NrXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZnJtLW5hbWVcIj7lkI3liY08L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cImZybS1uYW1lXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubmFtZX1cbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICBzZXRGb3JtKHsgLi4uZm9ybSwgLi4ueyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9IH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1haWwgYmxvY2tcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmcm0tZW1haWxcIj7jg6Hjg7zjg6vjgqLjg4njg6zjgrk8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cImZybS1lbWFpbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbH1cbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgc2V0Rm9ybSh7IC4uLmZvcm0sIC4uLnsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0gfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayB0eXBlXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZnJtLXR5cGVcIj7jgYrllY/jgYTlkIjjgo/jgZvnqK7liKU8L2xhYmVsPlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgc2V0Rm9ybSh7IC4uLmZvcm0sIC4uLnsgdHlwZTogZS50YXJnZXQudmFsdWUgfSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtvcHRpb24udmFsdWV9PntvcHRpb24ubGFiZWx9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UgYmxvY2tcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmcm0tbWVzc2FnZVwiPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICBpZD1cImZybS1tZXNzYWdlXCJcbiAgICAgICAgICAgICAgICByb3dzPXs2fVxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgc2V0Rm9ybSh7IC4uLmZvcm0sIC4uLnsgbWVzc2FnZTogZS50YXJnZXQudmFsdWUgfSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlbmR9PumAgeS/oTwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsImNsaWVudCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsImRlZmF1bHRWYWx1ZSIsImNvbXBhbnkiLCJuYW1lIiwiZW1haWwiLCJ0eXBlIiwibWVzc2FnZSIsImZvcm0iLCJzZXRGb3JtIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJwcm9qZWN0Iiwic2V0UHJvamVjdCIsImluaXRpYWxpemUiLCJzZXRUb2tlbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19QVUJMSUNfVE9LRU4iLCJzZXRXb3Jrc3BhY2UiLCJORVhUX1BVQkxJQ19XT1JLU1BBQ0VfSUQiLCJjdXJyZW50V29ya3NwYWNlIiwiTkVYVF9QVUJMSUNfUFJPSkVDVF9JRCIsImRhdGFzdG9yZSIsIk5FWFRfUFVCTElDX0RBVEFTVE9SRV9JRCIsImZpZWxkIiwiaWQiLCJtYXAiLCJvcHRpb24iLCJ2YWx1ZSIsImxhYmVsIiwiamEiLCJzZW5kIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmluZCIsImNvbnNvbGUiLCJsb2ciLCJpdGVtIiwic2V0Iiwic2F2ZSIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtYWluIiwiaDMiLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJpbnB1dCIsImF1dG9Db21wbGV0ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJzZWxlY3QiLCJ0ZXh0YXJlYSIsInJvd3MiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});