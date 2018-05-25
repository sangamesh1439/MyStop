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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withSiteData)(function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { id: 'shop-name' },
      _react2.default.createElement(
        'div',
        { className: 'jumbotron' },
        _react2.default.createElement(
          'h1',
          null,
          'Somawar Computers'
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
          'About Somawar Computers'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'h3',
          null,
          'we are serving our valuable customers since 8 years'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p1',
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
        _react2.default.createElement('span', { className: 'glyphicon glyphicon-signal logo' })
      )
    )
  );
});
//

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

var _Services = __webpack_require__(23);

var _Services2 = _interopRequireDefault(_Services);

var _About = __webpack_require__(5);

var _About2 = _interopRequireDefault(_About);

var _Contact = __webpack_require__(24);

var _Contact2 = _interopRequireDefault(_Contact);

var _jquery = __webpack_require__(25);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(26);

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
            { className: 'nav navbar-nav navbar-right' },
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

        // Add hash (#) to URL when done scrolling (default click behavior)
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
  file: 'D:/Resume/Notes/myapp/dist/react-static-routes.js',
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
  file: 'D:/Resume/Notes/myapp/dist/react-static-routes.js',
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
          _react2.default.createElement('img', { className: 'service-logos', src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTIgNTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MiA1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTQ5LjY1MDk1NTIsMjEuNjQxMDU4Yy0wLjE5MDAwMjQtMC4yNzAwMTk1LTAuNDg5OTkwMi0wLjQyOTk5MjctMC44MTk5NDYzLTAuNDI5OTkyN2wtOC41MTc3MDAyLDAuMDA5ODg3NyAgIGwtMi43MzUzNTE2LTAuMzEzNTM3NmwwLjk1MzAwMjktMi41NDYzODY3YzAuMDkwMDI2OS0wLjI1LDAuMDgwMDE3MS0wLjUxOTk1ODUtMC4wMjk5NjgzLTAuNzY5OTU4NSAgIGMtMC4xMDk5ODU0LTAuMjQwMDUxMy0wLjMwOTk5NzYtMC40MjAwNDM5LTAuNTU5OTk3Ni0wLjUyMDAxOTVMMTUuNDYwOTU0Nyw4LjY2MTAxNzQgICBjLTAuNTE5OTU4NS0wLjE5MDAwMjQtMS4wODk5NjU4LDAuMDcwMDA3My0xLjI4OTk3OCwwLjU5MDAyNjlMOC41NzEwMDExLDI0LjI0MTAzMzYgICBjLTAuMjAwMDEyMiwwLjUxMDAwOTgsMC4wNzAwMDczLDEuMDkwMDI2OSwwLjU3OTk1NjEsMS4yODAwMjkzbDE0LjAxNTgwODEsNS4yNDM0MDgydjQuNjM1OTg4MkgxMC4xNzA5NzY2VjM0LjAxMTA1NSAgIGMwLTIuNTQwMDQxLTIuMDcwMDA3My00LjYwOTk4NzMtNC42MDk5ODU4LTQuNjA5OTg3M0gyLjE3MDk3NjR2MTQuMDAwMDAxOWgzLjM5MDAxNDQgICBjMi41Mzk5Nzg1LDAsNC42MDk5ODU4LTIuMDcwMDA3Myw0LjYwOTk4NTgtNC42MTAwNDY0di0xLjM5MDU2NGgxNC45OTU3ODg2VjMxLjUxMjcwMWw2LjQ2NDIzMzQsMi40MTgzMzY5ICAgYzAuMTE5OTk1MSwwLjAzOTk3OCwwLjIzOTk5MDIsMC4wNzAwMDczLDAuMzQ5OTc1NiwwLjA3MDAwNzNjMC40MTAwMzIzLDAsMC43OTAwMzcyLTAuMjUsMC45NDAwMDA1LTAuNjUwMDI0NGwxLjUzNjg2NTItNC4xMDY1MDgzICAgbDMuMzkzMDY2NC0wLjM2NTk2NjhsNi4xMjAwNTYyLDUuMzMyNTIxNGMwLjE3OTk5MjcsMC4xNTk5NzMxLDAuNDIwMDQzOSwwLjIzOTk5MDIsMC42NTAwMjQ0LDAuMjM5OTkwMiAgIGMwLjA4OTk2NTgsMCwwLjE2OTk4MjktMC4wMTAwMDk4LDAuMjUtMC4wMzAwMjkzYzAuMzIwMDA3My0wLjA3OTk1NjEsMC41ODAwMTcxLTAuMzA5OTk3NiwwLjY5MDAwMjQtMC42MTk5OTUxICAgbDQuMjAwMDEyMi0xMS4yMzk5OTIxQzQ5Ljg4MDk5NjcsMjIuMjYxMDUzMSw0OS44NDA5NTc2LDIxLjkxMTAxNjUsNDkuNjUwOTU1MiwyMS42NDEwNTh6IE0yMi4wOTU0NzYyLDE2Ljc3MjAzOTQgICBjLTAuMTU2MjUsMC4zOTA2MjUtMC41MzIyMjY2LDAuNjI4OTA2My0wLjkyODcxMDksMC42Mjg5MDYzYy0wLjEyNDAyMzQsMC0wLjI1LTAuMDIzNDM3NS0wLjM3MTA5MzgtMC4wNzE3NzczbC0yLjUtMSAgIGMtMC41MTI2OTUzLTAuMjA1NTY2NC0wLjc2MjY5NTMtMC43ODcxMDg0LTAuNTU3NjE3Mi0xLjMwMDI5MmMwLjIwNTA3ODEtMC41MTI2OTUzLDAuNzkxMDE1Ni0wLjc2MTIzMDUsMS4yOTk4MDQ3LTAuNTU3MTI4OWwyLjUsMSAgIEMyMi4wNTA1NTQzLDE1LjY3NzMxMzgsMjIuMzAwNTU0MywxNi4yNTg4NTU4LDIyLjA5NTQ3NjIsMTYuNzcyMDM5NHoiIGZpbGw9IiMzQTkyQ0MiLz48L2c+PC9zdmc+', alt: '' })
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
          _react2.default.createElement('img', { className: 'service-logos', src: 'data:image/png;base64,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', alt: '' })
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
          _react2.default.createElement('img', { className: 'service-logos', src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZXNjLz48ZGVmcy8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgZmlsbD0iIzkyOTI5MiIgaWQ9Imljb24tMTI0LXByaW50ZXItdGV4dCI+PHBhdGggZD0iTTI2LDI3IEwyOC4wMDU3MTgxLDI3IEMyOS42NTk0MTQzLDI3IDMxLDI1LjY1NTY0OTMgMzEsMjQuMDAwNTc3NSBMMzEsMTQuOTk5NDIyNSBDMzEsMTMuMzQyODg3MiAyOS42NTk0MzEzLDEyIDI4LjAwNTcxODEsMTIgTDI2LDEyIEwyNiw0Ljk5OTYxNDk4IEMyNiwzLjg5NTI1ODEyIDI1LjEwOTA3NDYsMyAyNC4wMDI1NzgxLDMgTDguOTk3NDIxOTEsMyBDNy44OTQyNzYyNSwzIDcsMy44ODc0MzMyOSA3LDQuOTk5NjE0OTggTDcsMTIgTDcsMTIgTDQuOTk0MjgxODksMTIgQzMuMzQwNTg1NjYsMTIgMiwxMy4zNDQzNTA3IDIsMTQuOTk5NDIyNSBMMiwyNC4wMDA1Nzc1IEMyLDI1LjY1NzExMjggMy4zNDA1Njg3LDI3IDQuOTk0MjgxODksMjcgTDcsMjcgTDcsMjguMDAwMzg1IEM3LDI5LjEwNDc0MTkgNy44OTA5MjUzOSwzMCA4Ljk5NzQyMTkxLDMwIEwyNC4wMDI1NzgxLDMwIEMyNS4xMDU3MjM4LDMwIDI2LDI5LjExMjU2NjcgMjYsMjguMDAwMzg1IEwyNiwyNyBMMjYsMjcgTDI2LDI3IFogTTcsMjYgTDUuMDA3MzI5OTQsMjYgQzMuODk4MzM4MzIsMjYgMywyNS4xMDMzMzM3IDMsMjMuOTk3MjM5OSBMMywxNS4wMDI3NjAxIEMzLDEzLjg5MzU0MjYgMy44OTg3MTIyMywxMyA1LjAwNzMyOTk0LDEzIEwyNy45OTI2NzAxLDEzIEMyOS4xMDE2NjE3LDEzIDMwLDEzLjg5NjY2NjMgMzAsMTUuMDAyNzYwMSBMMzAsMjMuOTk3MjM5OSBDMzAsMjUuMTA2NDU3NCAyOS4xMDEyODc4LDI2IDI3Ljk5MjY3MDEsMjYgTDI2LDI2IEwyNiwyMCBMNywyMCBMNywyNiBMNywyNiBMNywyNiBaIE04Ljk5OTk2MDIsNCBDOC40NDc2OTc0Myw0IDgsNC40NTMwMzYzMSA4LDQuOTk3MDMwMTQgTDgsMTIgTDI1LDEyIEwyNSw0Ljk5NzAzMDE0IEMyNSw0LjQ0NjM4NTYgMjQuNTQ1MjkxMSw0IDI0LjAwMDAzOTgsNCBMOC45OTk5NjAyLDQgTDguOTk5OTYwMiw0IFogTTgsMjEgTDgsMjguMDAyOTY5OSBDOCwyOC41NTM2MTQ0IDguNDU0NzA4OTMsMjkgOC45OTk5NjAyLDI5IEwyNC4wMDAwMzk4LDI5IEMyNC41NTIzMDI2LDI5IDI1LDI4LjU0Njk2MzcgMjUsMjguMDAyOTY5OSBMMjUsMjEgTDgsMjEgTDgsMjEgWiBNMjUsMTcgQzI1LjU1MjI4NDgsMTcgMjYsMTYuNTUyMjg0OCAyNiwxNiBDMjYsMTUuNDQ3NzE1MiAyNS41NTIyODQ4LDE1IDI1LDE1IEMyNC40NDc3MTUyLDE1IDI0LDE1LjQ0NzcxNTIgMjQsMTYgQzI0LDE2LjU1MjI4NDggMjQuNDQ3NzE1MiwxNyAyNSwxNyBMMjUsMTcgWiBNOSwyMyBMOSwyNCBMMjQsMjQgTDI0LDIzIEw5LDIzIEw5LDIzIFogTTksMjYgTDksMjcgTDI0LDI3IEwyNCwyNiBMOSwyNiBMOSwyNiBaIiBpZD0icHJpbnRlci10ZXh0Ii8+PC9nPjwvZz48L3N2Zz4=', alt: '' })
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
          _react2.default.createElement('img', { className: 'service-logos', src: 'data:image/png;base64,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', alt: '' })
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
          _react2.default.createElement('img', { className: 'service-logos', src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTIgNTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MiA1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PGc+PHBhdGggZD0iTTQ3Ljk0NTMxMjUsNDMuMTczNDYxOWMtMS4yNTY4OTctMy40NTkzNTA2LTQuMDE1MDc1Ny02LjExMzQwMzMtNy40NjU4MjAzLTcuMjg3ODQxOCAgICBDNDAuODA4NDEwNiwzNC4zMjM3MzA1LDQxLjAwMDYxMDQsMzIuNjkxNzcyNSw0MS4wMDA2MTA0LDMxYzAtMC45MjY4Nzk5LTAuMDU0MTk5Mi0xLjg0Mzg3MjEtMC4xNTg2OTE0LTIuNzQ1MjM5MyAgICBsNy41NjUzMDc2LDUuNTQ3NjA3NGwxLjE4MzU5MzgtMS42MTMyODEzbC05LjI2NzIxMTktNi43OTU2NTQzYy0wLjQxMTYyMTEtMS42ODExNTIzLTEuMDAyMDE0Mi0zLjI3NzIyMTctMS43NTI3NDY2LTQuNzQzMDQyICAgIGw3LjE4Njk1MDctMS44MTQ4MTkzbDQuMTgwNjY0MS0xMS40OTgwNDY5bC0xLjg3ODkwNjMtMC42ODM1OTM4bC0zLjgxOTMzNTksMTAuNTAxOTUzMWwtNi43MTU4MjAzLDEuNjk1NTU2NiAgICBjLTEuMzkwMjU4OC0yLjEyMzc3OTMtMy4xNDQ4OTc1LTMuODc5ODgyOC01LjE4Mzc3NjktNS4wODE1NDNDMzAuMzYwNTk1NywxMi41OTk5NzU2LDI4LjIzMDY1MTksMTIsMjYuMDAwNjEwNCwxMiAgICBjLTIuMjM5OTkwMiwwLTQuMzgwMDA0OSwwLjU5OTk3NTYtNi4zNDk5NzU2LDEuNzc5OTA3MmMtMi4wMzI1MzE3LDEuMjAwMTk1My0zLjc4MzI2NDIsMi45NTMzNjkxLTUuMTcxMjY0Niw1LjA3MzI0MjIgICAgbC02LjcyMTU1NzYtMS42OTcyNjU2TDMuOTM4NDc2Niw2LjY1MzkzMDdMMi4wNTk1NzAzLDcuMzM3NTI0NGw0LjE4MDY2NDEsMTEuNDk4MDQ2OWw3LjE5Mjc0OSwxLjgxNjUyODMgICAgYy0wLjc1MDMwNTIsMS40NjQyMzM0LTEuMzQwNzU5MywzLjA1ODIyNzUtMS43NTI4MDc2LDQuNzM3MTgyNmwtOS4yNzI5NDkyLDYuNzk5ODA0N2wxLjE4MzU5MzgsMS42MTMyODEzbDcuNTY5Mzk3LTUuNTUwNTM3MSAgICBDMTEuMDU1Mjk3OSwyOS4xNTQyOTY5LDExLjAwMDYxMDQsMzAuMDcyMjY1NiwxMS4wMDA2MTA0LDMxYzAsMS42OTE1MjgzLDAuMTkyMTk5NywzLjMyMzM2NDMsMC41MjA5OTYxLDQuODg1MjUzOSAgICBjLTMuNDUwMzE3NCwxLjE3MzU4NC02LjIwODA2ODgsMy44Mjg0OTEyLTcuNDY1OTQyNCw3LjI4ODIwOGwtMS45OTQxNDA2LDUuNDg0Mzc1bDEuODc4OTA2MywwLjY4MzU5MzhsMS45OTQxNDA2LTUuNDg0Mzc1ICAgIGMxLjAzMjgzNjktMi44MzgyNTY4LDMuMjcyNTIyLTUuMDMwMjczNCw2LjA4MjY0MTYtNi4wMzQxNzk3QzE0LjE4Nzg2NjIsNDQuOTM1NjY4OSwxOS42MzAxODgsNTAsMjYuMDAwNjEwNCw1MCAgICBjNi4zNzA0ODM0LDAsMTEuODEyODA1Mi01LjA2NDMzMTEsMTMuOTgzMzk4NC0xMi4xNzcxMjRjMi44MTA4NTIxLDEuMDA0MDI4Myw1LjA1MDQ3NjEsMy4xOTY3NzczLDYuMDgyMzk3NSw2LjAzNDE3OTcgICAgbDEuOTk1MTE3Miw1LjQ4NDM3NWwxLjg3ODkwNjMtMC42ODM1OTM4TDQ3Ljk0NTMxMjUsNDMuMTczNDYxOXoiLz48L2c+PGc+PHBhdGggZD0iTTE4LjYzMzc4OTEsMTIuMDU3MjUxYzIuMjc3MzQzOC0xLjM2MzI4MTMsNC43NTk3NjU2LTIuMDU3NjE3Miw3LjM2NzE4NzUtMi4wNTc2MTcyICAgIGMyLjU4MTA1NDcsMCw1LjA1NTY2NDEsMC42ODk0NTMxLDcuMzU3NDIxOSwyLjA0ODgyODFjMC4xNDc2NDQsMC4wODcwMzYxLDAuMjg4MDI0OSwwLjE4NzUsMC40MzMwNDQ0LDAuMjc5NTQxICAgIGMwLjEyNDc1NTktMC41OTY5MjM4LDAuMjA5MTY3NS0xLjIwNTQ0NDMsMC4yMDkxNjc1LTEuODI4MDAyOWMwLTQuNjkwMDYzNS0zLjU4OTk2NTgtOC41LTgtOC41Yy00LjQwOTk3MzEsMC04LDMuODA5OTM2NS04LDguNSAgICBjMCwwLjYyMjU1ODYsMC4wODM2NzkyLDEuMjMyNjY2LDAuMjA4MTI5OSwxLjgzMjE1MzNDMTguMzUxMTM1MywxMi4yNDE4MjEzLDE4LjQ4ODgzMDYsMTIuMTQyODIyMywxOC42MzM3ODkxLDEyLjA1NzI1MXogICAgIE0yNi45OTkwMjM0LDYuOTk1NzI3NWgydjJoLTJWNi45OTU3Mjc1eiBNMjIuOTk5MDIzNCw2Ljk5NTcyNzVoMnYyaC0yVjYuOTk1NzI3NXoiIGZpbGw9IiMzQTkyQ0MiLz48L2c+PC9nPjwvc3ZnPg==' })
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
          _react2.default.createElement('img', { className: 'service-logos', src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGltYWdlLXJlbmRlcmluZz0ib3B0aW1pemVRdWFsaXR5IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdmlld0JveD0iMCAwIDUwMDAgNTAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWwogICAgLnN0cjEge3N0cm9rZTojNDM0MjQyO3N0cm9rZS13aWR0aDoxMDB9CiAgICAuc3RyMCB7c3Ryb2tlOiM0MzQyNDI7c3Ryb2tlLXdpZHRoOjMwMDtzdHJva2UtbGluZWNhcDpyb3VuZH0KICAgIC5maWwwIHtmaWxsOm5vbmV9CiAgICAuZmlsMSB7ZmlsbDojNDM0MjQyfQogICAgLmZpbDIge2ZpbGw6dXJsKCNpZDApfQogICBdXT48L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImlkMCIgeDE9IjI1MDAuMDEiIHgyPSIyNTAwLjAxIiB5MT0iNDI2MC4xOSIgeTI9IjE0NzQuODEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwOEJGRiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzBhZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGlkPSJMYXllcl94MDAyMF8xIj48cGF0aCBjbGFzcz0iZmlsMCBzdHIwIiBkPSJNMzAwIDIwMDBsMjA1MC0xNjAwYzEwMC01MCAyMDAtNTAgMzAwIDBsMjA1MCAxNTAwIi8+PHBhdGggY2xhc3M9ImZpbDEiIGQ9Ik0zNTAwIDEwMjJsNjAwIDQzOXYtODYxYzAtNTUtNDUtMTAwLTEwMC0xMDBoLTQwMGMtNTUgMC0xMDAgNDUtMTAwIDEwMHY0MjJ6Ii8+PHBhdGggY2xhc3M9ImZpbDIgc3RyMSIgZD0iTTg5OSA0NzAwaDkwMXYtMTUwMGMwLTExMCA5MC0yMDAgMjAwLTIwMGg5MDBjMTEwIDAgMjAwIDkwIDIwMCAyMDB2MTUwMGgxMDAxYzE2NSAwIDMwMC0xMzUgMzAwLTMwMGwtMS0yMDAwLTE3NzYtMTMyOGMtMzMtMjYtNzktMzctMTI0LTM2cy05MiAxNC0xMjcgNDBsLTE3NzMgMTMyNC0xIDIwMDBjMCAxNjUgMTM1IDMwMCAzMDAgMzAweiIvPjwvZz48L3N2Zz4=' })
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "body{font:400 15px Lato,sans-serif;line-height:1.8;color:#818181}#shop-name{text-align:center}h2{font-size:24px;text-transform:uppercase;font-weight:600}h2,h4{color:#303030;margin-bottom:30px}h4{font-size:19px;line-height:1.375em;font-weight:400}.jumbotron{background-color:#f4511e;color:#fff;padding:100px 25px;font-family:Montserrat,sans-serif}.container-fluid{padding:60px 50px}.bg-grey{background-color:#f6f6f6}.logo-small{color:#f4511e;font-size:50px}.service-logos{max-width:80px;min-width:80px}.logo{color:#f4511e;font-size:200px}.thumbnail{padding:0 0 15px;border:none;border-radius:0}.thumbnail img{width:100%;height:100%;margin-bottom:10px}.carousel-control.left,.carousel-control.right{background-image:none;color:#f4511e}.carousel-indicators li{border-color:#f4511e}.carousel-indicators li.active{background-color:#f4511e}.item h4{font-size:19px;line-height:1.375em;font-weight:400;font-style:italic;margin:70px 0}.item span{font-style:normal}.panel{border:1px solid #f4511e;border-radius:0!important;-webkit-transition:-webkit-box-shadow .5s;transition:-webkit-box-shadow .5s;-o-transition:box-shadow .5s;transition:box-shadow .5s;transition:box-shadow .5s,-webkit-box-shadow .5s}.panel:hover{-webkit-box-shadow:5px 0 40px rgba(0,0,0,.2);box-shadow:5px 0 40px rgba(0,0,0,.2)}.panel-footer .btn:hover{border:1px solid #f4511e;background-color:#fff!important;color:#f4511e}.panel-heading{color:#fff!important;background-color:#f4511e!important;padding:25px;border-bottom:1px solid transparent;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.panel-footer{background-color:#fff!important}.panel-footer h3{font-size:32px}.panel-footer h4{color:#aaa;font-size:14px}.panel-footer .btn{margin:15px 0;background-color:#f4511e;color:#fff}.navbar{margin-bottom:0;background-color:#f4511e;z-index:9999;border:0;font-size:12px!important;line-height:1.42857143!important;letter-spacing:4px;border-radius:0;font-family:Montserrat,sans-serif}.navbar .navbar-brand,.navbar li a{color:#fff!important}.navbar-nav li.active a,.navbar-nav li a:hover{color:#f4511e!important;background-color:#fff!important}.navbar-default .navbar-toggle{border-color:transparent;color:#fff!important}footer .glyphicon{font-size:20px;margin-bottom:20px;color:#f4511e}.slideanim{visibility:hidden}.slide{animation-name:slide;-webkit-animation-name:slide;animation-duration:1s;-webkit-animation-duration:1s;visibility:visible}@keyframes slide{0%{opacity:0;-webkit-transform:translateY(70%);transform:translateY(70%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slide{0%{opacity:0;-webkit-transform:translateY(70%)}to{opacity:1;-webkit-transform:translateY(0)}}@media screen and (max-width:768px){.col-sm-4{text-align:center;margin:25px 0}.btn-lg{width:100%;margin-bottom:35px}}@media screen and (max-width:480px){.logo{font-size:150px}}", ""]);

// exports


/***/ }),
/* 27 */
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
//# sourceMappingURL=static.ad748076.js.map