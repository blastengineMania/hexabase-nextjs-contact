"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/extract-files";
exports.ids = ["vendor-chunks/extract-files"];
exports.modules = {

/***/ "../../Code/Hexabase/hexabase-js/node_modules/extract-files/public/ReactNativeFile.js":
/*!********************************************************************************************!*\
  !*** ../../Code/Hexabase/hexabase-js/node_modules/extract-files/public/ReactNativeFile.js ***!
  \********************************************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function ReactNativeFile(_ref) {\n  var uri = _ref.uri,\n    name = _ref.name,\n    type = _ref.type;\n  this.uri = uri;\n  this.name = name;\n  this.type = type;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vQ29kZS9IZXhhYmFzZS9oZXhhYmFzZS1qcy9ub2RlX21vZHVsZXMvZXh0cmFjdC1maWxlcy9wdWJsaWMvUmVhY3ROYXRpdmVGaWxlLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uLi8uLi9Db2RlL0hleGFiYXNlL2hleGFiYXNlLWpzL25vZGVfbW9kdWxlcy9leHRyYWN0LWZpbGVzL3B1YmxpYy9SZWFjdE5hdGl2ZUZpbGUuanM/ZmY3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gUmVhY3ROYXRpdmVGaWxlKF9yZWYpIHtcbiAgdmFyIHVyaSA9IF9yZWYudXJpLFxuICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgdHlwZSA9IF9yZWYudHlwZTtcbiAgdGhpcy51cmkgPSB1cmk7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIHRoaXMudHlwZSA9IHR5cGU7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../Code/Hexabase/hexabase-js/node_modules/extract-files/public/ReactNativeFile.js\n");

/***/ }),

