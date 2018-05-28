(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo.9ff8fc2e.png";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _logo = __webpack_require__(2);

var _logo2 = _interopRequireDefault(_logo);

var _home = __webpack_require__(23);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withSiteData)(function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { id: 'shop-name' },
      _react2.default.createElement('img', { id: 'home-image', src: _home2.default, alt: '' }),
      _react2.default.createElement(
        'div',
        { id: 'home-text', className: 'jumbotron' },
        _react2.default.createElement(
          'h1',
          null,
          ' Somawar Computers'
        ),
        _react2.default.createElement(
          'p',
          null,
          'one stop solution for all your computer needs'
        )
      )
    )
  );
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _logo = __webpack_require__(2);

var _logo2 = _interopRequireDefault(_logo);

var _years = __webpack_require__(24);

var _years2 = _interopRequireDefault(_years);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
exports.default = (0, _reactStatic.withSiteData)(function () {
  return _react2.default.createElement(
    'div',
    { id: 'about', className: 'container-fluid' },
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-sm-8' },
        _react2.default.createElement(
          'h2',
          null,
          'Our Journey'
        ),
        _react2.default.createElement(
          'h3',
          null,
          '8 years back we came up with an idea to provide low cost onsight solutions for computer needs.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          'Our Core Values'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'li',
          null,
          'To be trustworthy and accountable'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Commit to highest standard of ethics and integrity'
        ),
        _react2.default.createElement(
          'li',
          null,
          'To be humble, respectful and collaborative'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-default btn-lg' },
          'Get in Touch'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-sm-4' },
        _react2.default.createElement('img', { className: 'about-years', src: _years2.default })
      )
    )
  );
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(10);

__webpack_require__(11);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap.css");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap-theme.css");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(13);

var _reactStaticRoutes = __webpack_require__(14);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _Home = __webpack_require__(4);

var _Home2 = _interopRequireDefault(_Home);

var _Services = __webpack_require__(25);

var _Services2 = _interopRequireDefault(_Services);

var _About = __webpack_require__(5);

var _About2 = _interopRequireDefault(_About);

var _Contact = __webpack_require__(32);

var _Contact2 = _interopRequireDefault(_Contact);

var _jquery = __webpack_require__(33);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    { id: 'myPage', 'data-spy': 'scroll', 'data-target': '.navbar', 'data-offset': '60' },
    _react2.default.createElement(
      'nav',
      { className: 'navbar navbar-fixed-top' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-header' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#myNavbar' },
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' })
          ),
          _react2.default.createElement(
            'a',
            { className: 'navbar-brand', href: '#myPage' },
            'Somawar Computers'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'collapse navbar-collapse', id: 'myNavbar' },
          _react2.default.createElement(
            'ul',
            { className: 'nav navbar-nav' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#services' },
                'SERVICES'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#about' },
                'ABOUT'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#contact' },
                'CONTACT'
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(_Home2.default, null),
    _react2.default.createElement(_Services2.default, null),
    _react2.default.createElement(_About2.default, null),
    _react2.default.createElement(_Contact2.default, null),
    _react2.default.createElement(
      'footer',
      { className: 'container-fluid text-center' },
      _react2.default.createElement(
        'a',
        { href: '#myPage', title: 'To Top' },
        _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-up' })
      ),
      _react2.default.createElement(
        'p',
        null,
        'Designed by Somawar Computers'
      )
    )
  );
};

if (typeof document !== 'undefined') {
  (0, _jquery2.default)(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    (0, _jquery2.default)(".navbar a, footer a[href='#myPage']").on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        (0, _jquery2.default)('html, body').animate({
          scrollTop: (0, _jquery2.default)(hash).offset().top
        }, 900, function () {

          //  Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    (0, _jquery2.default)(window).scroll(function () {
      (0, _jquery2.default)(".slideanim").each(function () {
        var pos = (0, _jquery2.default)(this).offset().top;

        var winTop = (0, _jquery2.default)(window).scrollTop();
        if (pos < winTop + 600) {
          (0, _jquery2.default)(this).addClass("slide");
        }
      });
    });
  });
}

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(15);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(16);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(17);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(18);

var _reactUniversalComponent = __webpack_require__(19);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: 'D:/Resume/Notes/mysite/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 4)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(4);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: 'D:/Resume/Notes/mysite/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 5)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(5);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': undefined

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(20);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(21);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(22);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(6);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/home.ef009c8f.jpg";

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _logo = __webpack_require__(2);

