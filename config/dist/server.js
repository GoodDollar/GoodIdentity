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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app-dev.js":
/*!********************!*\
  !*** ./app-dev.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_server_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/server.config */ \"./config/server.config.js\");\n/* harmony import */ var _config_webpack_dev_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/webpack.dev.config */ \"./config/webpack.dev.config.js\");\n/* harmony import */ var _config_webpack_dev_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_webpack_dev_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _middleware_server_middlewares__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middleware/server-middlewares */ \"./middleware/server-middlewares.js\");\n/* harmony import */ var _middleware_gun_middleware__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middleware/gun-middleware */ \"./middleware/gun-middleware.js\");\n/* eslint-disable import/no-extraneous-dependencies */\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nconst DIST_DIR = __dirname;\nconst HTML_FILE = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(DIST_DIR, 'index.html');\nconst compiler = webpack__WEBPACK_IMPORTED_MODULE_2___default()(_config_webpack_dev_config__WEBPACK_IMPORTED_MODULE_4___default.a); // app.use(webpackDevMiddleware(compiler, {\n//   publicPath: config.output.publicPath\n// }))\n\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_6___default()(compiler));\nObject(_middleware_server_middlewares__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(app, 'dev'); // app.get(\"*\", (req, res, next) => {\n//   compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {\n//     if (err) {\n//       return next(err)\n//     }\n//     res.set(\"content-type\", \"text/html\")\n//     res.send(result)\n//     res.end()\n//     return false\n//   })\n// })\n\nconsole.log({\n  conf: _config_server_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\nconst PORT = _config_server_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].port || 3003;\nconst server = app.listen(PORT, () => {\n  console.log(`App listening to ${PORT}....`);\n  console.log('Press Ctrl+C to quit.');\n});\n_middleware_gun_middleware__WEBPACK_IMPORTED_MODULE_8__[\"GunDBPublic\"].init(server, _config_server_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].gundbPassword, 'identitydb');\nconsole.log('GunDBPublic created');\n\n//# sourceURL=webpack:///./app-dev.js?");

/***/ }),

/***/ "./config/networks.js":
/*!****************************!*\
  !*** ./config/networks.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst networks = {\n  kovan: {\n    network_id: 42,\n    web3Transport: 'http',\n    httpWeb3Provider: `https://kovan.infura.io/v3/${process.env.INFURA_API}`,\n    websocketWeb3Provider: 'wss://kovan.infura.io/ws'\n  },\n  ganache: {\n    network_id: 6000,\n    web3Transport: 'http',\n    httpWeb3Provider: 'http://localhost:8545/',\n    websocketWeb3Provider: 'wss://localhost:8545/ws'\n  },\n  truffle: {\n    network_id: 4447,\n    web3Transport: 'http',\n    httpWeb3Provider: 'http://localhost:9545/',\n    websocketWeb3Provider: 'ws://localhost:9545/ws'\n  },\n  fuse: {\n    network_id: 121,\n    web3Transport: 'WebSocket',\n    httpWeb3Provider: 'https://rpc.fuse.io/',\n    websocketWeb3Provider: 'wss://explorer-node.fuse.io/ws'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (networks);\n\n//# sourceURL=webpack:///./config/networks.js?");

/***/ }),

