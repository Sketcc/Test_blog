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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/base.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/base.js":
/*!****************************!*\
  !*** ./src/client/base.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var randomTags = new Vue({
    el: "#random_tags",
    data: {
        tags: []
    },
    computed: {
        randomColor: function () {
            return function () {
                var red = Math.random() * 255 + 50;
                var green = Math.random() * 255 + 50;
                var blue = Math.random() * 255 + 50;
                return "rgb(" + red + "," + green + "," + blue + ")"
            }
        },
        randomSize: function () {
            return function () {
                var size = (Math.random() * 20 + 8) + 'px'
                return size
            }
        }
    },
    created() {
        axios({
            method: 'get',
            url: '/queryRandomTags'
        }).then(function (resp) {
            var result = [];
            for (let i = 0; i < resp.data.data.length; i++) {
                result.push({text:resp.data.data[i].tag,link:'/?tag=' + resp.data.data[i].tag})
            }
            randomTags.tags = result;
        })
    }
})

var newHot = new Vue({
    el: "#new_hot",
    data: {
        hotList: []
    },
    created() {
        axios({
            method: 'get',
            url: '/queryHotBlog'
        }).then(function (resp) {
            var result = [];
            for (let i = 0; i < resp.data.data.length; i++) {
                var temp = {};
                temp.title = resp.data.data[i].title;
                temp.link = '/blog_detail.html?bid=' + resp.data.data[i].id;
                result.push(temp);
            }
            newHot.hotList = result;
        })
    }
})

var newComments = new Vue({
    el: "#new_comments",
    data: {
        commentList: [
            { name: "这里是用户名", date: "2020-8-31", comment: "这里是一大串评论，巴拉巴拉巴巴里" },
            { name: "这里是用户名", date: "2020-8-31", comment: "这里是一大串评论，巴拉巴拉巴巴里" },
            { name: "这里是用户名", date: "2020-8-31", comment: "这里是一大串评论，巴拉巴拉巴巴里" },
            { name: "这里是用户名", date: "2020-8-31", comment: "这里是一大串评论，巴拉巴拉巴巴里" },
            { name: "这里是用户名", date: "2020-8-31", comment: "这里是一大串评论，巴拉巴拉巴巴里" },
            { name: "这里是用户名", date: "2020-8-31", comment: "这里是一大串评论，巴拉巴拉巴巴里" },
            { name: "这里是用户名", date: "2020-8-31", comment: "这里是一大串评论，巴拉巴拉巴巴里" },
        ]
    },
    created() {
        axios({
            method: 'get',
            url: '/queryNewComments'
        }).then(function (resp) {
            // console.log(resp)
            var result = [];
            for (let i = 0; i < resp.data.data.length; i++) {
                var date = new Date(resp.data.data[i].ctime * 1000),
                    Y = date.getFullYear() + '-',
                    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-',
                    D = date.getDate() + '';
                var temp = {};
                temp.name = resp.data.data[i].user_name;
                temp.date = (Y + M + D)
                temp.comment = resp.data.data[i].comments;
                result.push(temp);
            }
            newComments.commentList = result
        })
    }
})

/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map