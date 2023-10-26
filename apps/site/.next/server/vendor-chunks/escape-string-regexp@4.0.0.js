"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/escape-string-regexp@4.0.0";
exports.ids = ["vendor-chunks/escape-string-regexp@4.0.0"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/escape-string-regexp@4.0.0/node_modules/escape-string-regexp/index.js":
/*!******************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/escape-string-regexp@4.0.0/node_modules/escape-string-regexp/index.js ***!
  \******************************************************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = (string)=>{\n    if (typeof string !== \"string\") {\n        throw new TypeError(\"Expected a string\");\n    }\n    // Escape characters with special meaning either inside or outside character sets.\n    // Use a simple backslash escape when it’s always valid, and a \\unnnn escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.\n    return string.replace(/[|\\\\{}()[\\]^$+*?.]/g, \"\\\\$&\").replace(/-/g, \"\\\\x2d\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2VzY2FwZS1zdHJpbmctcmVnZXhwQDQuMC4wL25vZGVfbW9kdWxlcy9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUdDLENBQUFBO0lBQ2hCLElBQUksT0FBT0EsV0FBVyxVQUFVO1FBQy9CLE1BQU0sSUFBSUMsVUFBVTtJQUNyQjtJQUVBLGtGQUFrRjtJQUNsRiw2SkFBNko7SUFDN0osT0FBT0QsT0FDTEUsT0FBTyxDQUFDLHVCQUF1QixRQUMvQkEsT0FBTyxDQUFDLE1BQU07QUFDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXlzdGF0aWMtc3RhcnRlci8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXNjYXBlLXN0cmluZy1yZWdleHBANC4wLjAvbm9kZV9tb2R1bGVzL2VzY2FwZS1zdHJpbmctcmVnZXhwL2luZGV4LmpzPzNiOWEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZyA9PiB7XG5cdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nJyk7XG5cdH1cblxuXHQvLyBFc2NhcGUgY2hhcmFjdGVycyB3aXRoIHNwZWNpYWwgbWVhbmluZyBlaXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgY2hhcmFjdGVyIHNldHMuXG5cdC8vIFVzZSBhIHNpbXBsZSBiYWNrc2xhc2ggZXNjYXBlIHdoZW4gaXTigJlzIGFsd2F5cyB2YWxpZCwgYW5kIGEgXFx1bm5ubiBlc2NhcGUgd2hlbiB0aGUgc2ltcGxlciBmb3JtIHdvdWxkIGJlIGRpc2FsbG93ZWQgYnkgVW5pY29kZSBwYXR0ZXJuc+KAmSBzdHJpY3RlciBncmFtbWFyLlxuXHRyZXR1cm4gc3RyaW5nXG5cdFx0LnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uXS9nLCAnXFxcXCQmJylcblx0XHQucmVwbGFjZSgvLS9nLCAnXFxcXHgyZCcpO1xufTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic3RyaW5nIiwiVHlwZUVycm9yIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/escape-string-regexp@4.0.0/node_modules/escape-string-regexp/index.js\n");

/***/ })

};
;