/***/ "./config/server.config.js":
/*!*********************************!*\
  !*** ./config/server.config.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _networks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./networks */ \"./config/networks.js\");\n\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst convict = __webpack_require__(/*! convict */ \"convict\");\n\nconst logger = __webpack_require__(/*! ../imports/pino-logger */ \"./imports/pino-logger.js\").default;\n\nconst log = logger.child({\n  from: 'server-config',\n  level: 10\n}); // Define a schema\n\nconst conf = convict({\n  env: {\n    doc: 'The applicaton environment.',\n    format: ['production', 'development', 'test'],\n    default: 'development',\n    arg: 'nodeEnv',\n    env: 'NODE_ENV'\n  },\n  ip: {\n    doc: 'The IP address to bind.',\n    format: 'ipaddress',\n    default: '127.0.0.1',\n    env: 'IP_ADDRESS'\n  },\n  port: {\n    doc: 'The port to bind.',\n    format: 'port',\n    default: 3003,\n    env: 'PORT'\n  },\n  gundbPassword: {\n    doc: 'The password to gundb',\n    format: '*',\n    default: '',\n    env: 'GUNDB_PASS'\n  },\n  mnemonic: {\n    doc: 'Wallet mnemonic',\n    format: '*',\n    env: 'MNEMONIC',\n    default: ''\n  },\n  infuraKey: {\n    doc: 'Infura API Key',\n    format: '*',\n    env: 'INFURA_API',\n    default: ''\n  },\n  ethereum: {\n    network_id: 42,\n    httpWeb3Provider: 'https://kovan.infura.io/v3/',\n    websocketWeb3Provider: 'wss://kovan.infura.io/ws',\n    web3Transport: 'WebSocket'\n  },\n  network: {\n    doc: 'The blockchain network to connect to',\n    format: ['kovan', 'mainnet', 'rinkbey', 'ropsten', 'truffle', 'ganache', 'fuse'],\n    default: 'kovan',\n    env: 'NETWORK'\n  }\n}); // Load environment dependent configuration\n\nconst env = conf.get('env');\nconst network = conf.get('network');\nconf.set('ethereum', _networks__WEBPACK_IMPORTED_MODULE_0__[\"default\"][network]); // Perform validation\n\nconf.validate({\n  allowed: 'strict'\n}); // eslint-disable-next-line\n\nlog.trace('Starting configuration...', conf._instance);\n/* harmony default export */ __webpack_exports__[\"default\"] = (conf.getProperties());\n\n//# sourceURL=webpack:///./config/server.config.js?");

/***/ }),

/***/ "./config/webpack.dev.config.js":
/*!**************************************!*\
  !*** ./config/webpack.dev.config.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable import/no-extraneous-dependencies */\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nmodule.exports = {\n  entry: {\n    main: [\"@babel/polyfill\", \"webpack-hot-middleware/client?path=/__webpack_hmr&reload=true&timeout=20000\", \"./src/client/index.js\"]\n  },\n  resolve: {\n    extensions: ['.ts', '.js', '.json', '.htm']\n  },\n  output: {\n    path: path.join(__dirname, \"dist\"),\n    publicPath: \"/\",\n    filename: \"[name].js\"\n  },\n  mode: \"development\",\n  target: \"web\",\n  devtool: \"#source-map\",\n  node: {\n    fs: \"empty\"\n  },\n  optimization: {\n    nodeEnv: false\n  },\n  module: {\n    rules: [// {\n    //   enforce: \"pre\",\n    //   test: /\\.js$/,\n    //   exclude: /node_modules/,\n    //   loader: \"eslint-loader\",\n    //   options: {\n    //     emitWarning: true,\n    //     failOnError: false,\n    //     failOnWarning: false\n    //   }\n    // },\n    {\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: \"babel-loader\"\n    }, {\n      // Loads the javacript into html template provided.\n      // Entry point is set below in HtmlWebPackPlugin in Plugins\n      test: /\\.html$/,\n      use: [{\n        loader: \"html-loader\" // options: { minimize: true }\n\n      }]\n    }, {\n      test: /\\.css$/,\n      use: [\"style-loader\", \"css-loader\"]\n    }, {\n      test: /\\.(png|svg|jpg|gif)$/,\n      use: [\"file-loader\"]\n    }]\n  },\n  plugins: [new HtmlWebPackPlugin({\n    template: \"./public/index.html\",\n    favicon: './public/favicon.ico',\n    filename: \"./index.html\",\n    excludeChunks: [\"server\"]\n  }), new webpack.DefinePlugin({\n    PRODUCTION: JSON.stringify(false),\n    NETWORK: JSON.stringify('kovan'),\n    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)\n  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\n//# sourceURL=webpack:///./config/webpack.dev.config.js?");

/***/ }),

/***/ "./imports/pino-logger.js":
/*!********************************!*\
  !*** ./imports/pino-logger.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import pino from 'pino'\nconst pino = __webpack_require__(/*! pino */ \"pino\");\n\nconst env = __webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst LOG_LEVEL = env.error ? 'trace' : env.parsed.LOG_LEVEL;\n/* harmony default export */ __webpack_exports__[\"default\"] = (pino({\n  name: 'GoodIdentity - Server',\n  level: LOG_LEVEL,\n  redact: {\n    paths: ['req.headers.authorization'],\n    censor: '*** private data ***'\n  }\n}));\n\n//# sourceURL=webpack:///./imports/pino-logger.js?");

/***/ }),

/***/ "./middleware/gun-middleware.js":
/*!**************************************!*\
  !*** ./middleware/gun-middleware.js ***!
  \**************************************/