/***/ "../../Code/Hexabase/hexabase-js/node_modules/extract-files/public/extractFiles.js":
/*!*****************************************************************************************!*\
  !*** ../../Code/Hexabase/hexabase-js/node_modules/extract-files/public/extractFiles.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar defaultIsExtractableFile = __webpack_require__(/*! ./isExtractableFile */ \"../../Code/Hexabase/hexabase-js/node_modules/extract-files/public/isExtractableFile.js\");\n\nmodule.exports = function extractFiles(value, path, isExtractableFile) {\n  if (path === void 0) {\n    path = '';\n  }\n\n  if (isExtractableFile === void 0) {\n    isExtractableFile = defaultIsExtractableFile;\n  }\n\n  var clone;\n  var files = new Map();\n\n  function addFile(paths, file) {\n    var storedPaths = files.get(file);\n    if (storedPaths) storedPaths.push.apply(storedPaths, paths);\n    else files.set(file, paths);\n  }\n\n  if (isExtractableFile(value)) {\n    clone = null;\n    addFile([path], value);\n  } else {\n    var prefix = path ? path + '.' : '';\n    if (typeof FileList !== 'undefined' && value instanceof FileList)\n      clone = Array.prototype.map.call(value, function (file, i) {\n        addFile(['' + prefix + i], file);\n        return null;\n      });\n    else if (Array.isArray(value))\n      clone = value.map(function (child, i) {\n        var result = extractFiles(child, '' + prefix + i, isExtractableFile);\n        result.files.forEach(addFile);\n        return result.clone;\n      });\n    else if (value && value.constructor === Object) {\n      clone = {};\n\n      for (var i in value) {\n        var result = extractFiles(value[i], '' + prefix + i, isExtractableFile);\n        result.files.forEach(addFile);\n        clone[i] = result.clone;\n      }\n    } else clone = value;\n  }\n\n  return {\n    clone: clone,\n    files: files,\n  };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vQ29kZS9IZXhhYmFzZS9oZXhhYmFzZS1qcy9ub2RlX21vZHVsZXMvZXh0cmFjdC1maWxlcy9wdWJsaWMvZXh0cmFjdEZpbGVzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLCtCQUErQixtQkFBTyxDQUFDLG1IQUFxQjs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi4vLi4vQ29kZS9IZXhhYmFzZS9oZXhhYmFzZS1qcy9ub2RlX21vZHVsZXMvZXh0cmFjdC1maWxlcy9wdWJsaWMvZXh0cmFjdEZpbGVzLmpzPzhmN2YiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdElzRXh0cmFjdGFibGVGaWxlID0gcmVxdWlyZSgnLi9pc0V4dHJhY3RhYmxlRmlsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dHJhY3RGaWxlcyh2YWx1ZSwgcGF0aCwgaXNFeHRyYWN0YWJsZUZpbGUpIHtcbiAgaWYgKHBhdGggPT09IHZvaWQgMCkge1xuICAgIHBhdGggPSAnJztcbiAgfVxuXG4gIGlmIChpc0V4dHJhY3RhYmxlRmlsZSA9PT0gdm9pZCAwKSB7XG4gICAgaXNFeHRyYWN0YWJsZUZpbGUgPSBkZWZhdWx0SXNFeHRyYWN0YWJsZUZpbGU7XG4gIH1cblxuICB2YXIgY2xvbmU7XG4gIHZhciBmaWxlcyA9IG5ldyBNYXAoKTtcblxuICBmdW5jdGlvbiBhZGRGaWxlKHBhdGhzLCBmaWxlKSB7XG4gICAgdmFyIHN0b3JlZFBhdGhzID0gZmlsZXMuZ2V0KGZpbGUpO1xuICAgIGlmIChzdG9yZWRQYXRocykgc3RvcmVkUGF0aHMucHVzaC5hcHBseShzdG9yZWRQYXRocywgcGF0aHMpO1xuICAgIGVsc2UgZmlsZXMuc2V0KGZpbGUsIHBhdGhzKTtcbiAgfVxuXG4gIGlmIChpc0V4dHJhY3RhYmxlRmlsZSh2YWx1ZSkpIHtcbiAgICBjbG9uZSA9IG51bGw7XG4gICAgYWRkRmlsZShbcGF0aF0sIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcHJlZml4ID0gcGF0aCA/IHBhdGggKyAnLicgOiAnJztcbiAgICBpZiAodHlwZW9mIEZpbGVMaXN0ICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEZpbGVMaXN0KVxuICAgICAgY2xvbmUgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwodmFsdWUsIGZ1bmN0aW9uIChmaWxlLCBpKSB7XG4gICAgICAgIGFkZEZpbGUoWycnICsgcHJlZml4ICsgaV0sIGZpbGUpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pO1xuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKVxuICAgICAgY2xvbmUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKGNoaWxkLCBpKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RmlsZXMoY2hpbGQsICcnICsgcHJlZml4ICsgaSwgaXNFeHRyYWN0YWJsZUZpbGUpO1xuICAgICAgICByZXN1bHQuZmlsZXMuZm9yRWFjaChhZGRGaWxlKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5jbG9uZTtcbiAgICAgIH0pO1xuICAgIGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgIGNsb25lID0ge307XG5cbiAgICAgIGZvciAodmFyIGkgaW4gdmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGV4dHJhY3RGaWxlcyh2YWx1ZVtpXSwgJycgKyBwcmVmaXggKyBpLCBpc0V4dHJhY3RhYmxlRmlsZSk7XG4gICAgICAgIHJlc3VsdC5maWxlcy5mb3JFYWNoKGFkZEZpbGUpO1xuICAgICAgICBjbG9uZVtpXSA9IHJlc3VsdC5jbG9uZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgY2xvbmUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2xvbmU6IGNsb25lLFxuICAgIGZpbGVzOiBmaWxlcyxcbiAgfTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../Code/Hexabase/hexabase-js/node_modules/extract-files/public/extractFiles.js\n");

/***/ }),

