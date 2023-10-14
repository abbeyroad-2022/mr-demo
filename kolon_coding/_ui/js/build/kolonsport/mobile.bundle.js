/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 252);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(2))(59);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi4vLi4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yPzdhZGMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNTkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuLi8uLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

eval("module.exports = vendor;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInZlbmRvclwiP2I5NDAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB2ZW5kb3I7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2ZW5kb3JcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(253);


/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// require all sub directories\nvar requireAll = function requireAll(r) {\n  r.keys().forEach(r);\n};\nrequireAll(__webpack_require__(254));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjUzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYi93ZWJwYWNrL2tvbG9uc3BvcnQvbW9iaWxlLmpzP2U1OGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVxdWlyZSBhbGwgc3ViIGRpcmVjdG9yaWVzXG5jb25zdCByZXF1aXJlQWxsID0gKHIpID0+IHsgci5rZXlzKCkuZm9yRWFjaChyKTsgfTtcbnJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCcuL21vYmlsZS8nLCB0cnVlLCAvXFwuanMkLykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYi93ZWJwYWNrL2tvbG9uc3BvcnQvbW9iaWxlLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///253\n");

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./global.js\": 255\n};\nfunction webpackContext(req) {\n\treturn __webpack_require__(webpackContextResolve(req));\n};\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) // check for number or string\n\t\tthrow new Error(\"Cannot find module '\" + req + \"'.\");\n\treturn id;\n};\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = 254;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4va29sb25zcG9ydC9tb2JpbGUgXFwuanMkPzFiNDIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2dsb2JhbC5qc1wiOiAyNTVcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAyNTQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9rb2xvbnNwb3J0L21vYmlsZSBcXC5qcyRcbi8vIG1vZHVsZSBpZCA9IDI1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///254\n");

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\n$(document).on('mobile:load', function () {\n\n  // 비디오 재생버튼\n  $('.video-wrap #video-play').click(function (e) {\n    var $this = $(e.currentTarget);\n    $this.hide().siblings('.bg-poster').hide();\n\n    /* youtube play */\n    $('#player')[0].contentWindow.postMessage('{\"event\":\"command\",\"func\":\"playVideo\",\"args\":\"\"}', '*');\n  });\n\n  // 2줄 넘으면 ...\n  $('.scr-prod .txt-box .tit, .list2-prod .txt-box .tit').each(function (index, element) {\n    var $target = $(element);\n    var $txt = $target.find('p');\n    if ($target.outerHeight() < $txt.outerHeight()) {\n      var str = '';\n      for (var a = $txt.text().length; a >= 0; a--) {\n        str = $txt.text().substring(0, a);\n        if (str.length) {\n          $txt.text(str + '…'); // …붙이고 다시 검사\n          if ($txt.outerHeight() <= $target.outerHeight()) {\n            return true;\n          }\n        }\n      }\n    }\n    return true;\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYi93ZWJwYWNrL2tvbG9uc3BvcnQvbW9iaWxlL2dsb2JhbC5qcz8wMTllIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLm9uKCdtb2JpbGU6bG9hZCcsICgpID0+IHtcblxuICAvLyDruYTrlJTsmKQg7J6s7IOd67KE7Yq8XG4gICQoJy52aWRlby13cmFwICN2aWRlby1wbGF5JykuY2xpY2soKGUpID0+IHtcbiAgICBjb25zdCAkdGhpcyA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAkdGhpcy5oaWRlKCkuc2libGluZ3MoJy5iZy1wb3N0ZXInKS5oaWRlKCk7XG5cbiAgICAvKiB5b3V0dWJlIHBsYXkgKi9cbiAgICAkKCcjcGxheWVyJylbMF0uY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSgne1wiZXZlbnRcIjpcImNvbW1hbmRcIixcImZ1bmNcIjpcInBsYXlWaWRlb1wiLFwiYXJnc1wiOlwiXCJ9JywgJyonKTtcbiAgfSk7XG5cbiAgLy8gMuykhCDrhJjsnLzrqbQgLi4uXG4gICQoJy5zY3ItcHJvZCAudHh0LWJveCAudGl0LCAubGlzdDItcHJvZCAudHh0LWJveCAudGl0JykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJChlbGVtZW50KTtcbiAgICBjb25zdCAkdHh0ID0gJHRhcmdldC5maW5kKCdwJyk7XG4gICAgaWYgKCR0YXJnZXQub3V0ZXJIZWlnaHQoKSA8ICR0eHQub3V0ZXJIZWlnaHQoKSkge1xuICAgICAgbGV0IHN0ciA9ICcnO1xuICAgICAgZm9yIChsZXQgYSA9ICR0eHQudGV4dCgpLmxlbmd0aDsgYSA+PSAwOyBhLS0pIHtcbiAgICAgICAgc3RyID0gJHR4dC50ZXh0KCkuc3Vic3RyaW5nKDAsIGEpO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCkge1xuICAgICAgICAgICR0eHQudGV4dChzdHIgKyAn4oCmJyk7IC8vIOKApuu2meydtOqzoCDri6Tsi5wg6rKA7IKsXG4gICAgICAgICAgaWYgKCR0eHQub3V0ZXJIZWlnaHQoKSA8PSAkdGFyZ2V0Lm91dGVySGVpZ2h0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWIvd2VicGFjay9rb2xvbnNwb3J0L21vYmlsZS9nbG9iYWwuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///255\n");

/***/ })

/******/ });