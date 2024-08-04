"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _services = require("../../services");
var _excluded = ["page", "index"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
var UserController = /*#__PURE__*/function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }
  _createClass(UserController, [{
    key: "handleRegister",
    value: // [POST] /api/v1/user
    function () {
      var _handleRegister = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
        var _req$body, email, password, fullName, phone, address, gender, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, email = _req$body.email, password = _req$body.password, fullName = _req$body.fullName, phone = _req$body.phone, address = _req$body.address, gender = _req$body.gender;
              if (!(!email || !password || !fullName || !phone || !address || !gender)) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Missing input parameters."
              }));
            case 3:
              _context.prev = 3;
              _context.next = 6;
              return _services.userServices.createUser({
                email: email,
                password: password,
                fullName: fullName,
                phone: phone,
                address: address,
                gender: gender
              });
            case 6:
              data = _context.sent;
              if (!(data.statusCode === 0)) {
                _context.next = 9;
                break;
              }
              return _context.abrupt("return", res.status(200).json(data));
            case 9:
              return _context.abrupt("return", res.status(400).json(data));
            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](3);
              return _context.abrupt("return", res.status(500).json({
                msg: "Error creating user.",
                err: _context.t0.message
              }));
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 12]]);
      }));
      function handleRegister(_x, _x2) {
        return _handleRegister.apply(this, arguments);
      }
      return handleRegister;
    }() // [GET] /api/v1/user
  }, {
    key: "handleGetUser",
    value: function () {
      var _handleGetUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
        var _req$query, limit, offset, email, fullName, banded, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _req$query = req.query, limit = _req$query.limit, offset = _req$query.offset, email = _req$query.email, fullName = _req$query.fullName, banded = _req$query.banded;
              _context2.prev = 1;
              _context2.next = 4;
              return _services.userServices.getUser({
                limit: limit,
                offset: offset,
                email: email,
                fullName: fullName,
                banded: banded
              });
            case 4:
              data = _context2.sent;
              if (!(data.statusCode === 0)) {
                _context2.next = 7;
                break;
              }
              return _context2.abrupt("return", res.status(200).json(data));
            case 7:
              return _context2.abrupt("return", res.status(400).json(data));
            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](1);
              return _context2.abrupt("return", res.status(500).json({
                msg: (_context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 10]]);
      }));
      function handleGetUser(_x3, _x4) {
        return _handleGetUser.apply(this, arguments);
      }
      return handleGetUser;
    }() // [POST] /api/v1/user
  }, {
    key: "handleCreateOrUpdateUser",
    value: function () {
      var _handleCreateOrUpdateUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
        var _req$body2, id, email, password, fullName, phone, address, gender, _req$user, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _req$body2 = req.body, id = _req$body2.id, email = _req$body2.email, password = _req$body2.password, fullName = _req$body2.fullName, phone = _req$body2.phone, address = _req$body2.address, gender = _req$body2.gender;
              if (!(!id && (!email || !password || !fullName || !phone || !address || !gender))) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào."
              }));
            case 3:
              _context3.prev = 3;
              _context3.next = 6;
              return _services.userServices.createOrUpdateUser({
                id: id,
                email: email,
                password: password,
                fullName: fullName,
                phone: phone,
                address: address,
                gender: gender,
                role: (_req$user = req.user) === null || _req$user === void 0 ? void 0 : _req$user.role.keyType
              });
            case 6:
              data = _context3.sent;
              if (!(data.statusCode === 0)) {
                _context3.next = 9;
                break;
              }
              return _context3.abrupt("return", res.status(200).json(data));
            case 9:
              return _context3.abrupt("return", res.status(400).json(data));
            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](3);
              console.log(_context3.t0);
              return _context3.abrupt("return", res.status(500).json({
                msg: (_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 16:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[3, 12]]);
      }));
      function handleCreateOrUpdateUser(_x5, _x6) {
        return _handleCreateOrUpdateUser.apply(this, arguments);
      }
      return handleCreateOrUpdateUser;
    }() // [GET] /api/v1/user/patient-profile
  }, {
    key: "handleGetPatientProfile",
    value: function () {
      var _handleGetPatientProfile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
        var _req$query2, limit, offset, patientProfileId, profileName, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _req$query2 = req.query, limit = _req$query2.limit, offset = _req$query2.offset, patientProfileId = _req$query2.patientProfileId, profileName = _req$query2.profileName;
              _context4.prev = 1;
              _context4.next = 4;
              return _services.userServices.getPatientProfile({
                limit: limit,
                offset: offset,
                userId: req.user.id,
                patientProfileId: patientProfileId,
                profileName: profileName
              });
            case 4:
              data = _context4.sent;
              if (!(data.statusCode === 0)) {
                _context4.next = 7;
                break;
              }
              return _context4.abrupt("return", res.status(200).json(data));
            case 7:
              return _context4.abrupt("return", res.status(400).json(data));
            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](1);
              return _context4.abrupt("return", res.status(500).json({
                msg: (_context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 10]]);
      }));
      function handleGetPatientProfile(_x7, _x8) {
        return _handleGetPatientProfile.apply(this, arguments);
      }
      return handleGetPatientProfile;
    }() // [POST] /api/v1/user/patient-profile
  }, {
    key: "handleCreateOrUpdatePatientProfile",
    value: function () {
      var _handleCreateOrUpdatePatientProfile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
        var _req$body3, id, fullName, phone, profession, email, birthDay, gender, cccd, nation, addressCode, userIdPost, userId, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _req$body3 = req.body, id = _req$body3.id, fullName = _req$body3.fullName, phone = _req$body3.phone, profession = _req$body3.profession, email = _req$body3.email, birthDay = _req$body3.birthDay, gender = _req$body3.gender, cccd = _req$body3.cccd, nation = _req$body3.nation, addressCode = _req$body3.addressCode, userIdPost = _req$body3.userId;
              if (!(!id && (!fullName || !phone || !profession || !email || !birthDay || !gender || !cccd || !nation || !addressCode))) {
                _context5.next = 3;
                break;
              }
              return _context5.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào."
              }));
            case 3:
              userId = req.user.role.keyType == "user" ? req.user.id : userIdPost;
              if (userId) {
                _context5.next = 6;
                break;
              }
              return _context5.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào. [ userId ]"
              }));
            case 6:
              _context5.prev = 6;
              _context5.next = 9;
              return _services.userServices.createOrUpdatePatientProfile({
                id: id,
                fullName: fullName,
                phone: phone,
                profession: profession,
                email: email,
                birthDay: birthDay,
                gender: gender,
                cccd: cccd,
                nation: nation,
                addressCode: addressCode,
                userId: userId
              });
            case 9:
              data = _context5.sent;
              if (!(data.statusCode === 0)) {
                _context5.next = 12;
                break;
              }
              return _context5.abrupt("return", res.status(200).json(data));
            case 12:
              return _context5.abrupt("return", res.status(400).json(data));
            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5["catch"](6);
              console.log(_context5.t0);
              return _context5.abrupt("return", res.status(500).json({
                msg: (_context5.t0 === null || _context5.t0 === void 0 ? void 0 : _context5.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 19:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[6, 15]]);
      }));
      function handleCreateOrUpdatePatientProfile(_x9, _x10) {
        return _handleCreateOrUpdatePatientProfile.apply(this, arguments);
      }
      return handleCreateOrUpdatePatientProfile;
    }() // [Delete] /api/v1/user/patient-profile
  }, {
    key: "handleDeletePatientProfile",
    value: function () {
      var _handleDeletePatientProfile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
        var id, userId, data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              id = req.body.id;
              userId = req.user.id;
              if (id) {
                _context6.next = 4;
                break;
              }
              return _context6.abrupt("return", res.status(404).json({
                statusCode: 4,
                msg: "Thiếu tham số truyền vào."
              }));
            case 4:
              _context6.prev = 4;
              _context6.next = 7;
              return _services.userServices.deletePatientProfile(id, userId);
            case 7:
              data = _context6.sent;
              if (!(data.statusCode === 0)) {
                _context6.next = 10;
                break;
              }
              return _context6.abrupt("return", res.status(200).json(data));
            case 10:
              return _context6.abrupt("return", res.status(400).json(data));
            case 13:
              _context6.prev = 13;
              _context6.t0 = _context6["catch"](4);
              return _context6.abrupt("return", res.status(500).json({
                msg: (_context6.t0 === null || _context6.t0 === void 0 ? void 0 : _context6.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 16:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[4, 13]]);
      }));
      function handleDeletePatientProfile(_x11, _x12) {
        return _handleDeletePatientProfile.apply(this, arguments);
      }
      return handleDeletePatientProfile;
    }() // [POST] middle ware
  }, {
    key: "handleBooking",
    value: function () {
      var _handleBooking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res, next) {
        var userId, _req$body4, healthExaminationScheduleId, paymentType, patientProfileId, descriptionDisease, bandedUser, data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              // Get user logined
              userId = req.user.id;
              _req$body4 = req.body, healthExaminationScheduleId = _req$body4.healthExaminationScheduleId, paymentType = _req$body4.paymentType, patientProfileId = _req$body4.patientProfileId, descriptionDisease = _req$body4.descriptionDisease;
              if (!(!healthExaminationScheduleId || !patientProfileId || !descriptionDisease || !userId || !paymentType)) {
                _context7.next = 4;
                break;
              }
              return _context7.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào."
              }));
            case 4:
              _context7.prev = 4;
              _context7.next = 7;
              return _services.userServices.checkBan({
                userId: userId
              });
            case 7:
              bandedUser = _context7.sent;
              if (!bandedUser) {
                _context7.next = 10;
                break;
              }
              return _context7.abrupt("return", res.status(400).json({
                msg: "Tài bạn của bạn đã bị ban, vui lòng liên hệ với admin để gỡ ban và thử lại!"
              }));
            case 10:
              _context7.next = 12;
              return _services.userServices.createBooking({
                healthExaminationScheduleId: healthExaminationScheduleId,
                patientProfileId: patientProfileId,
                descriptionDisease: descriptionDisease,
                userId: userId,
                paymentType: paymentType
              });
            case 12:
              data = _context7.sent;
              if (!(paymentType == "hospital")) {
                _context7.next = 19;
                break;
              }
              if (!(data.statusCode === 200 || data.statusCode === 0)) {
                _context7.next = 18;
                break;
              }
              return _context7.abrupt("return", res.status(200).json(_objectSpread({}, data)));
            case 18:
              return _context7.abrupt("return", res.status(data.statusCode).json(_objectSpread({}, data)));
            case 19:
              req.dataBooking = data;
              next();
              _context7.next = 27;
              break;
            case 23:
              _context7.prev = 23;
              _context7.t0 = _context7["catch"](4);
              console.log(_context7.t0);
              return _context7.abrupt("return", res.status(500).json({
                msg: (_context7.t0 === null || _context7.t0 === void 0 ? void 0 : _context7.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 27:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[4, 23]]);
      }));
      function handleBooking(_x13, _x14, _x15) {
        return _handleBooking.apply(this, arguments);
      }
      return handleBooking;
    }() // [GET]
  }, {
    key: "handleGetBooking",
    value: function () {
      var _handleGetBooking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res, next) {
        var userId, _req$query3, date, healthFacilityId, paymentType, patientProfileId, patientProfileName, status, bookingId, HR4, data;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              // Get user logined
              userId = req.user.id;
              _req$query3 = req.query, date = _req$query3.date, healthFacilityId = _req$query3.healthFacilityId, paymentType = _req$query3.paymentType, patientProfileId = _req$query3.patientProfileId, patientProfileName = _req$query3.patientProfileName, status = _req$query3.status, bookingId = _req$query3.bookingId, HR4 = _req$query3.HR4;
              if (userId) {
                _context8.next = 4;
                break;
              }
              return _context8.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào."
              }));
            case 4:
              _context8.prev = 4;
              _context8.next = 7;
              return _services.userServices.getBooking({
                status: status,
                date: date,
                healthFacilityId: healthFacilityId,
                paymentType: paymentType,
                patientProfileId: patientProfileId,
                patientProfileName: patientProfileName,
                userId: userId,
                bookingId: bookingId,
                HR4: HR4
              });
            case 7:
              data = _context8.sent;
              if (!(data.statusCode === 0)) {
                _context8.next = 10;
                break;
              }
              return _context8.abrupt("return", res.status(200).json(data));
            case 10:
              return _context8.abrupt("return", res.status(400).json(data));
            case 13:
              _context8.prev = 13;
              _context8.t0 = _context8["catch"](4);
              console.log(_context8.t0);
              return _context8.abrupt("return", res.status(500).json({
                msg: (_context8.t0 === null || _context8.t0 === void 0 ? void 0 : _context8.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 17:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[4, 13]]);
      }));
      function handleGetBooking(_x16, _x17, _x18) {
        return _handleGetBooking.apply(this, arguments);
      }
      return handleGetBooking;
    }() // // [GET] /api/v1/user/health-record
    // async handleGetHealthRecord(req, res) {
    //   // Get user logined
    //   const userId = req.user.id;
    //   console.log(req.user);
    //   const { litmit, offset, healthRecordId, timeCodeId } = req.query;
    //   try {
    //     const data = await userServices.getHealthRecord({
    //       userId,
    //       permission: req.user.role.keyType,
    //       timeCodeId,
    //       litmit,
    //       offset,
    //       healthRecordId,
    //     });
    //     if (data.statusCode === 0) {
    //       return res.status(200).json(data);
    //     }
    //     return res.status(400).json(data);
    //   } catch (err) {
    //     console.log(err);
    //     return res
    //       .status(500)
    //       .json({ msg: err?.message || "Lỗi server. Thử lại sau!" });
    //   }
    // }
    // [GET] /api/v1/user/list-doctor-working-health
  }, {
    key: "getDoctorWorkingOfHealth",
    value: function () {
      var _getDoctorWorkingOfHealth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
        var _req$query4, healthFacilityId, doctorName, doctorEmail, limit, offset, specialistId, gender, academicDegreeId, doctorId, data;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _req$query4 = req.query, healthFacilityId = _req$query4.healthFacilityId, doctorName = _req$query4.doctorName, doctorEmail = _req$query4.doctorEmail, limit = _req$query4.limit, offset = _req$query4.offset, specialistId = _req$query4.specialistId, gender = _req$query4.gender, academicDegreeId = _req$query4.academicDegreeId, doctorId = _req$query4.doctorId;
              _context9.prev = 1;
              _context9.next = 4;
              return _services.workServices.getDoctorWorkingAtHealth({
                limit: limit,
                offset: offset,
                healthFacilityId: healthFacilityId,
                doctorName: doctorName,
                doctorEmail: doctorEmail,
                specialistId: specialistId,
                doctorId: doctorId,
                gender: gender,
                academicDegreeId: academicDegreeId
              });
            case 4:
              data = _context9.sent;
              if (!(data.statusCode === 0)) {
                _context9.next = 7;
                break;
              }
              return _context9.abrupt("return", res.status(200).json(data));
            case 7:
              return _context9.abrupt("return", res.status(400).json(data));
            case 10:
              _context9.prev = 10;
              _context9.t0 = _context9["catch"](1);
              console.log(_context9.t0);
              return _context9.abrupt("return", res.status(500).json({
                msg: (_context9.t0 === null || _context9.t0 === void 0 ? void 0 : _context9.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 14:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[1, 10]]);
      }));
      function getDoctorWorkingOfHealth(_x19, _x20) {
        return _getDoctorWorkingOfHealth.apply(this, arguments);
      }
      return getDoctorWorkingOfHealth;
    }() // [POST] /api/v1/user/review
  }, {
    key: "handleCreateOrUpdateReview",
    value: function () {
      var _handleCreateOrUpdateReview = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
        var _user$role;
        var _req$body5, id, staffId, starNumber, description, user, userId, data;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _req$body5 = req.body, id = _req$body5.id, staffId = _req$body5.staffId, starNumber = _req$body5.starNumber, description = _req$body5.description;
              user = req === null || req === void 0 ? void 0 : req.user;
              userId = "";
              if (!((user === null || user === void 0 || (_user$role = user.role) === null || _user$role === void 0 ? void 0 : _user$role.keyType) !== "admin")) {
                _context10.next = 7;
                break;
              }
              userId = user === null || user === void 0 ? void 0 : user.id;
              if (userId) {
                _context10.next = 7;
                break;
              }
              return _context10.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Chưa đăng nhập."
              }));
            case 7:
              if (!(!id && (!staffId || !starNumber || !description || !userId))) {
                _context10.next = 9;
                break;
              }
              return _context10.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào."
              }));
            case 9:
              _context10.prev = 9;
              _context10.next = 12;
              return _services.userServices.createOrUpdateReview({
                id: id,
                staffId: staffId,
                starNumber: starNumber,
                description: description,
                userId: userId
              });
            case 12:
              data = _context10.sent;
              if (!(data.statusCode === 0)) {
                _context10.next = 15;
                break;
              }
              return _context10.abrupt("return", res.status(200).json(data));
            case 15:
              return _context10.abrupt("return", res.status(400).json(data));
            case 18:
              _context10.prev = 18;
              _context10.t0 = _context10["catch"](9);
              console.log(_context10.t0);
              return _context10.abrupt("return", res.status(500).json({
                msg: (_context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 22:
            case "end":
              return _context10.stop();
          }
        }, _callee10, null, [[9, 18]]);
      }));
      function handleCreateOrUpdateReview(_x21, _x22) {
        return _handleCreateOrUpdateReview.apply(this, arguments);
      }
      return handleCreateOrUpdateReview;
    }() // [GET] /api/v1/user/review
  }, {
    key: "handleGetReview",
    value: function () {
      var _handleGetReview = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
        var _user$role2;
        var _req$query5, limit, offset, staffId, type, starNumber, user, userId, data;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _req$query5 = req.query, limit = _req$query5.limit, offset = _req$query5.offset, staffId = _req$query5.staffId, type = _req$query5.type, starNumber = _req$query5.starNumber;
              user = req === null || req === void 0 ? void 0 : req.user;
              userId = "";
              if ((user === null || user === void 0 || (_user$role2 = user.role) === null || _user$role2 === void 0 ? void 0 : _user$role2.keyType) !== "admin" && type != "all") {
                userId = user === null || user === void 0 ? void 0 : user.id;
              }
              _context11.prev = 4;
              _context11.next = 7;
              return _services.userServices.getReview({
                limit: limit,
                offset: offset,
                userId: userId,
                staffId: staffId,
                type: type,
                starNumber: starNumber
              });
            case 7:
              data = _context11.sent;
              if (!(data.statusCode === 0)) {
                _context11.next = 10;
                break;
              }
              return _context11.abrupt("return", res.status(200).json(data));
            case 10:
              return _context11.abrupt("return", res.status(400).json(data));
            case 13:
              _context11.prev = 13;
              _context11.t0 = _context11["catch"](4);
              return _context11.abrupt("return", res.status(500).json({
                msg: (_context11.t0 === null || _context11.t0 === void 0 ? void 0 : _context11.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 16:
            case "end":
              return _context11.stop();
          }
        }, _callee11, null, [[4, 13]]);
      }));
      function handleGetReview(_x23, _x24) {
        return _handleGetReview.apply(this, arguments);
      }
      return handleGetReview;
    }() // [GET] /api/v1/user/review/index
  }, {
    key: "handleGetReviewIndex",
    value: function () {
      var _handleGetReviewIndex = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
        var staffId, data;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              staffId = req.query.staffId;
              _context12.prev = 1;
              _context12.next = 4;
              return _services.userServices.calculatorReviewDoctorById({
                staffId: staffId
              });
            case 4:
              data = _context12.sent;
              if (!(data.statusCode === 200)) {
                _context12.next = 7;
                break;
              }
              return _context12.abrupt("return", res.status(200).json(data));
            case 7:
              return _context12.abrupt("return", res.status(400).json(data));
            case 10:
              _context12.prev = 10;
              _context12.t0 = _context12["catch"](1);
              return _context12.abrupt("return", res.status(500).json({
                msg: (_context12.t0 === null || _context12.t0 === void 0 ? void 0 : _context12.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context12.stop();
          }
        }, _callee12, null, [[1, 10]]);
      }));
      function handleGetReviewIndex(_x25, _x26) {
        return _handleGetReviewIndex.apply(this, arguments);
      }
      return handleGetReviewIndex;
    }() // [GET] /api/v1/user/health-facility/review
  }, {
    key: "handleGetReviewHealth",
    value: function () {
      var _handleGetReviewHealth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
        var _req$query6, limit, offset, staffId, type, starNumber, healthFacilityId, data;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _req$query6 = req.query, limit = _req$query6.limit, offset = _req$query6.offset, staffId = _req$query6.staffId, type = _req$query6.type, starNumber = _req$query6.starNumber, healthFacilityId = _req$query6.healthFacilityId;
              _context13.prev = 1;
              _context13.next = 4;
              return _services.userServices.getReview({
                limit: limit,
                offset: offset,
                type: type,
                healthFacilityId: healthFacilityId
              });
            case 4:
              data = _context13.sent;
              if (!(data.statusCode === 0)) {
                _context13.next = 7;
                break;
              }
              return _context13.abrupt("return", res.status(200).json(data));
            case 7:
              return _context13.abrupt("return", res.status(400).json(data));
            case 10:
              _context13.prev = 10;
              _context13.t0 = _context13["catch"](1);
              return _context13.abrupt("return", res.status(500).json({
                msg: (_context13.t0 === null || _context13.t0 === void 0 ? void 0 : _context13.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context13.stop();
          }
        }, _callee13, null, [[1, 10]]);
      }));
      function handleGetReviewHealth(_x27, _x28) {
        return _handleGetReviewHealth.apply(this, arguments);
      }
      return handleGetReviewHealth;
    }() // [GET] /api/v1/user/health-facility/review/index
  }, {
    key: "handleGetReviewIndexHealth",
    value: function () {
      var _handleGetReviewIndexHealth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
        var _req$query7, healthFacilityId, staffId, data;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _req$query7 = req.query, healthFacilityId = _req$query7.healthFacilityId, staffId = _req$query7.staffId;
              _context14.prev = 1;
              _context14.next = 4;
              return _services.userServices.calculatorReviewDoctorById({
                staffId: staffId,
                healthFacilityId: healthFacilityId
              });
            case 4:
              data = _context14.sent;
              if (!(data.statusCode === 200)) {
                _context14.next = 7;
                break;
              }
              return _context14.abrupt("return", res.status(200).json(data));
            case 7:
              return _context14.abrupt("return", res.status(400).json(data));
            case 10:
              _context14.prev = 10;
              _context14.t0 = _context14["catch"](1);
              return _context14.abrupt("return", res.status(500).json({
                msg: (_context14.t0 === null || _context14.t0 === void 0 ? void 0 : _context14.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context14.stop();
          }
        }, _callee14, null, [[1, 10]]);
      }));
      function handleGetReviewIndexHealth(_x29, _x30) {
        return _handleGetReviewIndexHealth.apply(this, arguments);
      }
      return handleGetReviewIndexHealth;
    }() // [GET] /api/v1/user/check-up-last-of-doctor
  }, {
    key: "getBookingLastStaff",
    value: function () {
      var _getBookingLastStaff = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
        var staffId, data;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              staffId = req.query.staffId;
              if (staffId) {
                _context15.next = 3;
                break;
              }
              return _context15.abrupt("return", res.status(404).json({
                msg: "Vui lòng thêm id staff"
              }));
            case 3:
              _context15.prev = 3;
              _context15.next = 6;
              return _services.userServices.getBookingLastStaff5({
                staffId: staffId
              });
            case 6:
              data = _context15.sent;
              if (!(data.statusCode === 200)) {
                _context15.next = 9;
                break;
              }
              return _context15.abrupt("return", res.status(200).json(data));
            case 9:
              return _context15.abrupt("return", res.status(400).json(data));
            case 12:
              _context15.prev = 12;
              _context15.t0 = _context15["catch"](3);
              return _context15.abrupt("return", res.status(500).json({
                msg: (_context15.t0 === null || _context15.t0 === void 0 ? void 0 : _context15.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 15:
            case "end":
              return _context15.stop();
          }
        }, _callee15, null, [[3, 12]]);
      }));
      function getBookingLastStaff(_x31, _x32) {
        return _getBookingLastStaff.apply(this, arguments);
      }
      return getBookingLastStaff;
    }() // [Delete] /api/v1/user/patient-profile
  }, {
    key: "handleDeleteReview",
    value: function () {
      var _handleDeleteReview = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
        var id, data;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              id = req.body.id;
              if (id) {
                _context16.next = 3;
                break;
              }
              return _context16.abrupt("return", res.status(404).json({
                statusCode: 4,
                msg: "Thiếu tham số truyền vào."
              }));
            case 3:
              _context16.prev = 3;
              _context16.next = 6;
              return _services.userServices.deleteReview(id);
            case 6:
              data = _context16.sent;
              if (!(data.statusCode === 0)) {
                _context16.next = 9;
                break;
              }
              return _context16.abrupt("return", res.status(200).json(data));
            case 9:
              return _context16.abrupt("return", res.status(400).json(data));
            case 12:
              _context16.prev = 12;
              _context16.t0 = _context16["catch"](3);
              return _context16.abrupt("return", res.status(500).json({
                msg: (_context16.t0 === null || _context16.t0 === void 0 ? void 0 : _context16.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 15:
            case "end":
              return _context16.stop();
          }
        }, _callee16, null, [[3, 12]]);
      }));
      function handleDeleteReview(_x33, _x34) {
        return _handleDeleteReview.apply(this, arguments);
      }
      return handleDeleteReview;
    }() // [GET] /api/v1/user/medical-record
  }, {
    key: "handleGetMedicalRecord",
    value: function () {
      var _handleGetMedicalRecord = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
        var _req$query8, limit, offset, staffId, healthFacilityId, healthRecordId, cccd, data;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              _req$query8 = req.query, limit = _req$query8.limit, offset = _req$query8.offset, staffId = _req$query8.staffId, healthFacilityId = _req$query8.healthFacilityId, healthRecordId = _req$query8.healthRecordId, cccd = _req$query8.cccd;
              _context17.prev = 1;
              _context17.next = 4;
              return _services.userServices.getMedicalRecord({
                limit: limit,
                offset: offset,
                staffId: staffId,
                healthFacilityId: healthFacilityId,
                healthRecordId: healthRecordId,
                cccd: cccd
              });
            case 4:
              data = _context17.sent;
              if (!(data.statusCode === 0)) {
                _context17.next = 7;
                break;
              }
              return _context17.abrupt("return", res.status(200).json(data));
            case 7:
              return _context17.abrupt("return", res.status(400).json(data));
            case 10:
              _context17.prev = 10;
              _context17.t0 = _context17["catch"](1);
              return _context17.abrupt("return", res.status(500).json({
                msg: (_context17.t0 === null || _context17.t0 === void 0 ? void 0 : _context17.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context17.stop();
          }
        }, _callee17, null, [[1, 10]]);
      }));
      function handleGetMedicalRecord(_x35, _x36) {
        return _handleGetMedicalRecord.apply(this, arguments);
      }
      return handleGetMedicalRecord;
    }() // [POST] /api/v1/user/change-pass
  }, {
    key: "handleChangePass",
    value: function () {
      var _handleChangePass = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
        var _user$role3;
        var _req$body6, password_old, password, rePassword, user, userId, data;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              _req$body6 = req.body, password_old = _req$body6.password_old, password = _req$body6.password, rePassword = _req$body6.rePassword;
              user = req === null || req === void 0 ? void 0 : req.user;
              userId = "";
              if (!((user === null || user === void 0 || (_user$role3 = user.role) === null || _user$role3 === void 0 ? void 0 : _user$role3.keyType) !== "user")) {
                _context18.next = 5;
                break;
              }
              return _context18.abrupt("return", res.status(401).json({
                statusCode: 401,
                msg: "Bạn chưa đăng nhập"
              }));
            case 5:
              userId = user === null || user === void 0 ? void 0 : user.id;
              if (!(!password_old || !password || !rePassword)) {
                _context18.next = 8;
                break;
              }
              return _context18.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào."
              }));
            case 8:
              _context18.prev = 8;
              _context18.next = 11;
              return _services.userServices.changePass({
                password_old: password_old,
                password: password,
                rePassword: rePassword,
                userId: userId
              });
            case 11:
              data = _context18.sent;
              if (!(data.statusCode === 0)) {
                _context18.next = 14;
                break;
              }
              return _context18.abrupt("return", res.status(200).json(data));
            case 14:
              return _context18.abrupt("return", res.status(400).json(data));
            case 17:
              _context18.prev = 17;
              _context18.t0 = _context18["catch"](8);
              console.log(_context18.t0);
              return _context18.abrupt("return", res.status(500).json({
                msg: (_context18.t0 === null || _context18.t0 === void 0 ? void 0 : _context18.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 21:
            case "end":
              return _context18.stop();
          }
        }, _callee18, null, [[8, 17]]);
      }));
      function handleChangePass(_x37, _x38) {
        return _handleChangePass.apply(this, arguments);
      }
      return handleChangePass;
    }() // [GET] /api/v1/user/index
  }, {
    key: "handleGetIndex",
    value: function () {
      var _handleGetIndex = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
        var _req$query9, page, index, pagrams, data;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              _req$query9 = req.query, page = _req$query9.page, index = _req$query9.index, pagrams = _objectWithoutProperties(_req$query9, _excluded);
              _context19.prev = 1;
              _context19.next = 4;
              return _services.userServices.getIndex({
                page: page,
                index: index,
                pagrams: pagrams
              });
            case 4:
              data = _context19.sent;
              if (!(data.statusCode === 0)) {
                _context19.next = 7;
                break;
              }
              return _context19.abrupt("return", res.status(200).json(data));
            case 7:
              return _context19.abrupt("return", res.status(400).json(data));
            case 10:
              _context19.prev = 10;
              _context19.t0 = _context19["catch"](1);
              return _context19.abrupt("return", res.status(500).json({
                msg: (_context19.t0 === null || _context19.t0 === void 0 ? void 0 : _context19.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context19.stop();
          }
        }, _callee19, null, [[1, 10]]);
      }));
      function handleGetIndex(_x39, _x40) {
        return _handleGetIndex.apply(this, arguments);
      }
      return handleGetIndex;
    }()
  }]);
  return UserController;
}();
var _default = new UserController();
exports["default"] = _default;