/***/ "../../Code/Hexabase/hexabase-js/node_modules/extract-files/public/index.js":
/*!**********************************************************************************!*\
  !*** ../../Code/Hexabase/hexabase-js/node_modules/extract-files/public/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.ReactNativeFile = __webpack_require__(/*! ./ReactNativeFile */ \"../../Code/Hexabase/hexabase-js/node_modules/extract-files/public/ReactNativeFile.js\");\nexports.extractFiles = __webpack_require__(/*! ./extractFiles */ \"../../Code/Hexabase/hexabase-js/node_modules/extract-files/public/extractFiles.js\");\nexports.isExtractableFile = __webpack_require__(/*! ./isExtractableFile */ \"../../Code/Hexabase/hexabase-js/node_modules/extract-files/public/isExtractableFile.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vQ29kZS9IZXhhYmFzZS9oZXhhYmFzZS1qcy9ub2RlX21vZHVsZXMvZXh0cmFjdC1maWxlcy9wdWJsaWMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOEpBQXNEO0FBQ3RELHFKQUFnRDtBQUNoRCxvS0FBMEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uLi8uLi9Db2RlL0hleGFiYXNlL2hleGFiYXNlLWpzL25vZGVfbW9kdWxlcy9leHRyYWN0LWZpbGVzL3B1YmxpYy9pbmRleC5qcz8xYzZhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5SZWFjdE5hdGl2ZUZpbGUgPSByZXF1aXJlKCcuL1JlYWN0TmF0aXZlRmlsZScpO1xuZXhwb3J0cy5leHRyYWN0RmlsZXMgPSByZXF1aXJlKCcuL2V4dHJhY3RGaWxlcycpO1xuZXhwb3J0cy5pc0V4dHJhY3RhYmxlRmlsZSA9IHJlcXVpcmUoJy4vaXNFeHRyYWN0YWJsZUZpbGUnKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../Code/Hexabase/hexabase-js/node_modules/extract-files/public/index.js\n");

/***/ }),

/***/ "../../Code/Hexabase/hexabase-js/node_modules/extract-files/public/isExtractableFile.js":
/*!**********************************************************************************************!*\
  !*** ../../Code/Hexabase/hexabase-js/node_modules/extract-files/public/isExtractableFile.js ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar ReactNativeFile = __webpack_require__(/*! ./ReactNativeFile */ \"../../Code/Hexabase/hexabase-js/node_modules/extract-files/public/ReactNativeFile.js\");\n\nmodule.exports = function isExtractableFile(value) {\n  return (\n    (typeof File !== 'undefined' && value instanceof File) ||\n    (typeof Blob !== 'undefined' && value instanceof Blob) ||\n    value instanceof ReactNativeFile\n  );\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vQ29kZS9IZXhhYmFzZS9oZXhhYmFzZS1qcy9ub2RlX21vZHVsZXMvZXh0cmFjdC1maWxlcy9wdWJsaWMvaXNFeHRyYWN0YWJsZUZpbGUuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsc0JBQXNCLG1CQUFPLENBQUMsK0dBQW1COztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4uLy4uL0NvZGUvSGV4YWJhc2UvaGV4YWJhc2UtanMvbm9kZV9tb2R1bGVzL2V4dHJhY3QtZmlsZXMvcHVibGljL2lzRXh0cmFjdGFibGVGaWxlLmpzP2E1MjMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3ROYXRpdmVGaWxlID0gcmVxdWlyZSgnLi9SZWFjdE5hdGl2ZUZpbGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0V4dHJhY3RhYmxlRmlsZSh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgICh0eXBlb2YgRmlsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBGaWxlKSB8fFxuICAgICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBCbG9iKSB8fFxuICAgIHZhbHVlIGluc3RhbmNlb2YgUmVhY3ROYXRpdmVGaWxlXG4gICk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../Code/Hexabase/hexabase-js/node_modules/extract-files/public/isExtractableFile.js\n");

/***/ })

};
;