/*! exports provided: setup, GunDBPublic, GunDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setup\", function() { return setup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GunDBPublic\", function() { return GunDBPublic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GunDB\", function() { return GunDB; });\n/* harmony import */ var gun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gun */ \"gun\");\n/* harmony import */ var gun__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gun__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gun_sea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gun/sea */ \"gun/sea\");\n/* harmony import */ var gun_sea__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gun_sea__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var console__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! console */ \"console\");\n/* harmony import */ var console__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(console__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! querystring */ \"querystring\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_server_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/server.config */ \"./config/server.config.js\");\n/* harmony import */ var _imports_pino_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../imports/pino-logger */ \"./imports/pino-logger.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n //import { type StorageAPI, type UserRecord } from '../../imports/types'\n\nconst log = _imports_pino_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].child({\n  from: 'GunDB-Middleware'\n});\n\ngun__WEBPACK_IMPORTED_MODULE_0___default.a.chain.putAck = function (data, cb) {\n  var gun = this,\n      cb = cb || function (ctx) {\n    return ctx;\n  };\n\n  let promise = new Promise((res, rej) => gun.put(data, ack => ack.err ? rej(ack) : res(ack)));\n  return promise.then(cb);\n};\n\nconst setup = app => {\n  app.use(gun__WEBPACK_IMPORTED_MODULE_0___default.a.serve);\n  global.Gun = gun__WEBPACK_IMPORTED_MODULE_0___default.a; // / make global to `node --inspect` - debug only\n\n  log.info('Done setup GunDB middleware.');\n};\n\nclass GunDB {\n  constructor() {\n    _defineProperty(this, \"gun\", void 0);\n\n    _defineProperty(this, \"user\", void 0);\n\n    _defineProperty(this, \"usersCol\", void 0);\n\n    _defineProperty(this, \"serverName\", void 0);\n  }\n\n  init(server, password, name) {\n    // this.gun = Gun()\n    this.gun = gun__WEBPACK_IMPORTED_MODULE_0___default()({\n      web: server,\n      file: name\n    });\n    this.user = this.gun.user();\n    this.serverName = name;\n    return new Promise((resolv, reject) => {\n      this.user.create('goodidentity', password, createres => {\n        log.info('Created gundb GoodIdentity User', {\n          name\n        });\n        this.user.auth('goodidentity', password, async authres => {\n          log.info('Authenticated GunDB user:', {\n            name\n          });\n          this.usersCol = this.user.get('users');\n          resolv(true);\n        });\n      });\n    });\n  }\n  /*\r\n    recordSanitize(obj: {} = {}) {\r\n      if (obj._ !== undefined) {\r\n        const { _, ...record } = obj\r\n        return record\r\n      }\r\n  \r\n      return obj\r\n    }\r\n  \r\n    getUser(pubkey: string): Promise<UserRecord> {\r\n      return this.usersCol.get(pubkey).then(this.recordSanitize)\r\n    }\r\n  \r\n    getUserField(pubkey: string, field: string): Promise<any> {\r\n      return this.usersCol\r\n        .get(pubkey)\r\n        .get(field)\r\n        .then(this.recordSanitize)\r\n    }\r\n  \r\n    async addUser(user: UserRecord): Promise<boolean> {\r\n      return this.updateUser(user)\r\n    }\r\n  \r\n    async updateUser(user: UserRecord): Promise<boolean> {\r\n      const { pubkey } = user\r\n      const isDup = await this.isDupUserData(user)\r\n  \r\n      let promises = []\r\n      if (!isDup) {\r\n        log.info('Updating user', { pubkey, user })\r\n        promises.push(this.usersCol.get(pubkey).putAck(user))\r\n  \r\n        if (user.email) {\r\n          const { email } = user\r\n          promises.push(this.usersCol.get('byemail').putAck({ [email]: pubkey }))\r\n        }\r\n  \r\n        if (user.mobile) {\r\n          const { mobile } = user\r\n          promises.push(this.usersCol.get('bymobile').put({ [mobile]: pubkey }))\r\n        }\r\n  \r\n        return Promise.all(promises).then(r => true)\r\n      }\r\n  \r\n      return Promise.reject(new Error('Duplicate user information (phone/email)'))\r\n      // this.user.get('users').get(pubkey).secret({...user, jwt})\r\n    }\r\n  \r\n    async isDupUserData(user: UserRecord) {\r\n      if (user.email) {\r\n        const res = await this.usersCol\r\n          .get('byemail')\r\n          .get(user.email)\r\n          .then()\r\n        if (res && res !== user.pubkey) return true\r\n      }\r\n  \r\n      if (user.mobile) {\r\n        const res = await this.usersCol\r\n          .get('bymobile')\r\n          .get(user.mobile)\r\n          .then()\r\n        if (res && res !== user.pubkey) return true\r\n      }\r\n  \r\n      return false\r\n    }\r\n  \r\n    async deleteUser(user: UserRecord): Promise<boolean> {\r\n      const { pubkey } = user\r\n      const userRecord = await this.usersCol.get(pubkey).then()\r\n      log.info('deleteUser fetched record:', { userRecord })\r\n      if (userRecord.email) {\r\n        this.usersCol\r\n          .get('byemail')\r\n          .get(userRecord.email)\r\n          .put(null)\r\n      }\r\n  \r\n      if (userRecord.mobile) {\r\n        this.usersCol\r\n          .get('bymobile')\r\n          .get(userRecord.mobile)\r\n          .put(null)\r\n      }\r\n  \r\n      this.usersCol.get(pubkey).put(null)\r\n      return true\r\n    }\r\n  \r\n    sanitizeUser(user: UserRecord): UserRecord {\r\n      return {\r\n        pubkey: user.pubkey,\r\n        fullName: user.fullName,\r\n        mobile: user.mobile,\r\n        email: user.email,\r\n        jwt: user.jwt,\r\n        smsValidated: user.smsValidated,\r\n        isEmailConfirmed: user.isEmailConfirmed\r\n      }\r\n    }\r\n  }*/\n\n\n}\n\nconst GunDBPublic = new GunDB();\n\n\n//# sourceURL=webpack:///./middleware/gun-middleware.js?");

