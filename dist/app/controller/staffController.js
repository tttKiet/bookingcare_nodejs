"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _services = require("../../services");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var StaffController = /*#__PURE__*/function () {
  function StaffController() {
    _classCallCheck(this, StaffController);
  }
  _createClass(StaffController, [{
    key: "handleCreateOrUpdateHealthExamSchedule",
    value: // [Create or update] /health-exam-schedule
    function () {
      var _handleCreateOrUpdateHealthExamSchedule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
        var _req$body, date, maxNumber, timeCode, workingId, id, timeCodeArray, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, date = _req$body.date, maxNumber = _req$body.maxNumber, timeCode = _req$body.timeCode, workingId = _req$body.workingId, id = _req$body.id;
              if (!(!id && (!date || !maxNumber || !timeCode || !workingId))) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào."
              }));
            case 3:
              timeCodeArray = [];
              if (!Array.isArray(timeCode)) timeCodeArray = [timeCode];else {
                timeCodeArray = _toConsumableArray(timeCode);
              }
              _context.prev = 5;
              _context.next = 8;
              return _services.workServices.createOrUpdateHealthExamSchedule({
                date: date,
                maxNumber: maxNumber,
                timeCode: timeCodeArray,
                workingId: workingId,
                id: id
              });
            case 8:
              data = _context.sent;
              if (!(data.statusCode === 0)) {
                _context.next = 11;
                break;
              }
              return _context.abrupt("return", res.status(200).json(data));
            case 11:
              return _context.abrupt("return", res.status(400).json(data));
            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](5);
              return _context.abrupt("return", res.status(500).json({
                msg: (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[5, 14]]);
      }));
      function handleCreateOrUpdateHealthExamSchedule(_x, _x2) {
        return _handleCreateOrUpdateHealthExamSchedule.apply(this, arguments);
      }
      return handleCreateOrUpdateHealthExamSchedule;
    }() // [Delete] /health-exam-schedule
  }, {
    key: "handleDeleteHealthExamSchedule",
    value: function () {
      var _handleDeleteHealthExamSchedule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
        var id, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              id = req.body.id;
              _context2.prev = 1;
              _context2.next = 4;
              return _services.workServices.deleteHealthExamSchedule(id);
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
      function handleDeleteHealthExamSchedule(_x3, _x4) {
        return _handleDeleteHealthExamSchedule.apply(this, arguments);
      }
      return handleDeleteHealthExamSchedule;
    }() // [GET] /health-exam-schedule
  }, {
    key: "handleGetHealthExamSchedule",
    value: function () {
      var _handleGetHealthExamSchedule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
        var _req$query, limit, offset, staffId, date, workingId, type, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _req$query = req.query, limit = _req$query.limit, offset = _req$query.offset, staffId = _req$query.staffId, date = _req$query.date, workingId = _req$query.workingId, type = _req$query.type;
              _context3.prev = 1;
              _context3.next = 4;
              return _services.workServices.getHealthExamSchedule({
                limit: limit,
                offset: offset,
                staffId: staffId,
                date: date,
                workingId: workingId,
                raw: true,
                type: type
              });
            case 4:
              data = _context3.sent;
              if (!(data.statusCode === 0)) {
                _context3.next = 7;
                break;
              }
              return _context3.abrupt("return", res.status(200).json(data));
            case 7:
              return _context3.abrupt("return", res.status(400).json(data));
            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](1);
              return _context3.abrupt("return", res.status(500).json({
                msg: (_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 10]]);
      }));
      function handleGetHealthExamSchedule(_x5, _x6) {
        return _handleGetHealthExamSchedule.apply(this, arguments);
      }
      return handleGetHealthExamSchedule;
    }() // [GET] /health-exam-schedule
  }, {
    key: "getHealthExamScheduleForDoctor",
    value: function () {
      var _getHealthExamScheduleForDoctor = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
        var _req$query2, limit, offset, staffId, date, workingId, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _req$query2 = req.query, limit = _req$query2.limit, offset = _req$query2.offset, staffId = _req$query2.staffId, date = _req$query2.date, workingId = _req$query2.workingId;
              _context4.prev = 1;
              _context4.next = 4;
              return _services.workServices.getHealthExamScheduleForDoctor({
                limit: limit,
                offset: offset,
                staffId: staffId,
                date: date,
                workingId: workingId,
                raw: true
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
      function getHealthExamScheduleForDoctor(_x7, _x8) {
        return _getHealthExamScheduleForDoctor.apply(this, arguments);
      }
      return getHealthExamScheduleForDoctor;
    }() // [GET] /health-exam-schedule/all
  }, {
    key: "handleGetHealthExamScheduleAll",
    value: function () {
      var _handleGetHealthExamScheduleAll = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
        var _req$query3, limit, offset, staffId, date, workingId, healthFacilityName, staffName, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _req$query3 = req.query, limit = _req$query3.limit, offset = _req$query3.offset, staffId = _req$query3.staffId, date = _req$query3.date, workingId = _req$query3.workingId, healthFacilityName = _req$query3.healthFacilityName, staffName = _req$query3.staffName;
              _context5.prev = 1;
              _context5.next = 4;
              return _services.workServices.getHealthExamScheduleDoctorAndTimeCode({
                limit: limit,
                offset: offset,
                staffId: staffId,
                date: date,
                workingId: workingId,
                healthFacilityName: Array.isArray(healthFacilityName) ? healthFacilityName === null || healthFacilityName === void 0 ? void 0 : healthFacilityName[0] : healthFacilityName,
                staffName: Array.isArray(staffName) ? staffName === null || staffName === void 0 ? void 0 : staffName[0] : staffName
              });
            case 4:
              data = _context5.sent;
              if (!(data.statusCode === 0)) {
                _context5.next = 7;
                break;
              }
              return _context5.abrupt("return", res.status(200).json(data));
            case 7:
              return _context5.abrupt("return", res.status(400).json(data));
            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](1);
              return _context5.abrupt("return", res.status(500).json({
                msg: (_context5.t0 === null || _context5.t0 === void 0 ? void 0 : _context5.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[1, 10]]);
      }));
      function handleGetHealthExamScheduleAll(_x9, _x10) {
        return _handleGetHealthExamScheduleAll.apply(this, arguments);
      }
      return handleGetHealthExamScheduleAll;
    }() // [GET] /booking
  }, {
    key: "handleGetBooking",
    value: function () {
      var _handleGetBooking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
        var _user$role;
        var user, staffIdLogin, _req$query4, offset, limit, date, timeCodeId, checkUpCodeId, patientProfileName, healthExamScheduleId, bookingId, staffId, userId, data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              user = req === null || req === void 0 ? void 0 : req.user;
              if (!((user === null || user === void 0 || (_user$role = user.role) === null || _user$role === void 0 ? void 0 : _user$role.keyType) !== "admin")) {
                _context6.next = 5;
                break;
              }
              staffIdLogin = user === null || user === void 0 ? void 0 : user.id;
              if (staffIdLogin) {
                _context6.next = 5;
                break;
              }
              return _context6.abrupt("return", res.status(401).json({
                statusCode: 401,
                msg: "Bạn chưa đăng nhập"
              }));
            case 5:
              _req$query4 = req.query, offset = _req$query4.offset, limit = _req$query4.limit, date = _req$query4.date, timeCodeId = _req$query4.timeCodeId, checkUpCodeId = _req$query4.checkUpCodeId, patientProfileName = _req$query4.patientProfileName, healthExamScheduleId = _req$query4.healthExamScheduleId, bookingId = _req$query4.bookingId, staffId = _req$query4.staffId, userId = _req$query4.userId;
              _context6.prev = 6;
              _context6.next = 9;
              return _services.staffServices.getBooking({
                offset: offset,
                limit: limit,
                staffId: staffId,
                userId: userId,
                date: date,
                timeCodeId: timeCodeId,
                patientProfileName: patientProfileName,
                healthExamScheduleId: healthExamScheduleId,
                checkUpCodeId: checkUpCodeId,
                bookingId: bookingId,
                staffIdLogin: staffIdLogin
              });
            case 9:
              data = _context6.sent;
              if (!(data.statusCode === 0)) {
                _context6.next = 12;
                break;
              }
              return _context6.abrupt("return", res.status(200).json(data));
            case 12:
              return _context6.abrupt("return", res.status(400).json(data));
            case 15:
              _context6.prev = 15;
              _context6.t0 = _context6["catch"](6);
              return _context6.abrupt("return", res.status(500).json({
                msg: (_context6.t0 === null || _context6.t0 === void 0 ? void 0 : _context6.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 18:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[6, 15]]);
      }));
      function handleGetBooking(_x11, _x12) {
        return _handleGetBooking.apply(this, arguments);
      }
      return handleGetBooking;
    }() // [GET] /working
  }, {
    key: "handleGetDoctorWorking",
    value: function () {
      var _handleGetDoctorWorking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
        var _req$query5, offset, limit, doctorName, doctorEmail, workingId, healthFacilityId, doctorId, current, data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _req$query5 = req.query, offset = _req$query5.offset, limit = _req$query5.limit, doctorName = _req$query5.doctorName, doctorEmail = _req$query5.doctorEmail, workingId = _req$query5.workingId, healthFacilityId = _req$query5.healthFacilityId, doctorId = _req$query5.doctorId, current = _req$query5.current;
              _context7.prev = 1;
              _context7.next = 4;
              return _services.staffServices.getDoctorWorking({
                offset: offset,
                limit: limit,
                doctorName: doctorName,
                doctorEmail: doctorEmail,
                workingId: workingId,
                healthFacilityId: healthFacilityId,
                doctorId: doctorId,
                current: current
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
              return _context7.abrupt("return", res.status(500).json({
                msg: (_context7.t0 === null || _context7.t0 === void 0 ? void 0 : _context7.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[1, 10]]);
      }));
      function handleGetDoctorWorking(_x13, _x14) {
        return _handleGetDoctorWorking.apply(this, arguments);
      }
      return handleGetDoctorWorking;
    }() // [GET] /check-up/health-record
  }, {
    key: "handleGetRecordCheckUp",
    value: function () {
      var _handleGetRecordCheckUp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
        var _req$query6, date, staffId, id, limit, offset, bookingId, data;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _req$query6 = req.query, date = _req$query6.date, staffId = _req$query6.staffId, id = _req$query6.id, limit = _req$query6.limit, offset = _req$query6.offset, bookingId = _req$query6.booking;
              _context8.prev = 1;
              _context8.next = 4;
              return _services.staffServices.getRecordCheckUp({
                date: date,
                staffId: staffId,
                id: id,
                limit: limit,
                offset: offset,
                bookingId: bookingId
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
              return _context8.abrupt("return", res.status(500).json({
                msg: (_context8.t0 === null || _context8.t0 === void 0 ? void 0 : _context8.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[1, 10]]);
      }));
      function handleGetRecordCheckUp(_x15, _x16) {
        return _handleGetRecordCheckUp.apply(this, arguments);
      }
      return handleGetRecordCheckUp;
    }() // [PATCH] /check-up/health-record
  }, {
    key: "handleCreateHealthRecord",
    value: function () {
      var _handleCreateHealthRecord = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
        var _req$body2, bookingId, patientId, data;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _req$body2 = req.body, bookingId = _req$body2.bookingId, patientId = _req$body2.patientId;
              if (!(!bookingId || !patientId)) {
                _context9.next = 3;
                break;
              }
              return _context9.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào."
              }));
            case 3:
              _context9.prev = 3;
              _context9.next = 6;
              return _services.staffServices.createHealthRecord({
                bookingId: bookingId,
                patientId: patientId
              });
            case 6:
              data = _context9.sent;
              if (!(data.statusCode === 0)) {
                _context9.next = 9;
                break;
              }
              return _context9.abrupt("return", res.status(200).json(data));
            case 9:
              return _context9.abrupt("return", res.status(400).json(data));
            case 12:
              _context9.prev = 12;
              _context9.t0 = _context9["catch"](3);
              return _context9.abrupt("return", res.status(500).json({
                msg: (_context9.t0 === null || _context9.t0 === void 0 ? void 0 : _context9.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 15:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[3, 12]]);
      }));
      function handleCreateHealthRecord(_x17, _x18) {
        return _handleCreateHealthRecord.apply(this, arguments);
      }
      return handleCreateHealthRecord;
    }() // [PATCH] /check-up/health-record
  }, {
    key: "handleEditHealthRecord",
    value: function () {
      var _handleEditHealthRecord = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
        var user, _req$body3, statusId, id, diagnosis, note, data;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              user = req === null || req === void 0 ? void 0 : req.user;
              _req$body3 = req.body, statusId = _req$body3.statusId, id = _req$body3.id, diagnosis = _req$body3.diagnosis, note = _req$body3.note;
              if (!(!statusId && !id)) {
                _context10.next = 4;
                break;
              }
              return _context10.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào [statusId]."
              }));
            case 4:
              _context10.prev = 4;
              _context10.next = 7;
              return _services.staffServices.editHealthRecord({
                statusId: statusId,
                healthRecordId: id,
                diagnosis: diagnosis,
                note: note
              });
            case 7:
              data = _context10.sent;
              if (!(data.statusCode === 0)) {
                _context10.next = 10;
                break;
              }
              return _context10.abrupt("return", res.status(200).json(data));
            case 10:
              return _context10.abrupt("return", res.status(400).json(data));
            case 13:
              _context10.prev = 13;
              _context10.t0 = _context10["catch"](4);
              return _context10.abrupt("return", res.status(500).json({
                msg: (_context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 16:
            case "end":
              return _context10.stop();
          }
        }, _callee10, null, [[4, 13]]);
      }));
      function handleEditHealthRecord(_x19, _x20) {
        return _handleEditHealthRecord.apply(this, arguments);
      }
      return handleEditHealthRecord;
    }()
  }, {
    key: "handleEditStatusBooking",
    value: function () {
      var _handleEditStatusBooking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
        var _userLogin$role;
        var _req$body4, statusId, bookingId, userLogin, userId, data;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _req$body4 = req.body, statusId = _req$body4.statusId, bookingId = _req$body4.bookingId;
              userLogin = req === null || req === void 0 ? void 0 : req.user;
              userId = "";
              if ((userLogin === null || userLogin === void 0 || (_userLogin$role = userLogin.role) === null || _userLogin$role === void 0 ? void 0 : _userLogin$role.keyType) === "user") {
                userId = userLogin === null || userLogin === void 0 ? void 0 : userLogin.id;
              }
              if (!(!statusId || !bookingId)) {
                _context11.next = 6;
                break;
              }
              return _context11.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào."
              }));
            case 6:
              _context11.prev = 6;
              _context11.next = 9;
              return _services.staffServices.editStatusBooking({
                statusId: statusId,
                bookingId: bookingId,
                userId: userId
              });
            case 9:
              data = _context11.sent;
              if (!(data.statusCode === 0)) {
                _context11.next = 12;
                break;
              }
              return _context11.abrupt("return", res.status(200).json(data));
            case 12:
              return _context11.abrupt("return", res.status(400).json(data));
            case 15:
              _context11.prev = 15;
              _context11.t0 = _context11["catch"](6);
              return _context11.abrupt("return", res.status(500).json({
                msg: (_context11.t0 === null || _context11.t0 === void 0 ? void 0 : _context11.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 18:
            case "end":
              return _context11.stop();
          }
        }, _callee11, null, [[6, 15]]);
      }));
      function handleEditStatusBooking(_x21, _x22) {
        return _handleEditStatusBooking.apply(this, arguments);
      }
      return handleEditStatusBooking;
    }() // [POST] /check-up/health-record/done
  }, {
    key: "handleEditHealthRecordAndDone",
    value: function () {
      var _handleEditHealthRecordAndDone = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
        var _req$body5, id, diagnosis, note, emailDestination, sendPrescriptionDetails, sendhHospitalService, files, data;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _req$body5 = req.body, id = _req$body5.id, diagnosis = _req$body5.diagnosis, note = _req$body5.note, emailDestination = _req$body5.emailDestination, sendPrescriptionDetails = _req$body5.sendPrescriptionDetails, sendhHospitalService = _req$body5.sendhHospitalService;
              files = (req === null || req === void 0 ? void 0 : req.files) || [];
              if (id) {
                _context12.next = 4;
                break;
              }
              return _context12.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào [healthRecordid]."
              }));
            case 4:
              _context12.prev = 4;
              _context12.next = 7;
              return _services.staffServices.editHealthRecordDone({
                id: id,
                diagnosis: diagnosis,
                note: note,
                emailDestination: emailDestination,
                sendPrescriptionDetails: sendPrescriptionDetails,
                sendhHospitalService: sendhHospitalService,
                files: files
              });
            case 7:
              data = _context12.sent;
              if (!(data.statusCode === 0)) {
                _context12.next = 10;
                break;
              }
              return _context12.abrupt("return", res.status(200).json(data));
            case 10:
              return _context12.abrupt("return", res.status(data.statusCode).json(data));
            case 13:
              _context12.prev = 13;
              _context12.t0 = _context12["catch"](4);
              return _context12.abrupt("return", res.status(500).json({
                msg: (_context12.t0 === null || _context12.t0 === void 0 ? void 0 : _context12.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 16:
            case "end":
              return _context12.stop();
          }
        }, _callee12, null, [[4, 13]]);
      }));
      function handleEditHealthRecordAndDone(_x23, _x24) {
        return _handleEditHealthRecordAndDone.apply(this, arguments);
      }
      return handleEditHealthRecordAndDone;
    }() // [GET] /check-up/health-record
  }, {
    key: "handleChartRevenue",
    value: function () {
      var _handleChartRevenue = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
        var _req$query7, year, staffId, data;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _req$query7 = req.query, year = _req$query7.year, staffId = _req$query7.staffId;
              if (!(!year || !staffId)) {
                _context13.next = 3;
                break;
              }
              return _context13.abrupt("return", res.status(400).json({
                msg: "Thiếu tham số truyền vào! Yêu cầu [staffId, year]"
              }));
            case 3:
              _context13.prev = 3;
              _context13.next = 6;
              return _services.staffServices.getChartRevenue({
                year: year,
                staffId: staffId
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
              return _context13.abrupt("return", res.status(500).json({
                msg: (_context13.t0 === null || _context13.t0 === void 0 ? void 0 : _context13.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 15:
            case "end":
              return _context13.stop();
          }
        }, _callee13, null, [[3, 12]]);
      }));
      function handleChartRevenue(_x25, _x26) {
        return _handleChartRevenue.apply(this, arguments);
      }
      return handleChartRevenue;
    }() // [POST] /api/v1/patient
  }, {
    key: "handleCreateOrUpdatePatient",
    value: function () {
      var _handleCreateOrUpdatePatient = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
        var user, staffId, _req$body6, id, fullName, phone, profession, email, birthDay, gender, cccd, healthFacilityId, nation, addressCode, copyFromPatientProfileId, data;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              user = req === null || req === void 0 ? void 0 : req.user;
              staffId = user === null || user === void 0 ? void 0 : user.id;
              _req$body6 = req.body, id = _req$body6.id, fullName = _req$body6.fullName, phone = _req$body6.phone, profession = _req$body6.profession, email = _req$body6.email, birthDay = _req$body6.birthDay, gender = _req$body6.gender, cccd = _req$body6.cccd, healthFacilityId = _req$body6.healthFacilityId, nation = _req$body6.nation, addressCode = _req$body6.addressCode, copyFromPatientProfileId = _req$body6.copyFromPatientProfileId;
              if (!(!id && (!fullName || !phone || !profession || !email || !birthDay || !gender || !cccd || !nation || !addressCode || !staffId))) {
                _context14.next = 5;
                break;
              }
              return _context14.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào."
              }));
            case 5:
              _context14.prev = 5;
              _context14.next = 8;
              return _services.staffServices.createOrUpdatePatient({
                id: id,
                fullName: fullName,
                phone: phone,
                profession: profession,
                email: email,
                healthFacilityId: healthFacilityId,
                birthDay: birthDay,
                gender: gender,
                cccd: cccd,
                nation: nation,
                addressCode: addressCode,
                staffId: staffId
              }, {
                copyFromPatientProfileId: copyFromPatientProfileId
              });
            case 8:
              data = _context14.sent;
              if (!(data.statusCode === 0)) {
                _context14.next = 11;
                break;
              }
              return _context14.abrupt("return", res.status(200).json(data));
            case 11:
              return _context14.abrupt("return", res.status(400).json(data));
            case 14:
              _context14.prev = 14;
              _context14.t0 = _context14["catch"](5);
              console.log(_context14.t0);
              return _context14.abrupt("return", res.status(500).json({
                msg: (_context14.t0 === null || _context14.t0 === void 0 ? void 0 : _context14.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 18:
            case "end":
              return _context14.stop();
          }
        }, _callee14, null, [[5, 14]]);
      }));
      function handleCreateOrUpdatePatient(_x27, _x28) {
        return _handleCreateOrUpdatePatient.apply(this, arguments);
      }
      return handleCreateOrUpdatePatient;
    }() // [GET] /patient
  }, {
    key: "handleGetPatient",
    value: function () {
      var _handleGetPatient = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
        var _user$role2;
        var _req$query8, limit, offset, patientId, name, healthFacilityId, cccd, user, staffId, data;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              _req$query8 = req.query, limit = _req$query8.limit, offset = _req$query8.offset, patientId = _req$query8.patientId, name = _req$query8.name, healthFacilityId = _req$query8.healthFacilityId, cccd = _req$query8.cccd;
              user = req === null || req === void 0 ? void 0 : req.user;
              if ((user === null || user === void 0 || (_user$role2 = user.role) === null || _user$role2 === void 0 ? void 0 : _user$role2.keyType) != "admin") {
                staffId = user === null || user === void 0 ? void 0 : user.id;
              }
              _context15.prev = 3;
              _context15.next = 6;
              return _services.staffServices.getPatient({
                limit: limit,
                offset: offset,
                healthFacilityId: healthFacilityId,
                patientId: patientId,
                name: name,
                cccd: cccd,
                staffId: staffId
              });
            case 6:
              data = _context15.sent;
              if (!(data.statusCode === 0)) {
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
      function handleGetPatient(_x29, _x30) {
        return _handleGetPatient.apply(this, arguments);
      }
      return handleGetPatient;
    }() // [DELETE] /patient
  }, {
    key: "handleDeletePatient",
    value: function () {
      var _handleDeletePatient = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
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
                statusCode: 1,
                msg: "Id không được truyền."
              }));
            case 3:
              _context16.prev = 3;
              _context16.next = 6;
              return _services.staffServices.deletePatient({
                id: id
              });
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
              console.log(_context16.t0);
              return _context16.abrupt("return", res.status(500).json({
                msg: (_context16.t0 === null || _context16.t0 === void 0 ? void 0 : _context16.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 16:
            case "end":
              return _context16.stop();
          }
        }, _callee16, null, [[3, 12]]);
      }));
      function handleDeletePatient(_x31, _x32) {
        return _handleDeletePatient.apply(this, arguments);
      }
      return handleDeletePatient;
    }() // [POST] /api/v1/doctor/service-details
  }, {
    key: "handleCreateEditServiceDetails",
    value: function () {
      var _handleCreateEditServiceDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
        var _req$body7, id, descriptionResult, healthRecordId, hospitalServiceId, data;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              _req$body7 = req.body, id = _req$body7.id, descriptionResult = _req$body7.descriptionResult, healthRecordId = _req$body7.healthRecordId, hospitalServiceId = _req$body7.hospitalServiceId;
              if (!(!id && !healthRecordId && !hospitalServiceId)) {
                _context17.next = 3;
                break;
              }
              return _context17.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào."
              }));
            case 3:
              _context17.prev = 3;
              _context17.next = 6;
              return _services.staffServices.createOrUpdateServiceDetails({
                id: id,
                descriptionResult: descriptionResult,
                healthRecordId: healthRecordId,
                hospitalServiceId: hospitalServiceId
              });
            case 6:
              data = _context17.sent;
              if (!(data.statusCode === 200 || data.statusCode === 0)) {
                _context17.next = 9;
                break;
              }
              return _context17.abrupt("return", res.status(200).json(data));
            case 9:
              return _context17.abrupt("return", res.status(400).json(data));
            case 12:
              _context17.prev = 12;
              _context17.t0 = _context17["catch"](3);
              console.log(_context17.t0);
              return _context17.abrupt("return", res.status(500).json({
                msg: (_context17.t0 === null || _context17.t0 === void 0 ? void 0 : _context17.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 16:
            case "end":
              return _context17.stop();
          }
        }, _callee17, null, [[3, 12]]);
      }));
      function handleCreateEditServiceDetails(_x33, _x34) {
        return _handleCreateEditServiceDetails.apply(this, arguments);
      }
      return handleCreateEditServiceDetails;
    }() // [GET] /api/v1/doctor/service-details
  }, {
    key: "handleGetServiceDetails",
    value: function () {
      var _handleGetServiceDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
        var _req$query9, id, healthRecordId, hospitalServiceId, data;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              _req$query9 = req.query, id = _req$query9.id, healthRecordId = _req$query9.healthRecordId, hospitalServiceId = _req$query9.hospitalServiceId;
              _context18.prev = 1;
              _context18.next = 4;
              return _services.staffServices.getServiceDetails({
                id: id,
                healthRecordId: healthRecordId,
                hospitalServiceId: hospitalServiceId
              });
            case 4:
              data = _context18.sent;
              if (!(data.statusCode === 200 || data.statusCode === 0)) {
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
      function handleGetServiceDetails(_x35, _x36) {
        return _handleGetServiceDetails.apply(this, arguments);
      }
      return handleGetServiceDetails;
    }() // [DELETE] /admin/health-facilities/type
  }, {
    key: "handleDeleteServiceDetails",
    value: function () {
      var _handleDeleteServiceDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
        var id, data;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              id = req.body.id;
              if (id) {
                _context19.next = 3;
                break;
              }
              return _context19.abrupt("return", res.status(404).json({
                statusCode: 1,
                msg: "Id không được truyền."
              }));
            case 3:
              _context19.prev = 3;
              _context19.next = 6;
              return _services.staffServices.deleteServiceDetails({
                id: id
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
              console.log(_context19.t0);
              return _context19.abrupt("return", res.status(500).json({
                msg: (_context19.t0 === null || _context19.t0 === void 0 ? void 0 : _context19.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 16:
            case "end":
              return _context19.stop();
          }
        }, _callee19, null, [[3, 12]]);
      }));
      function handleDeleteServiceDetails(_x37, _x38) {
        return _handleDeleteServiceDetails.apply(this, arguments);
      }
      return handleDeleteServiceDetails;
    }() // [POST] /api/v1/doctor/prescription-details
  }, {
    key: "handleCreateEditPrescriptionDetails",
    value: function () {
      var _handleCreateEditPrescriptionDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
        var _req$body8, id, cedicineId, healthRecordId, quantity, usage, unit, morning, noon, afterNoon, evening, data;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              _req$body8 = req.body, id = _req$body8.id, cedicineId = _req$body8.cedicineId, healthRecordId = _req$body8.healthRecordId, quantity = _req$body8.quantity, usage = _req$body8.usage, unit = _req$body8.unit, morning = _req$body8.morning, noon = _req$body8.noon, afterNoon = _req$body8.afterNoon, evening = _req$body8.evening;
              if (!(!id && (!cedicineId || !healthRecordId || !quantity))) {
                _context20.next = 3;
                break;
              }
              return _context20.abrupt("return", res.status(401).json({
                statusCode: 1,
                msg: "Thiếu tham số truyền vào."
              }));
            case 3:
              _context20.prev = 3;
              _context20.next = 6;
              return _services.staffServices.createOrUpdatePrescriptionDetails({
                id: id,
                cedicineId: cedicineId,
                healthRecordId: healthRecordId,
                quantity: quantity,
                usage: usage,
                unit: unit,
                morning: morning,
                noon: noon,
                afterNoon: afterNoon,
                evening: evening
              });
            case 6:
              data = _context20.sent;
              if (!(data.statusCode === 200 || data.statusCode === 201 || data.statusCode === 0)) {
                _context20.next = 9;
                break;
              }
              return _context20.abrupt("return", res.status(200).json(data));
            case 9:
              return _context20.abrupt("return", res.status(400).json(data));
            case 12:
              _context20.prev = 12;
              _context20.t0 = _context20["catch"](3);
              console.log(_context20.t0);
              return _context20.abrupt("return", res.status(500).json({
                msg: (_context20.t0 === null || _context20.t0 === void 0 ? void 0 : _context20.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 16:
            case "end":
              return _context20.stop();
          }
        }, _callee20, null, [[3, 12]]);
      }));
      function handleCreateEditPrescriptionDetails(_x39, _x40) {
        return _handleCreateEditPrescriptionDetails.apply(this, arguments);
      }
      return handleCreateEditPrescriptionDetails;
    }() // [GET] /api/v1/doctor/prescription-details
  }, {
    key: "handleGetPrescriptionDetails",
    value: function () {
      var _handleGetPrescriptionDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
        var _req$query10, id, healthRecordId, cedicineId, data;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              _req$query10 = req.query, id = _req$query10.id, healthRecordId = _req$query10.healthRecordId, cedicineId = _req$query10.cedicineId;
              _context21.prev = 1;
              _context21.next = 4;
              return _services.staffServices.getPrescriptionDetails({
                id: id,
                healthRecordId: healthRecordId,
                cedicineId: cedicineId
              });
            case 4:
              data = _context21.sent;
              if (!(data.statusCode === 200 || data.statusCode === 0)) {
                _context21.next = 7;
                break;
              }
              return _context21.abrupt("return", res.status(200).json(data));
            case 7:
              return _context21.abrupt("return", res.status(400).json(data));
            case 10:
              _context21.prev = 10;
              _context21.t0 = _context21["catch"](1);
              return _context21.abrupt("return", res.status(500).json({
                msg: (_context21.t0 === null || _context21.t0 === void 0 ? void 0 : _context21.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 13:
            case "end":
              return _context21.stop();
          }
        }, _callee21, null, [[1, 10]]);
      }));
      function handleGetPrescriptionDetails(_x41, _x42) {
        return _handleGetPrescriptionDetails.apply(this, arguments);
      }
      return handleGetPrescriptionDetails;
    }() // [DELETE] /api/v1/doctor/prescription-details
  }, {
    key: "handleDeletePrescriptionDetails",
    value: function () {
      var _handleDeletePrescriptionDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
        var id, data;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              id = req.body.id;
              if (id) {
                _context22.next = 3;
                break;
              }
              return _context22.abrupt("return", res.status(404).json({
                statusCode: 1,
                msg: "Id không được truyền."
              }));
            case 3:
              _context22.prev = 3;
              _context22.next = 6;
              return _services.staffServices.deletePrescriptionDetails({
                id: id
              });
            case 6:
              data = _context22.sent;
              if (!(data.statusCode === 0)) {
                _context22.next = 9;
                break;
              }
              return _context22.abrupt("return", res.status(200).json(data));
            case 9:
              return _context22.abrupt("return", res.status(400).json(data));
            case 12:
              _context22.prev = 12;
              _context22.t0 = _context22["catch"](3);
              console.log(_context22.t0);
              return _context22.abrupt("return", res.status(500).json({
                msg: (_context22.t0 === null || _context22.t0 === void 0 ? void 0 : _context22.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 16:
            case "end":
              return _context22.stop();
          }
        }, _callee22, null, [[3, 12]]);
      }));
      function handleDeletePrescriptionDetails(_x43, _x44) {
        return _handleDeletePrescriptionDetails.apply(this, arguments);
      }
      return handleDeletePrescriptionDetails;
    }() // [DELETE] /api/v1/doctor/prescription-details
  }, {
    key: "deleteSchedule",
    value: function () {
      var _deleteSchedule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
        var schedule, arr, data;
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              schedule = req.body.schedule;
              if (!(!schedule || (schedule === null || schedule === void 0 ? void 0 : schedule.length) < 0)) {
                _context23.next = 3;
                break;
              }
              return _context23.abrupt("return", res.status(404).json({
                statusCode: 1,
                msg: "schedule không được truyền."
              }));
            case 3:
              arr = [];
              if (Array.isArray(schedule)) {
                arr = schedule;
              } else {
                arr = [schedule];
              }
              // return res.status(200).json(schedule);
              _context23.prev = 5;
              _context23.next = 8;
              return _services.staffServices.deleteSchedule({
                schedules: arr
              });
            case 8:
              data = _context23.sent;
              if (!(data.statusCode === 0)) {
                _context23.next = 11;
                break;
              }
              return _context23.abrupt("return", res.status(200).json(data));
            case 11:
              return _context23.abrupt("return", res.status(400).json(data));
            case 14:
              _context23.prev = 14;
              _context23.t0 = _context23["catch"](5);
              console.log(_context23.t0);
              return _context23.abrupt("return", res.status(500).json({
                msg: (_context23.t0 === null || _context23.t0 === void 0 ? void 0 : _context23.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 18:
            case "end":
              return _context23.stop();
          }
        }, _callee23, null, [[5, 14]]);
      }));
      function deleteSchedule(_x45, _x46) {
        return _deleteSchedule.apply(this, arguments);
      }
      return deleteSchedule;
    }() // [POST] /api/v1/register-schedule
  }, {
    key: "registerSchedule",
    value: function () {
      var _registerSchedule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
        var _req$body9, workingId, unit, startDate, endDate, quantity, optionTimeCode, timeCodes, maxNumber, timeCodeArray, data;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              _req$body9 = req.body, workingId = _req$body9.workingId, unit = _req$body9.unit, startDate = _req$body9.startDate, endDate = _req$body9.endDate, quantity = _req$body9.quantity, optionTimeCode = _req$body9.optionTimeCode, timeCodes = _req$body9.timeCodeArray, maxNumber = _req$body9.maxNumber;
              if (workingId) {
                _context24.next = 3;
                break;
              }
              return _context24.abrupt("return", res.status(404).json({
                statusCode: 1,
                msg: "workingId không được truyền."
              }));
            case 3:
              timeCodeArray = [];
              if (Array.isArray(timeCodes)) {
                timeCodeArray = timeCodes;
              } else {
                timeCodeArray = [timeCodes];
              }
              _context24.prev = 5;
              _context24.next = 8;
              return _services.workServices.registerSchedule({
                workingId: workingId,
                unit: unit,
                // don vi ngay ->  ngay, tuan, thang [date,week,month]
                startDate: startDate,
                endDate: endDate,
                quantity: quantity,
                optionTimeCode: optionTimeCode,
                //[all, some]
                timeCodeArray: timeCodeArray,
                maxNumber: maxNumber
              });
            case 8:
              data = _context24.sent;
              if (!(data.statusCode === 200 || data.statusCode === 0)) {
                _context24.next = 11;
                break;
              }
              return _context24.abrupt("return", res.status(200).json(data));
            case 11:
              return _context24.abrupt("return", res.status(data.statusCode).json(data));
            case 14:
              _context24.prev = 14;
              _context24.t0 = _context24["catch"](5);
              console.log(_context24.t0);
              return _context24.abrupt("return", res.status(500).json({
                msg: (_context24.t0 === null || _context24.t0 === void 0 ? void 0 : _context24.t0.message) || "Lỗi server. Thử lại sau!"
              }));
            case 18:
            case "end":
              return _context24.stop();
          }
        }, _callee24, null, [[5, 14]]);
      }));
      function registerSchedule(_x47, _x48) {
        return _registerSchedule.apply(this, arguments);
      }
      return registerSchedule;
    }()
  }]);
  return StaffController;
}();
var _default = new StaffController();
exports["default"] = _default;