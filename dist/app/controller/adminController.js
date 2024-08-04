"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _services = require("../../services");
var _untils = require("../../untils");
var _staffServices = _interopRequireDefault(require("../../services/staffServices"));
var _chatServices = _interopRequireDefault(require("../../services/chatServices"));
var _excluded = ["role", "page", "index"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // import { uploadAwsS3, s3 } from "../../middleWares";
var AdminController = /*#__PURE__*/function () {
  function AdminController() {
    _classCallCheck(this, AdminController);
  }
  _createClass(AdminController, [{
    key: "handleCreateTypeHealthFacilities",
    value: // [POST] /admin/health-facilities/type
    function () {
      var _handleCreateTypeHealthFacilities = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
        var name, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              name = req.body.name;
              if (name) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return", res.status(404).json({
                statusCode: 1,
                msg: "Tên loại bệnh viện không được truyền."
              }));
            case 3:
              _context.prev = 3;
              _context.next = 6;
              return _services.healthFacilitiesServices.createTypeHealthFacility({
                name: name
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
              console.log(_context.t0);
              return _context.abrupt("return", res.status(500).json({
                msg: (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 12]]);
      }));
      function handleCreateTypeHealthFacilities(_x, _x2) {
        return _handleCreateTypeHealthFacilities.apply(this, arguments);
      }
      return handleCreateTypeHealthFacilities;
    }() // [GET] /admin/health-facilities/type
  }, {
    key: "handleGetTypeHealthFacilities",
    value: function () {
      var _handleGetTypeHealthFacilities = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
        var data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _services.healthFacilitiesServices.getTypeHealthFacilites();
            case 3:
              data = _context2.sent;
              if (!(data.statusCode === 0)) {
                _context2.next = 6;
                break;
              }
              return _context2.abrupt("return", res.status(200).json(data));
            case 6:
              return _context2.abrupt("return", res.status(400).json(data));
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              return _context2.abrupt("return", res.status(500).json({
                msg: (_context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 9]]);
      }));
      function handleGetTypeHealthFacilities(_x3, _x4) {
        return _handleGetTypeHealthFacilities.apply(this, arguments);
      }
      return handleGetTypeHealthFacilities;
    }() // [PATCH] /admin/health-facilities/type
  }, {
    key: "handleUpdateTypeHealthFacilities",
    value: function () {
      var _handleUpdateTypeHealthFacilities = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
        var _req$body, id, name, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _req$body = req.body, id = _req$body.id, name = _req$body.name;
              if (!(!id || !name)) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return", res.status(404).json({
                statusCode: 1,
                msg: "Id loại hoặc tên loại bệnh viện không được truyền."
              }));
            case 3:
              _context3.prev = 3;
              _context3.next = 6;
              return _services.healthFacilitiesServices.updateTypeHealthFacilites({
                id: id,
                name: name
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
      function handleUpdateTypeHealthFacilities(_x5, _x6) {
        return _handleUpdateTypeHealthFacilities.apply(this, arguments);
      }
      return handleUpdateTypeHealthFacilities;
    }() // [DELETE] /admin/health-facilities/type
  }, {
    key: "handleDeleteTypeHealthFacilities",
    value: function () {
      var _handleDeleteTypeHealthFacilities = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
        var id, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              id = req.body.id;
              if (id) {
                _context4.next = 3;
                break;
              }
              return _context4.abrupt("return", res.status(404).json({
                statusCode: 1,
                msg: "Id loại bệnh viện không được truyền."
              }));
            case 3:
              _context4.prev = 3;
              _context4.next = 6;
              return _services.healthFacilitiesServices.deleteTypeHealthFacilites({
                id: id
              });
            case 6:
              data = _context4.sent;
              if (!(data.statusCode === 0)) {
                _context4.next = 9;
                break;
              }
              return _context4.abrupt("return", res.status(200).json(data));
            case 9:
              return _context4.abrupt("return", res.status(400).json(data));
            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](3);
              console.log(_context4.t0);
              return _context4.abrupt("return", res.status(500).json({
                msg: (_context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 16:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[3, 12]]);
      }));
      function handleDeleteTypeHealthFacilities(_x7, _x8) {
        return _handleDeleteTypeHealthFacilities.apply(this, arguments);
      }
      return handleDeleteTypeHealthFacilities;
    }() // [GET] /admin/health-facilities/infomation/health-facilities-type
  }, {
    key: "handleGetInfoTypeAndHealthFacilities",
    value: function () {
      var _handleGetInfoTypeAndHealthFacilities = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
        var data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _services.healthFacilitiesServices.getInfoDashboardTypeAndHealthFacilites();
            case 3:
              data = _context5.sent;
              if (!(data.statusCode === 0)) {
                _context5.next = 6;
                break;
              }
              return _context5.abrupt("return", res.status(200).json(data));
            case 6:
              return _context5.abrupt("return", res.status(400).json(data));
            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](0);
              console.log(_context5.t0);
              return _context5.abrupt("return", res.status(500).json({
                msg: (_context5.t0 === null || _context5.t0 === void 0 ? void 0 : _context5.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 9]]);
      }));
      function handleGetInfoTypeAndHealthFacilities(_x9, _x10) {
        return _handleGetInfoTypeAndHealthFacilities.apply(this, arguments);
      }
      return handleGetInfoTypeAndHealthFacilities;
    }() // [POST] /admin/health-facilities
  }, {
    key: "handleCreateHealthFacility",
    value: function () {
      var _handleCreateHealthFacility = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
        var files, fileUrls, _req$body2, name, address, phone, addressCode, email, typeHealthFacilityId, keys, data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              files = req === null || req === void 0 ? void 0 : req.files;
              if (files) {
                _context6.next = 5;
                break;
              }
              return _context6.abrupt("return", res.status(500).json({
                msg: "Lỗi load ảnh lên server. Vui lòng thử lại sau!"
              }));
            case 5:
              if (!(files.length == 0)) {
                _context6.next = 7;
                break;
              }
              return _context6.abrupt("return", res.status(500).json({
                msg: "Ảnh chưa được tải lên!"
              }));
            case 7:
              fileUrls = files.map(function (f) {
                return f.location;
              });
              _req$body2 = req.body, name = _req$body2.name, address = _req$body2.address, phone = _req$body2.phone, addressCode = _req$body2.addressCode, email = _req$body2.email, typeHealthFacilityId = _req$body2.typeHealthFacilityId;
              if (!(!addressCode || !name || !address || !phone || !email || !typeHealthFacilityId)) {
                _context6.next = 13;
                break;
              }
              keys = files.map(function (f) {
                return {
                  Key: f.key
                };
              });
              (0, _untils.deleteImagesFromS3)(keys);
              return _context6.abrupt("return", res.status(404).json({
                statusCode: 1,
                msg: "Tham số đầu vào không đầy đủ."
              }));
            case 13:
              _context6.prev = 13;
              _context6.next = 16;
              return _services.healthFacilitiesServices.createHealthFacility({
                name: name,
                address: address,
                phone: phone,
                addressCode: addressCode,
                email: email,
                typeHealthFacilityId: typeHealthFacilityId,
                fileUrls: fileUrls
              });
            case 16:
              data = _context6.sent;
              if (!(data.statusCode === 0)) {
                _context6.next = 19;
                break;
              }
              return _context6.abrupt("return", res.status(200).json(data));
            case 19:
              return _context6.abrupt("return", res.status(400).json(data));
            case 22:
              _context6.prev = 22;
              _context6.t0 = _context6["catch"](13);
              console.log(_context6.t0);
              return _context6.abrupt("return", res.status(500).json({
                msg: (_context6.t0 === null || _context6.t0 === void 0 ? void 0 : _context6.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 26:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[13, 22]]);
      }));
      function handleCreateHealthFacility(_x11, _x12) {
        return _handleCreateHealthFacility.apply(this, arguments);
      }
      return handleCreateHealthFacility;
    }() // [GET] /admin/health-facilities
  }, {
    key: "handleGetHealthFacilities",
    value: function () {
      var _handleGetHealthFacilities = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
        var _req$query, limit, offset, name, address, typeHealthFacilityId, email, id, ward, district, province, data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _req$query = req.query, limit = _req$query.limit, offset = _req$query.offset, name = _req$query.name, address = _req$query.address, typeHealthFacilityId = _req$query.typeHealthFacilityId, email = _req$query.email, id = _req$query.id, ward = _req$query.ward, district = _req$query.district, province = _req$query.province;
              _context7.prev = 1;
              _context7.next = 4;
              return _services.healthFacilitiesServices.getHealthFacilities({
                id: id,
                limit: limit,
                offset: offset,
                name: name,
                address: address,
                typeHealthFacilityId: typeHealthFacilityId,
                email: email,
                ward: ward,
                district: district,
                province: province
              });
            case 4:
              data = _context7.sent;
              if (!(data.statusCode === 0)) {
                _context7.next = 7;
                break;
              }
              return _context7.abrupt("return", res.status(200).json(data));
            case 7:
              return _context7.abrupt("return", res.status(400).json(data));
            case 10:
              _context7.prev = 10;
              _context7.t0 = _context7["catch"](1);
              console.log(_context7.t0);
              return _context7.abrupt("return", res.status(500).json({
                msg: (_context7.t0 === null || _context7.t0 === void 0 ? void 0 : _context7.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 14:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[1, 10]]);
      }));
      function handleGetHealthFacilities(_x13, _x14) {
        return _handleGetHealthFacilities.apply(this, arguments);
      }
      return handleGetHealthFacilities;
    }() // [GET] /admin/health-facilities
  }, {
    key: "handleGetHealthFacilityWithEmail",
    value: function () {
      var _handleGetHealthFacilityWithEmail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
        var _req$query2, limit, offset, email, data;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _req$query2 = req.query, limit = _req$query2.limit, offset = _req$query2.offset, email = _req$query2.email;
              _context8.prev = 1;
              _context8.next = 4;
              return _services.healthFacilitiesServices.getHealthFacilityWithEmail({
                limit: limit,
                offset: offset,
                email: email
              });
            case 4:
              data = _context8.sent;
              if (!(data.statusCode === 0)) {
                _context8.next = 7;
                break;
              }
              return _context8.abrupt("return", res.status(200).json(data));
            case 7:
              return _context8.abrupt("return", res.status(400).json(data));
            case 10:
              _context8.prev = 10;
              _context8.t0 = _context8["catch"](1);
              console.log(_context8.t0);
              return _context8.abrupt("return", res.status(500).json({
                msg: (_context8.t0 === null || _context8.t0 === void 0 ? void 0 : _context8.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 14:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[1, 10]]);
      }));
      function handleGetHealthFacilityWithEmail(_x15, _x16) {
        return _handleGetHealthFacilityWithEmail.apply(this, arguments);
      }
      return handleGetHealthFacilityWithEmail;
    }() // [PATCH] /admin/health-facilities
  }, {
    key: "handleUpdateHealthFacility",
    value: function () {
      var _handleUpdateHealthFacility = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
        var files, fileUrls, _req$body3, name, address, addressCode, phone, email, typeHealthFacilityId, id, imageOlds, keys, data;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              files = req === null || req === void 0 ? void 0 : req.files;
              fileUrls = files.map(function (f) {
                return f.location;
              });
              _req$body3 = req.body, name = _req$body3.name, address = _req$body3.address, addressCode = _req$body3.addressCode, phone = _req$body3.phone, email = _req$body3.email, typeHealthFacilityId = _req$body3.typeHealthFacilityId, id = _req$body3.id, imageOlds = _req$body3.imageOlds;
              if (!((imageOlds === null || imageOlds === void 0 ? void 0 : imageOlds.length) === 0 && fileUrls.length === 0)) {
                _context9.next = 5;
                break;
              }
              return _context9.abrupt("return", res.status(200).json({
                statusCode: 1,
                msg: "Dữ liệu không được sửa đổi."
              }));
            case 5:
              if (!(!id || !name && !address && !phone && !email && !typeHealthFacilityId)) {
                _context9.next = 9;
                break;
              }
              keys = files.map(function (f) {
                return {
                  Key: f.key
                };
              });
              keys.length > 0 && (0, _untils.deleteImagesFromS3)(keys);
              return _context9.abrupt("return", res.status(200).json({
                statusCode: 1,
                msg: "Dữ liệu không được sửa đổi."
              }));
            case 9:
              _context9.prev = 9;
              _context9.next = 12;
              return _services.healthFacilitiesServices.updateHealthFacility({
                id: id,
                name: name,
                address: address,
                phone: phone,
                addressCode: addressCode,
                email: email,
                typeHealthFacilityId: typeHealthFacilityId,
                fileUrls: fileUrls,
                imageOldKeys: imageOlds
              });
            case 12:
              data = _context9.sent;
              if (!(data.statusCode === 0)) {
                _context9.next = 15;
                break;
              }
              return _context9.abrupt("return", res.status(200).json(data));
            case 15:
              return _context9.abrupt("return", res.status(400).json(data));
            case 18:
              _context9.prev = 18;
              _context9.t0 = _context9["catch"](9);
              console.log(_context9.t0);
              return _context9.abrupt("return", res.status(500).json({
                msg: (_context9.t0 === null || _context9.t0 === void 0 ? void 0 : _context9.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 22:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[9, 18]]);
      }));
      function handleUpdateHealthFacility(_x17, _x18) {
        return _handleUpdateHealthFacility.apply(this, arguments);
      }
      return handleUpdateHealthFacility;
    }() // [DELETE] /admin/health-faciliies
  }, {
    key: "handleDeleteHealthFacility",
    value: function () {
      var _handleDeleteHealthFacility = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
        var id, data;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              id = req.body.id;
              _context10.prev = 1;
              _context10.next = 4;
              return _services.healthFacilitiesServices.deleteHealthFacility({
                id: id
              });
            case 4:
              data = _context10.sent;
              if (!(data.statusCode === 0)) {
                _context10.next = 7;
                break;
              }
              return _context10.abrupt("return", res.status(200).json(data));
            case 7:
              return _context10.abrupt("return", res.status(400).json(data));
            case 10:
              _context10.prev = 10;
              _context10.t0 = _context10["catch"](1);
              return _context10.abrupt("return", res.status(500).json({
                msg: (_context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context10.stop();
          }
        }, _callee10, null, [[1, 10]]);
      }));
      function handleDeleteHealthFacility(_x19, _x20) {
        return _handleDeleteHealthFacility.apply(this, arguments);
      }
      return handleDeleteHealthFacility;
    }() // [POST] /admin/health-facility/room
  }, {
    key: "handleCreateOrUpdateHealRoom",
    value: function () {
      var _handleCreateOrUpdateHealRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
        var _req$body4, oldRoomNumber, healthFacilityId, roomNumber, capacity, data, msg;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _req$body4 = req.body, oldRoomNumber = _req$body4.oldRoomNumber, healthFacilityId = _req$body4.healthFacilityId, roomNumber = _req$body4.roomNumber, capacity = _req$body4.capacity;
              if (!(!oldRoomNumber && (!healthFacilityId || !roomNumber || !capacity))) {
                _context11.next = 3;
                break;
              }
              return _context11.abrupt("return", res.status(401).json({
                statusCode: 4,
                msg: "Thiếu tham số truyền vào"
              }));
            case 3:
              _context11.prev = 3;
              _context11.next = 6;
              return _services.healthFacilitiesServices.createOrUpdateRoom({
                oldRoomNumber: oldRoomNumber,
                healthFacilityId: healthFacilityId,
                roomNumber: roomNumber,
                capacity: capacity
              });
            case 6:
              data = _context11.sent;
              if (!(data.statusCode === 0)) {
                _context11.next = 9;
                break;
              }
              return _context11.abrupt("return", res.status(200).json(data));
            case 9:
              return _context11.abrupt("return", res.status(400).json(data));
            case 12:
              _context11.prev = 12;
              _context11.t0 = _context11["catch"](3);
              console.log(_context11.t0);
              msg = _context11.t0.message == "Validation error" ? "Số phòng đã tồn tại." : _context11.t0.message;
              return _context11.abrupt("return", res.status(401).json({
                msg: msg
              }));
            case 17:
            case "end":
              return _context11.stop();
          }
        }, _callee11, null, [[3, 12]]);
      }));
      function handleCreateOrUpdateHealRoom(_x21, _x22) {
        return _handleCreateOrUpdateHealRoom.apply(this, arguments);
      }
      return handleCreateOrUpdateHealRoom;
    }() // [GET] /admin/health-facility/room
  }, {
    key: "handleGetHealRoom",
    value: function () {
      var _handleGetHealRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
        var _req$query3, healthFacilityId, limit, offset, data, msg;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _req$query3 = req.query, healthFacilityId = _req$query3.healthFacilityId, limit = _req$query3.limit, offset = _req$query3.offset; // console.log("limitlimit", { limit, offset });
              _context12.prev = 1;
              _context12.next = 4;
              return _services.healthFacilitiesServices.getRoom({
                healthFacilityId: healthFacilityId,
                limit: limit,
                offset: offset
              });
            case 4:
              data = _context12.sent;
              if (!(data.statusCode === 0)) {
                _context12.next = 7;
                break;
              }
              return _context12.abrupt("return", res.status(200).json(data));
            case 7:
              return _context12.abrupt("return", res.status(400).json(data));
            case 10:
              _context12.prev = 10;
              _context12.t0 = _context12["catch"](1);
              console.log(_context12.t0);
              msg = _context12.t0.message == "Validite error" ? "Số phòng đã tồn tại." : _context12.t0.message;
              return _context12.abrupt("return", res.status(401).json({
                msg: msg
              }));
            case 15:
            case "end":
              return _context12.stop();
          }
        }, _callee12, null, [[1, 10]]);
      }));
      function handleGetHealRoom(_x23, _x24) {
        return _handleGetHealRoom.apply(this, arguments);
      }
      return handleGetHealRoom;
    }() // [DELETE] /admin/health-facility/room
  }, {
    key: "handleDeleteHealRoom",
    value: function () {
      var _handleDeleteHealRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
        var _req$body5, roomNumber, healthFacilityId, data, msg;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _req$body5 = req.body, roomNumber = _req$body5.roomNumber, healthFacilityId = _req$body5.healthFacilityId;
              if (!(!roomNumber || !healthFacilityId)) {
                _context13.next = 3;
                break;
              }
              return _context13.abrupt("return", res.status(401).json({
                statusCode: 401,
                msg: "Thiếu tham số."
              }));
            case 3:
              _context13.prev = 3;
              _context13.next = 6;
              return _services.healthFacilitiesServices.deleteRoom({
                roomNumber: roomNumber,
                healthFacilityId: healthFacilityId
              });
            case 6:
              data = _context13.sent;
              if (!(data.statusCode === 0)) {
                _context13.next = 9;
                break;
              }
              return _context13.abrupt("return", res.status(200).json(data));
            case 9:
              return _context13.abrupt("return", res.status(400).json(data));
            case 12:
              _context13.prev = 12;
              _context13.t0 = _context13["catch"](3);
              console.log(_context13.t0);
              msg = _context13.t0.message == "Validite error" ? "Số phòng đã tồn tại." : _context13.t0.message;
              return _context13.abrupt("return", res.status(401).json({
                msg: msg
              }));
            case 17:
            case "end":
              return _context13.stop();
          }
        }, _callee13, null, [[3, 12]]);
      }));
      function handleDeleteHealRoom(_x25, _x26) {
        return _handleDeleteHealRoom.apply(this, arguments);
      }
      return handleDeleteHealRoom;
    }() // [POST] /admin/specialist
  }, {
    key: "handleCreateOrUpdateSpecialist",
    value: function () {
      var _handleCreateOrUpdateSpecialist = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
        var _req$body6, id, name, descriptionDisease, descriptionDoctor, data;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              // Create and Update specialist
              _req$body6 = req.body, id = _req$body6.id, name = _req$body6.name, descriptionDisease = _req$body6.descriptionDisease, descriptionDoctor = _req$body6.descriptionDoctor;
              if (!(!name || !descriptionDisease || !descriptionDoctor)) {
                _context14.next = 3;
                break;
              }
              return _context14.abrupt("return", res.status(400).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào."
              }));
            case 3:
              _context14.prev = 3;
              _context14.next = 6;
              return _services.healthFacilitiesServices.createOrUpdateSpecialist({
                id: id,
                name: name,
                descriptionDisease: descriptionDisease,
                descriptionDoctor: descriptionDoctor
              });
            case 6:
              data = _context14.sent;
              if (!(data.statusCode === 0)) {
                _context14.next = 9;
                break;
              }
              return _context14.abrupt("return", res.status(200).json(data));
            case 9:
              return _context14.abrupt("return", res.status(400).json(data));
            case 12:
              _context14.prev = 12;
              _context14.t0 = _context14["catch"](3);
              console.log(_context14.t0);
              return _context14.abrupt("return", res.status(500).json({
                msg: (_context14.t0 === null || _context14.t0 === void 0 ? void 0 : _context14.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 16:
            case "end":
              return _context14.stop();
          }
        }, _callee14, null, [[3, 12]]);
      }));
      function handleCreateOrUpdateSpecialist(_x27, _x28) {
        return _handleCreateOrUpdateSpecialist.apply(this, arguments);
      }
      return handleCreateOrUpdateSpecialist;
    }() // [GET] /admin/specialist
  }, {
    key: "handleGetSpecialist",
    value: function () {
      var _handleGetSpecialist = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
        var _req$query4, limit, offset, data;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              _req$query4 = req.query, limit = _req$query4.limit, offset = _req$query4.offset;
              _context15.prev = 1;
              _context15.next = 4;
              return _services.healthFacilitiesServices.getSpecialist({
                limit: limit,
                offset: offset
              });
            case 4:
              data = _context15.sent;
              if (!(data.statusCode === 0)) {
                _context15.next = 7;
                break;
              }
              return _context15.abrupt("return", res.status(200).json(data));
            case 7:
              return _context15.abrupt("return", res.status(400).json(data));
            case 10:
              _context15.prev = 10;
              _context15.t0 = _context15["catch"](1);
              return _context15.abrupt("return", res.status(500).json({
                msg: (_context15.t0 === null || _context15.t0 === void 0 ? void 0 : _context15.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context15.stop();
          }
        }, _callee15, null, [[1, 10]]);
      }));
      function handleGetSpecialist(_x29, _x30) {
        return _handleGetSpecialist.apply(this, arguments);
      }
      return handleGetSpecialist;
    }() // [GET] /admin/specialist/:id
  }, {
    key: "handleGetSpecialistById",
    value: function () {
      var _handleGetSpecialistById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
        var id, data;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              id = req.params.id;
              _context16.prev = 1;
              _context16.next = 4;
              return _services.healthFacilitiesServices.getSpecialistById({
                id: id
              });
            case 4:
              data = _context16.sent;
              if (!(data.statusCode === 0)) {
                _context16.next = 7;
                break;
              }
              return _context16.abrupt("return", res.status(200).json(data));
            case 7:
              return _context16.abrupt("return", res.status(400).json(data));
            case 10:
              _context16.prev = 10;
              _context16.t0 = _context16["catch"](1);
              return _context16.abrupt("return", res.status(500).json({
                msg: (_context16.t0 === null || _context16.t0 === void 0 ? void 0 : _context16.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context16.stop();
          }
        }, _callee16, null, [[1, 10]]);
      }));
      function handleGetSpecialistById(_x31, _x32) {
        return _handleGetSpecialistById.apply(this, arguments);
      }
      return handleGetSpecialistById;
    }() // [DELETE] /admin/specialist
  }, {
    key: "handleDeleteSpecialist",
    value: function () {
      var _handleDeleteSpecialist = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
        var id, data;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              id = req.body.id;
              if (id) {
                _context17.next = 3;
                break;
              }
              return _context17.abrupt("return", res.status(400).json({
                statusCode: 1,
                msg: "Thiếu id truyền vào."
              }));
            case 3:
              _context17.prev = 3;
              _context17.next = 6;
              return _services.healthFacilitiesServices.deleteSpecialist({
                id: id
              });
            case 6:
              data = _context17.sent;
              if (!(data.statusCode === 0)) {
                _context17.next = 9;
                break;
              }
              return _context17.abrupt("return", res.status(200).json(data));
            case 9:
              return _context17.abrupt("return", res.status(400).json(data));
            case 12:
              _context17.prev = 12;
              _context17.t0 = _context17["catch"](3);
              return _context17.abrupt("return", res.status(500).json({
                msg: (_context17.t0 === null || _context17.t0 === void 0 ? void 0 : _context17.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 15:
            case "end":
              return _context17.stop();
          }
        }, _callee17, null, [[3, 12]]);
      }));
      function handleDeleteSpecialist(_x33, _x34) {
        return _handleDeleteSpecialist.apply(this, arguments);
      }
      return handleDeleteSpecialist;
    }() // [GET] /admin/academic-degree
  }, {
    key: "handleGetAcademicDegree",
    value: function () {
      var _handleGetAcademicDegree = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
        var _req$query5, limit, offset, data;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              _req$query5 = req.query, limit = _req$query5.limit, offset = _req$query5.offset;
              _context18.prev = 1;
              _context18.next = 4;
              return _staffServices["default"].getAcademicDegree({
                limit: limit,
                offset: offset
              });
            case 4:
              data = _context18.sent;
              if (!(data.statusCode === 0)) {
                _context18.next = 7;
                break;
              }
              return _context18.abrupt("return", res.status(200).json(data));
            case 7:
              return _context18.abrupt("return", res.status(400).json(data));
            case 10:
              _context18.prev = 10;
              _context18.t0 = _context18["catch"](1);
              return _context18.abrupt("return", res.status(500).json({
                msg: (_context18.t0 === null || _context18.t0 === void 0 ? void 0 : _context18.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context18.stop();
          }
        }, _callee18, null, [[1, 10]]);
      }));
      function handleGetAcademicDegree(_x35, _x36) {
        return _handleGetAcademicDegree.apply(this, arguments);
      }
      return handleGetAcademicDegree;
    }() // [POST] /admin/academic-degree
  }, {
    key: "handleCreateOrUpdateAcademicDegree",
    value: function () {
      var _handleCreateOrUpdateAcademicDegree = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
        var _req$body7, id, name, data;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              _req$body7 = req.body, id = _req$body7.id, name = _req$body7.name;
              if (name) {
                _context19.next = 3;
                break;
              }
              return _context19.abrupt("return", res.status(400).json({
                statusCode: 1,
                msg: "Thiếu tên truyền vào."
              }));
            case 3:
              _context19.prev = 3;
              _context19.next = 6;
              return _staffServices["default"].createOrUpdateAcademicDegree({
                id: id,
                name: name
              });
            case 6:
              data = _context19.sent;
              if (!(data.statusCode === 0)) {
                _context19.next = 9;
                break;
              }
              return _context19.abrupt("return", res.status(200).json(data));
            case 9:
              return _context19.abrupt("return", res.status(400).json(data));
            case 12:
              _context19.prev = 12;
              _context19.t0 = _context19["catch"](3);
              return _context19.abrupt("return", res.status(500).json({
                msg: (_context19.t0 === null || _context19.t0 === void 0 ? void 0 : _context19.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 15:
            case "end":
              return _context19.stop();
          }
        }, _callee19, null, [[3, 12]]);
      }));
      function handleCreateOrUpdateAcademicDegree(_x37, _x38) {
        return _handleCreateOrUpdateAcademicDegree.apply(this, arguments);
      }
      return handleCreateOrUpdateAcademicDegree;
    }() // [DELETE] /admin/academic-degree
  }, {
    key: "handleDeleteAcademicDegree",
    value: function () {
      var _handleDeleteAcademicDegree = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
        var id, data;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              id = req.body.id;
              if (id) {
                _context20.next = 3;
                break;
              }
              return _context20.abrupt("return", res.status(400).json({
                statusCode: 1,
                msg: "Thiếu id truyền vào."
              }));
            case 3:
              _context20.prev = 3;
              _context20.next = 6;
              return _staffServices["default"].deleteAcademicDegree({
                id: id
              });
            case 6:
              data = _context20.sent;
              if (!(data.statusCode === 0)) {
                _context20.next = 9;
                break;
              }
              return _context20.abrupt("return", res.status(200).json(data));
            case 9:
              return _context20.abrupt("return", res.status(400).json(data));
            case 12:
              _context20.prev = 12;
              _context20.t0 = _context20["catch"](3);
              return _context20.abrupt("return", res.status(500).json({
                msg: (_context20.t0 === null || _context20.t0 === void 0 ? void 0 : _context20.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 15:
            case "end":
              return _context20.stop();
          }
        }, _callee20, null, [[3, 12]]);
      }));
      function handleDeleteAcademicDegree(_x39, _x40) {
        return _handleDeleteAcademicDegree.apply(this, arguments);
      }
      return handleDeleteAcademicDegree;
    }() // [POST] /admin/staff
  }, {
    key: "handleCreateOrUpdateStaff",
    value: function () {
      var _handleCreateOrUpdateStaff = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
        var _req$body8, id, email, password, fullName, phone, address, gender, academicDegreeId, specialistId, experience, certificate, roleId, data;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              _req$body8 = req.body, id = _req$body8.id, email = _req$body8.email, password = _req$body8.password, fullName = _req$body8.fullName, phone = _req$body8.phone, address = _req$body8.address, gender = _req$body8.gender, academicDegreeId = _req$body8.academicDegreeId, specialistId = _req$body8.specialistId, experience = _req$body8.experience, certificate = _req$body8.certificate, roleId = _req$body8.roleId;
              if (!(!id && (!email || !password || !fullName || !phone || !address || !gender || !roleId))) {
                _context21.next = 3;
                break;
              }
              return _context21.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào."
              }));
            case 3:
              _context21.prev = 3;
              _context21.next = 6;
              return _staffServices["default"].createOrUpdateStaff({
                id: id,
                email: email,
                password: password,
                fullName: fullName,
                phone: phone,
                address: address,
                gender: gender,
                academicDegreeId: academicDegreeId,
                specialistId: specialistId,
                experience: experience,
                certificate: certificate,
                roleId: roleId
              });
            case 6:
              data = _context21.sent;
              if (!(data.statusCode === 0)) {
                _context21.next = 9;
                break;
              }
              return _context21.abrupt("return", res.status(200).json(data));
            case 9:
              return _context21.abrupt("return", res.status(400).json(data));
            case 12:
              _context21.prev = 12;
              _context21.t0 = _context21["catch"](3);
              console.log(_context21.t0);
              return _context21.abrupt("return", res.status(500).json({
                msg: (_context21.t0 === null || _context21.t0 === void 0 ? void 0 : _context21.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 16:
            case "end":
              return _context21.stop();
          }
        }, _callee21, null, [[3, 12]]);
      }));
      function handleCreateOrUpdateStaff(_x41, _x42) {
        return _handleCreateOrUpdateStaff.apply(this, arguments);
      }
      return handleCreateOrUpdateStaff;
    }() // [GET] /admin/staff
  }, {
    key: "handleGetStaff",
    value: function () {
      var _handleGetStaff = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
        var _req$query6, limit, offset, email, fullName, type, doctorId, isWorking, Role, data;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              _req$query6 = req.query, limit = _req$query6.limit, offset = _req$query6.offset, email = _req$query6.email, fullName = _req$query6.fullName, type = _req$query6.type, doctorId = _req$query6.doctorId, isWorking = _req$query6.isWorking, Role = _req$query6.Role;
              _context22.prev = 1;
              _context22.next = 4;
              return _staffServices["default"].getStaff({
                limit: limit,
                offset: offset,
                email: email,
                fullName: Array.isArray(fullName) ? fullName[0] : fullName,
                type: type,
                Role: Role,
                doctorId: doctorId,
                isWorking: isWorking
              });
            case 4:
              data = _context22.sent;
              if (!(data.statusCode === 0)) {
                _context22.next = 7;
                break;
              }
              return _context22.abrupt("return", res.status(200).json(data));
            case 7:
              return _context22.abrupt("return", res.status(400).json(data));
            case 10:
              _context22.prev = 10;
              _context22.t0 = _context22["catch"](1);
              return _context22.abrupt("return", res.status(500).json({
                msg: (_context22.t0 === null || _context22.t0 === void 0 ? void 0 : _context22.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context22.stop();
          }
        }, _callee22, null, [[1, 10]]);
      }));
      function handleGetStaff(_x43, _x44) {
        return _handleGetStaff.apply(this, arguments);
      }
      return handleGetStaff;
    }() // [GET] /admin/staff/doctor
  }, {
    key: "getDoctorWithEmail",
    value: function () {
      var _getDoctorWithEmail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
        var _req$query7, limit, offset, email, data;
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              _req$query7 = req.query, limit = _req$query7.limit, offset = _req$query7.offset, email = _req$query7.email;
              _context23.prev = 1;
              _context23.next = 4;
              return _staffServices["default"].getDoctorWithEmail({
                limit: limit,
                offset: offset,
                email: email
              });
            case 4:
              data = _context23.sent;
              if (!(data.statusCode === 0)) {
                _context23.next = 7;
                break;
              }
              return _context23.abrupt("return", res.status(200).json(data));
            case 7:
              return _context23.abrupt("return", res.status(400).json(data));
            case 10:
              _context23.prev = 10;
              _context23.t0 = _context23["catch"](1);
              return _context23.abrupt("return", res.status(500).json({
                msg: (_context23.t0 === null || _context23.t0 === void 0 ? void 0 : _context23.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context23.stop();
          }
        }, _callee23, null, [[1, 10]]);
      }));
      function getDoctorWithEmail(_x45, _x46) {
        return _getDoctorWithEmail.apply(this, arguments);
      }
      return getDoctorWithEmail;
    }() // [GET] /admin/staff/doctor
  }, {
    key: "getDoctorById",
    value: function () {
      var _getDoctorById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
        var id, data;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              id = req.query.id;
              if (id) {
                _context24.next = 3;
                break;
              }
              return _context24.abrupt("return", res.status(400).json({
                statusCode: 1,
                msg: "Id chưa được truyền vào."
              }));
            case 3:
              _context24.prev = 3;
              _context24.next = 6;
              return _staffServices["default"].getDoctorById(id);
            case 6:
              data = _context24.sent;
              if (!(data.statusCode === 0)) {
                _context24.next = 9;
                break;
              }
              return _context24.abrupt("return", res.status(200).json(data));
            case 9:
              return _context24.abrupt("return", res.status(400).json(data));
            case 12:
              _context24.prev = 12;
              _context24.t0 = _context24["catch"](3);
              return _context24.abrupt("return", res.status(500).json({
                msg: (_context24.t0 === null || _context24.t0 === void 0 ? void 0 : _context24.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 15:
            case "end":
              return _context24.stop();
          }
        }, _callee24, null, [[3, 12]]);
      }));
      function getDoctorById(_x47, _x48) {
        return _getDoctorById.apply(this, arguments);
      }
      return getDoctorById;
    }() // [GET] /admin/role
  }, {
    key: "handleGetRole",
    value: function () {
      var _handleGetRole = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
        var option, data;
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) switch (_context25.prev = _context25.next) {
            case 0:
              option = req.query.option;
              _context25.prev = 1;
              _context25.next = 4;
              return _services.authServices.getRole({
                option: option
              });
            case 4:
              data = _context25.sent;
              if (!(data.statusCode === 0)) {
                _context25.next = 7;
                break;
              }
              return _context25.abrupt("return", res.status(200).json(data));
            case 7:
              return _context25.abrupt("return", res.status(400).json(data));
            case 10:
              _context25.prev = 10;
              _context25.t0 = _context25["catch"](1);
              return _context25.abrupt("return", res.status(500).json({
                msg: (_context25.t0 === null || _context25.t0 === void 0 ? void 0 : _context25.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context25.stop();
          }
        }, _callee25, null, [[1, 10]]);
      }));
      function handleGetRole(_x49, _x50) {
        return _handleGetRole.apply(this, arguments);
      }
      return handleGetRole;
    }() // [POST] /admin/work
  }, {
    key: "handleCreateOrUpdateWork",
    value: function () {
      var _handleCreateOrUpdateWork = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
        var _req$body9, staffId, healthFacilityId, id, data;
        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              _req$body9 = req.body, staffId = _req$body9.staffId, healthFacilityId = _req$body9.healthFacilityId, id = _req$body9.id;
              if (!(!id && (!staffId || !healthFacilityId))) {
                _context26.next = 3;
                break;
              }
              return _context26.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào."
              }));
            case 3:
              _context26.prev = 3;
              _context26.next = 6;
              return _services.workServices.createOrUpdateWorking({
                staffId: staffId,
                healthFacilityId: healthFacilityId,
                id: id
              });
            case 6:
              data = _context26.sent;
              if (!(data.statusCode === 0)) {
                _context26.next = 9;
                break;
              }
              return _context26.abrupt("return", res.status(200).json(data));
            case 9:
              return _context26.abrupt("return", res.status(400).json(data));
            case 12:
              _context26.prev = 12;
              _context26.t0 = _context26["catch"](3);
              return _context26.abrupt("return", res.status(500).json({
                msg: (_context26.t0 === null || _context26.t0 === void 0 ? void 0 : _context26.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 15:
            case "end":
              return _context26.stop();
          }
        }, _callee26, null, [[3, 12]]);
      }));
      function handleCreateOrUpdateWork(_x51, _x52) {
        return _handleCreateOrUpdateWork.apply(this, arguments);
      }
      return handleCreateOrUpdateWork;
    }() // [GET] /admin/work
  }, {
    key: "handleGetWorking",
    value: function () {
      var _handleGetWorking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
        var _user$role;
        var _req$query8, doctorName, id, doctorEmail, limit, offset, doctorId, healthFacilityName, healthFacilityId, type, roleId, Role, user, data;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) switch (_context27.prev = _context27.next) {
            case 0:
              _req$query8 = req.query, doctorName = _req$query8.doctorName, id = _req$query8.id, doctorEmail = _req$query8.doctorEmail, limit = _req$query8.limit, offset = _req$query8.offset, doctorId = _req$query8.doctorId, healthFacilityName = _req$query8.healthFacilityName, healthFacilityId = _req$query8.healthFacilityId, type = _req$query8.type, roleId = _req$query8.roleId, Role = _req$query8.Role;
              user = req === null || req === void 0 ? void 0 : req.user;
              if ((user === null || user === void 0 || (_user$role = user.role) === null || _user$role === void 0 ? void 0 : _user$role.keyType) !== "admin") {
                doctorId = user === null || user === void 0 ? void 0 : user.id;
              }
              _context27.prev = 3;
              _context27.next = 6;
              return _services.workServices.getWorking({
                doctorName: Array.isArray(doctorName) ? doctorName === null || doctorName === void 0 ? void 0 : doctorName[0] : doctorName,
                limit: limit,
                offset: offset,
                id: id,
                doctorEmail: doctorEmail,
                doctorId: doctorId,
                healthFacilityName: Array.isArray(healthFacilityName) ? healthFacilityName === null || healthFacilityName === void 0 ? void 0 : healthFacilityName[0] : healthFacilityName,
                healthFacilityId: healthFacilityId,
                type: type,
                Role: Role,
                roleId: roleId
              });
            case 6:
              data = _context27.sent;
              if (!(data.statusCode === 0)) {
                _context27.next = 9;
                break;
              }
              return _context27.abrupt("return", res.status(200).json(data));
            case 9:
              return _context27.abrupt("return", res.status(400).json(data));
            case 12:
              _context27.prev = 12;
              _context27.t0 = _context27["catch"](3);
              return _context27.abrupt("return", res.status(500).json({
                msg: (_context27.t0 === null || _context27.t0 === void 0 ? void 0 : _context27.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 15:
            case "end":
              return _context27.stop();
          }
        }, _callee27, null, [[3, 12]]);
      }));
      function handleGetWorking(_x53, _x54) {
        return _handleGetWorking.apply(this, arguments);
      }
      return handleGetWorking;
    }() // [DELETE] /admin/work
  }, {
    key: "handleDeleteWorking",
    value: function () {
      var _handleDeleteWorking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
        var id, data;
        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) switch (_context28.prev = _context28.next) {
            case 0:
              id = req.body.id;
              _context28.prev = 1;
              _context28.next = 4;
              return _services.workServices.deleteWorking(id);
            case 4:
              data = _context28.sent;
              if (!(data.statusCode === 0)) {
                _context28.next = 7;
                break;
              }
              return _context28.abrupt("return", res.status(200).json(data));
            case 7:
              return _context28.abrupt("return", res.status(400).json(data));
            case 10:
              _context28.prev = 10;
              _context28.t0 = _context28["catch"](1);
              return _context28.abrupt("return", res.status(500).json({
                msg: (_context28.t0 === null || _context28.t0 === void 0 ? void 0 : _context28.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context28.stop();
          }
        }, _callee28, null, [[1, 10]]);
      }));
      function handleDeleteWorking(_x55, _x56) {
        return _handleDeleteWorking.apply(this, arguments);
      }
      return handleDeleteWorking;
    }() // [GET] /admin/work-room
  }, {
    key: "handleGetWorkRoom",
    value: function () {
      var _handleGetWorkRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
        var _req$query9, limit, offset, healthFacilityId, roomNumber, data;
        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) switch (_context29.prev = _context29.next) {
            case 0:
              _req$query9 = req.query, limit = _req$query9.limit, offset = _req$query9.offset, healthFacilityId = _req$query9.healthFacilityId, roomNumber = _req$query9.roomNumber;
              _context29.prev = 1;
              _context29.next = 4;
              return _services.workServices.getWorkRoom({
                limit: limit,
                offset: offset,
                healthFacilityId: healthFacilityId,
                roomNumber: roomNumber
              });
            case 4:
              data = _context29.sent;
              if (!(data.statusCode === 0)) {
                _context29.next = 7;
                break;
              }
              return _context29.abrupt("return", res.status(200).json(data));
            case 7:
              return _context29.abrupt("return", res.status(400).json(data));
            case 10:
              _context29.prev = 10;
              _context29.t0 = _context29["catch"](1);
              console.log(_context29.t0);
              return _context29.abrupt("return", res.status(500).json({
                msg: (_context29.t0 === null || _context29.t0 === void 0 ? void 0 : _context29.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 14:
            case "end":
              return _context29.stop();
          }
        }, _callee29, null, [[1, 10]]);
      }));
      function handleGetWorkRoom(_x57, _x58) {
        return _handleGetWorkRoom.apply(this, arguments);
      }
      return handleGetWorkRoom;
    }() // [Delete] /admin/work-room
  }, {
    key: "handleDeleteWorkRoom",
    value: function () {
      var _handleDeleteWorkRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(req, res) {
        var id, data;
        return _regeneratorRuntime().wrap(function _callee30$(_context30) {
          while (1) switch (_context30.prev = _context30.next) {
            case 0:
              id = req.body.id;
              if (id) {
                _context30.next = 3;
                break;
              }
              return _context30.abrupt("return", res.status(400).json({
                msg: "Id chưa được truyền vào."
              }));
            case 3:
              _context30.prev = 3;
              _context30.next = 6;
              return _services.workServices.deleteWorkRoom(id);
            case 6:
              data = _context30.sent;
              if (!(data.statusCode === 0)) {
                _context30.next = 9;
                break;
              }
              return _context30.abrupt("return", res.status(200).json(data));
            case 9:
              return _context30.abrupt("return", res.status(400).json(data));
            case 12:
              _context30.prev = 12;
              _context30.t0 = _context30["catch"](3);
              return _context30.abrupt("return", res.status(500).json({
                msg: (_context30.t0 === null || _context30.t0 === void 0 ? void 0 : _context30.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 15:
            case "end":
              return _context30.stop();
          }
        }, _callee30, null, [[3, 12]]);
      }));
      function handleDeleteWorkRoom(_x59, _x60) {
        return _handleDeleteWorkRoom.apply(this, arguments);
      }
      return handleDeleteWorkRoom;
    }() // [POST] /admin/work-room
  }, {
    key: "handleCreateOrUpdateWorkRoom",
    value: function () {
      var _handleCreateOrUpdateWorkRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(req, res) {
        var _req$body10, ClinicRoomRoomNumber, ClinicRoomHealthFacilityId, checkUpPrice, applyDate, id, workingId, data;
        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) switch (_context31.prev = _context31.next) {
            case 0:
              _req$body10 = req.body, ClinicRoomRoomNumber = _req$body10.ClinicRoomRoomNumber, ClinicRoomHealthFacilityId = _req$body10.ClinicRoomHealthFacilityId, checkUpPrice = _req$body10.checkUpPrice, applyDate = _req$body10.applyDate, id = _req$body10.id, workingId = _req$body10.workingId;
              if (!(!id && (!ClinicRoomRoomNumber || !ClinicRoomHealthFacilityId || !checkUpPrice || !applyDate || !workingId))) {
                _context31.next = 3;
                break;
              }
              return _context31.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào."
              }));
            case 3:
              _context31.prev = 3;
              _context31.next = 6;
              return _services.workServices.createOrUpdateWorkRoom({
                ClinicRoomRoomNumber: ClinicRoomRoomNumber,
                ClinicRoomHealthFacilityId: ClinicRoomHealthFacilityId,
                checkUpPrice: checkUpPrice,
                applyDate: applyDate,
                workingId: workingId,
                id: id
              });
            case 6:
              data = _context31.sent;
              if (!(data.statusCode === 0)) {
                _context31.next = 9;
                break;
              }
              return _context31.abrupt("return", res.status(200).json(data));
            case 9:
              return _context31.abrupt("return", res.status(400).json(data));
            case 12:
              _context31.prev = 12;
              _context31.t0 = _context31["catch"](3);
              return _context31.abrupt("return", res.status(500).json({
                msg: (_context31.t0 === null || _context31.t0 === void 0 ? void 0 : _context31.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 15:
            case "end":
              return _context31.stop();
          }
        }, _callee31, null, [[3, 12]]);
      }));
      function handleCreateOrUpdateWorkRoom(_x61, _x62) {
        return _handleCreateOrUpdateWorkRoom.apply(this, arguments);
      }
      return handleCreateOrUpdateWorkRoom;
    }() // [GET] /code
  }, {
    key: "handleGetCode",
    value: function () {
      var _handleGetCode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(req, res) {
        var _req$query10, limit, offset, name, data;
        return _regeneratorRuntime().wrap(function _callee32$(_context32) {
          while (1) switch (_context32.prev = _context32.next) {
            case 0:
              _req$query10 = req.query, limit = _req$query10.limit, offset = _req$query10.offset, name = _req$query10.name;
              _context32.prev = 1;
              _context32.next = 4;
              return _staffServices["default"].getCode({
                limit: limit,
                offset: offset,
                name: name
              });
            case 4:
              data = _context32.sent;
              if (!(data.statusCode === 0)) {
                _context32.next = 7;
                break;
              }
              return _context32.abrupt("return", res.status(200).json(data));
            case 7:
              return _context32.abrupt("return", res.status(400).json(data));
            case 10:
              _context32.prev = 10;
              _context32.t0 = _context32["catch"](1);
              return _context32.abrupt("return", res.status(500).json({
                msg: (_context32.t0 === null || _context32.t0 === void 0 ? void 0 : _context32.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context32.stop();
          }
        }, _callee32, null, [[1, 10]]);
      }));
      function handleGetCode(_x63, _x64) {
        return _handleGetCode.apply(this, arguments);
      }
      return handleGetCode;
    }() // [GET] /code/time
  }, {
    key: "handleGetTimeCode",
    value: function () {
      var _handleGetTimeCode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(req, res) {
        var _req$query11, limit, offset, data;
        return _regeneratorRuntime().wrap(function _callee33$(_context33) {
          while (1) switch (_context33.prev = _context33.next) {
            case 0:
              _req$query11 = req.query, limit = _req$query11.limit, offset = _req$query11.offset;
              _context33.prev = 1;
              _context33.next = 4;
              return _staffServices["default"].getTimeCode({
                limit: limit,
                offset: offset
              });
            case 4:
              data = _context33.sent;
              if (!(data.statusCode === 0)) {
                _context33.next = 7;
                break;
              }
              return _context33.abrupt("return", res.status(200).json(data));
            case 7:
              return _context33.abrupt("return", res.status(400).json(data));
            case 10:
              _context33.prev = 10;
              _context33.t0 = _context33["catch"](1);
              return _context33.abrupt("return", res.status(500).json({
                msg: (_context33.t0 === null || _context33.t0 === void 0 ? void 0 : _context33.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context33.stop();
          }
        }, _callee33, null, [[1, 10]]);
      }));
      function handleGetTimeCode(_x65, _x66) {
        return _handleGetTimeCode.apply(this, arguments);
      }
      return handleGetTimeCode;
    }() // [Delete] /code
  }, {
    key: "handleDeleteCode",
    value: function () {
      var _handleDeleteCode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(req, res) {
        var key, data;
        return _regeneratorRuntime().wrap(function _callee34$(_context34) {
          while (1) switch (_context34.prev = _context34.next) {
            case 0:
              key = req.body.key;
              if (key) {
                _context34.next = 3;
                break;
              }
              return _context34.abrupt("return", res.status(400).json({
                msg: "Key chưa được truyền vào."
              }));
            case 3:
              _context34.prev = 3;
              _context34.next = 6;
              return _staffServices["default"].deleteCode({
                key: key
              });
            case 6:
              data = _context34.sent;
              if (!(data.statusCode === 0)) {
                _context34.next = 9;
                break;
              }
              return _context34.abrupt("return", res.status(200).json(data));
            case 9:
              return _context34.abrupt("return", res.status(400).json(data));
            case 12:
              _context34.prev = 12;
              _context34.t0 = _context34["catch"](3);
              return _context34.abrupt("return", res.status(500).json({
                msg: (_context34.t0 === null || _context34.t0 === void 0 ? void 0 : _context34.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 15:
            case "end":
              return _context34.stop();
          }
        }, _callee34, null, [[3, 12]]);
      }));
      function handleDeleteCode(_x67, _x68) {
        return _handleDeleteCode.apply(this, arguments);
      }
      return handleDeleteCode;
    }() // [Create] /code
  }, {
    key: "handleCreateCode",
    value: function () {
      var _handleCreateCode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35(req, res) {
        var _req$body11, name, key, value, data;
        return _regeneratorRuntime().wrap(function _callee35$(_context35) {
          while (1) switch (_context35.prev = _context35.next) {
            case 0:
              _req$body11 = req.body, name = _req$body11.name, key = _req$body11.key, value = _req$body11.value;
              if (!(!name || !value || !key)) {
                _context35.next = 3;
                break;
              }
              return _context35.abrupt("return", res.status(400).json({
                msg: "Tham số cần thiết chưa được truyền vào."
              }));
            case 3:
              _context35.prev = 3;
              _context35.next = 6;
              return _staffServices["default"].createCode({
                name: name,
                key: key,
                value: value
              });
            case 6:
              data = _context35.sent;
              if (!(data.statusCode === 0)) {
                _context35.next = 9;
                break;
              }
              return _context35.abrupt("return", res.status(200).json(data));
            case 9:
              return _context35.abrupt("return", res.status(400).json(data));
            case 12:
              _context35.prev = 12;
              _context35.t0 = _context35["catch"](3);
              return _context35.abrupt("return", res.status(500).json({
                msg: (_context35.t0 === null || _context35.t0 === void 0 ? void 0 : _context35.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 15:
            case "end":
              return _context35.stop();
          }
        }, _callee35, null, [[3, 12]]);
      }));
      function handleCreateCode(_x69, _x70) {
        return _handleCreateCode.apply(this, arguments);
      }
      return handleCreateCode;
    }() // rank
  }, {
    key: "handleGetRank",
    value: function () {
      var _handleGetRank = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36(req, res) {
        var data;
        return _regeneratorRuntime().wrap(function _callee36$(_context36) {
          while (1) switch (_context36.prev = _context36.next) {
            case 0:
              _context36.prev = 0;
              _context36.next = 3;
              return _services.healthFacilitiesServices.getRank();
            case 3:
              data = _context36.sent;
              if (!(data.statusCode === 0)) {
                _context36.next = 6;
                break;
              }
              return _context36.abrupt("return", res.status(200).json(data));
            case 6:
              return _context36.abrupt("return", res.status(400).json(data));
            case 9:
              _context36.prev = 9;
              _context36.t0 = _context36["catch"](0);
              return _context36.abrupt("return", res.status(500).json({
                msg: (_context36.t0 === null || _context36.t0 === void 0 ? void 0 : _context36.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 12:
            case "end":
              return _context36.stop();
          }
        }, _callee36, null, [[0, 9]]);
      }));
      function handleGetRank(_x71, _x72) {
        return _handleGetRank.apply(this, arguments);
      }
      return handleGetRank;
    }() // chart
  }, {
    key: "handleGetChartRecord",
    value: function () {
      var _handleGetChartRecord = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(req, res) {
        var year, data;
        return _regeneratorRuntime().wrap(function _callee37$(_context37) {
          while (1) switch (_context37.prev = _context37.next) {
            case 0:
              year = req.query.year;
              if (year) {
                _context37.next = 3;
                break;
              }
              return _context37.abrupt("return", res.status(400).json({
                msg: "Thiếu tham số truyền vào! Yêu cầu [year]"
              }));
            case 3:
              _context37.prev = 3;
              _context37.next = 6;
              return _staffServices["default"].getChartRecord({
                year: year
              });
            case 6:
              data = _context37.sent;
              if (!(data.statusCode === 0)) {
                _context37.next = 9;
                break;
              }
              return _context37.abrupt("return", res.status(200).json(data));
            case 9:
              return _context37.abrupt("return", res.status(400).json(data));
            case 12:
              _context37.prev = 12;
              _context37.t0 = _context37["catch"](3);
              return _context37.abrupt("return", res.status(500).json({
                msg: (_context37.t0 === null || _context37.t0 === void 0 ? void 0 : _context37.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 15:
            case "end":
              return _context37.stop();
          }
        }, _callee37, null, [[3, 12]]);
      }));
      function handleGetChartRecord(_x73, _x74) {
        return _handleGetChartRecord.apply(this, arguments);
      }
      return handleGetChartRecord;
    }()
  }, {
    key: "handleGetChartAccount",
    value: function () {
      var _handleGetChartAccount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38(req, res) {
        var year, data;
        return _regeneratorRuntime().wrap(function _callee38$(_context38) {
          while (1) switch (_context38.prev = _context38.next) {
            case 0:
              year = req.query.year;
              if (year) {
                _context38.next = 3;
                break;
              }
              return _context38.abrupt("return", res.status(400).json({
                msg: "Thiếu tham số truyền vào! Yêu cầu [year]"
              }));
            case 3:
              _context38.prev = 3;
              _context38.next = 6;
              return _staffServices["default"].getChartAccount({
                year: year
              });
            case 6:
              data = _context38.sent;
              if (!(data.statusCode === 0)) {
                _context38.next = 9;
                break;
              }
              return _context38.abrupt("return", res.status(200).json(data));
            case 9:
              return _context38.abrupt("return", res.status(400).json(data));
            case 12:
              _context38.prev = 12;
              _context38.t0 = _context38["catch"](3);
              return _context38.abrupt("return", res.status(500).json({
                msg: (_context38.t0 === null || _context38.t0 === void 0 ? void 0 : _context38.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 15:
            case "end":
              return _context38.stop();
          }
        }, _callee38, null, [[3, 12]]);
      }));
      function handleGetChartAccount(_x75, _x76) {
        return _handleGetChartAccount.apply(this, arguments);
      }
      return handleGetChartAccount;
    }() // Cedicine
  }, {
    key: "handleCreateOrEditCedicine",
    value: function () {
      var _handleCreateOrEditCedicine = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39(req, res) {
        var _req$body12, name, desc, id, response;
        return _regeneratorRuntime().wrap(function _callee39$(_context39) {
          while (1) switch (_context39.prev = _context39.next) {
            case 0:
              _req$body12 = req.body, name = _req$body12.name, desc = _req$body12.desc, id = _req$body12.id;
              if (!(!id && !name)) {
                _context39.next = 3;
                break;
              }
              return _context39.abrupt("return", res.status(400).json({
                msg: "Tham số cần thiết chưa được truyền vào."
              }));
            case 3:
              _context39.prev = 3;
              _context39.next = 6;
              return _services.adminServices.createOrUpdateCedicine({
                desc: desc,
                name: name,
                id: id
              });
            case 6:
              response = _context39.sent;
              return _context39.abrupt("return", res.status(response.statusCode).json(response));
            case 10:
              _context39.prev = 10;
              _context39.t0 = _context39["catch"](3);
              return _context39.abrupt("return", res.status(500).json({
                msg: (_context39.t0 === null || _context39.t0 === void 0 ? void 0 : _context39.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context39.stop();
          }
        }, _callee39, null, [[3, 10]]);
      }));
      function handleCreateOrEditCedicine(_x77, _x78) {
        return _handleCreateOrEditCedicine.apply(this, arguments);
      }
      return handleCreateOrEditCedicine;
    }()
  }, {
    key: "handleGetCedicine",
    value: function () {
      var _handleGetCedicine = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40(req, res) {
        var _req$query12, limit, offset, name, data;
        return _regeneratorRuntime().wrap(function _callee40$(_context40) {
          while (1) switch (_context40.prev = _context40.next) {
            case 0:
              _req$query12 = req.query, limit = _req$query12.limit, offset = _req$query12.offset, name = _req$query12.name;
              _context40.prev = 1;
              _context40.next = 4;
              return _services.adminServices.getCedicine({
                limit: limit,
                offset: offset,
                name: name
              });
            case 4:
              data = _context40.sent;
              return _context40.abrupt("return", res.status(data.statusCode).json(data));
            case 8:
              _context40.prev = 8;
              _context40.t0 = _context40["catch"](1);
              return _context40.abrupt("return", res.status(500).json({
                msg: (_context40.t0 === null || _context40.t0 === void 0 ? void 0 : _context40.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 11:
            case "end":
              return _context40.stop();
          }
        }, _callee40, null, [[1, 8]]);
      }));
      function handleGetCedicine(_x79, _x80) {
        return _handleGetCedicine.apply(this, arguments);
      }
      return handleGetCedicine;
    }()
  }, {
    key: "handleDeleteCedicine",
    value: function () {
      var _handleDeleteCedicine = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41(req, res) {
        var id, data;
        return _regeneratorRuntime().wrap(function _callee41$(_context41) {
          while (1) switch (_context41.prev = _context41.next) {
            case 0:
              id = req.body.id;
              if (id) {
                _context41.next = 3;
                break;
              }
              return _context41.abrupt("return", res.status(400).json({
                msg: "Vui lòng điền Id thuốc cần xóa!"
              }));
            case 3:
              _context41.prev = 3;
              _context41.next = 6;
              return _services.adminServices.deleteCedicine({
                id: id
              });
            case 6:
              data = _context41.sent;
              return _context41.abrupt("return", res.status(data.statusCode).json(data));
            case 10:
              _context41.prev = 10;
              _context41.t0 = _context41["catch"](3);
              return _context41.abrupt("return", res.status(500).json({
                msg: (_context41.t0 === null || _context41.t0 === void 0 ? void 0 : _context41.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context41.stop();
          }
        }, _callee41, null, [[3, 10]]);
      }));
      function handleDeleteCedicine(_x81, _x82) {
        return _handleDeleteCedicine.apply(this, arguments);
      }
      return handleDeleteCedicine;
    }() // [POST] /admin/manager-admin-health-facility
  }, {
    key: "handleCreateOrEditManagerAdminHealth",
    value: function () {
      var _handleCreateOrEditManagerAdminHealth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42(req, res) {
        var _req$body13, staffId, healthFacilityId, id, isAcctive, data;
        return _regeneratorRuntime().wrap(function _callee42$(_context42) {
          while (1) switch (_context42.prev = _context42.next) {
            case 0:
              _req$body13 = req.body, staffId = _req$body13.staffId, healthFacilityId = _req$body13.healthFacilityId, id = _req$body13.id, isAcctive = _req$body13.isAcctive;
              if (!(!id && (!staffId || !healthFacilityId))) {
                _context42.next = 3;
                break;
              }
              return _context42.abrupt("return", res.status(401).json({
                statusCode: 400,
                msg: "Thiếu tham số truyền vào."
              }));
            case 3:
              _context42.prev = 3;
              _context42.next = 6;
              return _services.healthFacilitiesServices.createAdminHealthFacility({
                staffId: staffId,
                healthFacilityId: healthFacilityId,
                id: id,
                isAcctive: isAcctive
              });
            case 6:
              data = _context42.sent;
              return _context42.abrupt("return", res.status(data.statusCode).json(data));
            case 10:
              _context42.prev = 10;
              _context42.t0 = _context42["catch"](3);
              return _context42.abrupt("return", res.status(500).json({
                msg: (_context42.t0 === null || _context42.t0 === void 0 ? void 0 : _context42.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context42.stop();
          }
        }, _callee42, null, [[3, 10]]);
      }));
      function handleCreateOrEditManagerAdminHealth(_x83, _x84) {
        return _handleCreateOrEditManagerAdminHealth.apply(this, arguments);
      }
      return handleCreateOrEditManagerAdminHealth;
    }()
  }, {
    key: "handleGetManagerAdminHealth",
    value: function () {
      var _handleGetManagerAdminHealth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee43(req, res) {
        var _req$query13, limit, offset, healthFacilityName, healthFacilityEmail, data;
        return _regeneratorRuntime().wrap(function _callee43$(_context43) {
          while (1) switch (_context43.prev = _context43.next) {
            case 0:
              _req$query13 = req.query, limit = _req$query13.limit, offset = _req$query13.offset, healthFacilityName = _req$query13.healthFacilityName, healthFacilityEmail = _req$query13.healthFacilityEmail;
              _context43.prev = 1;
              _context43.next = 4;
              return _services.healthFacilitiesServices.getAdminHealthFacility({
                limit: limit,
                offset: offset,
                healthFacilityName: healthFacilityName,
                healthFacilityEmail: healthFacilityEmail
              });
            case 4:
              data = _context43.sent;
              return _context43.abrupt("return", res.status(data.statusCode).json(data));
            case 8:
              _context43.prev = 8;
              _context43.t0 = _context43["catch"](1);
              return _context43.abrupt("return", res.status(500).json({
                msg: (_context43.t0 === null || _context43.t0 === void 0 ? void 0 : _context43.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 11:
            case "end":
              return _context43.stop();
          }
        }, _callee43, null, [[1, 8]]);
      }));
      function handleGetManagerAdminHealth(_x85, _x86) {
        return _handleGetManagerAdminHealth.apply(this, arguments);
      }
      return handleGetManagerAdminHealth;
    }()
  }, {
    key: "handleDeleteManagerAdminHealth",
    value: function () {
      var _handleDeleteManagerAdminHealth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee44(req, res) {
        var id, data;
        return _regeneratorRuntime().wrap(function _callee44$(_context44) {
          while (1) switch (_context44.prev = _context44.next) {
            case 0:
              id = req.body.id;
              if (id) {
                _context44.next = 3;
                break;
              }
              return _context44.abrupt("return", res.status(400).json({
                msg: "Vui lòng điền Id sắp xếp cần xóa!"
              }));
            case 3:
              _context44.prev = 3;
              _context44.next = 6;
              return _services.healthFacilitiesServices.deleteAdminHealthFacility({
                id: id
              });
            case 6:
              data = _context44.sent;
              return _context44.abrupt("return", res.status(data.statusCode).json(data));
            case 10:
              _context44.prev = 10;
              _context44.t0 = _context44["catch"](3);
              return _context44.abrupt("return", res.status(500).json({
                msg: (_context44.t0 === null || _context44.t0 === void 0 ? void 0 : _context44.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context44.stop();
          }
        }, _callee44, null, [[3, 10]]);
      }));
      function handleDeleteManagerAdminHealth(_x87, _x88) {
        return _handleDeleteManagerAdminHealth.apply(this, arguments);
      }
      return handleDeleteManagerAdminHealth;
    }() // Examination Services
  }, {
    key: "handleCreateOrEditExaminationServices",
    value: function () {
      var _handleCreateOrEditExaminationServices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee45(req, res) {
        var _req$body14, id, name, description, data;
        return _regeneratorRuntime().wrap(function _callee45$(_context45) {
          while (1) switch (_context45.prev = _context45.next) {
            case 0:
              _req$body14 = req.body, id = _req$body14.id, name = _req$body14.name, description = _req$body14.description;
              if (!(!id && (!name || !description))) {
                _context45.next = 3;
                break;
              }
              return _context45.abrupt("return", res.status(401).json({
                statusCode: 400,
                msg: "Thiếu tham số truyền vào."
              }));
            case 3:
              _context45.prev = 3;
              _context45.next = 6;
              return _services.adminServices.createOrUpdateExaminationService({
                id: id,
                name: name,
                description: description
              });
            case 6:
              data = _context45.sent;
              return _context45.abrupt("return", res.status(data.statusCode).json(data));
            case 10:
              _context45.prev = 10;
              _context45.t0 = _context45["catch"](3);
              return _context45.abrupt("return", res.status(500).json({
                msg: (_context45.t0 === null || _context45.t0 === void 0 ? void 0 : _context45.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context45.stop();
          }
        }, _callee45, null, [[3, 10]]);
      }));
      function handleCreateOrEditExaminationServices(_x89, _x90) {
        return _handleCreateOrEditExaminationServices.apply(this, arguments);
      }
      return handleCreateOrEditExaminationServices;
    }()
  }, {
    key: "handleGetExaminationServices",
    value: function () {
      var _handleGetExaminationServices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee46(req, res) {
        var _req$query14, limit, offset, name, data;
        return _regeneratorRuntime().wrap(function _callee46$(_context46) {
          while (1) switch (_context46.prev = _context46.next) {
            case 0:
              _req$query14 = req.query, limit = _req$query14.limit, offset = _req$query14.offset, name = _req$query14.name;
              _context46.prev = 1;
              _context46.next = 4;
              return _services.adminServices.getExaminationService({
                limit: limit,
                offset: offset,
                name: name
              });
            case 4:
              data = _context46.sent;
              return _context46.abrupt("return", res.status(data.statusCode).json(data));
            case 8:
              _context46.prev = 8;
              _context46.t0 = _context46["catch"](1);
              return _context46.abrupt("return", res.status(500).json({
                msg: (_context46.t0 === null || _context46.t0 === void 0 ? void 0 : _context46.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 11:
            case "end":
              return _context46.stop();
          }
        }, _callee46, null, [[1, 8]]);
      }));
      function handleGetExaminationServices(_x91, _x92) {
        return _handleGetExaminationServices.apply(this, arguments);
      }
      return handleGetExaminationServices;
    }()
  }, {
    key: "handleDeleteExaminationServices",
    value: function () {
      var _handleDeleteExaminationServices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee47(req, res) {
        var id, data;
        return _regeneratorRuntime().wrap(function _callee47$(_context47) {
          while (1) switch (_context47.prev = _context47.next) {
            case 0:
              id = req.body.id;
              if (id) {
                _context47.next = 3;
                break;
              }
              return _context47.abrupt("return", res.status(400).json({
                msg: "Vui lòng điền Id sắp xếp cần xóa!"
              }));
            case 3:
              _context47.prev = 3;
              _context47.next = 6;
              return _services.adminServices.deleteExaminationService({
                id: id
              });
            case 6:
              data = _context47.sent;
              return _context47.abrupt("return", res.status(data.statusCode).json(data));
            case 10:
              _context47.prev = 10;
              _context47.t0 = _context47["catch"](3);
              return _context47.abrupt("return", res.status(500).json({
                msg: (_context47.t0 === null || _context47.t0 === void 0 ? void 0 : _context47.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context47.stop();
          }
        }, _callee47, null, [[3, 10]]);
      }));
      function handleDeleteExaminationServices(_x93, _x94) {
        return _handleDeleteExaminationServices.apply(this, arguments);
      }
      return handleDeleteExaminationServices;
    }() // Hospital Service
  }, {
    key: "handleGetHospitalService",
    value: function () {
      var _handleGetHospitalService = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee48(req, res) {
        var _req$query15, limit, offset, healthFacilityName, healthFacilityEmail, data;
        return _regeneratorRuntime().wrap(function _callee48$(_context48) {
          while (1) switch (_context48.prev = _context48.next) {
            case 0:
              _req$query15 = req.query, limit = _req$query15.limit, offset = _req$query15.offset, healthFacilityName = _req$query15.healthFacilityName, healthFacilityEmail = _req$query15.healthFacilityEmail;
              _context48.prev = 1;
              _context48.next = 4;
              return _services.healthFacilitiesServices.getService({
                limit: limit,
                offset: offset,
                healthFacilityName: healthFacilityName,
                healthFacilityEmail: healthFacilityEmail
              });
            case 4:
              data = _context48.sent;
              return _context48.abrupt("return", res.status(data.statusCode).json(data));
            case 8:
              _context48.prev = 8;
              _context48.t0 = _context48["catch"](1);
              return _context48.abrupt("return", res.status(500).json({
                msg: (_context48.t0 === null || _context48.t0 === void 0 ? void 0 : _context48.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 11:
            case "end":
              return _context48.stop();
          }
        }, _callee48, null, [[1, 8]]);
      }));
      function handleGetHospitalService(_x95, _x96) {
        return _handleGetHospitalService.apply(this, arguments);
      }
      return handleGetHospitalService;
    }()
  }, {
    key: "handleTestEmail",
    value: function () {
      var _handleTestEmail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee49(req, res) {
        return _regeneratorRuntime().wrap(function _callee49$(_context49) {
          while (1) switch (_context49.prev = _context49.next) {
            case 0:
              _context49.next = 2;
              return (0, _untils.sendEmail)({
                receiveEmail: [
                // "kietb2014754@student.ctu.edu.vn",
                "catb2014730@student.ctu.edu.vn"]
              });
            case 2:
              return _context49.abrupt("return", res.status(200).json({
                msg: "Lỗi server. Thử lại sau!"
              }));
            case 3:
            case "end":
              return _context49.stop();
          }
        }, _callee49);
      }));
      function handleTestEmail(_x97, _x98) {
        return _handleTestEmail.apply(this, arguments);
      }
      return handleTestEmail;
    }() // Markdown
  }, {
    key: "handleHealthFacilityEditMarkDown",
    value: function () {
      var _handleHealthFacilityEditMarkDown = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee50(req, res) {
        var _req$body15, healthFacilityId, content, html, data;
        return _regeneratorRuntime().wrap(function _callee50$(_context50) {
          while (1) switch (_context50.prev = _context50.next) {
            case 0:
              _req$body15 = req.body, healthFacilityId = _req$body15.healthFacilityId, content = _req$body15.content, html = _req$body15.html;
              if (!(!healthFacilityId || !content || !html)) {
                _context50.next = 3;
                break;
              }
              return _context50.abrupt("return", res.status(401).json({
                statusCode: 400,
                msg: "Thiếu tham số truyền vào."
              }));
            case 3:
              _context50.prev = 3;
              _context50.next = 6;
              return _services.adminServices.healthFacilityEditMarkDown({
                healthFacilityId: healthFacilityId,
                content: content,
                html: html
              });
            case 6:
              data = _context50.sent;
              return _context50.abrupt("return", res.status(data.statusCode).json(data));
            case 10:
              _context50.prev = 10;
              _context50.t0 = _context50["catch"](3);
              return _context50.abrupt("return", res.status(500).json({
                msg: (_context50.t0 === null || _context50.t0 === void 0 ? void 0 : _context50.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context50.stop();
          }
        }, _callee50, null, [[3, 10]]);
      }));
      function handleHealthFacilityEditMarkDown(_x99, _x100) {
        return _handleHealthFacilityEditMarkDown.apply(this, arguments);
      }
      return handleHealthFacilityEditMarkDown;
    }()
  }, {
    key: "handleDoctorEditMarkDown",
    value: function () {
      var _handleDoctorEditMarkDown = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee51(req, res) {
        var _req$body16, doctorId, content, html, data;
        return _regeneratorRuntime().wrap(function _callee51$(_context51) {
          while (1) switch (_context51.prev = _context51.next) {
            case 0:
              _req$body16 = req.body, doctorId = _req$body16.doctorId, content = _req$body16.content, html = _req$body16.html;
              if (!(!doctorId || !content || !html)) {
                _context51.next = 3;
                break;
              }
              return _context51.abrupt("return", res.status(401).json({
                statusCode: 400,
                msg: "Thiếu tham số truyền vào."
              }));
            case 3:
              _context51.prev = 3;
              _context51.next = 6;
              return _services.adminServices.doctorEditMarkDown({
                doctorId: doctorId,
                content: content,
                html: html
              });
            case 6:
              data = _context51.sent;
              return _context51.abrupt("return", res.status(data.statusCode).json(data));
            case 10:
              _context51.prev = 10;
              _context51.t0 = _context51["catch"](3);
              return _context51.abrupt("return", res.status(500).json({
                msg: (_context51.t0 === null || _context51.t0 === void 0 ? void 0 : _context51.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context51.stop();
          }
        }, _callee51, null, [[3, 10]]);
      }));
      function handleDoctorEditMarkDown(_x101, _x102) {
        return _handleDoctorEditMarkDown.apply(this, arguments);
      }
      return handleDoctorEditMarkDown;
    }() // log
  }, {
    key: "handleTrigerLog",
    value: function () {
      var _handleTrigerLog = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee52(req, res) {
        var _req$body17, userId, _req$body17$isBanded, isBanded, data;
        return _regeneratorRuntime().wrap(function _callee52$(_context52) {
          while (1) switch (_context52.prev = _context52.next) {
            case 0:
              _req$body17 = req.body, userId = _req$body17.userId, _req$body17$isBanded = _req$body17.isBanded, isBanded = _req$body17$isBanded === void 0 ? false : _req$body17$isBanded;
              if (userId) {
                _context52.next = 3;
                break;
              }
              return _context52.abrupt("return", res.status(400).json({
                msg: "Thiếu tham số!"
              }));
            case 3:
              _context52.prev = 3;
              _context52.next = 6;
              return _services.adminServices.trigerLog({
                userId: userId,
                isBanded: isBanded
              });
            case 6:
              data = _context52.sent;
              return _context52.abrupt("return", res.status(data.statusCode).json(data));
            case 10:
              _context52.prev = 10;
              _context52.t0 = _context52["catch"](3);
              return _context52.abrupt("return", res.status(500).json({
                msg: (_context52.t0 === null || _context52.t0 === void 0 ? void 0 : _context52.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context52.stop();
          }
        }, _callee52, null, [[3, 10]]);
      }));
      function handleTrigerLog(_x103, _x104) {
        return _handleTrigerLog.apply(this, arguments);
      }
      return handleTrigerLog;
    }() // test
  }, {
    key: "adminTestApi",
    value: function () {
      var _adminTestApi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee53(req, res) {
        var data;
        return _regeneratorRuntime().wrap(function _callee53$(_context53) {
          while (1) switch (_context53.prev = _context53.next) {
            case 0:
              _context53.prev = 0;
              _context53.next = 3;
              return _services.workServices.testapi();
            case 3:
              data = _context53.sent;
              return _context53.abrupt("return", res.status(data.statusCode).json(data));
            case 7:
              _context53.prev = 7;
              _context53.t0 = _context53["catch"](0);
              return _context53.abrupt("return", res.status(500).json({
                msg: (_context53.t0 === null || _context53.t0 === void 0 ? void 0 : _context53.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 10:
            case "end":
              return _context53.stop();
          }
        }, _callee53, null, [[0, 7]]);
      }));
      function adminTestApi(_x105, _x106) {
        return _adminTestApi.apply(this, arguments);
      }
      return adminTestApi;
    }() // chart
    // [GET] /api/v1/admin/chart
  }, {
    key: "handleGetChart",
    value: function () {
      var _handleGetChart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee54(req, res) {
        var _req$query16, role, page, index, pagrams, data;
        return _regeneratorRuntime().wrap(function _callee54$(_context54) {
          while (1) switch (_context54.prev = _context54.next) {
            case 0:
              _req$query16 = req.query, role = _req$query16.role, page = _req$query16.page, index = _req$query16.index, pagrams = _objectWithoutProperties(_req$query16, _excluded);
              _context54.prev = 1;
              _context54.next = 4;
              return _services.adminServices.getIndex({
                role: role,
                page: page,
                index: index,
                pagrams: pagrams
              });
            case 4:
              data = _context54.sent;
              if (!(data.statusCode === 0)) {
                _context54.next = 7;
                break;
              }
              return _context54.abrupt("return", res.status(200).json(data));
            case 7:
              return _context54.abrupt("return", res.status(400).json(data));
            case 10:
              _context54.prev = 10;
              _context54.t0 = _context54["catch"](1);
              return _context54.abrupt("return", res.status(500).json({
                msg: (_context54.t0 === null || _context54.t0 === void 0 ? void 0 : _context54.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context54.stop();
          }
        }, _callee54, null, [[1, 10]]);
      }));
      function handleGetChart(_x107, _x108) {
        return _handleGetChart.apply(this, arguments);
      }
      return handleGetChart;
    }() // [GET] /api/v1/admin/chat/room
  }, {
    key: "handleGetRoom",
    value: function () {
      var _handleGetRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee55(req, res) {
        var _req$query17, staffId, userId, data;
        return _regeneratorRuntime().wrap(function _callee55$(_context55) {
          while (1) switch (_context55.prev = _context55.next) {
            case 0:
              _req$query17 = req.query, staffId = _req$query17.staffId, userId = _req$query17.userId;
              _context55.prev = 1;
              _context55.next = 4;
              return _chatServices["default"].getRoom({
                staffId: staffId,
                userId: userId
              });
            case 4:
              data = _context55.sent;
              if (!(data.statusCode === 0)) {
                _context55.next = 7;
                break;
              }
              return _context55.abrupt("return", res.status(200).json(data));
            case 7:
              return _context55.abrupt("return", res.status(400).json(data));
            case 10:
              _context55.prev = 10;
              _context55.t0 = _context55["catch"](1);
              return _context55.abrupt("return", res.status(500).json({
                msg: (_context55.t0 === null || _context55.t0 === void 0 ? void 0 : _context55.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context55.stop();
          }
        }, _callee55, null, [[1, 10]]);
      }));
      function handleGetRoom(_x109, _x110) {
        return _handleGetRoom.apply(this, arguments);
      }
      return handleGetRoom;
    }()
  }, {
    key: "handleGetRoomMessage",
    value: function () {
      var _handleGetRoomMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee56(req, res) {
        var chatRoomId, data;
        return _regeneratorRuntime().wrap(function _callee56$(_context56) {
          while (1) switch (_context56.prev = _context56.next) {
            case 0:
              chatRoomId = req.query.chatRoomId;
              _context56.prev = 1;
              _context56.next = 4;
              return _chatServices["default"].getRoomMessage({
                chatRoomId: chatRoomId
              });
            case 4:
              data = _context56.sent;
              if (!(data.statusCode === 0)) {
                _context56.next = 7;
                break;
              }
              return _context56.abrupt("return", res.status(200).json(data));
            case 7:
              return _context56.abrupt("return", res.status(400).json(data));
            case 10:
              _context56.prev = 10;
              _context56.t0 = _context56["catch"](1);
              return _context56.abrupt("return", res.status(500).json({
                msg: (_context56.t0 === null || _context56.t0 === void 0 ? void 0 : _context56.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context56.stop();
          }
        }, _callee56, null, [[1, 10]]);
      }));
      function handleGetRoomMessage(_x111, _x112) {
        return _handleGetRoomMessage.apply(this, arguments);
      }
      return handleGetRoomMessage;
    }()
  }]);
  return AdminController;
}();
var _default = new AdminController();
exports["default"] = _default;