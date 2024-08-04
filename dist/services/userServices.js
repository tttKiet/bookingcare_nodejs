"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _models = _interopRequireWildcard(require("../app/models"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _workServices = _interopRequireDefault(require("./workServices"));
var _express = require("express");
var _untils = require("../untils");
var _moment = _interopRequireDefault(require("moment"));
var path = _interopRequireWildcard(require("path"));
var _staffServices = _interopRequireDefault(require("./staffServices"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var saltRounds = 10;
var UserServices = /*#__PURE__*/function () {
  function UserServices() {
    _classCallCheck(this, UserServices);
  }
  _createClass(UserServices, [{
    key: "getUserById",
    value: function () {
      var _getUserById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(id) {
        var userDoc, staffDoc;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _models["default"].User.findByPk(id, {
                raw: true,
                attributes: {
                  exclude: ["password"]
                },
                nest: true
              });
            case 2:
              userDoc = _context.sent;
              if (userDoc) {
                _context.next = 10;
                break;
              }
              _context.next = 6;
              return _models["default"].Staff.findByPk(id, {
                raw: true,
                include: [{
                  model: _models["default"].Role
                }],
                attributes: {
                  exclude: ["password"]
                },
                nest: true
              });
            case 6:
              staffDoc = _context.sent;
              if (staffDoc) {
                _context.next = 9;
                break;
              }
              return _context.abrupt("return", {
                statusCode: 1,
                msg: "Người dùng không tồn tại."
              });
            case 9:
              return _context.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin nhân viên thành công.",
                data: staffDoc
              });
            case 10:
              return _context.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin người dùng thành công.",
                data: userDoc
              });
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getUserById(_x) {
        return _getUserById.apply(this, arguments);
      }
      return getUserById;
    }() // Account
  }, {
    key: "getUser",
    value: function () {
      var _getUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref) {
        var _ref$offset, offset, _ref$limit, limit, email, fullName, banded, whereQuery, accounts;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _ref$offset = _ref.offset, offset = _ref$offset === void 0 ? 0 : _ref$offset, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? 10 : _ref$limit, email = _ref.email, fullName = _ref.fullName, banded = _ref.banded;
              whereQuery = {};
              banded && (whereQuery.banded = banded);
              email && (whereQuery.email = _defineProperty({}, _sequelize.Op.substring, email));
              fullName && (whereQuery.fullName = _defineProperty({}, _sequelize.Op.substring, fullName));
              _context2.next = 7;
              return _models["default"].User.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                where: whereQuery,
                order: [["createdAt", "desc"]],
                nest: true
              });
            case 7:
              accounts = _context2.sent;
              return _context2.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, accounts), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function getUser(_x2) {
        return _getUser.apply(this, arguments);
      }
      return getUser;
    }()
  }, {
    key: "createOrUpdateUser",
    value: function () {
      var _createOrUpdateUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref2) {
        var id, email, password, fullName, phone, address, gender, role, userExisted, passHash, userDoc, passHashCreate, userPass, _passHash, userDocUpdated;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              id = _ref2.id, email = _ref2.email, password = _ref2.password, fullName = _ref2.fullName, phone = _ref2.phone, address = _ref2.address, gender = _ref2.gender, role = _ref2.role;
              if (id) {
                _context3.next = 22;
                break;
              }
              _context3.next = 4;
              return _models["default"].User.findOne({
                where: _defineProperty({}, _sequelize.Op.or, {
                  email: email,
                  phone: phone
                }),
                raw: true
              });
            case 4:
              userExisted = _context3.sent;
              if (!userExisted) {
                _context3.next = 7;
                break;
              }
              return _context3.abrupt("return", {
                statusCode: 2,
                msg: userExisted.email === email ? "Email đã tồn tại." : "Số điện thoại đã tồn tại."
              });
            case 7:
              _context3.next = 9;
              return _bcrypt["default"].hash(password, saltRounds);
            case 9:
              passHash = _context3.sent;
              if (passHash) {
                _context3.next = 12;
                break;
              }
              return _context3.abrupt("return", {
                statusCode: 2,
                msg: "Mã hóa mật khẩu bị lỗi."
              });
            case 12:
              _context3.next = 14;
              return _models["default"].User.create({
                email: email,
                password: passHash,
                fullName: fullName,
                phone: phone,
                address: address,
                gender: gender
              });
            case 14:
              userDoc = _context3.sent;
              if (!userDoc) {
                _context3.next = 19;
                break;
              }
              return _context3.abrupt("return", {
                statusCode: 0,
                msg: "Tạo tài khoản người dùng thành công.",
                data: userDoc
              });
            case 19:
              return _context3.abrupt("return", {
                statusCode: 4,
                msg: "Lỗi tạo tài khoản người dùng."
              });
            case 20:
              _context3.next = 45;
              break;
            case 22:
              // update user
              passHashCreate = {};
              if (!(role === "admin")) {
                _context3.next = 37;
                break;
              }
              _context3.next = 26;
              return _models["default"].User.findByPk(id, {
                raw: true
              });
            case 26:
              userPass = _context3.sent;
              if (!(userPass.password === password)) {
                _context3.next = 31;
                break;
              }
              passHashCreate.password = password;
              _context3.next = 37;
              break;
            case 31:
              _context3.next = 33;
              return _bcrypt["default"].hash(password, saltRounds);
            case 33:
              _passHash = _context3.sent;
              if (_passHash) {
                _context3.next = 36;
                break;
              }
              return _context3.abrupt("return", {
                statusCode: 2,
                msg: "Mã hóa mật khẩu bị lỗi."
              });
            case 36:
              passHashCreate.password = _passHash;
            case 37:
              _context3.next = 39;
              return _models["default"].User.update(_objectSpread(_objectSpread({
                email: email
              }, passHashCreate), {}, {
                fullName: fullName,
                phone: phone,
                address: address,
                gender: gender
              }), {
                where: {
                  id: id
                }
              });
            case 39:
              userDocUpdated = _context3.sent;
              if (!(userDocUpdated[0] > 0)) {
                _context3.next = 44;
                break;
              }
              return _context3.abrupt("return", {
                statusCode: 0,
                msg: "C\u1EADp nh\u1EADt ng\u01B0\u1EDDi d\xF9ng th\xE0nh c\xF4ng. ".concat(role !== "admin" ? "Mật khẩu chưa được thay đổi." : "")
              });
            case 44:
              return _context3.abrupt("return", {
                statusCode: 0,
                msg: "Dữ liệu chưa được thay đổi"
              });
            case 45:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function createOrUpdateUser(_x3) {
        return _createOrUpdateUser.apply(this, arguments);
      }
      return createOrUpdateUser;
    }() // Patient Profile
  }, {
    key: "getPatientProfile",
    value: function () {
      var _getPatientProfile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_ref3) {
        var _ref3$offset, offset, _ref3$limit, limit, userId, patientProfileId, profileName, docs, wherePatientProfile, _docs;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _ref3$offset = _ref3.offset, offset = _ref3$offset === void 0 ? 0 : _ref3$offset, _ref3$limit = _ref3.limit, limit = _ref3$limit === void 0 ? 10 : _ref3$limit, userId = _ref3.userId, patientProfileId = _ref3.patientProfileId, profileName = _ref3.profileName;
              if (!patientProfileId) {
                _context4.next = 12;
                break;
              }
              _context4.next = 4;
              return _models["default"].PatientProfile.findByPk(patientProfileId);
            case 4:
              docs = _context4.sent;
              if (!docs) {
                _context4.next = 9;
                break;
              }
              return _context4.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: docs
              });
            case 9:
              return _context4.abrupt("return", {
                statusCode: 2,
                msg: "Lấy thông tin thất bại."
              });
            case 10:
              _context4.next = 19;
              break;
            case 12:
              wherePatientProfile = {};
              if (profileName) {
                wherePatientProfile.fullName = (0, _untils.searchLikeDeep)("PatientProfile", "fullName", profileName);
                // wherePatientProfile.fullName = {
                //   [Op.substring]: profileName,
                // };
              }

              wherePatientProfile.userId = userId;
              _context4.next = 17;
              return _models["default"].PatientProfile.findAndCountAll({
                raw: true,
                where: {
                  userId: userId
                },
                offset: offset,
                limit: limit,
                order: [["fullName", "asc"]],
                nest: true
              });
            case 17:
              _docs = _context4.sent;
              return _context4.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, _docs), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 19:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function getPatientProfile(_x4) {
        return _getPatientProfile.apply(this, arguments);
      }
      return getPatientProfile;
    }()
  }, {
    key: "createOrUpdatePatientProfile",
    value: function () {
      var _createOrUpdatePatientProfile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(data) {
        var userDoc, patientProfileExisted, patientProfileDoc, _patientProfileExisted, countUpdated;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              // Check if user is not found
              console.log("data.userId", data.userId);
              _context5.next = 3;
              return _models["default"].User.findByPk(data.userId);
            case 3:
              userDoc = _context5.sent;
              if (userDoc) {
                _context5.next = 6;
                break;
              }
              return _context5.abrupt("return", {
                statusCode: 1,
                msg: "Người dùng không tồn tại."
              });
            case 6:
              if (data.id) {
                _context5.next = 22;
                break;
              }
              _context5.next = 9;
              return _models["default"].PatientProfile.findOne({
                where: {
                  cccd: data.cccd
                },
                raw: true
              });
            case 9:
              patientProfileExisted = _context5.sent;
              if (!patientProfileExisted) {
                _context5.next = 12;
                break;
              }
              return _context5.abrupt("return", {
                statusCode: 1,
                msg: "Hồ sơ này đã tồn tại."
              });
            case 12:
              _context5.next = 14;
              return _models["default"].PatientProfile.create({
                fullName: data.fullName,
                phone: data.phone,
                address: data.address,
                profession: data.profession,
                email: data.email,
                birthDay: data.birthDay,
                gender: data.gender,
                cccd: data.cccd,
                nation: data.nation,
                addressCode: data.addressCode,
                userId: data.userId
              });
            case 14:
              patientProfileDoc = _context5.sent;
              if (!patientProfileDoc) {
                _context5.next = 19;
                break;
              }
              return _context5.abrupt("return", {
                statusCode: 0,
                msg: "Tạo hồ sơ bệnh nhân thành công.",
                data: patientProfileDoc
              });
            case 19:
              return _context5.abrupt("return", {
                statusCode: 4,
                msg: "Lỗi tạo hồ sơ bệnh nhân."
              });
            case 20:
              _context5.next = 35;
              break;
            case 22:
              _context5.next = 24;
              return _models["default"].PatientProfile.findOne({
                where: {
                  cccd: data.cccd,
                  id: _defineProperty({}, _sequelize.Op.not, data.id)
                },
                raw: true
              });
            case 24:
              _patientProfileExisted = _context5.sent;
              if (!_patientProfileExisted) {
                _context5.next = 27;
                break;
              }
              return _context5.abrupt("return", {
                statusCode: 1,
                msg: "Hồ sơ này đã tồn tại."
              });
            case 27:
              _context5.next = 29;
              return _models["default"].PatientProfile.update({
                fullName: data.fullName,
                phone: data.phone,
                address: data.address,
                profession: data.profession,
                email: data.email,
                birthDay: data.birthDay,
                gender: data.gender,
                cccd: data.cccd,
                nation: data.nation,
                addressCode: data.addressCode
              }, {
                where: {
                  id: data.id
                }
              });
            case 29:
              countUpdated = _context5.sent;
              if (!(countUpdated[0] > 0)) {
                _context5.next = 34;
                break;
              }
              return _context5.abrupt("return", {
                statusCode: 0,
                msg: "Cập nhật thành công hồ sơ bệnh nhân."
              });
            case 34:
              return _context5.abrupt("return", {
                statusCode: 4,
                msg: "Không tìm thấy hồ sơ bệnh nhân."
              });
            case 35:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function createOrUpdatePatientProfile(_x5) {
        return _createOrUpdatePatientProfile.apply(this, arguments);
      }
      return createOrUpdatePatientProfile;
    }()
  }, {
    key: "deletePatientProfile",
    value: function () {
      var _deletePatientProfile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id, userId) {
        var patientProfileDoc, deletedCount;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _models["default"].PatientProfile.findOne({
                where: {
                  id: id
                },
                raw: true
              });
            case 2:
              patientProfileDoc = _context6.sent;
              if (!(patientProfileDoc && patientProfileDoc.userId !== userId)) {
                _context6.next = 7;
                break;
              }
              return _context6.abrupt("return", {
                statusCode: 4,
                msg: 'Bạn không có quyền xóa "Hồ sơ bệnh nhân" của người khác.'
              });
            case 7:
              if (patientProfileDoc) {
                _context6.next = 9;
                break;
              }
              return _context6.abrupt("return", {
                statusCode: 4,
                msg: "Không tìm thấy hồ sơ này."
              });
            case 9:
              _context6.next = 11;
              return _models["default"].PatientProfile.destroy({
                force: true,
                where: {
                  id: id
                }
              });
            case 11:
              deletedCount = _context6.sent;
              if (!(deletedCount > 0)) {
                _context6.next = 16;
                break;
              }
              return _context6.abrupt("return", {
                statusCode: 0,
                msg: "Đã xóa thành công."
              });
            case 16:
              return _context6.abrupt("return", {
                statusCode: 1,
                msg: "Không tìm thấy tài nguyên này."
              });
            case 17:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function deletePatientProfile(_x6, _x7) {
        return _deletePatientProfile.apply(this, arguments);
      }
      return deletePatientProfile;
    }() // Booking
    // dont fix cancel
  }, {
    key: "countBooking",
    value: function () {
      var _countBooking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(healthExaminationScheduleId) {
        var count;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _models["default"].Booking.findAll({
                where: {
                  healthExaminationScheduleId: healthExaminationScheduleId,
                  status: "CU2"
                }
              });
            case 2:
              count = _context7.sent;
              return _context7.abrupt("return", count.length);
            case 4:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function countBooking(_x8) {
        return _countBooking.apply(this, arguments);
      }
      return countBooking;
    }()
  }, {
    key: "isBooking",
    value: function () {
      var _isBooking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(healthExaminationScheduleId) {
        var doc, count;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return _models["default"].HealthExaminationSchedule.findByPk(healthExaminationScheduleId, {
                raw: true
              });
            case 2:
              doc = _context8.sent;
              _context8.next = 5;
              return this.countBooking(healthExaminationScheduleId);
            case 5:
              count = _context8.sent;
              if (!(doc.maxNumber > count)) {
                _context8.next = 10;
                break;
              }
              return _context8.abrupt("return", true);
            case 10:
              return _context8.abrupt("return", false);
            case 11:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function isBooking(_x9) {
        return _isBooking.apply(this, arguments);
      }
      return isBooking;
    }()
  }, {
    key: "createBooking",
    value: function () {
      var _createBooking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(_ref4) {
        var healthExaminationScheduleId, patientProfileId, descriptionDisease, userId, paymentType, _yield$Promise$all, _yield$Promise$all2, schedule, patientProfile, bookingExists, doctorWorkRoom, doctorPrice, isBooking, codeExists, bookingEntity, bookingDoc;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              healthExaminationScheduleId = _ref4.healthExaminationScheduleId, patientProfileId = _ref4.patientProfileId, descriptionDisease = _ref4.descriptionDisease, userId = _ref4.userId, paymentType = _ref4.paymentType;
              if (!(paymentType !== "card" && paymentType !== "hospital")) {
                _context9.next = 3;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 400,
                msg: "Dữ liệu về phương thức thanh toán không chính xác"
              });
            case 3:
              _context9.next = 5;
              return Promise.all([_models["default"].HealthExaminationSchedule.findByPk(healthExaminationScheduleId, {
                raw: true
              }), _models["default"].PatientProfile.findByPk(patientProfileId, {
                raw: true
              })]);
            case 5:
              _yield$Promise$all = _context9.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              schedule = _yield$Promise$all2[0];
              patientProfile = _yield$Promise$all2[1];
              if (!(!schedule || !patientProfile)) {
                _context9.next = 11;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 1,
                msg: "Dữ liệu *Hồ sơ bệnh nhân* hoặc *Lịch không được tìm thấy*."
              });
            case 11:
              if (!(patientProfile.userId !== userId)) {
                _context9.next = 13;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 3,
                msg: "Bạn phải đặt lịch cho hồ sơ của bạn."
              });
            case 13:
              _context9.next = 15;
              return _models["default"].Booking.findOne({
                where: {
                  healthExaminationScheduleId: healthExaminationScheduleId,
                  patientProfileId: patientProfileId
                },
                raw: true
              });
            case 15:
              bookingExists = _context9.sent;
              if (!(bookingExists && bookingExists.status === "CU1")) {
                _context9.next = 20;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 0,
                msg: "Lấy dữ liệu để thanh toán",
                data: bookingExists
              });
            case 20:
              if (!(bookingExists && bookingExists.status === "CU2")) {
                _context9.next = 22;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 400,
                msg: "Hồ sơ bệnh nhân của bạn đã đặt lịch này.",
                data: bookingExists
              });
            case 22:
              _context9.next = 24;
              return _workServices["default"].getWorkRoomFromWorking({
                workingId: schedule.workingId,
                type: "thanFromDateHere"
              });
            case 24:
              doctorWorkRoom = _context9.sent;
              if (doctorWorkRoom) {
                _context9.next = 27;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 500,
                msg: "B\xE1c s\u0129 ch\u01B0a \u0111\u01B0\u1EE3c th\xEAm v\xE0o ph\xF2ng kh\xE1m."
              });
            case 27:
              doctorPrice = doctorWorkRoom.checkUpPrice;
              _context9.next = 30;
              return this.isBooking(healthExaminationScheduleId);
            case 30:
              isBooking = _context9.sent;
              _context9.next = 33;
              return _models["default"].Code.findOne({
                where: {
                  key: "CU1"
                }
              });
            case 33:
              codeExists = _context9.sent;
              if (codeExists) {
                _context9.next = 36;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 400,
                msg: "Không tìm thấy dữ liệu CU1 - 'Chờ thanh toán'"
              });
            case 36:
              if (!isBooking) {
                _context9.next = 44;
                break;
              }
              _context9.next = 39;
              return _models["default"].Booking.create({
                healthExaminationScheduleId: healthExaminationScheduleId,
                patientProfileId: patientProfileId,
                descriptionDisease: descriptionDisease,
                paymentType: paymentType,
                doctorPrice: doctorPrice,
                status: "CU1"
              });
            case 39:
              bookingEntity = _context9.sent;
              bookingDoc = bookingEntity.get({
                plain: true
              });
              return _context9.abrupt("return", {
                statusCode: 0,
                msg: "B\u1EA1n \u0111\xE3 \u0111\u1EB7t l\u1ECBch th\xE0nh c\xF4ng.",
                data: bookingDoc
              });
            case 44:
              return _context9.abrupt("return", {
                statusCode: 2,
                msg: "Đã có người vừa đặt lịch này, lịch đã đủ người khám. Vui lòng đăng ký lịch khác!"
              });
            case 45:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function createBooking(_x10) {
        return _createBooking.apply(this, arguments);
      }
      return createBooking;
    }()
  }, {
    key: "getBooking",
    value: function () {
      var _getBooking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(_ref5) {
        var date, healthFacilityId, paymentType, patientProfileId, patientProfileName, userId, _ref5$limit, limit, _ref5$offset, offset, status, bookingId, HR4, whereBooking, whereHealthExaminationSchedule, wherePatientProfile, patientProfileDoc, patientProfileIds, bookingDoc, dataPromise, result;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              date = _ref5.date, healthFacilityId = _ref5.healthFacilityId, paymentType = _ref5.paymentType, patientProfileId = _ref5.patientProfileId, patientProfileName = _ref5.patientProfileName, userId = _ref5.userId, _ref5$limit = _ref5.limit, limit = _ref5$limit === void 0 ? 30 : _ref5$limit, _ref5$offset = _ref5.offset, offset = _ref5$offset === void 0 ? 0 : _ref5$offset, status = _ref5.status, bookingId = _ref5.bookingId, HR4 = _ref5.HR4;
              whereBooking = {};
              whereHealthExaminationSchedule = {};
              wherePatientProfile = {}; // get patient profile of user
              _context11.next = 6;
              return _models["default"].PatientProfile.findAll({
                where: {
                  userId: userId
                },
                raw: true
              });
            case 6:
              patientProfileDoc = _context11.sent;
              if (status) {
                whereBooking.status = status;
              }
              if (bookingId) {
                whereBooking.id = bookingId;
              }
              patientProfileIds = patientProfileDoc.map(function (p) {
                return p.id;
              });
              whereBooking.patientProfileId = _defineProperty({}, _sequelize.Op["in"], patientProfileIds);
              _context11.next = 13;
              return _models["default"].Booking.findAndCountAll({
                limit: limit,
                offset: offset,
                where: whereBooking,
                nest: true,
                raw: true,
                include: [{
                  model: _models["default"].HealthExaminationSchedule,
                  where: whereHealthExaminationSchedule,
                  include: [{
                    model: _models["default"].Working,
                    include: [{
                      model: _models["default"].Staff,
                      include: [_models["default"].Specialist]
                    }]
                  }, {
                    model: _models["default"].Code,
                    as: "TimeCode"
                  }]
                }, {
                  model: _models["default"].PatientProfile,
                  where: wherePatientProfile
                }, {
                  model: _models["default"].Code
                }],
                order: [[_models["default"].HealthExaminationSchedule, "date", "desc"]]
              });
            case 13:
              bookingDoc = _context11.sent;
              dataPromise = bookingDoc.rows.map( /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(b) {
                  var bookingId, health, workingId, workRoom;
                  return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                      case 0:
                        bookingId = b.id;
                        if (!(HR4 == 1)) {
                          _context10.next = 7;
                          break;
                        }
                        _context10.next = 4;
                        return _models["default"].HealthRecord.findOne({
                          status: "HR4",
                          raw: true,
                          where: {
                            bookingId: bookingId
                          }
                        });
                      case 4:
                        health = _context10.sent;
                        if (health) {
                          _context10.next = 7;
                          break;
                        }
                        return _context10.abrupt("return", null);
                      case 7:
                        workingId = b.HealthExaminationSchedule.Working.id; // Get working no check price
                        _context10.next = 10;
                        return _workServices["default"].getWorkRoomFromWorking({
                          workingId: workingId
                        });
                      case 10:
                        workRoom = _context10.sent;
                        return _context10.abrupt("return", _objectSpread(_objectSpread({}, b), {}, {
                          workRoom: workRoom
                        }));
                      case 12:
                      case "end":
                        return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function (_x12) {
                  return _ref6.apply(this, arguments);
                };
              }());
              _context11.next = 17;
              return Promise.all(dataPromise);
            case 17:
              result = _context11.sent.filter(function (s) {
                return s != null;
              });
              return _context11.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: {
                  rows: result,
                  count: bookingDoc.count,
                  limit: limit,
                  offset: offset
                }
              });
            case 19:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function getBooking(_x11) {
        return _getBooking.apply(this, arguments);
      }
      return getBooking;
    }()
  }, {
    key: "updateStatusBooking",
    value: function () {
      var _updateStatusBooking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(_ref7) {
        var status, bookingId, _ref7$sendEmail, sendEmail, checkStatusExited, isSendEmail, _bookingFilter, bookingUpdate, bookingFilter, replacements, _bookingFilter$Patien, __dirname, srcHtml, filePath;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              status = _ref7.status, bookingId = _ref7.bookingId, _ref7$sendEmail = _ref7.sendEmail, sendEmail = _ref7$sendEmail === void 0 ? false : _ref7$sendEmail;
              _context12.next = 3;
              return _models["default"].Code.findOne({
                where: {
                  key: status
                },
                raw: true
              });
            case 3:
              checkStatusExited = _context12.sent;
              if (checkStatusExited) {
                _context12.next = 6;
                break;
              }
              return _context12.abrupt("return", {
                statusCode: 500,
                msg: "Mã trạng thái không tồn tại. [CODE]"
              });
            case 6:
              isSendEmail = false;
              if (!sendEmail) {
                _context12.next = 12;
                break;
              }
              _context12.next = 10;
              return _models["default"].Booking.findOne({
                raw: true,
                nest: true,
                where: {
                  id: bookingId
                },
                include: [{
                  model: _models["default"].HealthExaminationSchedule,
                  include: [{
                    model: _models["default"].Working
                  }]
                }, {
                  model: _models["default"].PatientProfile
                }, {
                  model: _models["default"].Code
                }]
              });
            case 10:
              _bookingFilter = _context12.sent;
              if (_bookingFilter && _bookingFilter.status === "CU1") {
                // send email
                isSendEmail = true;
              }
            case 12:
              _context12.next = 14;
              return _models["default"].Booking.update({
                status: status
              }, {
                where: {
                  id: bookingId
                },
                include: [{
                  model: _models["default"].HealthExaminationSchedule,
                  include: [{
                    model: _models["default"].Working
                  }]
                }, {
                  model: _models["default"].PatientProfile
                }, {
                  model: _models["default"].Code
                }]
              });
            case 14:
              bookingUpdate = _context12.sent;
              _context12.next = 17;
              return _models["default"].Booking.findOne({
                where: {
                  id: bookingId
                },
                draw: true,
                include: [_models["default"].PatientProfile, {
                  model: _models["default"].HealthExaminationSchedule,
                  include: [{
                    model: _models["default"].Code,
                    as: "TimeCode"
                  }, {
                    model: _models["default"].Working,
                    include: [_models["default"].Staff, _models["default"].HealthFacility]
                  }]
                }],
                nest: true
              });
            case 17:
              bookingFilter = _context12.sent;
              if (!isSendEmail) {
                _context12.next = 31;
                break;
              }
              replacements = {
                name: bookingFilter.PatientProfile.fullName,
                time: bookingFilter.HealthExaminationSchedule.TimeCode.value,
                date: (0, _moment["default"])(bookingFilter.HealthExaminationSchedule.date).format("L"),
                doctor: bookingFilter.HealthExaminationSchedule.Working.Staff.fullName,
                location: "".concat(bookingFilter.HealthExaminationSchedule.Working.HealthFacility.name)
              };
              _context12.prev = 20;
              __dirname = path.resolve();
              srcHtml = "/src/views/template/email_booking_2.html";
              filePath = path.join(__dirname, srcHtml);
              _context12.next = 26;
              return (0, _untils.sendEmail)({
                receiveEmail: bookingFilter === null || bookingFilter === void 0 || (_bookingFilter$Patien = bookingFilter.PatientProfile) === null || _bookingFilter$Patien === void 0 ? void 0 : _bookingFilter$Patien.email,
                replacements: replacements,
                srcHtml: filePath
              });
            case 26:
              _context12.next = 31;
              break;
            case 28:
              _context12.prev = 28;
              _context12.t0 = _context12["catch"](20);
              console.log(_context12.t0);
            case 31:
              return _context12.abrupt("return", {
                statusCode: 0,
                msg: "Cập nhật booking thành công.",
                data: bookingFilter
              });
            case 32:
            case "end":
              return _context12.stop();
          }
        }, _callee12, null, [[20, 28]]);
      }));
      function updateStatusBooking(_x13) {
        return _updateStatusBooking.apply(this, arguments);
      }
      return updateStatusBooking;
    }()
  }, {
    key: "getHealthRecordWithTimeCode",
    value: function () {
      var _getHealthRecordWithTimeCode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(timeCodeId) {
        var data;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return _models["default"].HealthRecord.findAll({
                raw: true,
                // order: [["createdAt", "desc"]],
                include: [{
                  model: _models["default"].Booking,
                  where: {
                    healthExaminationScheduleId: timeCodeId
                  },
                  order: [["createdAt", "desc"]],
                  include: [{
                    model: _models["default"].PatientProfile
                  }]
                }, {
                  model: _models["default"].Code,
                  as: "status"
                }],
                nest: true
              });
            case 2:
              data = _context13.sent;
              return _context13.abrupt("return", data);
            case 4:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }));
      function getHealthRecordWithTimeCode(_x14) {
        return _getHealthRecordWithTimeCode.apply(this, arguments);
      }
      return getHealthRecordWithTimeCode;
    }() // Health records
  }, {
    key: "getHealthRecord",
    value: function () {
      var _getHealthRecord = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(_ref8) {
        var _ref8$offset, offset, _ref8$limit, limit, userId, healthRecordId, _ref8$permission, permission, timeCodeId, getRecordRaw, _getRecordRaw, docs, whereHealthRecord, wherePatientProfile, whereQueryBooking, data, docBookingUser, resultPromise, result;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              _getRecordRaw = function _getRecordRaw3() {
                _getRecordRaw = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(userId, healthRecordId) {
                  var whereHealthRecord, wherePatientProfile, whereQueryBooking, whereQueryStaff, docs, workRoomDoc;
                  return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                    while (1) switch (_context15.prev = _context15.next) {
                      case 0:
                        whereHealthRecord = {};
                        wherePatientProfile = {};
                        whereQueryBooking = {};
                        whereQueryStaff = {};
                        if (healthRecordId) {
                          whereHealthRecord.id = healthRecordId;
                        }
                        if (userId) {
                          wherePatientProfile.userId = userId;
                        } else {
                          whereQueryStaff.id = userId;
                        }
                        _context15.next = 8;
                        return _models["default"].HealthRecord.findOne({
                          raw: true,
                          where: whereHealthRecord,
                          include: [{
                            model: _models["default"].Booking,
                            where: whereQueryBooking,
                            include: [{
                              model: _models["default"].HealthExaminationSchedule,
                              include: [{
                                model: _models["default"].Working,
                                include: [{
                                  model: _models["default"].Staff,
                                  include: [_models["default"].Specialist],
                                  where: whereQueryStaff
                                }]
                              }, {
                                model: _models["default"].Code,
                                as: "TimeCode"
                              }]
                            }, {
                              model: _models["default"].PatientProfile,
                              where: wherePatientProfile,
                              include: [{
                                model: _models["default"].User
                              }]
                            }]
                          }, {
                            model: _models["default"].Code,
                            as: "status"
                            // where: whereQueryCode,
                          }],

                          nest: true
                        });
                      case 8:
                        docs = _context15.sent;
                        if (docs) {
                          _context15.next = 11;
                          break;
                        }
                        return _context15.abrupt("return", false);
                      case 11:
                        _context15.next = 13;
                        return _models["default"].WorkRoom.findOne({
                          raw: true,
                          where: {
                            applyDate: _defineProperty({}, _sequelize.Op.lte, docs.Booking.createdAt)
                          },
                          include: [{
                            model: _models["default"].Working,
                            where: {
                              id: docs.Booking.HealthExaminationSchedule.Working.id
                            }
                          }, {
                            model: _models["default"].ClinicRoom,
                            on: _defineProperty({}, _sequelize.Op.and, [{
                              roomNumber: _defineProperty({}, _sequelize.Op.col, "WorkRoom.ClinicRoomRoomNumber")
                            }, {
                              healthFacilityId: _defineProperty({}, _sequelize.Op.col, "WorkRoom.ClinicRoomHealthFacilityId")
                            }]),
                            include: [{
                              model: _models["default"].HealthFacility
                            }]
                          }],
                          order: [["applyDate", "desc"]],
                          nest: true
                        });
                      case 13:
                        workRoomDoc = _context15.sent;
                        docs.WorkRoom = workRoomDoc;
                        return _context15.abrupt("return", docs);
                      case 16:
                      case "end":
                        return _context15.stop();
                    }
                  }, _callee15);
                }));
                return _getRecordRaw.apply(this, arguments);
              };
              getRecordRaw = function _getRecordRaw2(_x16, _x17) {
                return _getRecordRaw.apply(this, arguments);
              };
              _ref8$offset = _ref8.offset, offset = _ref8$offset === void 0 ? 0 : _ref8$offset, _ref8$limit = _ref8.limit, limit = _ref8$limit === void 0 ? 100 : _ref8$limit, userId = _ref8.userId, healthRecordId = _ref8.healthRecordId, _ref8$permission = _ref8.permission, permission = _ref8$permission === void 0 ? "user" : _ref8$permission, timeCodeId = _ref8.timeCodeId;
              if (!healthRecordId) {
                _context16.next = 12;
                break;
              }
              _context16.next = 6;
              return getRecordRaw(userId, healthRecordId);
            case 6:
              docs = _context16.sent;
              if (!docs) {
                _context16.next = 11;
                break;
              }
              return _context16.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: docs
              });
            case 11:
              return _context16.abrupt("return", {
                statusCode: 1,
                msg: "Lấy thông tin thất bại. Không tìm thấy phiếu khám bệnh."
              });
            case 12:
              whereHealthRecord = {};
              wherePatientProfile = {};
              whereQueryBooking = {};
              if (healthRecordId) {
                whereHealthRecord.id = healthRecordId;
              }
              if (userId && permission !== "doctor") {
                wherePatientProfile.userId = userId;
              }
              if (!(permission === "doctor")) {
                _context16.next = 24;
                break;
              }
              if (timeCodeId) {
                _context16.next = 20;
                break;
              }
              return _context16.abrupt("return", {
                statusCode: 4,
                msg: "Thiếu tham số truyền vào [timeCodeId]."
              });
            case 20:
              _context16.next = 22;
              return this.getHealthRecordWithTimeCode(timeCodeId);
            case 22:
              data = _context16.sent;
              return _context16.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin cho Bác sĩ thành công.",
                data: data
              });
            case 24:
              _context16.next = 26;
              return _models["default"].HealthRecord.findAll({
                raw: true,
                offset: offset,
                limit: limit,
                where: whereHealthRecord,
                order: [["orderNumber", "asc"]],
                include: [{
                  model: _models["default"].Booking,
                  where: whereQueryBooking,
                  order: [["createdAt", "desc"]],
                  include: [{
                    model: _models["default"].PatientProfile,
                    where: wherePatientProfile
                  }]
                }],
                nest: true
              });
            case 26:
              docBookingUser = _context16.sent;
              resultPromise = docBookingUser.map( /*#__PURE__*/function () {
                var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(doc) {
                  return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                    while (1) switch (_context14.prev = _context14.next) {
                      case 0:
                        _context14.next = 2;
                        return getRecordRaw(userId, doc.id);
                      case 2:
                        return _context14.abrupt("return", _context14.sent);
                      case 3:
                      case "end":
                        return _context14.stop();
                    }
                  }, _callee14);
                }));
                return function (_x18) {
                  return _ref9.apply(this, arguments);
                };
              }());
              _context16.next = 30;
              return Promise.all(resultPromise);
            case 30:
              result = _context16.sent;
              return _context16.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: result
              });
            case 32:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this);
      }));
      function getHealthRecord(_x15) {
        return _getHealthRecord.apply(this, arguments);
      }
      return getHealthRecord;
    }()
  }, {
    key: "getBookingLastStaff",
    value: function () {
      var _getBookingLastStaff = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(_ref10) {
        var userId, staffId, patientProfiles, dataPromiseBooking, result;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              userId = _ref10.userId, staffId = _ref10.staffId;
              _context18.next = 3;
              return _models["default"].PatientProfile.findAll({
                raw: true,
                where: {
                  userId: userId
                }
              });
            case 3:
              patientProfiles = _context18.sent;
              console.log("\n\n\n\n\npatientProfiles", patientProfiles);
              dataPromiseBooking = patientProfiles.map( /*#__PURE__*/function () {
                var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(p) {
                  var bookingDoc;
                  return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                    while (1) switch (_context17.prev = _context17.next) {
                      case 0:
                        _context17.next = 2;
                        return _models["default"].HealthRecord.findAll({
                          offset: 0,
                          limit: 5,
                          order: [["createdAt", "desc"]],
                          raw: true,
                          nest: true,
                          where: {
                            statusCode: "HR4"
                          },
                          include: [_models["default"].Patient, {
                            model: _models["default"].Booking,
                            where: {
                              patientProfileId: p === null || p === void 0 ? void 0 : p.id
                            },
                            include: [{
                              model: _models["default"].HealthExaminationSchedule,
                              where: {},
                              include: [{
                                model: _models["default"].Working,
                                where: {
                                  staffId: staffId
                                }
                              }]
                            }]
                          }]
                        });
                      case 2:
                        bookingDoc = _context17.sent;
                        return _context17.abrupt("return", bookingDoc || []);
                      case 4:
                      case "end":
                        return _context17.stop();
                    }
                  }, _callee17);
                }));
                return function (_x20) {
                  return _ref11.apply(this, arguments);
                };
              }());
              _context18.next = 8;
              return Promise.all(dataPromiseBooking);
            case 8:
              result = _context18.sent;
              return _context18.abrupt("return", result.filter(function (r) {
                return r != null;
              }).flat());
            case 10:
            case "end":
              return _context18.stop();
          }
        }, _callee18);
      }));
      function getBookingLastStaff(_x19) {
        return _getBookingLastStaff.apply(this, arguments);
      }
      return getBookingLastStaff;
    }()
  }, {
    key: "getBookingLastStaff5",
    value: function () {
      var _getBookingLastStaff2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(_ref12) {
        var staffId, bookingDoc;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              staffId = _ref12.staffId;
              _context19.next = 3;
              return _models["default"].HealthRecord.findAndCountAll({
                offset: 0,
                limit: 5,
                order: [["createdAt", "desc"]],
                raw: true,
                nest: true,
                where: {
                  statusCode: "HR4"
                },
                include: [_models["default"].Patient, {
                  model: _models["default"].Booking,
                  where: {},
                  include: [{
                    model: _models["default"].HealthExaminationSchedule,
                    where: {},
                    include: [{
                      model: _models["default"].Working,
                      where: {
                        staffId: staffId
                      }
                    }, {
                      model: _models["default"].Code,
                      as: "TimeCode"
                    }]
                  }]
                }]
              });
            case 3:
              bookingDoc = _context19.sent;
              console.log("bookingDocbookingDoc", bookingDoc);
              return _context19.abrupt("return", {
                statusCode: 200,
                msg: "Lấy dữ liệu thành công",
                data: bookingDoc
              });
            case 6:
            case "end":
              return _context19.stop();
          }
        }, _callee19);
      }));
      function getBookingLastStaff5(_x21) {
        return _getBookingLastStaff2.apply(this, arguments);
      }
      return getBookingLastStaff5;
    }()
  }, {
    key: "createOrUpdateReview",
    value: function () {
      var _createOrUpdateReview = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(_ref13) {
        var id, staffId, starNumber, description, userId, userDoc, reviewExist, bookingLastStaff, reviewDoc, userDocUpdated;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              id = _ref13.id, staffId = _ref13.staffId, starNumber = _ref13.starNumber, description = _ref13.description, userId = _ref13.userId;
              if (!(starNumber < 0 || starNumber > 5)) {
                _context20.next = 3;
                break;
              }
              return _context20.abrupt("return", {
                statusCode: 400,
                msg: "Đánh giá sai."
              });
            case 3:
              if (id) {
                _context20.next = 30;
                break;
              }
              _context20.next = 6;
              return _models["default"].User.findOne({
                raw: true,
                where: {
                  id: userId
                }
              });
            case 6:
              userDoc = _context20.sent;
              if (userDoc) {
                _context20.next = 9;
                break;
              }
              return _context20.abrupt("return", {
                statusCode: 404,
                msg: "Không tìm thấy người dùng đánh giá."
              });
            case 9:
              _context20.next = 11;
              return _models["default"].Review.findOne({
                raw: true,
                where: {
                  userId: userId,
                  staffId: staffId
                }
              });
            case 11:
              reviewExist = _context20.sent;
              if (!reviewExist) {
                _context20.next = 14;
                break;
              }
              return _context20.abrupt("return", {
                statusCode: 404,
                msg: "Bạn đã đánh giá Bác sĩ này rồi."
              });
            case 14:
              _context20.next = 16;
              return this.getBookingLastStaff({
                userId: userId,
                staffId: staffId
              });
            case 16:
              bookingLastStaff = _context20.sent;
              console.log("\n\n\nbookingLastStaffbookingLastStaffbookingLastStaffbookingLastStaff", bookingLastStaff);
              if (!(bookingLastStaff.length == 0)) {
                _context20.next = 20;
                break;
              }
              return _context20.abrupt("return", {
                statusCode: 402,
                msg: "Bạn chưa khám ở Bác sĩ này."
              });
            case 20:
              _context20.next = 22;
              return _models["default"].Review.create({
                staffId: staffId,
                starNumber: starNumber,
                description: description,
                userId: userId
              });
            case 22:
              reviewDoc = _context20.sent;
              if (!reviewDoc) {
                _context20.next = 27;
                break;
              }
              return _context20.abrupt("return", {
                statusCode: 0,
                msg: "Đã đánh giá.",
                data: reviewDoc
              });
            case 27:
              return _context20.abrupt("return", {
                statusCode: 4,
                msg: "Lỗi xin thử lại."
              });
            case 28:
              _context20.next = 38;
              break;
            case 30:
              _context20.next = 32;
              return _models["default"].Review.update({
                starNumber: starNumber,
                description: description
              }, {
                where: {
                  id: id
                }
              });
            case 32:
              userDocUpdated = _context20.sent;
              if (!(userDocUpdated[0] > 0)) {
                _context20.next = 37;
                break;
              }
              return _context20.abrupt("return", {
                statusCode: 0,
                msg: "\u0110\xE3 c\u1EADp nh\u1EADt \u0111\xE1nh gi\xE1."
              });
            case 37:
              return _context20.abrupt("return", {
                statusCode: 0,
                msg: "Dữ liệu chưa được thay đổi"
              });
            case 38:
            case "end":
              return _context20.stop();
          }
        }, _callee20, this);
      }));
      function createOrUpdateReview(_x22) {
        return _createOrUpdateReview.apply(this, arguments);
      }
      return createOrUpdateReview;
    }()
  }, {
    key: "changePass",
    value: function () {
      var _changePass = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(_ref14) {
        var password_old, password, rePassword, userId, userPass, passHash, passHashNew, reviewDocUpdate;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              password_old = _ref14.password_old, password = _ref14.password, rePassword = _ref14.rePassword, userId = _ref14.userId;
              _context21.next = 3;
              return _models["default"].User.findOne({
                where: {
                  id: userId
                },
                raw: true
              });
            case 3:
              userPass = _context21.sent;
              if (userPass) {
                _context21.next = 6;
                break;
              }
              return _context21.abrupt("return", {
                statusCode: 400,
                msg: "Người dùng không tìm thấy."
              });
            case 6:
              _context21.next = 8;
              return _bcrypt["default"].compare(password_old, userPass.password);
            case 8:
              passHash = _context21.sent;
              if (passHash) {
                _context21.next = 11;
                break;
              }
              return _context21.abrupt("return", {
                statusCode: 400,
                msg: "Mật khẩu cũ không chính xácc."
              });
            case 11:
              _context21.next = 13;
              return _bcrypt["default"].hash(password, saltRounds);
            case 13:
              passHashNew = _context21.sent;
              _context21.next = 16;
              return _models["default"].User.update({
                password: passHashNew
              }, {
                where: {
                  id: userId
                }
              });
            case 16:
              reviewDocUpdate = _context21.sent;
              if (!(reviewDocUpdate[0] > 0)) {
                _context21.next = 21;
                break;
              }
              return _context21.abrupt("return", {
                statusCode: 0,
                msg: "Đã thay đổi mật khẩu.",
                data: reviewDocUpdate
              });
            case 21:
              return _context21.abrupt("return", {
                statusCode: 4,
                msg: "Mật khẩu mới trùng với mật khẩu cũ."
              });
            case 22:
            case "end":
              return _context21.stop();
          }
        }, _callee21);
      }));
      function changePass(_x23) {
        return _changePass.apply(this, arguments);
      }
      return changePass;
    }() // Account
  }, {
    key: "getReview",
    value: function () {
      var _getReview = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(_ref15) {
        var _ref15$offset, offset, _ref15$limit, limit, staffId, userId, type, starNumber, healthFacilityId, unique, whereQueryReview, working, staffIds, reviews, accounts;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              _ref15$offset = _ref15.offset, offset = _ref15$offset === void 0 ? 0 : _ref15$offset, _ref15$limit = _ref15.limit, limit = _ref15$limit === void 0 ? 10 : _ref15$limit, staffId = _ref15.staffId, userId = _ref15.userId, type = _ref15.type, starNumber = _ref15.starNumber, healthFacilityId = _ref15.healthFacilityId, unique = _ref15.unique;
              whereQueryReview = {}; // get all for clinic
              if (!healthFacilityId) {
                _context22.next = 12;
                break;
              }
              _context22.next = 5;
              return _workServices["default"].getWorking({
                Role: ["doctor"],
                offset: 0,
                limit: 500,
                healthFacilityId: healthFacilityId
              });
            case 5:
              working = _context22.sent;
              staffIds = working.data.rows.map(function (w) {
                return w.staffId;
              });
              whereQueryReview.staffId = _defineProperty({}, _sequelize.Op["in"], staffIds);
              _context22.next = 10;
              return _models["default"].Review.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                where: whereQueryReview,
                order: [["createdAt", "desc"]],
                include: [_models["default"].Staff, _models["default"].User],
                nest: true
              });
            case 10:
              reviews = _context22.sent;
              return _context22.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, reviews), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 12:
              if (starNumber) {
                whereQueryReview.starNumber = starNumber;
              }
              if (staffId) {
                whereQueryReview.staffId = staffId;
              }
              if (type == "notme" && userId) {
                whereQueryReview.userId = _defineProperty({}, _sequelize.Op.not, userId);
              } else if (userId && type != "all") {
                whereQueryReview.userId = userId;
              }
              _context22.next = 17;
              return _models["default"].Review.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                where: whereQueryReview,
                order: [["createdAt", "desc"]],
                include: [_models["default"].Staff, _models["default"].User],
                nest: true
              });
            case 17:
              accounts = _context22.sent;
              return _context22.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, accounts), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 19:
            case "end":
              return _context22.stop();
          }
        }, _callee22);
      }));
      function getReview(_x24) {
        return _getReview.apply(this, arguments);
      }
      return getReview;
    }()
  }, {
    key: "calculatorReviewDoctorById",
    value: function () {
      var _calculatorReviewDoctorById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(_ref16) {
        var staffId, healthFacilityId, working, staffIds, staffStar, star5, star4, star3, star2, star1, countReview, sumStar, avg, data, views;
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              staffId = _ref16.staffId, healthFacilityId = _ref16.healthFacilityId;
              if (!healthFacilityId) {
                _context23.next = 19;
                break;
              }
              _context23.next = 4;
              return _workServices["default"].getWorking({
                Role: ["doctor"],
                offset: 0,
                limit: 500,
                healthFacilityId: healthFacilityId
              });
            case 4:
              working = _context23.sent;
              staffIds = working.data.rows.map(function (w) {
                return w.staffId;
              });
              _context23.next = 8;
              return Promise.all(staffIds.map(function (s) {
                return _staffServices["default"].calculatorReviewDoctor({
                  staffId: s
                });
              }));
            case 8:
              staffStar = _context23.sent;
              // return { statusCode: 0, data: staffStar };
              star5 = Number.parseFloat(staffStar.reduce(function (init, s) {
                return init + s.star.star5;
              }, 0).toFixed(2));
              star4 = Number.parseFloat(staffStar.reduce(function (init, s) {
                return init + s.star.star4;
              }, 0).toFixed(2));
              star3 = Number.parseFloat(staffStar.reduce(function (init, s) {
                return init + s.star.star3;
              }, 0).toFixed(2));
              star2 = Number.parseFloat(staffStar.reduce(function (init, s) {
                return init + s.star.star2;
              }, 0).toFixed(2));
              star1 = Number.parseFloat(staffStar.reduce(function (init, s) {
                return init + s.star.star1;
              }, 0).toFixed(2));
              countReview = Number.parseFloat(staffStar.reduce(function (init, s) {
                return init + s.countReview;
              }, 0));
              sumStar = staffStar.reduce(function (init, s) {
                return init + s.star.star5 * 5 + s.star.star4 * 4 + s.star.star3 * 3 + s.star.star2 * 2 + s.star.star1 * 1;
              }, 0);
              avg = sumStar / (countReview || 1);
              data = {
                countReview: countReview,
                avg: avg == 0 ? 5 : Number.parseFloat(avg.toFixed(2)),
                star: {
                  star5: star5,
                  star4: star4,
                  star3: star3,
                  star2: star2,
                  star1: star1
                }
              };
              return _context23.abrupt("return", {
                statusCode: 200,
                msg: "Lấy thành công",
                data: {
                  reviewIndex: data,
                  healthFacility: working.data.rows[0].HealthFacility
                }
              });
            case 19:
              if (staffId) {
                _context23.next = 21;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 400,
                msg: "Vui lòng truyền staffId."
              });
            case 21:
              _context23.next = 23;
              return _staffServices["default"].calculatorReviewDoctor({
                staffId: staffId
              });
            case 23:
              views = _context23.sent;
              return _context23.abrupt("return", {
                statusCode: 200,
                msg: "Lấy thành công",
                data: views
              });
            case 25:
            case "end":
              return _context23.stop();
          }
        }, _callee23);
      }));
      function calculatorReviewDoctorById(_x25) {
        return _calculatorReviewDoctorById.apply(this, arguments);
      }
      return calculatorReviewDoctorById;
    }()
  }, {
    key: "deleteReview",
    value: function () {
      var _deleteReview = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(id) {
        var deletedCount;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              _context24.next = 2;
              return _models["default"].Review.destroy({
                force: true,
                where: {
                  id: id
                }
              });
            case 2:
              deletedCount = _context24.sent;
              if (!(deletedCount > 0)) {
                _context24.next = 7;
                break;
              }
              return _context24.abrupt("return", {
                statusCode: 0,
                msg: "Đã xóa thành công."
              });
            case 7:
              return _context24.abrupt("return", {
                statusCode: 1,
                msg: "Không tìm thấy tài nguyên này."
              });
            case 8:
            case "end":
              return _context24.stop();
          }
        }, _callee24);
      }));
      function deleteReview(_x26) {
        return _deleteReview.apply(this, arguments);
      }
      return deleteReview;
    }() // get medical record
  }, {
    key: "getMedicalRecord",
    value: function () {
      var _getMedicalRecord = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(_ref17) {
        var _medicalRecord$rows;
        var _ref17$offset, offset, _ref17$limit, limit, staffId, healthFacilityId, healthRecordId, cccd, whereQueryHealthRecord, whereQueryPatient, whereQueryWorking, medicalRecord, pmisedata, data, medicalRecordPromiseData;
        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              _ref17$offset = _ref17.offset, offset = _ref17$offset === void 0 ? 0 : _ref17$offset, _ref17$limit = _ref17.limit, limit = _ref17$limit === void 0 ? 10 : _ref17$limit, staffId = _ref17.staffId, healthFacilityId = _ref17.healthFacilityId, healthRecordId = _ref17.healthRecordId, cccd = _ref17.cccd;
              // trang thai da kham
              whereQueryHealthRecord = {
                statusCode: "HR4"
              };
              whereQueryPatient = {};
              whereQueryWorking = {};
              if (healthRecordId) {
                whereQueryHealthRecord.healthRecordId = healthRecordId;
              }
              if (cccd) {
                whereQueryPatient.cccd = cccd;
              }
              if (staffId) {
                whereQueryWorking.staffId = staffId;
              }
              if (healthFacilityId) {
                whereQueryWorking.healthFacilityId = healthFacilityId;
              }
              _context26.next = 10;
              return _models["default"].HealthRecord.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                where: whereQueryHealthRecord,
                order: [["createdAt", "desc"]],
                include: [{
                  model: _models["default"].Patient,
                  where: whereQueryPatient
                }
                // {
                //   model: db.Booking,
                //   include: [
                //     {
                //       model: db.HealthExaminationSchedule,
                //       include: [
                //         {
                //           model: db.Code,
                //           as: "TimeCode",
                //         },
                //         {
                //           model: db.Working,
                //           where: whereQueryWorking,
                //           include: [
                //             {
                //               model: db.HealthFacility,
                //             },
                //             {
                //               model: db.Staff,
                //             },
                //           ],
                //         },
                //       ],
                //     },
                //   ],
                // },
                ],

                nest: true
              });
            case 10:
              medicalRecord = _context26.sent;
              pmisedata = medicalRecord === null || medicalRecord === void 0 || (_medicalRecord$rows = medicalRecord.rows) === null || _medicalRecord$rows === void 0 ? void 0 : _medicalRecord$rows.map( /*#__PURE__*/function () {
                var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(m) {
                  var bookingDoc;
                  return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                    while (1) switch (_context25.prev = _context25.next) {
                      case 0:
                        _context25.next = 2;
                        return _models["default"].Booking.findOne({
                          where: {
                            id: m.bookingId
                          },
                          include: [{
                            model: _models["default"].HealthExaminationSchedule,
                            include: [{
                              model: _models["default"].Code,
                              as: "TimeCode"
                            }, {
                              model: _models["default"].Working,
                              where: whereQueryWorking,
                              include: [{
                                model: _models["default"].HealthFacility
                              }, {
                                model: _models["default"].Staff
                              }]
                            }]
                          }],
                          raw: true,
                          nest: true
                        });
                      case 2:
                        bookingDoc = _context25.sent;
                        return _context25.abrupt("return", _objectSpread({
                          Booking: bookingDoc
                        }, m));
                      case 4:
                      case "end":
                        return _context25.stop();
                    }
                  }, _callee25);
                }));
                return function (_x28) {
                  return _ref18.apply(this, arguments);
                };
              }());
              _context26.next = 14;
              return this.getInfoMedicalRecord({
                cccd: cccd
              });
            case 14:
              data = _context26.sent;
              _context26.next = 17;
              return Promise.all(pmisedata);
            case 17:
              medicalRecordPromiseData = _context26.sent;
              return _context26.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: {
                  count: medicalRecord.count,
                  rows: medicalRecordPromiseData,
                  optionFilter: data,
                  limit: limit,
                  offset: offset
                }
              });
            case 19:
            case "end":
              return _context26.stop();
          }
        }, _callee26, this);
      }));
      function getMedicalRecord(_x27) {
        return _getMedicalRecord.apply(this, arguments);
      }
      return getMedicalRecord;
    }() // get  info medical record
  }, {
    key: "getInfoMedicalRecord",
    value: function () {
      var _getInfoMedicalRecord = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(_ref19) {
        var cccd, whereQueryHealthRecord, whereQueryPatient, medicalRecord, doctorList, healthFacilityList;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) switch (_context27.prev = _context27.next) {
            case 0:
              cccd = _ref19.cccd;
              if (cccd) {
                _context27.next = 3;
                break;
              }
              return _context27.abrupt("return", null);
            case 3:
              // trang thai da kham
              whereQueryHealthRecord = {
                statusCode: "HR4"
              };
              whereQueryPatient = {};
              if (cccd) {
                whereQueryPatient.cccd = cccd;
              }
              _context27.next = 8;
              return _models["default"].HealthRecord.findAll({
                raw: true,
                where: whereQueryHealthRecord,
                order: [["createdAt", "desc"]],
                include: [{
                  model: _models["default"].Patient,
                  where: whereQueryPatient
                }, {
                  model: _models["default"].Booking,
                  include: [{
                    model: _models["default"].HealthExaminationSchedule,
                    include: [{
                      model: _models["default"].Working,
                      include: [_models["default"].Staff, _models["default"].HealthFacility]
                    }]
                  }]
                }],
                nest: true
              });
            case 8:
              medicalRecord = _context27.sent;
              doctorList = medicalRecord.map(function (m) {
                var _m$Booking;
                return m === null || m === void 0 || (_m$Booking = m.Booking) === null || _m$Booking === void 0 || (_m$Booking = _m$Booking.HealthExaminationSchedule) === null || _m$Booking === void 0 || (_m$Booking = _m$Booking.Working) === null || _m$Booking === void 0 ? void 0 : _m$Booking.Staff;
              });
              healthFacilityList = medicalRecord.map(function (m) {
                var _m$Booking2;
                return m === null || m === void 0 || (_m$Booking2 = m.Booking) === null || _m$Booking2 === void 0 || (_m$Booking2 = _m$Booking2.HealthExaminationSchedule) === null || _m$Booking2 === void 0 || (_m$Booking2 = _m$Booking2.Working) === null || _m$Booking2 === void 0 ? void 0 : _m$Booking2.HealthFacility;
              }); // return medicalRecord;
              return _context27.abrupt("return", {
                doctorList: doctorList,
                healthFacilityList: healthFacilityList
              });
            case 12:
            case "end":
              return _context27.stop();
          }
        }, _callee27);
      }));
      function getInfoMedicalRecord(_x29) {
        return _getInfoMedicalRecord.apply(this, arguments);
      }
      return getInfoMedicalRecord;
    }()
  }, {
    key: "checkBan",
    value: function () {
      var _checkBan = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(_ref20) {
        var userId, user;
        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) switch (_context28.prev = _context28.next) {
            case 0:
              userId = _ref20.userId;
              user = _models["default"].User.findOne({
                where: {
                  id: userId,
                  banded: true
                },
                raw: true
              });
              return _context28.abrupt("return", user);
            case 3:
            case "end":
              return _context28.stop();
          }
        }, _callee28);
      }));
      function checkBan(_x30) {
        return _checkBan.apply(this, arguments);
      }
      return checkBan;
    }() // index use
  }, {
    key: "getIndex",
    value: function () {
      var _getIndex = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(_ref21) {
        var page, index, pagrams, data;
        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) switch (_context29.prev = _context29.next) {
            case 0:
              page = _ref21.page, index = _ref21.index, pagrams = _ref21.pagrams;
              data = null;
              _context29.t0 = page;
              _context29.next = _context29.t0 === "home" ? 5 : _context29.t0 === "profile" ? 15 : 25;
              break;
            case 5:
              if (!(index == 1)) {
                _context29.next = 10;
                break;
              }
              _context29.next = 8;
              return this.getIndexHome1();
            case 8:
              data = _context29.sent;
              return _context29.abrupt("break", 25);
            case 10:
              if (!(index == 2)) {
                _context29.next = 15;
                break;
              }
              _context29.next = 13;
              return this.getIndexHome2();
            case 13:
              data = _context29.sent;
              return _context29.abrupt("break", 25);
            case 15:
              if (!(index == 1)) {
                _context29.next = 20;
                break;
              }
              _context29.next = 18;
              return this.getIndexProfile1(pagrams);
            case 18:
              data = _context29.sent;
              return _context29.abrupt("break", 25);
            case 20:
              if (!(index == 2)) {
                _context29.next = 25;
                break;
              }
              _context29.next = 23;
              return this.getIndexProfile2(pagrams);
            case 23:
              data = _context29.sent;
              return _context29.abrupt("break", 25);
            case 25:
              return _context29.abrupt("return", {
                statusCode: 0,
                msg: "Lấy Index thành công.",
                data: data
              });
            case 26:
            case "end":
              return _context29.stop();
          }
        }, _callee29, this);
      }));
      function getIndex(_x31) {
        return _getIndex.apply(this, arguments);
      }
      return getIndex;
    }() // function
  }, {
    key: "getIndexHome1",
    value: function () {
      var _getIndexHome = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
        var patientCount, reviewCount45, reviewCountTotal, doctorCount;
        return _regeneratorRuntime().wrap(function _callee30$(_context30) {
          while (1) switch (_context30.prev = _context30.next) {
            case 0:
              _context30.next = 2;
              return _models["default"].Patient.count();
            case 2:
              patientCount = _context30.sent;
              _context30.next = 5;
              return _models["default"].Review.count({
                where: {
                  starNumber: _defineProperty({}, _sequelize.Op.gte, 4)
                }
              });
            case 5:
              reviewCount45 = _context30.sent;
              _context30.next = 8;
              return _models["default"].Review.count({});
            case 8:
              reviewCountTotal = _context30.sent;
              _context30.next = 11;
              return _models["default"].Staff.count({
                include: [{
                  model: _models["default"].Role,
                  where: {
                    keyType: "doctor"
                  }
                }]
              });
            case 11:
              doctorCount = _context30.sent;
              return _context30.abrupt("return", {
                patientCount: patientCount,
                reviewCount: Math.round(reviewCount45 * 100 / (patientCount || 1)),
                doctorCount: doctorCount
              });
            case 13:
            case "end":
              return _context30.stop();
          }
        }, _callee30);
      }));
      function getIndexHome1() {
        return _getIndexHome.apply(this, arguments);
      }
      return getIndexHome1;
    }()
  }, {
    key: "getIndexHome2",
    value: function () {
      var _getIndexHome2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
        var reviewCount, reviewAvg;
        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) switch (_context31.prev = _context31.next) {
            case 0:
              console.log("/n/n/n\n\n\n\n\n\n\n---");
              _context31.next = 3;
              return _models["default"].Review.count();
            case 3:
              reviewCount = _context31.sent;
              _context31.next = 6;
              return _models["default"].Review.findOne({
                raw: true,
                attributes: [[_models.sequelize.fn("AVG", _models.sequelize.col("Review.starNumber")), "avgRating"]]
              });
            case 6:
              reviewAvg = _context31.sent;
              return _context31.abrupt("return", {
                reviewCount: reviewCount,
                reviewAvg: Number.parseFloat(reviewAvg.avgRating).toPrecision(2)
              });
            case 8:
            case "end":
              return _context31.stop();
          }
        }, _callee31);
      }));
      function getIndexHome2() {
        return _getIndexHome2.apply(this, arguments);
      }
      return getIndexHome2;
    }()
  }, {
    key: "getIndexProfile1",
    value: function () {
      var _getIndexProfile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(_ref22) {
        var userId, reviewCount, patientProfileCount, bookingSum, sumPrice;
        return _regeneratorRuntime().wrap(function _callee32$(_context32) {
          while (1) switch (_context32.prev = _context32.next) {
            case 0:
              userId = _ref22.userId;
              if (userId) {
                _context32.next = 3;
                break;
              }
              return _context32.abrupt("return", null);
            case 3:
              _context32.next = 5;
              return _models["default"].Review.count({
                where: {
                  userId: userId
                }
              });
            case 5:
              reviewCount = _context32.sent;
              _context32.next = 8;
              return _models["default"].PatientProfile.count({
                where: {
                  userId: userId
                }
              });
            case 8:
              patientProfileCount = _context32.sent;
              _context32.next = 11;
              return _models["default"].Booking.findAll({
                raw: true,
                nest: true,
                where: {
                  status: "CU2"
                },
                include: [{
                  model: _models["default"].PatientProfile,
                  where: {
                    userId: userId
                  }
                }]
                // group: ["Booking.PatientProfile.userId"],
              });
            case 11:
              bookingSum = _context32.sent;
              sumPrice = bookingSum.reduce(function (init, v) {
                return init + v.doctorPrice;
              }, 0);
              return _context32.abrupt("return", {
                reviewCount: reviewCount,
                patientProfileCount: patientProfileCount,
                bookingSum: sumPrice
              });
            case 14:
            case "end":
              return _context32.stop();
          }
        }, _callee32);
      }));
      function getIndexProfile1(_x32) {
        return _getIndexProfile.apply(this, arguments);
      }
      return getIndexProfile1;
    }()
  }, {
    key: "getIndexProfile2",
    value: function () {
      var _getIndexProfile2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35(_ref23) {
        var _maxObject$patientPro;
        var year, userId, patientProfileDoc, bookingPromiseTop, profileAndBookingTop, maxObject, bookingLast, bookingPromise, profileAndBooking, cal;
        return _regeneratorRuntime().wrap(function _callee35$(_context35) {
          while (1) switch (_context35.prev = _context35.next) {
            case 0:
              year = _ref23.year, userId = _ref23.userId;
              _context35.next = 3;
              return _models["default"].PatientProfile.findAll({
                where: {
                  userId: userId
                },
                raw: true
              });
            case 3:
              patientProfileDoc = _context35.sent;
              // top patient
              bookingPromiseTop = patientProfileDoc.map( /*#__PURE__*/function () {
                var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(b) {
                  var bookingDoc;
                  return _regeneratorRuntime().wrap(function _callee33$(_context33) {
                    while (1) switch (_context33.prev = _context33.next) {
                      case 0:
                        _context33.next = 2;
                        return _models["default"].Booking.count({
                          raw: true,
                          nest: true,
                          where: {
                            patientProfileId: b.id,
                            status: "CU2"
                          }
                        });
                      case 2:
                        bookingDoc = _context33.sent;
                        return _context33.abrupt("return", {
                          patientProfile: b,
                          bookingCount: bookingDoc
                        });
                      case 4:
                      case "end":
                        return _context33.stop();
                    }
                  }, _callee33);
                }));
                return function (_x34) {
                  return _ref24.apply(this, arguments);
                };
              }());
              _context35.next = 7;
              return Promise.all(bookingPromiseTop);
            case 7:
              profileAndBookingTop = _context35.sent;
              maxObject = profileAndBookingTop.reduce(function (max, obj) {
                return obj.bookingCount > max.bookingCount ? obj : max;
              }, profileAndBookingTop[0]);
              _context35.next = 11;
              return _models["default"].Booking.findAll({
                raw: true,
                nest: true,
                where: {
                  patientProfileId: maxObject === null || maxObject === void 0 || (_maxObject$patientPro = maxObject.patientProfile) === null || _maxObject$patientPro === void 0 ? void 0 : _maxObject$patientPro.id
                },
                include: [{
                  model: _models["default"].HealthExaminationSchedule,
                  include: [{
                    model: _models["default"].Working,
                    include: [{
                      model: _models["default"].Staff
                    }]
                  }, {
                    model: _models["default"].Code,
                    as: "TimeCode"
                  }]
                }],
                limit: 3,
                offset: 0,
                order: [["createdAt", "desc"]]
              });
            case 11:
              bookingLast = _context35.sent;
              if (year) {
                _context35.next = 14;
                break;
              }
              return _context35.abrupt("return", {
                maxObject: maxObject
              });
            case 14:
              // chart
              bookingPromise = patientProfileDoc.map( /*#__PURE__*/function () {
                var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(b) {
                  var bookingDoc;
                  return _regeneratorRuntime().wrap(function _callee34$(_context34) {
                    while (1) switch (_context34.prev = _context34.next) {
                      case 0:
                        _context34.next = 2;
                        return _models["default"].Booking.findAll({
                          raw: true,
                          nest: true,
                          where: _defineProperty({
                            patientProfileId: b.id
                          }, _sequelize.Op.and, [_models.Sequelize.where(_models.Sequelize.fn("date_part", "year", _models.Sequelize.col("Booking.createdAt")), year)])
                        });
                      case 2:
                        bookingDoc = _context34.sent;
                        return _context34.abrupt("return", {
                          patientProfile: b,
                          booking: bookingDoc
                        });
                      case 4:
                      case "end":
                        return _context34.stop();
                    }
                  }, _callee34);
                }));
                return function (_x35) {
                  return _ref25.apply(this, arguments);
                };
              }());
              _context35.next = 17;
              return Promise.all(bookingPromise);
            case 17:
              profileAndBooking = _context35.sent;
              cal = profileAndBooking.map(function (d) {
                var array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                d.booking.map(function (r) {
                  var month = new Date(r.createdAt).getMonth();
                  array[month] += 1;
                });
                return {
                  patientProfile: d.patientProfile,
                  data: array
                };
              });
              return _context35.abrupt("return", {
                chart: cal,
                max: maxObject,
                bookingLastMax: bookingLast
              });
            case 20:
            case "end":
              return _context35.stop();
          }
        }, _callee35);
      }));
      function getIndexProfile2(_x33) {
        return _getIndexProfile2.apply(this, arguments);
      }
      return getIndexProfile2;
    }()
  }]);
  return UserServices;
}();
var _default = new UserServices();
exports["default"] = _default;