var _logo2 = _interopRequireDefault(_logo);

var _cctv = __webpack_require__(26);

var _cctv2 = _interopRequireDefault(_cctv);

var _computers = __webpack_require__(27);

var _computers2 = _interopRequireDefault(_computers);

var _printers = __webpack_require__(28);

var _printers2 = _interopRequireDefault(_printers);

var _antivirus = __webpack_require__(29);

var _antivirus2 = _interopRequireDefault(_antivirus);

var _accessories = __webpack_require__(30);

var _accessories2 = _interopRequireDefault(_accessories);

var _maintenance = __webpack_require__(31);

var _maintenance2 = _interopRequireDefault(_maintenance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withSiteData)(function () {
  return _react2.default.createElement(
    'div',
    { id: 'services', className: 'container-fluid text-center' },
    _react2.default.createElement(
      'h2',
      null,
      'SERVICES'
    ),
    _react2.default.createElement(
      'h4',
      null,
      'What we offer'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'row slideanim' },
      _react2.default.createElement(
        'div',
        { className: 'col-sm-4' },
        _react2.default.createElement(
          'span',
          { className: 'logo-small' },
          _react2.default.createElement('img', { className: 'service-logos', src: _cctv2.default, alt: '' })
        ),
        _react2.default.createElement(
          'h4',
          null,
          'CCTV Installations'
        ),
        _react2.default.createElement(
          'p',
          null,
          'we provide customized cctv installations with onsight visits'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-sm-4' },
        _react2.default.createElement(
          'span',
          { className: 'logo-small' },
          _react2.default.createElement('img', { className: 'service-logos', src: _computers2.default, alt: '' })
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Computers & Laptops'
        ),
        _react2.default.createElement(
          'p',
          null,
          'we sell all kinds of laptops and computers'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-sm-4' },
        _react2.default.createElement(
          'span',
          { className: 'logo-small' },
          _react2.default.createElement('img', { className: 'service-logos', src: _printers2.default, alt: '' })
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Printer Repairing Services'
        ),
        _react2.default.createElement(
          'p',
          null,
          'we offer onsight services for cartridge refilling'
        )
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'row slideanim' },
      _react2.default.createElement(
        'div',
        { className: 'col-sm-4' },
        _react2.default.createElement(
          'span',
          { className: 'logo-small' },
          _react2.default.createElement('img', { className: 'service-logos', src: _accessories2.default, alt: '' })
        ),
        _react2.default.createElement(
          'h4',
          null,
          'HardDisk Ram Processors'
        ),
        _react2.default.createElement(
          'p',
          null,
          'we are wholesale dealers for HardDisks, Ram & Mother Board Processors'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-sm-4' },
        _react2.default.createElement(
          'span',
          { className: 'logo-small' },
          _react2.default.createElement('img', { className: 'service-logos', src: _antivirus2.default })
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Authorized Dealer for NPAV'
        ),
        _react2.default.createElement(
          'p',
          null,
          'we are authorized dealers of Net Protector Antivirus since 8 yrs'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-sm-4' },
        _react2.default.createElement(
          'span',
          { className: 'logo-small' },
          _react2.default.createElement('img', { className: 'service-logos', src: _maintenance2.default })
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Onsight Services'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We provide onsight services'
        )
      )
    )
  );
});
//

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/cctv.5dc3dac2.png";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/computers.28ea3356.png";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/printers.730a0fbe.png";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/antivirus.7188112b.png";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/accessories.3e2be67c.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/maintenance.d16f0196.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _logo = __webpack_require__(2);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withSiteData)(function () {
  return _react2.default.createElement(
    'div',
    { id: 'contact', className: 'container-fluid bg-grey' },
    _react2.default.createElement(
      'h2',
      { className: 'text-center' },
      'CONTACT'
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-sm-5' },
        _react2.default.createElement(
          'p',
          null,
          'Contact us and we\'ll get back to you within 24 hours.'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-map-marker' }),
          ' Town Market, Near Sathe Chauk, Nanded'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-phone' }),
          ' 09145555855 '
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-envelope' }),
          ' nsomawar@gmail.com'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-sm-7 slideanim' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-6 form-group' },
            _react2.default.createElement('input', { className: 'form-control', id: 'name', name: 'name', placeholder: 'Name', type: 'text', required: true })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-6 form-group' },
            _react2.default.createElement('input', { className: 'form-control', id: 'email', name: 'email', placeholder: 'Email', type: 'email', required: true })
          )
        ),
        _react2.default.createElement('textarea', { className: 'form-control', id: 'comments', name: 'comments', placeholder: 'Comment', rows: '5' }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12 form-group' },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-default pull-right', type: 'submit' },
              'Send'
            )
          )
        )
      )
    )
  );
});
//

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "body{font:400 15px Arial;line-height:1.8;color:#818181}#shop-name{text-align:center;position:relative}h2{font-size:24px;text-transform:uppercase;color:#303030;font-weight:600}h2,h4{margin-bottom:30px}h4{font-size:20px;line-height:1.375em;color:#2f3c4f;font-weight:400}.jumbotron{background-color:#2c3e50;opacity:.9;color:#fff;border-radius:50px;width:100%;font-family:Arial}.container-fluid{padding:60px 50px}.bg-grey{background-color:#f6f6f6}.logo-small{color:#2c3e50;font-size:50px}.about-years{min-width:200px;min-height:200px}.service-logos{width:250px;height:200px}.logo{color:#2c3e50;font-size:200px}.thumbnail{padding:0 0 15px;border:none;border-radius:0}.thumbnail img{width:100%;height:100%;margin-bottom:10px}.carousel-control.left,.carousel-control.right{background-image:none;color:#2c3e50}.carousel-indicators li{border-color:#2c3e50}.carousel-indicators li.active{background-color:#2c3e50}.item h4{font-size:19px;line-height:1.375em;font-weight:400;font-style:italic;margin:70px 0}.item span{font-style:normal}.panel{border:1px solid #2c3e50;border-radius:0!important;-webkit-transition:-webkit-box-shadow .5s;transition:-webkit-box-shadow .5s;-o-transition:box-shadow .5s;transition:box-shadow .5s;transition:box-shadow .5s,-webkit-box-shadow .5s}.panel:hover{-webkit-box-shadow:5px 0 40px rgba(0,0,0,.2);box-shadow:5px 0 40px rgba(0,0,0,.2)}.panel-footer .btn:hover{border:1px solid #2c3e50;background-color:#fff!important;color:#2c3e50}.panel-heading{color:#fff!important;background-color:#2c3e50!important;padding:25px;border-bottom:1px solid transparent;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.panel-footer{background-color:#fff!important}.panel-footer h3{font-size:32px}.panel-footer h4{color:#aaa;font-size:14px}.panel-footer .btn{margin:15px 0;background-color:#2c3e50;color:#fff}.navbar{margin-bottom:0;background-color:rgba(44,62,80,.9);z-index:9999;border:0;height:100px;font-size:12px!important;line-height:1.42857143!important;letter-spacing:4px;border-radius:0;font-family:Arial}.navbar .navbar-brand,.navbar li a{color:#fff!important;background-color:transparent}.navbar-header{margin:2%}.navbar-nav{margin:2%;padding-left:5%}.navbar-nav li,.navbar-nav li a:hover{background-color:transparent}.navbar-nav li a:hover{border-bottom:5px solid #f6c82d}.navbar-nav li.selected a,.navbar li a:active{background-color:transparent!important;border-bottom:5px solid #38ad47}.navbar-default .navbar-toggle{border-color:transparent;color:#fff!important}footer .glyphicon{font-size:20px;margin-bottom:20px;color:#2c3e50}.slideanim{visibility:hidden}.slide{animation-name:slide;-webkit-animation-name:slide;animation-duration:1s;-webkit-animation-duration:1s;visibility:visible}@keyframes slide{0%{opacity:0;-webkit-transform:translateY(70%);transform:translateY(70%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slide{0%{opacity:0;-webkit-transform:translateY(70%)}to{opacity:1;-webkit-transform:translateY(0)}}#home-image{min-width:100%}#home-text{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}@media screen and (max-width:768px){.col-sm-4{text-align:center;margin:25px 0}.btn-lg{width:100%;margin-bottom:35px}}@media screen and (max-width:480px){.logo{font-size:150px}}", ""]);

// exports


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=static.db875eb3.js.map