/***/ }),

/***/ "./middleware/server-middlewares.js":
/*!******************************************!*\
  !*** ./middleware/server-middlewares.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express_pino_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-pino-logger */ \"express-pino-logger\");\n/* harmony import */ var express_pino_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_pino_logger__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _imports_pino_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imports/pino-logger */ \"./imports/pino-logger.js\");\n/* harmony import */ var _gun_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gun-middleware */ \"./middleware/gun-middleware.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((app, env) => {\n  // parse application/x-www-form-urlencoded\n  // for easier testing with Postman or plain HTML forms\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n    extended: true\n  })); // parse application/json\n\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\n  app.options(cors__WEBPACK_IMPORTED_MODULE_0___default()());\n  app.use(cors__WEBPACK_IMPORTED_MODULE_0___default()());\n  app.use(express_pino_logger__WEBPACK_IMPORTED_MODULE_3___default()({\n    logger: _imports_pino_logger__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }));\n  Object(_gun_middleware__WEBPACK_IMPORTED_MODULE_5__[\"setup\"])(app);\n  app.use((error, req, res, next) => {\n    const log = req.log.child({\n      from: 'errorHandler'\n    });\n    log.error(error);\n    res.status(400).json({\n      message: error.message\n    });\n  });\n});\n\n//# sourceURL=webpack:///./middleware/server-middlewares.js?");

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi @babel/polyfill ./app-dev.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./app-dev.js */\"./app-dev.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./app-dev.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "console":
/*!**************************!*\
  !*** external "console" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"console\");\n\n//# sourceURL=webpack:///external_%22console%22?");

/***/ }),

/***/ "convict":
/*!**************************!*\
  !*** external "convict" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"convict\");\n\n//# sourceURL=webpack:///external_%22convict%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-pino-logger":
/*!**************************************!*\
  !*** external "express-pino-logger" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-pino-logger\");\n\n//# sourceURL=webpack:///external_%22express-pino-logger%22?");

/***/ }),

/***/ "gun":
/*!**********************!*\
  !*** external "gun" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gun\");\n\n//# sourceURL=webpack:///external_%22gun%22?");

/***/ }),

/***/ "gun/sea":
/*!**************************!*\
  !*** external "gun/sea" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gun/sea\");\n\n//# sourceURL=webpack:///external_%22gun/sea%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "pino":
/*!***********************!*\
  !*** external "pino" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pino\");\n\n//# sourceURL=webpack:///external_%22pino%22?");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"querystring\");\n\n//# sourceURL=webpack:///external_%22querystring%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });