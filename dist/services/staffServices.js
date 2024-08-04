"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _models = _interopRequireWildcard(require("../app/models"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _workServices = _interopRequireDefault(require("./workServices"));
var _moment = _interopRequireDefault(require("moment"));
var _express = require("express");
var _untils = require("../untils");
var fs = _interopRequireWildcard(require("fs"));
var path = _interopRequireWildcard(require("path"));
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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var saltRounds = 10;
var StaffServices = /*#__PURE__*/function () {
  function StaffServices() {
    _classCallCheck(this, StaffServices);
  }
  _createClass(StaffServices, [{
    key: "getAcademicDegree",
    value: // AcademicDegree
    function () {
      var _getAcademicDegree = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var _ref$offset, offset, _ref$limit, limit, academicDegreeDoc;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _ref$offset = _ref.offset, offset = _ref$offset === void 0 ? 0 : _ref$offset, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? 100 : _ref$limit;
              _context.next = 3;
              return _models["default"].AcademicDegree.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                order: [["createdAt", "desc"]]
              });
            case 3:
              academicDegreeDoc = _context.sent;
              return _context.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, academicDegreeDoc), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getAcademicDegree(_x) {
        return _getAcademicDegree.apply(this, arguments);
      }
      return getAcademicDegree;
    }()
  }, {
    key: "createOrUpdateAcademicDegree",
    value: function () {
      var _createOrUpdateAcademicDegree = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref2) {
        var id, name, whereOptions, academicDegreeExisted, academicDegreeDoc, _academicDegreeDoc;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              id = _ref2.id, name = _ref2.name;
              whereOptions = {};
              if (id) whereOptions = {
                id: _defineProperty({}, _sequelize.Op.ne, id)
              };

              // Check if acedemic degree already exists
              _context2.next = 5;
              return _models["default"].AcademicDegree.findOne({
                where: _objectSpread({
                  name: name
                }, whereOptions),
                raw: true
              });
            case 5:
              academicDegreeExisted = _context2.sent;
              if (!academicDegreeExisted) {
                _context2.next = 8;
                break;
              }
              return _context2.abrupt("return", {
                statusCode: 1,
                msg: "Học vị đã tồn tại."
              });
            case 8:
              if (id) {
                _context2.next = 19;
                break;
              }
              _context2.next = 11;
              return _models["default"].AcademicDegree.create({
                name: name
              });
            case 11:
              academicDegreeDoc = _context2.sent;
              if (!academicDegreeDoc) {
                _context2.next = 16;
                break;
              }
              return _context2.abrupt("return", {
                statusCode: 0,
                msg: "Tạo học vị thành công.",
                data: academicDegreeDoc
              });
            case 16:
              return _context2.abrupt("return", {
                statusCode: 3,
                msg: "Lỗi tạo học vị. Vui lòng thử lại sau!"
              });
            case 17:
              _context2.next = 25;
              break;
            case 19:
              _context2.next = 21;
              return _models["default"].AcademicDegree.update({
                name: name
              }, {
                where: {
                  id: id
                }
              });
            case 21:
              _academicDegreeDoc = _context2.sent;
              if (!((_academicDegreeDoc === null || _academicDegreeDoc === void 0 ? void 0 : _academicDegreeDoc[0]) > 0)) {
                _context2.next = 24;
                break;
              }
              return _context2.abrupt("return", {
                statusCode: 0,
                msg: "Đã lưu thay đổi."
              });
            case 24:
              return _context2.abrupt("return", {
                statusCode: 3,
                msg: "Đã có lỗi xảy ra. Không có id!"
              });
            case 25:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function createOrUpdateAcademicDegree(_x2) {
        return _createOrUpdateAcademicDegree.apply(this, arguments);
      }
      return createOrUpdateAcademicDegree;
    }()
  }, {
    key: "deleteAcademicDegree",
    value: function () {
      var _deleteAcademicDegree = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref3) {
        var id, academicDegreeDoc;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              id = _ref3.id;
              _context3.next = 3;
              return _models["default"].AcademicDegree.destroy({
                where: {
                  id: id
                },
                force: true
              });
            case 3:
              academicDegreeDoc = _context3.sent;
              if (!(academicDegreeDoc > 0)) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return", {
                statusCode: 0,
                msg: "Xóa thành công.",
                data: academicDegreeDoc
              });
            case 6:
              return _context3.abrupt("return", {
                statusCode: 1,
                msg: "Xóa thất bại."
              });
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function deleteAcademicDegree(_x3) {
        return _deleteAcademicDegree.apply(this, arguments);
      }
      return deleteAcademicDegree;
    }() // booking
  }, {
    key: "getBooking",
    value: function () {
      var _getBooking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(_ref4) {
        var _ref4$offset, offset, _ref4$limit, limit, staffId, date, timeCodeId, patientProfileName, healthExamScheduleId, checkUpCodeId, bookingId, staffIdLogin, userId, healthFacilityId, _workingDoc$data, _workingDoc$data2, workingDoc, whereStaff, whereHealthFacility, whereSchedule, whereBooking, dateFilter, wherePatientProfile, docs, promiseArray, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _ref4$offset = _ref4.offset, offset = _ref4$offset === void 0 ? 0 : _ref4$offset, _ref4$limit = _ref4.limit, limit = _ref4$limit === void 0 ? 10 : _ref4$limit, staffId = _ref4.staffId, date = _ref4.date, timeCodeId = _ref4.timeCodeId, patientProfileName = _ref4.patientProfileName, healthExamScheduleId = _ref4.healthExamScheduleId, checkUpCodeId = _ref4.checkUpCodeId, bookingId = _ref4.bookingId, staffIdLogin = _ref4.staffIdLogin, userId = _ref4.userId;
              if (!staffIdLogin) {
                _context5.next = 8;
                break;
              }
              _context5.next = 4;
              return _workServices["default"].getWorking({
                doctorId: staffIdLogin
              });
            case 4:
              workingDoc = _context5.sent;
              if (!(!(workingDoc !== null && workingDoc !== void 0 && workingDoc.statusCode) == 0 && !(workingDoc !== null && workingDoc !== void 0 && (_workingDoc$data = workingDoc.data) !== null && _workingDoc$data !== void 0 && _workingDoc$data.rows[0]))) {
                _context5.next = 7;
                break;
              }
              return _context5.abrupt("return", {
                statusCode: 400,
                msg: "Không tìm thấy công tác của của nhân viên này."
              });
            case 7:
              healthFacilityId = workingDoc === null || workingDoc === void 0 || (_workingDoc$data2 = workingDoc.data) === null || _workingDoc$data2 === void 0 || (_workingDoc$data2 = _workingDoc$data2.rows) === null || _workingDoc$data2 === void 0 || (_workingDoc$data2 = _workingDoc$data2[0]) === null || _workingDoc$data2 === void 0 ? void 0 : _workingDoc$data2.healthFacilityId;
            case 8:
              whereStaff = {};
              whereHealthFacility = {};
              staffId && (whereStaff.staffId = staffId);
              whereSchedule = {};
              whereBooking = {};
              if (date) {
                dateFilter = (0, _moment["default"])(date).format("L");
                whereSchedule.date = dateFilter;
              }
              if (healthFacilityId) {
                whereHealthFacility.id = healthFacilityId;
              }
              if (bookingId) {
                whereBooking.id = bookingId;
              }
              if (timeCodeId) {
                whereSchedule.timeCode = timeCodeId;
              }
              if (checkUpCodeId) {
                whereBooking.status = checkUpCodeId;
              }
              if (healthExamScheduleId) {
                whereSchedule.id = healthExamScheduleId;
              }
              wherePatientProfile = {};
              if (userId) {
                wherePatientProfile.userId = userId;
              }
              if (patientProfileName) {
                wherePatientProfile.fullName = _defineProperty({}, _sequelize.Op.substring, patientProfileName);
              }
              _context5.next = 24;
              return _models["default"].Booking.findAndCountAll({
                raw: true,
                offset: offset,
                where: whereBooking,
                limit: limit,
                order: [["createdAt", "desc"]],
                nest: true,
                include: [{
                  model: _models["default"].HealthExaminationSchedule,
                  where: whereSchedule,
                  include: [{
                    model: _models["default"].Working,
                    where: whereStaff,
                    include: [{
                      model: _models["default"].HealthFacility,
                      where: whereHealthFacility
                    }, _models["default"].Staff]
                  }, {
                    model: _models["default"].Code,
                    as: "TimeCode"
                  }]
                }, {
                  model: _models["default"].PatientProfile,
                  where: wherePatientProfile,
                  include: [_models["default"].User]
                }, {
                  model: _models["default"].Code
                }]
              });
            case 24:
              docs = _context5.sent;
              promiseArray = docs.rows.map( /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(d) {
                  var healthRecordDoc;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return _models["default"].HealthRecord.findOne({
                          where: {
                            bookingId: d === null || d === void 0 ? void 0 : d.id
                          },
                          include: [{
                            model: _models["default"].Code,
                            as: "status"
                          }, _models["default"].Patient],
                          nest: true,
                          raw: true
                        });
                      case 2:
                        healthRecordDoc = _context4.sent;
                        return _context4.abrupt("return", {
                          booking: d,
                          healthRecord: healthRecordDoc || null
                        });
                      case 4:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function (_x5) {
                  return _ref5.apply(this, arguments);
                };
              }());
              _context5.next = 28;
              return Promise.all(promiseArray);
            case 28:
              data = _context5.sent;
              return _context5.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: {
                  rows: data,
                  limit: limit,
                  offset: offset,
                  count: docs.count
                }
              });
            case 30:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function getBooking(_x4) {
        return _getBooking.apply(this, arguments);
      }
      return getBooking;
    }() // Get Doctor With Email
  }, {
    key: "getDoctorWithEmail",
    value: function () {
      var _getDoctorWithEmail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_ref6) {
        var _ref6$offset, offset, _ref6$limit, limit, email, whereQuery, accounts;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _ref6$offset = _ref6.offset, offset = _ref6$offset === void 0 ? 0 : _ref6$offset, _ref6$limit = _ref6.limit, limit = _ref6$limit === void 0 ? 3 : _ref6$limit, email = _ref6.email;
              whereQuery = {};
              email && (whereQuery.email = _defineProperty({}, _sequelize.Op.substring, email));
              _context6.next = 5;
              return _models["default"].Staff.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                where: whereQuery,
                order: [["createdAt", "desc"]],
                nest: true,
                include: [{
                  model: _models["default"].Role,
                  where: {
                    keyType: "doctor"
                  }
                }, {
                  model: _models["default"].AcademicDegree,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"]
                  }
                }, {
                  model: _models["default"].Specialist,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"]
                  }
                }]
              });
            case 5:
              accounts = _context6.sent;
              return _context6.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, accounts), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function getDoctorWithEmail(_x6) {
        return _getDoctorWithEmail.apply(this, arguments);
      }
      return getDoctorWithEmail;
    }() // Get Doctor By Id
  }, {
    key: "getDoctorById",
    value: function () {
      var _getDoctorById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(id) {
        var accounts;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _models["default"].Staff.findByPk(id, {
                raw: true,
                nest: true,
                include: [{
                  model: _models["default"].Role,
                  where: {
                    keyType: "doctor"
                  }
                }, {
                  model: _models["default"].AcademicDegree,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"]
                  }
                }, {
                  model: _models["default"].Specialist,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"]
                  }
                }]
              });
            case 2:
              accounts = _context7.sent;
              if (!accounts) {
                _context7.next = 5;
                break;
              }
              return _context7.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thành công.",
                data: accounts
              });
            case 5:
              return _context7.abrupt("return", {
                statusCode: 0,
                msg: "Không tìm thấy Bác sĩ."
              });
            case 6:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function getDoctorById(_x7) {
        return _getDoctorById.apply(this, arguments);
      }
      return getDoctorById;
    }() // Staff
  }, {
    key: "getStaff",
    value: function () {
      var _getStaff = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(_ref7) {
        var _ref7$offset, offset, _ref7$limit, limit, email, fullName, type, doctorId, isWorking, Role, whereQuery, whereRole, listStaffId, workingExisted, accounts;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _ref7$offset = _ref7.offset, offset = _ref7$offset === void 0 ? 0 : _ref7$offset, _ref7$limit = _ref7.limit, limit = _ref7$limit === void 0 ? 10 : _ref7$limit, email = _ref7.email, fullName = _ref7.fullName, type = _ref7.type, doctorId = _ref7.doctorId, isWorking = _ref7.isWorking, Role = _ref7.Role;
              whereQuery = {};
              whereRole = {};
              if (type) whereRole.keyType = _defineProperty({}, _sequelize.Op.and, [_defineProperty({}, _sequelize.Op.ne, "admin"), _defineProperty({}, _sequelize.Op.eq, type)]);else if (Role && Role.length > 0) {
                whereRole.keyType = _defineProperty({}, _sequelize.Op.and, [_defineProperty({}, _sequelize.Op.ne, "admin"), _defineProperty({}, _sequelize.Op["in"], Role)]);
              } else {
                whereRole.keyType = _defineProperty({}, _sequelize.Op.ne, "admin");
              }
              listStaffId = [];
              if (!(isWorking == "false")) {
                _context8.next = 10;
                break;
              }
              _context8.next = 8;
              return _models["default"].Working.findAll({
                raw: true
              });
            case 8:
              workingExisted = _context8.sent;
              listStaffId = (workingExisted === null || workingExisted === void 0 ? void 0 : workingExisted.map(function (s) {
                return s.staffId;
              })) || [];
            case 10:
              if (listStaffId.length > 0) {
                whereQuery.id = _defineProperty({}, _sequelize.Op.notIn, listStaffId);
              }
              if (doctorId) {
                whereQuery.id = doctorId;
              }
              email && (whereQuery.email = _defineProperty({}, _sequelize.Op.substring, email));
              fullName && (whereQuery.fullName = (0, _untils.searchLikeDeep)("Staff", "fullName", fullName));
              _context8.next = 16;
              return _models["default"].Staff.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                where: whereQuery,
                order: [["createdAt", "desc"]],
                nest: true,
                include: [{
                  model: _models["default"].Role,
                  where: whereRole
                }, {
                  model: _models["default"].AcademicDegree,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"]
                  }
                }, {
                  model: _models["default"].Specialist,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"]
                  }
                }]
              });
            case 16:
              accounts = _context8.sent;
              return _context8.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, accounts), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 18:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      function getStaff(_x8) {
        return _getStaff.apply(this, arguments);
      }
      return getStaff;
    }()
  }, {
    key: "createOrUpdateStaff",
    value: function () {
      var _createOrUpdateStaff = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(_ref12) {
        var id, email, password, fullName, phone, address, gender, academicDegreeId, specialistId, experience, certificate, roleId, role, _yield$Promise$all, _yield$Promise$all2, academicDegreeDoc, specialistDoc, passHash, _yield$Promise$all3, _yield$Promise$all4, staffExisted, userExisted, userDoc, _where3, _where4, passHashCreate, userPass, _yield$Promise$all5, _yield$Promise$all6, _staffExisted, _userExisted, _passHash, staffDocUpdated;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              id = _ref12.id, email = _ref12.email, password = _ref12.password, fullName = _ref12.fullName, phone = _ref12.phone, address = _ref12.address, gender = _ref12.gender, academicDegreeId = _ref12.academicDegreeId, specialistId = _ref12.specialistId, experience = _ref12.experience, certificate = _ref12.certificate, roleId = _ref12.roleId;
              _context9.next = 3;
              return _models["default"].Role.findByPk(roleId, {
                raw: true
              });
            case 3:
              role = _context9.sent;
              if (role) {
                _context9.next = 6;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 1,
                msg: "Dữ liệu role không tồn tại."
              });
            case 6:
              if (!(role.keyType !== "hospital_manager")) {
                _context9.next = 9;
                break;
              }
              if (!(!academicDegreeId || !specialistId || !experience || !certificate)) {
                _context9.next = 9;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 400,
                msg: "Tham tạo Bác sĩ chưa đủ."
              });
            case 9:
              if (!(role.keyType !== "hospital_manager")) {
                _context9.next = 18;
                break;
              }
              _context9.next = 12;
              return Promise.all([_models["default"].AcademicDegree.findByPk(academicDegreeId), _models["default"].Specialist.findByPk(specialistId)]);
            case 12:
              _yield$Promise$all = _context9.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              academicDegreeDoc = _yield$Promise$all2[0];
              specialistDoc = _yield$Promise$all2[1];
              if (!(!academicDegreeDoc || !specialistDoc)) {
                _context9.next = 18;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 3,
                msg: "Dữ liệu chuyên khoa hoặc học vị không tồn tại."
              });
            case 18:
              if (id) {
                _context9.next = 42;
                break;
              }
              _context9.next = 21;
              return _bcrypt["default"].hash(password, saltRounds);
            case 21:
              passHash = _context9.sent;
              if (passHash) {
                _context9.next = 24;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 3,
                msg: "Mã hóa mật khẩu bị lỗi."
              });
            case 24:
              _context9.next = 26;
              return Promise.all([_models["default"].Staff.findOne({
                where: _defineProperty({}, _sequelize.Op.or, {
                  email: email,
                  phone: phone
                })
              }), _models["default"].User.findOne({
                where: _defineProperty({}, _sequelize.Op.or, {
                  email: email,
                  phone: phone
                })
              })]);
            case 26:
              _yield$Promise$all3 = _context9.sent;
              _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 2);
              staffExisted = _yield$Promise$all4[0];
              userExisted = _yield$Promise$all4[1];
              if (!(userExisted || staffExisted)) {
                _context9.next = 32;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 2,
                msg: (userExisted === null || userExisted === void 0 ? void 0 : userExisted.email) === email || (staffExisted === null || staffExisted === void 0 ? void 0 : staffExisted.email) === email ? "Email đã tồn tại." : "Số điện thoại đã tồn tại."
              });
            case 32:
              _context9.next = 34;
              return _models["default"].Staff.create({
                email: email,
                password: passHash,
                fullName: fullName,
                phone: phone,
                address: address,
                gender: gender,
                academicDegreeId: academicDegreeId,
                specialistId: specialistId,
                roleId: roleId,
                experience: experience,
                certificate: certificate
              });
            case 34:
              userDoc = _context9.sent;
              if (!userDoc) {
                _context9.next = 39;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 0,
                msg: "Tạo tài khoản Bác sĩ thành công.",
                data: userDoc
              });
            case 39:
              return _context9.abrupt("return", {
                statusCode: 4,
                msg: "Lỗi tạo tài khoản Bác sĩ."
              });
            case 40:
              _context9.next = 74;
              break;
            case 42:
              // update
              passHashCreate = {};
              _context9.next = 45;
              return _models["default"].Staff.findByPk(id, {
                raw: true
              });
            case 45:
              userPass = _context9.sent;
              if (userPass) {
                _context9.next = 48;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 3,
                msg: "Nhân viên không tìm thấy"
              });
            case 48:
              _context9.next = 50;
              return Promise.all([_models["default"].Staff.findOne({
                where: (_where3 = {}, _defineProperty(_where3, _sequelize.Op.or, {
                  email: email,
                  phone: phone
                }), _defineProperty(_where3, "id", _defineProperty({}, _sequelize.Op.ne, id)), _where3)
              }), _models["default"].User.findOne({
                where: (_where4 = {}, _defineProperty(_where4, _sequelize.Op.or, {
                  email: email,
                  phone: phone
                }), _defineProperty(_where4, "id", _defineProperty({}, _sequelize.Op.ne, id)), _where4)
              })]);
            case 50:
              _yield$Promise$all5 = _context9.sent;
              _yield$Promise$all6 = _slicedToArray(_yield$Promise$all5, 2);
              _staffExisted = _yield$Promise$all6[0];
              _userExisted = _yield$Promise$all6[1];
              if (!(_userExisted || _staffExisted)) {
                _context9.next = 56;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 2,
                msg: (_userExisted === null || _userExisted === void 0 ? void 0 : _userExisted.email) === email || (_staffExisted === null || _staffExisted === void 0 ? void 0 : _staffExisted.email) === email ? "Email đã tồn tại." : "Số điện thoại đã tồn tại."
              });
            case 56:
              if (!(userPass.password === password)) {
                _context9.next = 60;
                break;
              }
              passHashCreate.password = password;
              _context9.next = 66;
              break;
            case 60:
              _context9.next = 62;
              return _bcrypt["default"].hash(password, saltRounds);
            case 62:
              _passHash = _context9.sent;
              if (_passHash) {
                _context9.next = 65;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 2,
                msg: "Mã hóa mật khẩu bị lỗi."
              });
            case 65:
              passHashCreate.password = _passHash;
            case 66:
              _context9.next = 68;
              return _models["default"].Staff.update(_objectSpread(_objectSpread({
                email: email
              }, passHashCreate), {}, {
                fullName: fullName,
                phone: phone,
                address: address,
                gender: gender,
                academicDegreeId: academicDegreeId,
                experience: experience,
                certificate: certificate,
                roleId: roleId,
                specialistId: specialistId
              }), {
                where: {
                  id: id
                }
              });
            case 68:
              staffDocUpdated = _context9.sent;
              if (!(staffDocUpdated[0] > 0)) {
                _context9.next = 73;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 0,
                msg: "Cập nhật nhân viên thành công."
              });
            case 73:
              return _context9.abrupt("return", {
                statusCode: 0,
                msg: "Dữ liệu chưa được thay đổi"
              });
            case 74:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      function createOrUpdateStaff(_x9) {
        return _createOrUpdateStaff.apply(this, arguments);
      }
      return createOrUpdateStaff;
    }() // Code
  }, {
    key: "createCode",
    value: function () {
      var _createCode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(_ref13) {
        var name, key, value, codeExists, codeDoc;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              name = _ref13.name, key = _ref13.key, value = _ref13.value;
              _context10.next = 3;
              return _models["default"].Code.findByPk(key);
            case 3:
              codeExists = _context10.sent;
              if (!codeExists) {
                _context10.next = 6;
                break;
              }
              return _context10.abrupt("return", {
                statusCode: 1,
                msg: "Mã code đã tồn tại."
              });
            case 6:
              _context10.next = 8;
              return _models["default"].Code.create({
                name: name,
                key: key,
                value: value
              });
            case 8:
              codeDoc = _context10.sent;
              if (codeDoc) {
                _context10.next = 13;
                break;
              }
              return _context10.abrupt("return", {
                statusCode: 2,
                msg: "Tạo code thất bại."
              });
            case 13:
              return _context10.abrupt("return", {
                statusCode: 0,
                msg: "Tạo code thành công."
              });
            case 14:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function createCode(_x10) {
        return _createCode.apply(this, arguments);
      }
      return createCode;
    }()
  }, {
    key: "getCode",
    value: function () {
      var _getCode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(_ref14) {
        var _ref14$offset, offset, _ref14$limit, limit, name, whereQuery, codes;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _ref14$offset = _ref14.offset, offset = _ref14$offset === void 0 ? 0 : _ref14$offset, _ref14$limit = _ref14.limit, limit = _ref14$limit === void 0 ? 16 : _ref14$limit, name = _ref14.name;
              whereQuery = {};
              name && (whereQuery.name = name);
              _context11.next = 5;
              return _models["default"].Code.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                where: whereQuery,
                order: [["key", "asc"]]
              });
            case 5:
              codes = _context11.sent;
              return _context11.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, codes), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 7:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function getCode(_x11) {
        return _getCode.apply(this, arguments);
      }
      return getCode;
    }()
  }, {
    key: "getTimeCode",
    value: function () {
      var _getTimeCode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(_ref15) {
        var _ref15$offset, offset, _ref15$limit, limit, whereQuery, codes;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _ref15$offset = _ref15.offset, offset = _ref15$offset === void 0 ? 0 : _ref15$offset, _ref15$limit = _ref15.limit, limit = _ref15$limit === void 0 ? 12 : _ref15$limit;
              whereQuery = {
                name: "Time"
              };
              _context12.next = 4;
              return _models["default"].Code.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                where: whereQuery,
                order: [["key", "asc"]]
              });
            case 4:
              codes = _context12.sent;
              return _context12.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, codes), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 6:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }));
      function getTimeCode(_x12) {
        return _getTimeCode.apply(this, arguments);
      }
      return getTimeCode;
    }()
  }, {
    key: "deleteCode",
    value: function () {
      var _deleteCode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(_ref16) {
        var key, codeExists, isSucess;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              key = _ref16.key;
              _context13.next = 3;
              return _models["default"].Code.findByPk(key);
            case 3:
              codeExists = _context13.sent;
              if (codeExists) {
                _context13.next = 6;
                break;
              }
              return _context13.abrupt("return", {
                statusCode: 1,
                msg: "Mã code không tồn tại."
              });
            case 6:
              _context13.next = 8;
              return codeExists.destroy({
                force: true
              });
            case 8:
              isSucess = _context13.sent;
              if (!isSucess) {
                _context13.next = 13;
                break;
              }
              return _context13.abrupt("return", {
                statusCode: 0,
                msg: "Xóa code thành công."
              });
            case 13:
              return _context13.abrupt("return", {
                statusCode: 0,
                msg: "Xóa code thất bại."
              });
            case 14:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }));
      function deleteCode(_x13) {
        return _deleteCode.apply(this, arguments);
      }
      return deleteCode;
    }()
  }, {
    key: "getDoctorWorking",
    value: function () {
      var _getDoctorWorking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(_ref17) {
        var _ref17$offset, offset, _ref17$limit, limit, doctorName, doctorEmail, workingId, healthFacilityId, doctorId, _ref17$current, current, whereQueryDoctor, whereQueryWorking, docs;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _ref17$offset = _ref17.offset, offset = _ref17$offset === void 0 ? 0 : _ref17$offset, _ref17$limit = _ref17.limit, limit = _ref17$limit === void 0 ? 8 : _ref17$limit, doctorName = _ref17.doctorName, doctorEmail = _ref17.doctorEmail, workingId = _ref17.workingId, healthFacilityId = _ref17.healthFacilityId, doctorId = _ref17.doctorId, _ref17$current = _ref17.current, current = _ref17$current === void 0 ? "current" : _ref17$current;
              whereQueryDoctor = {};
              whereQueryWorking = {};
              doctorName && (whereQueryDoctor.fullName = (0, _untils.searchLikeDeep)("Staff", "fullName", doctorName));
              // wordConditions
              doctorEmail && (whereQueryDoctor.email = _defineProperty({}, _sequelize.Op.substring, doctorEmail));
              doctorId && (whereQueryDoctor.id = doctorId);
              healthFacilityId && (whereQueryWorking.healthFacilityId = healthFacilityId);
              workingId && (whereQueryWorking.id = workingId);
              if (current == "current") {
                whereQueryWorking[_sequelize.Op.or] = [{
                  endDate: null
                }, {
                  endDate: _defineProperty({}, _sequelize.Op.gt, new Date())
                }];
              }
              _context14.next = 11;
              return _models["default"].Working.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                order: [["createdAt", "desc"]],
                nest: true,
                where: whereQueryWorking,
                include: [{
                  model: _models["default"].Staff,
                  where: whereQueryDoctor,
                  include: [_models["default"].AcademicDegree, _models["default"].Specialist]
                }]
              });
            case 11:
              docs = _context14.sent;
              return _context14.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, docs), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 13:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      }));
      function getDoctorWorking(_x14) {
        return _getDoctorWorking.apply(this, arguments);
      }
      return getDoctorWorking;
    }() // [GET] /check-up/health-record
  }, {
    key: "getRecordCheckUp",
    value: function () {
      var _getRecordCheckUp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(_ref18) {
        var date, staffId, id, bookingId, _ref18$limit, limit, _ref18$offset, offset, _workingDoctor$data, workingDoctor, workingId, results, workRoom, healthExamSchedules, whereHealthRecord, healthRecord;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              date = _ref18.date, staffId = _ref18.staffId, id = _ref18.id, bookingId = _ref18.bookingId, _ref18$limit = _ref18.limit, limit = _ref18$limit === void 0 ? 10 : _ref18$limit, _ref18$offset = _ref18.offset, offset = _ref18$offset === void 0 ? 0 : _ref18$offset;
              if (!staffId) {
                _context15.next = 24;
                break;
              }
              _context15.next = 4;
              return this.getDoctorWorking({
                doctorId: staffId
              });
            case 4:
              workingDoctor = _context15.sent;
              workingId = workingDoctor === null || workingDoctor === void 0 || (_workingDoctor$data = workingDoctor.data) === null || _workingDoctor$data === void 0 || (_workingDoctor$data = _workingDoctor$data.rows) === null || _workingDoctor$data === void 0 ? void 0 : _workingDoctor$data[0].id;
              results = {};
              if (!workingId) {
                _context15.next = 23;
                break;
              }
              _context15.next = 10;
              return _workServices["default"].getWorkRoomFromWorking({
                workingId: workingId
              });
            case 10:
              workRoom = _context15.sent;
              if (!workRoom) {
                _context15.next = 20;
                break;
              }
              results.workRoom = workRoom;
              _context15.next = 15;
              return _workServices["default"].getHealthExamSchedule({
                workingId: workingId,
                date: date,
                raw: true
              });
            case 15:
              healthExamSchedules = _context15.sent;
              // asdsa
              results.schedules = healthExamSchedules.data;
              return _context15.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thành công.",
                data: results
              });
            case 20:
              return _context15.abrupt("return", {
                statusCode: 2,
                msg: "Không tìm nơi khám bệnh"
              });
            case 21:
              _context15.next = 24;
              break;
            case 23:
              return _context15.abrupt("return", {
                statusCode: 1,
                msg: "Không tìm thấy Bác sĩ"
              });
            case 24:
              whereHealthRecord = {};
              if (id) {
                whereHealthRecord.id = id;
              }
              if (bookingId) {
                whereHealthRecord.bookingId = bookingId;
              }

              // get health-record
              _context15.next = 29;
              return _models["default"].HealthRecord.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                where: whereHealthRecord,
                order: [["createdAt", "desc"]],
                nest: true,
                include: [_models["default"].Patient, _models["default"].Booking]
              });
            case 29:
              healthRecord = _context15.sent;
              return _context15.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, healthRecord), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 31:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function getRecordCheckUp(_x15) {
        return _getRecordCheckUp.apply(this, arguments);
      }
      return getRecordCheckUp;
    }() // [POST] /check-up/health-record
  }, {
    key: "createHealthRecord",
    value: function () {
      var _createHealthRecord = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(_ref19) {
        var bookingId, patientId, healthRecordExist, bookingDoc, patientDoc, codeDoc, doc;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              bookingId = _ref19.bookingId, patientId = _ref19.patientId;
              _context16.next = 3;
              return _models["default"].HealthRecord.findOne({
                where: {
                  bookingId: bookingId
                },
                raw: true
              });
            case 3:
              healthRecordExist = _context16.sent;
              if (!healthRecordExist) {
                _context16.next = 6;
                break;
              }
              return _context16.abrupt("return", {
                statusCode: 404,
                msg: "L\u1ECBch \u0111\xE3 \u0111\u01B0\u1EE3c t\u1EA1o.",
                data: healthRecordExist
              });
            case 6:
              _context16.next = 8;
              return _models["default"].Booking.findOne({
                where: {
                  id: bookingId
                },
                raw: true
              });
            case 8:
              bookingDoc = _context16.sent;
              if (bookingDoc) {
                _context16.next = 11;
                break;
              }
              return _context16.abrupt("return", {
                statusCode: 404,
                msg: "Kh\xF4ng t\xECm th\u1EA5y l\u1ECBch h\u1EB9n n\xE0y ".concat(bookingId, ".")
              });
            case 11:
              _context16.next = 13;
              return _models["default"].Patient.findOne({
                where: {
                  id: patientId
                },
                raw: true
              });
            case 13:
              patientDoc = _context16.sent;
              if (patientDoc) {
                _context16.next = 16;
                break;
              }
              return _context16.abrupt("return", {
                statusCode: 404,
                msg: "Kh\xF4ng t\xECm th\u1EA5y b\u1EC7nh nh\xE2n n\xE0y ".concat(patientId, ".")
              });
            case 16:
              _context16.next = 18;
              return _models["default"].Code.findOne({
                where: {
                  name: "HealthRecord"
                }
              });
            case 18:
              codeDoc = _context16.sent;
              if (codeDoc) {
                _context16.next = 21;
                break;
              }
              return _context16.abrupt("return", {
                statusCode: 2,
                msg: "Kh\xF4ng tin th\u1EA5y tr\u1EA1ng th\xE1i - HR1."
              });
            case 21:
              _context16.next = 23;
              return _models["default"].HealthRecord.create({
                bookingId: bookingId,
                patientId: patientId,
                statusCode: "HR1"
              });
            case 23:
              doc = _context16.sent;
              if (!doc) {
                _context16.next = 28;
                break;
              }
              return _context16.abrupt("return", {
                statusCode: 0,
                msg: "Tạo phiếu thành công.",
                data: doc
              });
            case 28:
              return _context16.abrupt("return", {
                statusCode: 1,
                msg: "Đã có lỗi xảy ra, vui lòng thử lại!"
              });
            case 29:
            case "end":
              return _context16.stop();
          }
        }, _callee16);
      }));
      function createHealthRecord(_x16) {
        return _createHealthRecord.apply(this, arguments);
      }
      return createHealthRecord;
    }() // [POST] /check-up/health-record
  }, {
    key: "editStatusBooking",
    value: function () {
      var _editStatusBooking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(_ref20) {
        var statusId, bookingId, userId, moment3Day, bookingIn3day, countCancel, countCancelFor3Day, userUpdate, _codeDoc, _doc, codeDoc, doc;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              statusId = _ref20.statusId, bookingId = _ref20.bookingId, userId = _ref20.userId;
              if (!(userId && statusId == "CU4")) {
                _context17.next = 22;
                break;
              }
              moment3Day = (0, _moment["default"])().clone().add(3, "days"); //check for 3 day
              _context17.next = 5;
              return _models["default"].Booking.findOne({
                where: {
                  id: bookingId
                },
                include: [{
                  model: _models["default"].HealthExaminationSchedule,
                  where: {
                    date: _defineProperty({}, _sequelize.Op.lte, moment3Day.format("L"))
                  }
                }],
                raw: true,
                nest: true,
                limit: 3,
                order: [["createdAt", "desc"]]
              });
            case 5:
              bookingIn3day = _context17.sent;
              if (!bookingIn3day) {
                _context17.next = 22;
                break;
              }
              _context17.next = 9;
              return _models["default"].Booking.findAll({
                where: {
                  id: _defineProperty({}, _sequelize.Op.not, bookingId)
                },
                include: [{
                  model: _models["default"].PatientProfile,
                  where: {
                    userId: userId
                  }
                }, {
                  model: _models["default"].HealthExaminationSchedule
                }],
                raw: true,
                nest: true,
                limit: 3,
                order: [["createdAt", "desc"]]
              });
            case 9:
              countCancel = _context17.sent;
              countCancelFor3Day = countCancel.filter(function (c) {
                return c.status === "CU4" && (0, _moment["default"])(c.HealthExaminationSchedule.date).isSameOrBefore(moment3Day) && c.paymentType != "card";
              });
              if (!(countCancelFor3Day.length >= 2)) {
                _context17.next = 22;
                break;
              }
              userUpdate = _models["default"].User.update({
                banded: true
              }, {
                where: {
                  id: userId
                }
              });
              _context17.next = 15;
              return _models["default"].Code.findOne({
                where: {
                  key: statusId
                },
                raw: true
              });
            case 15:
              _codeDoc = _context17.sent;
              if (_codeDoc) {
                _context17.next = 18;
                break;
              }
              return _context17.abrupt("return", {
                statusCode: 2,
                msg: "Kh\xF4ng tin th\u1EA5y tr\u1EA1ng th\xE1i ".concat(statusId, ".")
              });
            case 18:
              _context17.next = 20;
              return _models["default"].Booking.update({
                status: statusId
              }, {
                where: {
                  id: bookingId
                }
              });
            case 20:
              _doc = _context17.sent;
              return _context17.abrupt("return", {
                statusCode: 0,
                msg: "H\u1EE7y l\u1ECBch th\xE0nh c\xF4ng t\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n \u0111ang t\u1EA1m kh\xF3a do h\u1EE7y l\u1ECBch li\xEAn ti\u1EBFp 3 l\u1EA7n.\n            Vui l\xF2ng li\xEAn h\u1EC7 v\u1EDBi admin \u0111\u1EC3 m\u1EDF kh\xF3a!"
              });
            case 22:
              _context17.next = 24;
              return _models["default"].Code.findOne({
                where: {
                  key: statusId
                },
                raw: true
              });
            case 24:
              codeDoc = _context17.sent;
              if (codeDoc) {
                _context17.next = 27;
                break;
              }
              return _context17.abrupt("return", {
                statusCode: 2,
                msg: "Kh\xF4ng tin th\u1EA5y tr\u1EA1ng th\xE1i ".concat(statusId, ".")
              });
            case 27:
              _context17.next = 29;
              return _models["default"].Booking.update({
                status: statusId
              }, {
                where: {
                  id: bookingId
                }
              });
            case 29:
              doc = _context17.sent;
              return _context17.abrupt("return", {
                statusCode: 0,
                msg: "Cập nhật thành công."
              });
            case 31:
            case "end":
              return _context17.stop();
          }
        }, _callee17);
      }));
      function editStatusBooking(_x17) {
        return _editStatusBooking.apply(this, arguments);
      }
      return editStatusBooking;
    }() // [PATCH] /check-up/health-record
  }, {
    key: "editHealthRecord",
    value: function () {
      var _editHealthRecord = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(_ref21) {
        var statusId, healthRecordId, diagnosis, note, dataUpdate, codeDoc, doc;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              statusId = _ref21.statusId, healthRecordId = _ref21.healthRecordId, diagnosis = _ref21.diagnosis, note = _ref21.note;
              dataUpdate = {};
              if (!statusId) {
                _context18.next = 9;
                break;
              }
              _context18.next = 5;
              return _models["default"].Code.findOne({
                where: {
                  key: statusId
                },
                raw: true
              });
            case 5:
              codeDoc = _context18.sent;
              if (codeDoc) {
                _context18.next = 8;
                break;
              }
              return _context18.abrupt("return", {
                statusCode: 2,
                msg: "Kh\xF4ng t\xECm th\u1EA5y tr\u1EA1ng th\xE1i ".concat(statusId, ".")
              });
            case 8:
              dataUpdate.statusCode = statusId;
            case 9:
              if (diagnosis) {
                dataUpdate.diagnosis = diagnosis;
              }
              if (note) {
                dataUpdate.note = note;
              }
              _context18.next = 13;
              return _models["default"].HealthRecord.update(_objectSpread({}, dataUpdate), {
                where: {
                  id: healthRecordId
                }
              });
            case 13:
              doc = _context18.sent;
              if (!(doc[0] > 0)) {
                _context18.next = 18;
                break;
              }
              return _context18.abrupt("return", {
                statusCode: 0,
                msg: diagnosis || note ? "Đã lưu phiếu" : "Cập nhật thành công."
              });
            case 18:
              return _context18.abrupt("return", {
                statusCode: 0,
                msg: diagnosis || note ? "Đã lưu phiếu" : "Cập nhật thành công."
              });
            case 19:
            case "end":
              return _context18.stop();
          }
        }, _callee18);
      }));
      function editHealthRecord(_x18) {
        return _editHealthRecord.apply(this, arguments);
      }
      return editHealthRecord;
    }() // [POST] /check-up/health-record/done
  }, {
    key: "editHealthRecordDone",
    value: function () {
      var _editHealthRecordDone = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(_ref22) {
        var _healthRecord$data, _infoHealthRecord$boo;
        var id, diagnosis, note, emailDestination, sendPrescriptionDetails, sendhHospitalService, files, dataUpdate, codeDoc, healthRecordDoc, healthRecord, infoHealthRecord, workRoom, _infoHealthRecord$boo2, _infoHealthRecord$boo3, _infoHealthRecord$boo4, _infoHealthRecord$boo5, _infoHealthRecord$boo6, _infoHealthRecord$boo7, _infoHealthRecord$hea, _infoHealthRecord$hea2, _infoHealthRecord$Pat, title, replacements, __dirname, srcHtml, filePath, filePdfs, data;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              id = _ref22.id, diagnosis = _ref22.diagnosis, note = _ref22.note, emailDestination = _ref22.emailDestination, sendPrescriptionDetails = _ref22.sendPrescriptionDetails, sendhHospitalService = _ref22.sendhHospitalService, files = _ref22.files;
              dataUpdate = {};
              _context19.next = 4;
              return _models["default"].Code.findOne({
                where: {
                  key: "HR4"
                },
                raw: true
              });
            case 4:
              codeDoc = _context19.sent;
              if (codeDoc) {
                _context19.next = 7;
                break;
              }
              return _context19.abrupt("return", {
                statusCode: 2,
                msg: "Kh\xF4ng tin th\u1EA5y tr\u1EA1ng th\xE1i [HR4] \u0111\xE3 kh\xE1m."
              });
            case 7:
              dataUpdate.statusCode = "HR4";
              if (diagnosis) {
                dataUpdate.diagnosis = diagnosis;
              }
              if (note) {
                dataUpdate.note = note;
              }
              _context19.next = 12;
              return _models["default"].HealthRecord.update(_objectSpread({}, dataUpdate), {
                where: {
                  id: id
                }
              });
            case 12:
              _context19.next = 14;
              return _models["default"].HealthRecord.findOne({
                where: {
                  id: id
                },
                raw: true
              });
            case 14:
              healthRecordDoc = _context19.sent;
              if (healthRecordDoc) {
                _context19.next = 17;
                break;
              }
              return _context19.abrupt("return", {
                statusCode: 500,
                msg: "Lỗi lấy thông tin vui lòng thử lại."
              });
            case 17:
              _context19.next = 19;
              return this.getBooking({
                bookingId: healthRecordDoc.bookingId
              });
            case 19:
              healthRecord = _context19.sent;
              // send email
              infoHealthRecord = healthRecord === null || healthRecord === void 0 || (_healthRecord$data = healthRecord.data) === null || _healthRecord$data === void 0 || (_healthRecord$data = _healthRecord$data.rows) === null || _healthRecord$data === void 0 ? void 0 : _healthRecord$data[0];
              if (infoHealthRecord) {
                _context19.next = 23;
                break;
              }
              return _context19.abrupt("return", {
                statusCode: 500,
                msg: "Lỗi lấy thông tin vui lòng thử lại."
              });
            case 23:
              _context19.next = 25;
              return _workServices["default"].getWorkRoomFromWorking({
                workingId: infoHealthRecord === null || infoHealthRecord === void 0 || (_infoHealthRecord$boo = infoHealthRecord.booking) === null || _infoHealthRecord$boo === void 0 ? void 0 : _infoHealthRecord$boo.HealthExaminationSchedule.workingId
              });
            case 25:
              workRoom = _context19.sent;
              _context19.prev = 26;
              title = "KẾT QUẢ KHÁM BỆNH Ở " + (infoHealthRecord === null || infoHealthRecord === void 0 || (_infoHealthRecord$boo2 = infoHealthRecord.booking) === null || _infoHealthRecord$boo2 === void 0 || (_infoHealthRecord$boo2 = _infoHealthRecord$boo2.HealthExaminationSchedule) === null || _infoHealthRecord$boo2 === void 0 || (_infoHealthRecord$boo2 = _infoHealthRecord$boo2.Working) === null || _infoHealthRecord$boo2 === void 0 || (_infoHealthRecord$boo2 = _infoHealthRecord$boo2.HealthFacility) === null || _infoHealthRecord$boo2 === void 0 || (_infoHealthRecord$boo2 = _infoHealthRecord$boo2.name) === null || _infoHealthRecord$boo2 === void 0 ? void 0 : _infoHealthRecord$boo2.trim().toLocaleUpperCase());
              replacements = {
                name: infoHealthRecord === null || infoHealthRecord === void 0 || (_infoHealthRecord$boo3 = infoHealthRecord.booking) === null || _infoHealthRecord$boo3 === void 0 || (_infoHealthRecord$boo3 = _infoHealthRecord$boo3.PatientProfile) === null || _infoHealthRecord$boo3 === void 0 || (_infoHealthRecord$boo3 = _infoHealthRecord$boo3.fullName) === null || _infoHealthRecord$boo3 === void 0 ? void 0 : _infoHealthRecord$boo3.trim().toLocaleUpperCase(),
                date: (0, _moment["default"])(new Date(infoHealthRecord === null || infoHealthRecord === void 0 || (_infoHealthRecord$boo4 = infoHealthRecord.booking) === null || _infoHealthRecord$boo4 === void 0 || (_infoHealthRecord$boo4 = _infoHealthRecord$boo4.HealthExaminationSchedule) === null || _infoHealthRecord$boo4 === void 0 ? void 0 : _infoHealthRecord$boo4.date)).format("L"),
                time: infoHealthRecord === null || infoHealthRecord === void 0 || (_infoHealthRecord$boo5 = infoHealthRecord.booking) === null || _infoHealthRecord$boo5 === void 0 || (_infoHealthRecord$boo5 = _infoHealthRecord$boo5.HealthExaminationSchedule) === null || _infoHealthRecord$boo5 === void 0 || (_infoHealthRecord$boo5 = _infoHealthRecord$boo5.TimeCode) === null || _infoHealthRecord$boo5 === void 0 ? void 0 : _infoHealthRecord$boo5.value,
                doctor: infoHealthRecord === null || infoHealthRecord === void 0 || (_infoHealthRecord$boo6 = infoHealthRecord.booking) === null || _infoHealthRecord$boo6 === void 0 || (_infoHealthRecord$boo6 = _infoHealthRecord$boo6.HealthExaminationSchedule) === null || _infoHealthRecord$boo6 === void 0 || (_infoHealthRecord$boo6 = _infoHealthRecord$boo6.Working) === null || _infoHealthRecord$boo6 === void 0 || (_infoHealthRecord$boo6 = _infoHealthRecord$boo6.Staff) === null || _infoHealthRecord$boo6 === void 0 ? void 0 : _infoHealthRecord$boo6.fullName,
                room: workRoom === null || workRoom === void 0 ? void 0 : workRoom.ClinicRoomRoomNumber,
                location: infoHealthRecord === null || infoHealthRecord === void 0 || (_infoHealthRecord$boo7 = infoHealthRecord.booking) === null || _infoHealthRecord$boo7 === void 0 || (_infoHealthRecord$boo7 = _infoHealthRecord$boo7.HealthExaminationSchedule) === null || _infoHealthRecord$boo7 === void 0 || (_infoHealthRecord$boo7 = _infoHealthRecord$boo7.Working) === null || _infoHealthRecord$boo7 === void 0 || (_infoHealthRecord$boo7 = _infoHealthRecord$boo7.HealthFacility) === null || _infoHealthRecord$boo7 === void 0 ? void 0 : _infoHealthRecord$boo7.address,
                diagnosis: infoHealthRecord === null || infoHealthRecord === void 0 || (_infoHealthRecord$hea = infoHealthRecord.healthRecord) === null || _infoHealthRecord$hea === void 0 ? void 0 : _infoHealthRecord$hea.diagnosis,
                note: infoHealthRecord === null || infoHealthRecord === void 0 || (_infoHealthRecord$hea2 = infoHealthRecord.healthRecord) === null || _infoHealthRecord$hea2 === void 0 ? void 0 : _infoHealthRecord$hea2.note
              };
              __dirname = path.resolve();
              srcHtml = "/src/views/template/email_result_booking.html";
              filePath = path.join(__dirname, srcHtml);
              console.log("\n\n\n\n\nfiles", files);
              filePdfs = files.map(function (f) {
                return {
                  filename: f.originalname,
                  content: f.buffer
                };
              });
              _context19.next = 36;
              return (0, _untils.sendEmail)({
                subject: title,
                receiveEmail: emailDestination || (infoHealthRecord === null || infoHealthRecord === void 0 || (_infoHealthRecord$Pat = infoHealthRecord.Patient) === null || _infoHealthRecord$Pat === void 0 ? void 0 : _infoHealthRecord$Pat.email),
                replacements: replacements,
                srcHtml: filePath,
                fileAttachments: filePdfs
              });
            case 36:
              data = _context19.sent;
              return _context19.abrupt("return", {
                statusCode: 200,
                msg: "Hoàn tất khám",
                data: data
              });
            case 40:
              _context19.prev = 40;
              _context19.t0 = _context19["catch"](26);
              console.log(_context19.t0);
              return _context19.abrupt("return", {
                statusCode: 500,
                msg: (_context19.t0 === null || _context19.t0 === void 0 ? void 0 : _context19.t0.message) || "Lỗi lấy thông tin vui lòng thử lại."
              });
            case 44:
            case "end":
              return _context19.stop();
          }
        }, _callee19, this, [[26, 40]]);
      }));
      function editHealthRecordDone(_x19) {
        return _editHealthRecordDone.apply(this, arguments);
      }
      return editHealthRecordDone;
    }() // [GET]
  }, {
    key: "getChartRevenue",
    value: function () {
      var _getChartRevenue = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(_ref23) {
        var staffId, year, docs, healthRecord, endData, data, array;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              staffId = _ref23.staffId, year = _ref23.year;
              _context21.next = 3;
              return _models["default"].HealthRecord.findAll({
                raw: true,
                where: {
                  statusCode: _defineProperty({}, _sequelize.Op.eq, "S3")
                },
                include: [{
                  model: _models["default"].Booking,
                  where: _defineProperty({}, _sequelize.Op.and, _models.Sequelize.where(_models.Sequelize.fn("date_part", "year", _models.Sequelize.col("createdAt")), year)),
                  include: [{
                    model: _models["default"].HealthExaminationSchedule,
                    include: [{
                      model: _models["default"].Working,
                      where: {
                        staffId: staffId
                      }
                    }]
                  }]
                }],
                nest: true
              });
            case 3:
              docs = _context21.sent;
              healthRecord = docs.filter(function (doc) {
                var _doc$Booking;
                return ((_doc$Booking = doc.Booking) === null || _doc$Booking === void 0 || (_doc$Booking = _doc$Booking.HealthExaminationSchedule) === null || _doc$Booking === void 0 || (_doc$Booking = _doc$Booking.Working) === null || _doc$Booking === void 0 ? void 0 : _doc$Booking.staffId) !== null;
              });
              endData = healthRecord.map( /*#__PURE__*/function () {
                var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(record) {
                  var workRoomDoc;
                  return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                    while (1) switch (_context20.prev = _context20.next) {
                      case 0:
                        _context20.next = 2;
                        return _models["default"].WorkRoom.findOne({
                          raw: true,
                          where: {
                            applyDate: _defineProperty({}, _sequelize.Op.lte, record.Booking.createdAt)
                          },
                          include: [{
                            model: _models["default"].Working,
                            where: {
                              id: record.Booking.HealthExaminationSchedule.Working.id
                            }
                          }],
                          order: [["applyDate", "desc"]],
                          nest: true
                        });
                      case 2:
                        workRoomDoc = _context20.sent;
                        return _context20.abrupt("return", _objectSpread({
                          workRoom: workRoomDoc
                        }, record));
                      case 4:
                      case "end":
                        return _context20.stop();
                    }
                  }, _callee20);
                }));
                return function (_x21) {
                  return _ref24.apply(this, arguments);
                };
              }());
              _context21.next = 8;
              return Promise.all(endData);
            case 8:
              data = _context21.sent;
              array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              data.map(function (r) {
                var month = new Date(r.workRoom.Working.createdAt).getMonth();
                array[month] += r.workRoom.checkUpPrice;
              });
              return _context21.abrupt("return", {
                statusCode: 0,
                msg: "ok",
                data: array
              });
            case 12:
            case "end":
              return _context21.stop();
          }
        }, _callee21);
      }));
      function getChartRevenue(_x20) {
        return _getChartRevenue.apply(this, arguments);
      }
      return getChartRevenue;
    }()
  }, {
    key: "getChartAccount",
    value: function () {
      var _getChartAccount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(_ref25) {
        var year, docs, array;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              year = _ref25.year;
              _context22.next = 3;
              return _models["default"].User.findAll({
                raw: true,
                where: _defineProperty({}, _sequelize.Op.and, _models.Sequelize.where(_models.Sequelize.fn("date_part", "year", _models.Sequelize.col("createdAt")), year))
              });
            case 3:
              docs = _context22.sent;
              array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              docs.map(function (r) {
                var month = new Date(r.createdAt).getMonth();
                array[month] += 1;
              });
              return _context22.abrupt("return", {
                statusCode: 0,
                msg: "ok",
                data: array
              });
            case 7:
            case "end":
              return _context22.stop();
          }
        }, _callee22);
      }));
      function getChartAccount(_x22) {
        return _getChartAccount.apply(this, arguments);
      }
      return getChartAccount;
    }()
  }, {
    key: "getChartRecord",
    value: function () {
      var _getChartRecord = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(_ref26) {
        var year, docs, array, arrayCancel;
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              year = _ref26.year;
              _context23.next = 3;
              return _models["default"].HealthRecord.findAll({
                raw: true,
                include: [{
                  model: _models["default"].Booking,
                  where: _defineProperty({}, _sequelize.Op.and, _models.Sequelize.where(_models.Sequelize.fn("date_part", "year", _models.Sequelize.col("createdAt")), year)),
                  include: [{
                    model: _models["default"].HealthExaminationSchedule
                  }]
                }],
                nest: true
              });
            case 3:
              docs = _context23.sent;
              // return {
              //   statusCode: 0,
              //   data: docs,
              // };
              array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              arrayCancel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              docs.map(function (r) {
                var month = new Date(r.Booking.HealthExaminationSchedule.date).getMonth();
                if (r.statusCode == "S3") {
                  array[month] += 1;
                } else {
                  arrayCancel[month] += 1;
                }
              });
              return _context23.abrupt("return", {
                statusCode: 0,
                msg: "ok",
                data: {
                  success: array,
                  fail: arrayCancel
                }
              });
            case 8:
            case "end":
              return _context23.stop();
          }
        }, _callee23);
      }));
      function getChartRecord(_x23) {
        return _getChartRecord.apply(this, arguments);
      }
      return getChartRecord;
    }()
  }, {
    key: "deletePatient",
    value: function () {
      var _deletePatient = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(_ref27) {
        var id, data;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              id = _ref27.id;
              _context24.next = 3;
              return _models["default"].Patient.destroy({
                where: {
                  id: id
                }
              });
            case 3:
              data = _context24.sent;
              if (!(data > 0)) {
                _context24.next = 6;
                break;
              }
              return _context24.abrupt("return", {
                statusCode: 0,
                msg: "Xóa thành công.",
                data: data
              });
            case 6:
              return _context24.abrupt("return", {
                statusCode: 2,
                msg: "Tài liệu này chưa được xóa hoặc không tồn tại."
              });
            case 7:
            case "end":
              return _context24.stop();
          }
        }, _callee24);
      }));
      function deletePatient(_x24) {
        return _deletePatient.apply(this, arguments);
      }
      return deletePatient;
    }()
  }, {
    key: "createOrUpdatePatient",
    value: function () {
      var _createOrUpdatePatient = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(data, option) {
        var copyFromPatientProfileId, patientProfileDocCopy, healthFacilityId, _workingDoc$data3, workingDoc, _patientProfileExiste, objectHandle, patientProfileExisted, patientProfileDoc, _patientProfileExiste2, _objectHandle, _patientProfileExisted, countUpdated;
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) switch (_context25.prev = _context25.next) {
            case 0:
              copyFromPatientProfileId = option.copyFromPatientProfileId;
              if (!copyFromPatientProfileId) {
                _context25.next = 7;
                break;
              }
              _context25.next = 4;
              return _models["default"].PatientProfile.findOne({
                where: {
                  id: copyFromPatientProfileId
                },
                raw: true
              });
            case 4:
              patientProfileDocCopy = _context25.sent;
              if (patientProfileDocCopy) {
                _context25.next = 7;
                break;
              }
              return _context25.abrupt("return", {
                statusCode: 400,
                msg: "Kh\xF4ng t\xECm th\u1EA5y h\u1ED3 s\u01A1 b\u1EC7nh nh\u1EADn n\xE0y."
              });
            case 7:
              healthFacilityId = "";
              if (!(data !== null && data !== void 0 && data.healthFacilityId)) {
                _context25.next = 12;
                break;
              }
              healthFacilityId = data === null || data === void 0 ? void 0 : data.healthFacilityId;
              _context25.next = 18;
              break;
            case 12:
              _context25.next = 14;
              return _workServices["default"].getWorking({
                doctorId: data.staffId
              });
            case 14:
              workingDoc = _context25.sent;
              if (!(!(workingDoc !== null && workingDoc !== void 0 && workingDoc.statusCode) == 0 && !workingDoc.data.rows[0])) {
                _context25.next = 17;
                break;
              }
              return _context25.abrupt("return", {
                statusCode: 400,
                msg: "Không tìm thấy công tác của của nhân viên này."
              });
            case 17:
              healthFacilityId = workingDoc === null || workingDoc === void 0 || (_workingDoc$data3 = workingDoc.data) === null || _workingDoc$data3 === void 0 || (_workingDoc$data3 = _workingDoc$data3.rows) === null || _workingDoc$data3 === void 0 ? void 0 : _workingDoc$data3[0].healthFacilityId;
            case 18:
              if (data.id) {
                _context25.next = 36;
                break;
              }
              //Check create new from cpy
              objectHandle = {};
              if (copyFromPatientProfileId) {
                objectHandle = {
                  fullName: patientProfileDocCopy.fullName,
                  phone: patientProfileDocCopy.phone,
                  address: patientProfileDocCopy.address,
                  profession: patientProfileDocCopy.profession,
                  email: patientProfileDocCopy.email,
                  birthDay: patientProfileDocCopy.birthDay,
                  gender: patientProfileDocCopy.gender,
                  cccd: patientProfileDocCopy.cccd,
                  nation: patientProfileDocCopy.nation,
                  addressCode: patientProfileDocCopy.addressCode,
                  healthFacilityId: healthFacilityId
                };
              } else {
                objectHandle = {
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
                  healthFacilityId: healthFacilityId
                };
              }

              // Check if the profile has already been created
              _context25.next = 23;
              return _models["default"].Patient.findOne({
                where: {
                  cccd: objectHandle.cccd,
                  healthFacilityId: healthFacilityId
                },
                include: [_models["default"].HealthFacility],
                nest: true,
                raw: true
              });
            case 23:
              patientProfileExisted = _context25.sent;
              if (!patientProfileExisted) {
                _context25.next = 26;
                break;
              }
              return _context25.abrupt("return", {
                statusCode: 1,
                msg: "B\u1EC7nh nh\xE2n n\xE0y \u0111\xE3 t\u1ED3n t\u1EA1i \u1EDF ".concat(patientProfileExisted === null || patientProfileExisted === void 0 || (_patientProfileExiste = patientProfileExisted.HealthFacility) === null || _patientProfileExiste === void 0 ? void 0 : _patientProfileExiste.name, "."),
                data: patientProfileExisted
              });
            case 26:
              _context25.next = 28;
              return _models["default"].Patient.create(objectHandle);
            case 28:
              patientProfileDoc = _context25.sent;
              if (!patientProfileDoc) {
                _context25.next = 33;
                break;
              }
              return _context25.abrupt("return", {
                statusCode: 0,
                msg: "Tạo bệnh nhân thành công.",
                data: patientProfileDoc
              });
            case 33:
              return _context25.abrupt("return", {
                statusCode: 4,
                msg: "Lỗi tạo bệnh nhân."
              });
            case 34:
              _context25.next = 51;
              break;
            case 36:
              // Update patient profile
              // Check if the profile has already been created
              _objectHandle = {};
              if (copyFromPatientProfileId) {
                _objectHandle = {
                  fullName: patientProfileDocCopy.fullName,
                  phone: patientProfileDocCopy.phone,
                  address: patientProfileDocCopy.address,
                  profession: patientProfileDocCopy.profession,
                  email: patientProfileDocCopy.email,
                  birthDay: patientProfileDocCopy.birthDay,
                  gender: patientProfileDocCopy.gender,
                  cccd: patientProfileDocCopy.cccd,
                  nation: patientProfileDocCopy.nation,
                  addressCode: patientProfileDocCopy.addressCode,
                  healthFacilityId: healthFacilityId
                };
              } else {
                _objectHandle = {
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
                  healthFacilityId: healthFacilityId
                };
              }
              _context25.next = 40;
              return _models["default"].Patient.findOne({
                where: {
                  cccd: _objectHandle.cccd,
                  healthFacilityId: healthFacilityId,
                  id: _defineProperty({}, _sequelize.Op.not, data.id)
                },
                nest: true,
                include: [_models["default"].HealthFacility],
                raw: true
              });
            case 40:
              _patientProfileExisted = _context25.sent;
              if (!_patientProfileExisted) {
                _context25.next = 43;
                break;
              }
              return _context25.abrupt("return", {
                statusCode: 1,
                msg: "B\u1EC7nh nh\xE2n n\xE0y \u0111\xE3 t\u1ED3n t\u1EA1i \u1EDF ".concat(_patientProfileExisted === null || _patientProfileExisted === void 0 || (_patientProfileExiste2 = _patientProfileExisted.HealthFacility) === null || _patientProfileExiste2 === void 0 ? void 0 : _patientProfileExiste2.name, "."),
                data: _patientProfileExisted
              });
            case 43:
              _context25.next = 45;
              return _models["default"].Patient.update(_objectHandle, {
                where: {
                  id: data.id
                }
              });
            case 45:
              countUpdated = _context25.sent;
              if (!(countUpdated[0] > 0)) {
                _context25.next = 50;
                break;
              }
              return _context25.abrupt("return", {
                statusCode: 0,
                msg: "Cập nhật thành công bệnh nhân."
              });
            case 50:
              return _context25.abrupt("return", {
                statusCode: 4,
                msg: "Không tìm thấy bệnh nhân."
              });
            case 51:
            case "end":
              return _context25.stop();
          }
        }, _callee25);
      }));
      function createOrUpdatePatient(_x25, _x26) {
        return _createOrUpdatePatient.apply(this, arguments);
      }
      return createOrUpdatePatient;
    }() // Patient
  }, {
    key: "getPatient",
    value: function () {
      var _getPatient = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(_ref28) {
        var _ref28$offset, offset, _ref28$limit, limit, patientId, name, healthFacilityId, cccd, staffId, _workingDoc$data4, _workingDoc$data5, workingDoc, wherePatient, docs;
        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              _ref28$offset = _ref28.offset, offset = _ref28$offset === void 0 ? 0 : _ref28$offset, _ref28$limit = _ref28.limit, limit = _ref28$limit === void 0 ? 10 : _ref28$limit, patientId = _ref28.patientId, name = _ref28.name, healthFacilityId = _ref28.healthFacilityId, cccd = _ref28.cccd, staffId = _ref28.staffId;
              if (!staffId) {
                _context26.next = 8;
                break;
              }
              _context26.next = 4;
              return _workServices["default"].getWorking({
                doctorId: staffId
              });
            case 4:
              workingDoc = _context26.sent;
              if (!(!(workingDoc !== null && workingDoc !== void 0 && workingDoc.statusCode) == 0 && !(workingDoc !== null && workingDoc !== void 0 && (_workingDoc$data4 = workingDoc.data) !== null && _workingDoc$data4 !== void 0 && _workingDoc$data4.rows[0]))) {
                _context26.next = 7;
                break;
              }
              return _context26.abrupt("return", {
                statusCode: 400,
                msg: "Không tìm thấy công tác của của nhân viên này."
              });
            case 7:
              healthFacilityId = workingDoc === null || workingDoc === void 0 || (_workingDoc$data5 = workingDoc.data) === null || _workingDoc$data5 === void 0 || (_workingDoc$data5 = _workingDoc$data5.rows) === null || _workingDoc$data5 === void 0 ? void 0 : _workingDoc$data5[0].healthFacilityId;
            case 8:
              wherePatient = {};
              if (patientId) {
                wherePatient.id = patientId;
              }
              if (name) {
                wherePatient.fullName = name;
              }
              if (healthFacilityId) {
                wherePatient.healthFacilityId = healthFacilityId;
              }
              if (cccd) {
                wherePatient.cccd = cccd;
              }
              _context26.next = 15;
              return _models["default"].Patient.findAndCountAll({
                raw: true,
                where: wherePatient,
                offset: offset,
                limit: limit,
                include: [_models["default"].HealthFacility],
                order: [["createdAt", "desc"]],
                nest: true
              });
            case 15:
              docs = _context26.sent;
              return _context26.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread({}, docs)
              });
            case 17:
            case "end":
              return _context26.stop();
          }
        }, _callee26);
      }));
      function getPatient(_x27) {
        return _getPatient.apply(this, arguments);
      }
      return getPatient;
    }() // Service Details
  }, {
    key: "createOrUpdateServiceDetails",
    value: function () {
      var _createOrUpdateServiceDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(_ref29) {
        var id, descriptionResult, healthRecordId, hospitalServiceId, _yield$Promise$all7, _yield$Promise$all8, healthRecordDoc, hospitalServicesDoc, serviceDetailsExisted, serviceDetailsDoc, serviceDetailsUpdate;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) switch (_context27.prev = _context27.next) {
            case 0:
              id = _ref29.id, descriptionResult = _ref29.descriptionResult, healthRecordId = _ref29.healthRecordId, hospitalServiceId = _ref29.hospitalServiceId;
              if (id) {
                _context27.next = 22;
                break;
              }
              _context27.next = 4;
              return Promise.all([_models["default"].HealthRecord.findOne({
                where: {
                  id: healthRecordId
                },
                raw: true
              }), _models["default"].HospitalService.findOne({
                where: {
                  id: hospitalServiceId
                },
                raw: true
              })]);
            case 4:
              _yield$Promise$all7 = _context27.sent;
              _yield$Promise$all8 = _slicedToArray(_yield$Promise$all7, 2);
              healthRecordDoc = _yield$Promise$all8[0];
              hospitalServicesDoc = _yield$Promise$all8[1];
              if (!(!healthRecordDoc || !hospitalServicesDoc)) {
                _context27.next = 10;
                break;
              }
              return _context27.abrupt("return", {
                statusCode: 404,
                msg: "Không tìm phiếu khám hoặc dịch vụ ở bệnh viện này."
              });
            case 10:
              _context27.next = 12;
              return _models["default"].ServiceDetail.findOne({
                where: {
                  healthRecordId: healthRecordId,
                  hospitalServiceId: hospitalServiceId
                },
                raw: true
              });
            case 12:
              serviceDetailsExisted = _context27.sent;
              if (!serviceDetailsExisted) {
                _context27.next = 15;
                break;
              }
              return _context27.abrupt("return", {
                statusCode: 404,
                msg: "Dịch vụ đã thêm.",
                data: serviceDetailsExisted
              });
            case 15:
              _context27.next = 17;
              return _models["default"].ServiceDetail.create({
                healthRecordId: healthRecordId,
                hospitalServiceId: hospitalServiceId
              });
            case 17:
              serviceDetailsDoc = _context27.sent;
              if (!serviceDetailsDoc) {
                _context27.next = 20;
                break;
              }
              return _context27.abrupt("return", {
                statusCode: 200,
                msg: "Thêm dịch vụ thành công.",
                data: serviceDetailsDoc
              });
            case 20:
              _context27.next = 30;
              break;
            case 22:
              _context27.next = 24;
              return _models["default"].ServiceDetail.update({
                descriptionResult: descriptionResult
              }, {
                where: {
                  id: id
                }
              });
            case 24:
              serviceDetailsUpdate = _context27.sent;
              if (!(serviceDetailsUpdate[0] > 0)) {
                _context27.next = 29;
                break;
              }
              return _context27.abrupt("return", {
                statusCode: 0,
                msg: "Cập nhật kết quả thành công."
              });
            case 29:
              return _context27.abrupt("return", {
                statusCode: 400,
                msg: "Không tìm thấy dịch vụ."
              });
            case 30:
              return _context27.abrupt("return", {
                statusCode: 404,
                msg: "Đã có lỗi xảy ra, vui lòng thử lại."
              });
            case 31:
            case "end":
              return _context27.stop();
          }
        }, _callee27);
      }));
      function createOrUpdateServiceDetails(_x28) {
        return _createOrUpdateServiceDetails.apply(this, arguments);
      }
      return createOrUpdateServiceDetails;
    }()
  }, {
    key: "getServiceDetails",
    value: function () {
      var _getServiceDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(_ref30) {
        var id, healthRecordId, hospitalServiceId, where, docs;
        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) switch (_context28.prev = _context28.next) {
            case 0:
              id = _ref30.id, healthRecordId = _ref30.healthRecordId, hospitalServiceId = _ref30.hospitalServiceId;
              where = {};
              if (id) {
                where.id = id;
              }
              if (healthRecordId) {
                where.healthRecordId = healthRecordId;
              }
              if (hospitalServiceId) {
                where.hospitalServiceId = hospitalServiceId;
              }
              _context28.next = 7;
              return _models["default"].ServiceDetail.findAll({
                raw: true,
                where: where,
                include: [_models["default"].HealthRecord, {
                  model: _models["default"].HospitalService,
                  include: [_models["default"].ExaminationService]
                }],
                order: [["createdAt", "desc"]],
                nest: true
              });
            case 7:
              docs = _context28.sent;
              return _context28.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: docs
              });
            case 9:
            case "end":
              return _context28.stop();
          }
        }, _callee28);
      }));
      function getServiceDetails(_x29) {
        return _getServiceDetails.apply(this, arguments);
      }
      return getServiceDetails;
    }()
  }, {
    key: "deleteServiceDetails",
    value: function () {
      var _deleteServiceDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(_ref31) {
        var id, data;
        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) switch (_context29.prev = _context29.next) {
            case 0:
              id = _ref31.id;
              _context29.next = 3;
              return _models["default"].ServiceDetail.destroy({
                where: {
                  id: id
                }
              });
            case 3:
              data = _context29.sent;
              if (!(data > 0)) {
                _context29.next = 6;
                break;
              }
              return _context29.abrupt("return", {
                statusCode: 0,
                msg: "Xóa thành công.",
                data: data
              });
            case 6:
              return _context29.abrupt("return", {
                statusCode: 2,
                msg: "Tài liệu này chưa được xóa hoặc không tồn tại."
              });
            case 7:
            case "end":
              return _context29.stop();
          }
        }, _callee29);
      }));
      function deleteServiceDetails(_x30) {
        return _deleteServiceDetails.apply(this, arguments);
      }
      return deleteServiceDetails;
    }() // Prescription Details
  }, {
    key: "createOrUpdatePrescriptionDetails",
    value: function () {
      var _createOrUpdatePrescriptionDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(_ref32) {
        var id, cedicineId, healthRecordId, quantity, usage, unit, morning, noon, afterNoon, evening, _yield$Promise$all9, _yield$Promise$all10, cedicineDoc, healthRecordDoc, serviceDetailsExisted, serviceDetailsDoc, _serviceDetailsExisted, serviceDetailsUpdate;
        return _regeneratorRuntime().wrap(function _callee30$(_context30) {
          while (1) switch (_context30.prev = _context30.next) {
            case 0:
              id = _ref32.id, cedicineId = _ref32.cedicineId, healthRecordId = _ref32.healthRecordId, quantity = _ref32.quantity, usage = _ref32.usage, unit = _ref32.unit, morning = _ref32.morning, noon = _ref32.noon, afterNoon = _ref32.afterNoon, evening = _ref32.evening;
              if (id) {
                _context30.next = 22;
                break;
              }
              _context30.next = 4;
              return Promise.all([_models["default"].Cedicine.findOne({
                where: {
                  id: cedicineId
                },
                raw: true
              }), _models["default"].HealthRecord.findOne({
                where: {
                  id: healthRecordId
                },
                raw: true
              })]);
            case 4:
              _yield$Promise$all9 = _context30.sent;
              _yield$Promise$all10 = _slicedToArray(_yield$Promise$all9, 2);
              cedicineDoc = _yield$Promise$all10[0];
              healthRecordDoc = _yield$Promise$all10[1];
              if (!(!cedicineDoc || !healthRecordDoc)) {
                _context30.next = 10;
                break;
              }
              return _context30.abrupt("return", {
                statusCode: 404,
                msg: "Không tìm phiếu khám hoặc thuốc."
              });
            case 10:
              _context30.next = 12;
              return _models["default"].PrescriptionDetail.findOne({
                where: {
                  cedicineId: cedicineId,
                  healthRecordId: healthRecordId
                },
                raw: true
              });
            case 12:
              serviceDetailsExisted = _context30.sent;
              if (!serviceDetailsExisted) {
                _context30.next = 15;
                break;
              }
              return _context30.abrupt("return", {
                statusCode: 404,
                msg: "Thuốc đã thêm.",
                data: serviceDetailsExisted
              });
            case 15:
              _context30.next = 17;
              return _models["default"].PrescriptionDetail.create({
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
            case 17:
              serviceDetailsDoc = _context30.sent;
              if (!serviceDetailsDoc) {
                _context30.next = 20;
                break;
              }
              return _context30.abrupt("return", {
                statusCode: 200,
                msg: "Thêm thuốc thành công.",
                data: serviceDetailsDoc
              });
            case 20:
              _context30.next = 35;
              break;
            case 22:
              _context30.next = 24;
              return _models["default"].PrescriptionDetail.findOne({
                where: {
                  cedicineId: cedicineId,
                  healthRecordId: healthRecordId,
                  id: _defineProperty({}, _sequelize.Op.not, id)
                },
                include: [_models["default"].Cedicine],
                raw: true,
                nest: true
              });
            case 24:
              _serviceDetailsExisted = _context30.sent;
              if (!_serviceDetailsExisted) {
                _context30.next = 27;
                break;
              }
              return _context30.abrupt("return", {
                statusCode: 201,
                msg: _serviceDetailsExisted.Cedicine.name + " đã được thêm vào, hãy cập nhật thuốc này."
              });
            case 27:
              _context30.next = 29;
              return _models["default"].PrescriptionDetail.update({
                cedicineId: cedicineId,
                healthRecordId: healthRecordId,
                quantity: quantity,
                usage: usage,
                unit: unit,
                morning: morning,
                noon: noon,
                afterNoon: afterNoon,
                evening: evening
              }, {
                where: {
                  id: id
                }
              });
            case 29:
              serviceDetailsUpdate = _context30.sent;
              if (!(serviceDetailsUpdate[0] > 0)) {
                _context30.next = 34;
                break;
              }
              return _context30.abrupt("return", {
                statusCode: 200,
                msg: "Đã cập nhật đơn thuốc."
              });
            case 34:
              return _context30.abrupt("return", {
                statusCode: 400,
                msg: "Không tìm thấy loại thuốc này."
              });
            case 35:
              return _context30.abrupt("return", {
                statusCode: 404,
                msg: "Đã có lỗi xảy ra, vui lòng thử lại."
              });
            case 36:
            case "end":
              return _context30.stop();
          }
        }, _callee30);
      }));
      function createOrUpdatePrescriptionDetails(_x31) {
        return _createOrUpdatePrescriptionDetails.apply(this, arguments);
      }
      return createOrUpdatePrescriptionDetails;
    }()
  }, {
    key: "getPrescriptionDetails",
    value: function () {
      var _getPrescriptionDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(_ref33) {
        var id, healthRecordId, cedicineId, where, docs;
        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) switch (_context31.prev = _context31.next) {
            case 0:
              id = _ref33.id, healthRecordId = _ref33.healthRecordId, cedicineId = _ref33.cedicineId;
              where = {};
              if (id) {
                where.id = id;
              }
              if (healthRecordId) {
                where.healthRecordId = healthRecordId;
              }
              if (cedicineId) {
                where.cedicineId = cedicineId;
              }
              _context31.next = 7;
              return _models["default"].PrescriptionDetail.findAll({
                raw: true,
                where: where,
                include: [_models["default"].HealthRecord, {
                  model: _models["default"].Cedicine
                }],
                order: [["createdAt", "desc"]],
                nest: true
              });
            case 7:
              docs = _context31.sent;
              return _context31.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: docs
              });
            case 9:
            case "end":
              return _context31.stop();
          }
        }, _callee31);
      }));
      function getPrescriptionDetails(_x32) {
        return _getPrescriptionDetails.apply(this, arguments);
      }
      return getPrescriptionDetails;
    }()
  }, {
    key: "deletePrescriptionDetails",
    value: function () {
      var _deletePrescriptionDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(_ref34) {
        var id, data;
        return _regeneratorRuntime().wrap(function _callee32$(_context32) {
          while (1) switch (_context32.prev = _context32.next) {
            case 0:
              id = _ref34.id;
              _context32.next = 3;
              return _models["default"].PrescriptionDetail.destroy({
                where: {
                  id: id
                }
              });
            case 3:
              data = _context32.sent;
              if (!(data > 0)) {
                _context32.next = 6;
                break;
              }
              return _context32.abrupt("return", {
                statusCode: 0,
                msg: "Xóa thành công.",
                data: data
              });
            case 6:
              return _context32.abrupt("return", {
                statusCode: 2,
                msg: "Tài liệu này chưa được xóa hoặc không tồn tại."
              });
            case 7:
            case "end":
              return _context32.stop();
          }
        }, _callee32);
      }));
      function deletePrescriptionDetails(_x33) {
        return _deletePrescriptionDetails.apply(this, arguments);
      }
      return deletePrescriptionDetails;
    }()
  }, {
    key: "calculatorReviewDoctor",
    value: function () {
      var _calculatorReviewDoctor = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(_ref35) {
        var staffId, whereQueryReview, revs, sumReview, avg, star5, star4, star3, star2, star1, views;
        return _regeneratorRuntime().wrap(function _callee33$(_context33) {
          while (1) switch (_context33.prev = _context33.next) {
            case 0:
              staffId = _ref35.staffId;
              whereQueryReview = {};
              if (staffId) {
                whereQueryReview.staffId = staffId;
              }
              _context33.next = 5;
              return _models["default"].Review.findAll({
                raw: true,
                where: whereQueryReview,
                order: [["createdAt", "desc"]],
                include: [_models["default"].Staff, _models["default"].User],
                nest: true
              });
            case 5:
              revs = _context33.sent;
              sumReview = revs.reduce(function (init, value) {
                return init + value.starNumber;
              }, 0);
              avg = sumReview / (revs.length || 1);
              star5 = revs.filter(function (re) {
                return re.starNumber == 5;
              }).length;
              star4 = revs.filter(function (re) {
                return re.starNumber == 4;
              }).length;
              star3 = revs.filter(function (re) {
                return re.starNumber == 3;
              }).length;
              star2 = revs.filter(function (re) {
                return re.starNumber == 2;
              }).length;
              star1 = revs.filter(function (re) {
                return re.starNumber == 1;
              }).length;
              views = {
                countReview: revs.length,
                avg: avg == 0 ? 5 : Number.parseFloat(avg.toFixed(2)),
                star: {
                  star5: star5,
                  star4: star4,
                  star3: star3,
                  star2: star2,
                  star1: star1
                }
              };
              return _context33.abrupt("return", views);
            case 15:
            case "end":
              return _context33.stop();
          }
        }, _callee33);
      }));
      function calculatorReviewDoctor(_x34) {
        return _calculatorReviewDoctor.apply(this, arguments);
      }
      return calculatorReviewDoctor;
    }()
  }, {
    key: "deleteSchedule",
    value: function () {
      var _deleteSchedule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(_ref36) {
        var schedules, bookingExist, _bookingExist$HealthE, _bookingExist$HealthE2, data;
        return _regeneratorRuntime().wrap(function _callee34$(_context34) {
          while (1) switch (_context34.prev = _context34.next) {
            case 0:
              schedules = _ref36.schedules;
              _context34.next = 3;
              return _models["default"].Booking.findOne({
                where: {
                  healthExaminationScheduleId: _defineProperty({}, _sequelize.Op["in"], schedules)
                },
                include: [{
                  model: _models["default"].HealthExaminationSchedule,
                  include: [{
                    model: _models["default"].Code,
                    as: "TimeCode"
                  }]
                }],
                nest: true,
                raw: true
              });
            case 3:
              bookingExist = _context34.sent;
              if (!bookingExist) {
                _context34.next = 6;
                break;
              }
              return _context34.abrupt("return", {
                statusCode: 400,
                msg: "C\xF3 ng\u01B0\u1EDDi \u0111\u0103ng k\xFD l\u1ECBch ".concat(bookingExist === null || bookingExist === void 0 || (_bookingExist$HealthE = bookingExist.HealthExaminationSchedule) === null || _bookingExist$HealthE === void 0 ? void 0 : _bookingExist$HealthE.date, " / ").concat(bookingExist === null || bookingExist === void 0 || (_bookingExist$HealthE2 = bookingExist.HealthExaminationSchedule) === null || _bookingExist$HealthE2 === void 0 || (_bookingExist$HealthE2 = _bookingExist$HealthE2.TimeCode) === null || _bookingExist$HealthE2 === void 0 ? void 0 : _bookingExist$HealthE2.value, "  vui l\xF2ng li\xEAn h\u1EC7 v\u1EDBi ng\u01B0\u1EDDi \u0111\u1EB7t l\u1ECBch \u0111\u1EC3 h\u1EE7y l\u1ECBch!"),
                data: bookingExist
              });
            case 6:
              _context34.next = 8;
              return _models["default"].HealthExaminationSchedule.destroy({
                where: {
                  id: _defineProperty({}, _sequelize.Op["in"], schedules)
                }
              });
            case 8:
              data = _context34.sent;
              if (!(data > 0)) {
                _context34.next = 11;
                break;
              }
              return _context34.abrupt("return", {
                statusCode: 0,
                msg: "Xóa thành công.",
                data: data
              });
            case 11:
              return _context34.abrupt("return", {
                statusCode: 2,
                msg: "Tài liệu này chưa được xóa hoặc không tồn tại."
              });
            case 12:
            case "end":
              return _context34.stop();
          }
        }, _callee34);
      }));
      function deleteSchedule(_x35) {
        return _deleteSchedule.apply(this, arguments);
      }
      return deleteSchedule;
    }()
  }]);
  return StaffServices;
}();
var _default = new StaffServices();
exports["default"] = _default;