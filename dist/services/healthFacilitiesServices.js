"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _models = _interopRequireWildcard(require("../app/models"));
var _uuid = require("uuid");
var _untils = require("../untils");
var _userServices = _interopRequireDefault(require("./userServices"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
var healthFacilitiesServices = /*#__PURE__*/function () {
  function healthFacilitiesServices() {
    _classCallCheck(this, healthFacilitiesServices);
  }
  _createClass(healthFacilitiesServices, [{
    key: "createTypeHealthFacility",
    value: // create type health facility
    function () {
      var _createTypeHealthFacility = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var name, existedName, typeHealthFacilityDoc;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              name = _ref.name;
              _context.next = 3;
              return _models["default"].TypeHealthFacility.findOne({
                where: {
                  name: name
                },
                raw: true
              });
            case 3:
              existedName = _context.sent;
              if (!existedName) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return", {
                statusCode: 2,
                msg: "Loại bệnh viện này đã tồn tại."
              });
            case 6:
              _context.next = 8;
              return _models["default"].TypeHealthFacility.create({
                name: name
              });
            case 8:
              typeHealthFacilityDoc = _context.sent;
              if (!typeHealthFacilityDoc) {
                _context.next = 11;
                break;
              }
              return _context.abrupt("return", {
                statusCode: 0,
                msg: "Tạo thành công."
              });
            case 11:
              return _context.abrupt("return", {
                statusCode: 1,
                msg: "Tạo thất bại."
              });
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function createTypeHealthFacility(_x) {
        return _createTypeHealthFacility.apply(this, arguments);
      }
      return createTypeHealthFacility;
    }() // get all type health facilities
  }, {
    key: "getTypeHealthFacilites",
    value: function () {
      var _getTypeHealthFacilites = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var typeHealthFacilityDocs;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _models["default"].TypeHealthFacility.findAll({
                raw: true,
                order: [["createdAt", "desc"]]
              });
            case 2:
              typeHealthFacilityDocs = _context2.sent;
              return _context2.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thành công.",
                data: typeHealthFacilityDocs
              });
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function getTypeHealthFacilites() {
        return _getTypeHealthFacilites.apply(this, arguments);
      }
      return getTypeHealthFacilites;
    }() // update all type health facility
  }, {
    key: "updateTypeHealthFacilites",
    value: function () {
      var _updateTypeHealthFacilites = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref2) {
        var id, name, existedName, typeHealthFacilityDoc;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              id = _ref2.id, name = _ref2.name;
              _context3.next = 3;
              return _models["default"].TypeHealthFacility.findOne({
                where: {
                  name: name,
                  id: _defineProperty({}, _sequelize.Op.ne, id)
                },
                raw: true
              });
            case 3:
              existedName = _context3.sent;
              if (!existedName) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return", {
                statusCode: 2,
                msg: "Loại bệnh viện này đã tồn tại."
              });
            case 6:
              _context3.next = 8;
              return _models["default"].TypeHealthFacility.update({
                name: name
              }, {
                where: {
                  id: id
                }
                // raw: true,
              });
            case 8:
              typeHealthFacilityDoc = _context3.sent;
              if (!((typeHealthFacilityDoc === null || typeHealthFacilityDoc === void 0 ? void 0 : typeHealthFacilityDoc[0]) > 0)) {
                _context3.next = 13;
                break;
              }
              return _context3.abrupt("return", {
                statusCode: 0,
                msg: "Đã lưu thay đổi.",
                data: typeHealthFacilityDoc
              });
            case 13:
              return _context3.abrupt("return", {
                statusCode: 3,
                msg: "Thay đổi chưa được lưu.",
                data: typeHealthFacilityDoc
              });
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function updateTypeHealthFacilites(_x2) {
        return _updateTypeHealthFacilites.apply(this, arguments);
      }
      return updateTypeHealthFacilites;
    }() // delete all type health facility
  }, {
    key: "deleteTypeHealthFacilites",
    value: function () {
      var _deleteTypeHealthFacilites = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_ref3) {
        var id, typeHealthFacilityDocs;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              id = _ref3.id;
              _context4.next = 3;
              return _models["default"].TypeHealthFacility.destroy({
                where: {
                  id: id
                }
              });
            case 3:
              typeHealthFacilityDocs = _context4.sent;
              if (!(typeHealthFacilityDocs > 0)) {
                _context4.next = 6;
                break;
              }
              return _context4.abrupt("return", {
                statusCode: 0,
                msg: "Xóa thành công.",
                data: typeHealthFacilityDocs
              });
            case 6:
              return _context4.abrupt("return", {
                statusCode: 2,
                msg: "Loại này chưa được xóa hãy không tồn tại."
              });
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function deleteTypeHealthFacilites(_x3) {
        return _deleteTypeHealthFacilites.apply(this, arguments);
      }
      return deleteTypeHealthFacilites;
    }() // delete all type health facility
  }, {
    key: "getInfoDashboardTypeAndHealthFacilites",
    value: function () {
      var _getInfoDashboardTypeAndHealthFacilites = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var typeHealthFacilityDocsCount, healthFacilityDocsCount;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _models["default"].TypeHealthFacility.findAndCountAll({
                // offset: 4, => start  pagination
                // limit: 0,
              });
            case 2:
              typeHealthFacilityDocsCount = _context5.sent;
              _context5.next = 5;
              return _models["default"].HealthFacility.findAndCountAll({
                // offset: 4, => start  pagination
                // limit: 0,
              });
            case 5:
              healthFacilityDocsCount = _context5.sent;
              if (!typeHealthFacilityDocsCount) {
                _context5.next = 8;
                break;
              }
              return _context5.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thành công.",
                data: {
                  type: typeHealthFacilityDocsCount,
                  healthFacilities: healthFacilityDocsCount
                }
              });
            case 8:
              return _context5.abrupt("return", {
                statusCode: 2,
                msg: "Lấy thông tin thất bại."
              });
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function getInfoDashboardTypeAndHealthFacilites() {
        return _getInfoDashboardTypeAndHealthFacilites.apply(this, arguments);
      }
      return getInfoDashboardTypeAndHealthFacilites;
    }() // Create Health Facility
  }, {
    key: "createHealthFacility",
    value: function () {
      var _createHealthFacility = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_ref4) {
        var name, address, phone, email, addressCode, typeHealthFacilityId, fileUrls, existedType, doc;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              name = _ref4.name, address = _ref4.address, phone = _ref4.phone, email = _ref4.email, addressCode = _ref4.addressCode, typeHealthFacilityId = _ref4.typeHealthFacilityId, fileUrls = _ref4.fileUrls;
              _context6.next = 3;
              return _models["default"].TypeHealthFacility.findOne({
                where: {
                  id: typeHealthFacilityId
                },
                raw: true
              });
            case 3:
              existedType = _context6.sent;
              if (existedType) {
                _context6.next = 6;
                break;
              }
              return _context6.abrupt("return", {
                statusCode: 2,
                msg: "Loại bệnh viện này không tồn tại."
              });
            case 6:
              _context6.next = 8;
              return _models["default"].HealthFacility.create({
                name: name,
                address: address,
                phone: phone,
                email: email,
                typeHealthFacilityId: typeHealthFacilityId,
                images: fileUrls,
                addressCode: JSON.parse(addressCode)
              });
            case 8:
              doc = _context6.sent;
              if (!doc) {
                _context6.next = 11;
                break;
              }
              return _context6.abrupt("return", {
                statusCode: 0,
                msg: "Tạo thành công.",
                data: doc
              });
            case 11:
              return _context6.abrupt("return", {
                statusCode: 1,
                msg: "Tạo thất bại."
              });
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function createHealthFacility(_x4) {
        return _createHealthFacility.apply(this, arguments);
      }
      return createHealthFacility;
    }()
  }, {
    key: "getHealthFacilityWithEmail",
    value: function () {
      var _getHealthFacilityWithEmail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(_ref5) {
        var _ref5$offset, offset, _ref5$limit, limit, email, whereQuery, healthFacilitiesDocs;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _ref5$offset = _ref5.offset, offset = _ref5$offset === void 0 ? 0 : _ref5$offset, _ref5$limit = _ref5.limit, limit = _ref5$limit === void 0 ? 3 : _ref5$limit, email = _ref5.email;
              whereQuery = {};
              email && (whereQuery.email = _defineProperty({}, _sequelize.Op.substring, email));
              _context7.next = 5;
              return _models["default"].HealthFacility.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                nest: true,
                where: whereQuery,
                include: [{
                  model: _models["default"].TypeHealthFacility,
                  attributes: ["name"]
                }],
                order: [["createdAt", "desc"]]
              });
            case 5:
              healthFacilitiesDocs = _context7.sent;
              return _context7.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, healthFacilitiesDocs), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 7:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function getHealthFacilityWithEmail(_x5) {
        return _getHealthFacilityWithEmail.apply(this, arguments);
      }
      return getHealthFacilityWithEmail;
    }() // Get All Health Facilities
    // if (name) {
    //   const wordsToSearch = removeAccentsAndLowerCase(name)
    //     .split(/\s+/)
    //     .filter(Boolean);
    //   const wordConditions = wordsToSearch.map((word) => ({
    //     [Op.like]: %${word}%,
    //   }));
    //   whereCondition.name = { [Op.and]: wordConditions };
    // }
  }, {
    key: "getHealthFacilities",
    value: function () {
      var _getHealthFacilities = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(_ref6) {
        var _ref6$limit, limit, _ref6$offset, offset, name, address, typeHealthFacilityId, email, id, ward, district, province, whereHealth, whereSumHealth, whereType, arrayAddressFilter, healthFacilitiesDocs, stars;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _ref6$limit = _ref6.limit, limit = _ref6$limit === void 0 ? 10 : _ref6$limit, _ref6$offset = _ref6.offset, offset = _ref6$offset === void 0 ? 0 : _ref6$offset, name = _ref6.name, address = _ref6.address, typeHealthFacilityId = _ref6.typeHealthFacilityId, email = _ref6.email, id = _ref6.id, ward = _ref6.ward, district = _ref6.district, province = _ref6.province;
              whereHealth = {};
              whereSumHealth = {};
              whereType = {}; //type
              if (typeHealthFacilityId) {
                whereType.id = typeHealthFacilityId;
              }

              // health
              if (name) {
                whereHealth.name = (0, _untils.searchLikeDeep)("HealthFacility", "name", name);
                // searchLikeDeep("name", name);
              }

              if (email) {
                whereHealth.email = _defineProperty({}, _sequelize.Op.substring, email);
              }
              if (id) {
                whereHealth.id = id;
              }
              if (address) {
                whereHealth.address = _defineProperty({}, _sequelize.Op.substring, address);
              }
              console.log("whereSumHealth", whereSumHealth);
              arrayAddressFilter = [];
              if (ward) {
                arrayAddressFilter = [ward, district, province];
              } else if (district) {
                arrayAddressFilter = [district, province];
              } else if (province) {
                arrayAddressFilter = [province];
              }
              if (arrayAddressFilter.length > 0) whereHealth.addressCode = _defineProperty({}, _sequelize.Op.contains, arrayAddressFilter);
              _context9.next = 15;
              return _models["default"].HealthFacility.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                nest: true,
                where: whereHealth,
                include: [{
                  model: _models["default"].TypeHealthFacility,
                  // attributes: ["name"],
                  where: whereType
                }],
                order: [["createdAt", "desc"]]
              });
            case 15:
              healthFacilitiesDocs = _context9.sent;
              _context9.next = 18;
              return Promise.all(healthFacilitiesDocs.rows.map( /*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(h) {
                  var starIndex;
                  return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return _userServices["default"].calculatorReviewDoctorById({
                          healthFacilityId: h.id
                        });
                      case 2:
                        starIndex = _context8.sent;
                        return _context8.abrupt("return", _objectSpread(_objectSpread({}, h), {}, {
                          reviewIndex: starIndex.data.reviewIndex
                        }));
                      case 4:
                      case "end":
                        return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function (_x7) {
                  return _ref7.apply(this, arguments);
                };
              }()));
            case 18:
              stars = _context9.sent;
              return _context9.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thành công",
                data: _objectSpread(_objectSpread({}, healthFacilitiesDocs), {}, {
                  rows: stars
                })
              });
            case 20:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      function getHealthFacilities(_x6) {
        return _getHealthFacilities.apply(this, arguments);
      }
      return getHealthFacilities;
    }() // Update Health Facility
  }, {
    key: "updateHealthFacility",
    value: function () {
      var _updateHealthFacility = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(_ref8) {
        var id, name, address, phone, email, addressCode, typeHealthFacilityId, fileUrls, imageOldKeys, existedType, healthFacilityDoc, imgOlds, imgNoChange, imgWillDelete, imgWillDeleteKeys, ok;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              id = _ref8.id, name = _ref8.name, address = _ref8.address, phone = _ref8.phone, email = _ref8.email, addressCode = _ref8.addressCode, typeHealthFacilityId = _ref8.typeHealthFacilityId, fileUrls = _ref8.fileUrls, imageOldKeys = _ref8.imageOldKeys;
              _context10.next = 3;
              return _models["default"].TypeHealthFacility.findOne({
                where: {
                  id: typeHealthFacilityId
                },
                raw: true
              });
            case 3:
              existedType = _context10.sent;
              if (existedType) {
                _context10.next = 6;
                break;
              }
              return _context10.abrupt("return", {
                statusCode: 2,
                msg: "Loại bệnh viện này không tồn tại."
              });
            case 6:
              _context10.next = 8;
              return _models["default"].HealthFacility.findOne({
                where: {
                  id: id
                }
              });
            case 8:
              healthFacilityDoc = _context10.sent;
              if (healthFacilityDoc) {
                _context10.next = 11;
                break;
              }
              return _context10.abrupt("return", {
                statusCode: 2,
                msg: "Không tìm thấy cơ sở này."
              });
            case 11:
              imgOlds = healthFacilityDoc.dataValues.images; // a,b,c
              // a
              imgNoChange = imgOlds.filter(function (imgOld) {
                var key = imgOld.split("/").pop();
                var isExited = (imageOldKeys === null || imageOldKeys === void 0 ? void 0 : imageOldKeys.includes(key)) || false;
                return isExited;
              });
              imgWillDelete = imgOlds.filter(function (i) {
                return !imgNoChange.includes(i);
              });
              imgWillDeleteKeys = imgWillDelete.map(function (imgOld) {
                return {
                  Key: imgOld.split("/").pop()
                };
              });
              imgWillDeleteKeys.length > 0 && (0, _untils.deleteImagesFromS3)(imgWillDeleteKeys);
              _context10.next = 18;
              return healthFacilityDoc.update({
                name: name,
                address: address,
                phone: phone,
                addressCode: JSON.parse(addressCode),
                email: email,
                typeHealthFacilityId: typeHealthFacilityId,
                images: [].concat(_toConsumableArray(imgNoChange), _toConsumableArray(fileUrls))
              });
            case 18:
              _context10.next = 20;
              return healthFacilityDoc.save();
            case 20:
              ok = _context10.sent;
              if (!ok) {
                _context10.next = 23;
                break;
              }
              return _context10.abrupt("return", {
                statusCode: 0,
                msg: "Cập nhật thành công."
              });
            case 23:
              return _context10.abrupt("return", {
                statusCode: 1,
                msg: "Cập nhật thất bại."
              });
            case 24:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function updateHealthFacility(_x8) {
        return _updateHealthFacility.apply(this, arguments);
      }
      return updateHealthFacility;
    }() // Delete a health facility
  }, {
    key: "deleteHealthFacility",
    value: function () {
      var _deleteHealthFacility = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(_ref9) {
        var id, healthFacilityDoc, imgOlds, imageOlds;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              id = _ref9.id;
              _context11.next = 3;
              return _models["default"].HealthFacility.findOne({
                where: {
                  id: id
                }
              });
            case 3:
              healthFacilityDoc = _context11.sent;
              // Delete image on clound s3
              imgOlds = healthFacilityDoc.dataValues.images;
              imageOlds = imgOlds.map(function (imgLink) {
                var key = imgLink.split("/").pop();
                return {
                  Key: key
                };
              });
              imageOlds.length > 0 && (0, _untils.deleteImagesFromS3)(imageOlds);

              // Delete soft updated aboult Luan van ********************************
              // await healthFacilityDoc.destroy();

              // Would will delete the record
              _context11.next = 9;
              return healthFacilityDoc.destroy({
                force: true
              });
            case 9:
              return _context11.abrupt("return", {
                statusCode: 0,
                msg: "Đã xóa thành công."
              });
            case 10:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function deleteHealthFacility(_x9) {
        return _deleteHealthFacility.apply(this, arguments);
      }
      return deleteHealthFacility;
    }() // Create Update room
  }, {
    key: "createOrUpdateRoom",
    value: function () {
      var _createOrUpdateRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(_ref10) {
        var oldRoomNumber, healthFacilityId, roomNumber, capacity, healthFacilityDoc, roomDoc, countWorkRoom, _roomDoc;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              oldRoomNumber = _ref10.oldRoomNumber, healthFacilityId = _ref10.healthFacilityId, roomNumber = _ref10.roomNumber, capacity = _ref10.capacity;
              _context12.next = 3;
              return _models["default"].HealthFacility.findByPk(healthFacilityId);
            case 3:
              healthFacilityDoc = _context12.sent;
              if (healthFacilityDoc) {
                _context12.next = 6;
                break;
              }
              return _context12.abrupt("return", {
                statusCode: 4,
                msg: "Cơ sở y tế không tồn tại."
              });
            case 6:
              if (oldRoomNumber) {
                _context12.next = 17;
                break;
              }
              _context12.next = 9;
              return _models["default"].ClinicRoom.create({
                healthFacilityId: healthFacilityId,
                roomNumber: roomNumber,
                capacity: capacity
              });
            case 9:
              roomDoc = _context12.sent;
              if (!roomDoc) {
                _context12.next = 14;
                break;
              }
              return _context12.abrupt("return", {
                statusCode: 0,
                msg: "Tạo phòng khám thành công.",
                data: roomDoc
              });
            case 14:
              return _context12.abrupt("return", {
                statusCode: 2,
                msg: "Tạo phòng khám thất bại."
              });
            case 15:
              _context12.next = 34;
              break;
            case 17:
              _context12.next = 19;
              return _models["default"].WorkRoom.count({
                where: {
                  ClinicRoomRoomNumber: oldRoomNumber,
                  ClinicRoomHealthFacilityId: healthFacilityId
                },
                group: ["workingId"]
              });
            case 19:
              countWorkRoom = _context12.sent;
              if (!(capacity <= 0)) {
                _context12.next = 22;
                break;
              }
              return _context12.abrupt("return", {
                statusCode: 5,
                msg: "Sức chứa của phòng phải lớn hơn 0."
              });
            case 22:
              if (!(countWorkRoom.length > capacity)) {
                _context12.next = 24;
                break;
              }
              return _context12.abrupt("return", {
                statusCode: 4,
                msg: "Số Bác sĩ được phân công khám hiện tại lớn hơn sức chứa của phòng."
              });
            case 24:
              _context12.next = 26;
              return _models["default"].WorkRoom.update({
                ClinicRoomRoomNumber: roomNumber
              }, {
                where: {
                  ClinicRoomRoomNumber: oldRoomNumber,
                  ClinicRoomHealthFacilityId: healthFacilityId
                }
              });
            case 26:
              _context12.next = 28;
              return _models["default"].ClinicRoom.update({
                roomNumber: roomNumber,
                capacity: capacity
              }, {
                where: {
                  roomNumber: oldRoomNumber,
                  healthFacilityId: healthFacilityId
                }
              });
            case 28:
              _roomDoc = _context12.sent;
              if (!(_roomDoc[0] > 0)) {
                _context12.next = 33;
                break;
              }
              return _context12.abrupt("return", {
                statusCode: 0,
                msg: "Cập nhật phòng khám thành công."
              });
            case 33:
              return _context12.abrupt("return", {
                statusCode: 2,
                msg: "Cập nhật phòng khám thất bại."
              });
            case 34:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }));
      function createOrUpdateRoom(_x10) {
        return _createOrUpdateRoom.apply(this, arguments);
      }
      return createOrUpdateRoom;
    }() // Get Room
  }, {
    key: "getRoom",
    value: function () {
      var _getRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(_ref11) {
        var _ref11$limit, limit, _ref11$offset, offset, healthFacilityId, whereQuery, whereType, ClinicRoomDocs;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _ref11$limit = _ref11.limit, limit = _ref11$limit === void 0 ? 10 : _ref11$limit, _ref11$offset = _ref11.offset, offset = _ref11$offset === void 0 ? 0 : _ref11$offset, healthFacilityId = _ref11.healthFacilityId;
              console.log("limitlimit", {
                limit: limit,
                offset: offset
              });
              whereQuery = {};
              whereType = {};
              healthFacilityId && (whereQuery.healthFacilityId = healthFacilityId);

              // typeHealthFacility && (whereType["name"] = typeHealthFacility);
              _context13.next = 7;
              return _models["default"].ClinicRoom.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                nest: true,
                where: whereQuery,
                include: [{
                  model: _models["default"].HealthFacility,
                  attributes: ["name"],
                  where: whereType
                }],
                order: [["roomNumber", "asc"]]
              });
            case 7:
              ClinicRoomDocs = _context13.sent;
              return _context13.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thành công",
                data: ClinicRoomDocs
              });
            case 9:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }));
      function getRoom(_x11) {
        return _getRoom.apply(this, arguments);
      }
      return getRoom;
    }() // Delete a room
  }, {
    key: "deleteRoom",
    value: function () {
      var _deleteRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(_ref12) {
        var roomNumber, healthFacilityId, workDoc, count;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              roomNumber = _ref12.roomNumber, healthFacilityId = _ref12.healthFacilityId;
              _context14.next = 3;
              return _models["default"].WorkRoom.findOne({
                where: {
                  ClinicRoomRoomNumber: roomNumber,
                  ClinicRoomHealthFacilityId: healthFacilityId
                }
              });
            case 3:
              workDoc = _context14.sent;
              if (!workDoc) {
                _context14.next = 6;
                break;
              }
              return _context14.abrupt("return", {
                statusCode: 2,
                msg: "Đã xóa thất bại. Tồn tại Bác sĩ đang được phân công trong phòng này."
              });
            case 6:
              _context14.next = 8;
              return _models["default"].ClinicRoom.destroy({
                force: true,
                where: {
                  roomNumber: roomNumber,
                  healthFacilityId: healthFacilityId
                }
              });
            case 8:
              count = _context14.sent;
              if (!(count > 0)) {
                _context14.next = 13;
                break;
              }
              return _context14.abrupt("return", {
                statusCode: 0,
                msg: "Đã xóa thành công."
              });
            case 13:
              return _context14.abrupt("return", {
                statusCode: 5,
                msg: "Xóa thất bại."
              });
            case 14:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      }));
      function deleteRoom(_x12) {
        return _deleteRoom.apply(this, arguments);
      }
      return deleteRoom;
    }() // Create Health Facility
  }, {
    key: "createOrUpdateSpecialist",
    value: function () {
      var _createOrUpdateSpecialist = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(_ref13) {
        var id, name, descriptionDisease, descriptionDoctor, specialistDoc, updateSpecialistDoc;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              id = _ref13.id, name = _ref13.name, descriptionDisease = _ref13.descriptionDisease, descriptionDoctor = _ref13.descriptionDoctor;
              _context15.next = 3;
              return _models["default"].Specialist.findOrCreate({
                where: {
                  id: id ? id : null
                },
                defaults: {
                  id: (0, _uuid.v4)(),
                  name: name,
                  descriptionDisease: descriptionDisease,
                  descriptionDoctor: descriptionDoctor
                }
              });
            case 3:
              specialistDoc = _context15.sent;
              if (!(specialistDoc.length > 0 && specialistDoc[1])) {
                _context15.next = 8;
                break;
              }
              return _context15.abrupt("return", {
                statusCode: 0,
                msg: "T\u1EA1o th\xE0nh c\xF4ng.",
                data: specialistDoc
              });
            case 8:
              if (specialistDoc[1]) {
                _context15.next = 14;
                break;
              }
              _context15.next = 11;
              return _models["default"].Specialist.update({
                name: name,
                descriptionDisease: descriptionDisease,
                descriptionDoctor: descriptionDoctor
              }, {
                where: {
                  id: id
                }
              });
            case 11:
              updateSpecialistDoc = _context15.sent;
              if (!((updateSpecialistDoc === null || updateSpecialistDoc === void 0 ? void 0 : updateSpecialistDoc[0]) > 0)) {
                _context15.next = 14;
                break;
              }
              return _context15.abrupt("return", {
                statusCode: 0,
                msg: "C\u1EADp nh\u1EADt th\xE0nh c\xF4ng.",
                data: specialistDoc
              });
            case 14:
              return _context15.abrupt("return", {
                statusCode: 1,
                msg: "Tạo thất bại."
              });
            case 15:
            case "end":
              return _context15.stop();
          }
        }, _callee15);
      }));
      function createOrUpdateSpecialist(_x13) {
        return _createOrUpdateSpecialist.apply(this, arguments);
      }
      return createOrUpdateSpecialist;
    }() // Get All Specialist
  }, {
    key: "getSpecialist",
    value: function () {
      var _getSpecialist = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(_ref14) {
        var _ref14$offset, offset, _ref14$limit, limit, specialistDoc;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              _ref14$offset = _ref14.offset, offset = _ref14$offset === void 0 ? 0 : _ref14$offset, _ref14$limit = _ref14.limit, limit = _ref14$limit === void 0 ? 100 : _ref14$limit;
              _context16.next = 3;
              return _models["default"].Specialist.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                order: [["createdAt", "desc"]]
              });
            case 3:
              specialistDoc = _context16.sent;
              return _context16.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, specialistDoc), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 5:
            case "end":
              return _context16.stop();
          }
        }, _callee16);
      }));
      function getSpecialist(_x14) {
        return _getSpecialist.apply(this, arguments);
      }
      return getSpecialist;
    }() // Get Specialist
  }, {
    key: "getSpecialistById",
    value: function () {
      var _getSpecialistById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(_ref15) {
        var id, specialistDoc;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              id = _ref15.id;
              _context17.next = 3;
              return _models["default"].Specialist.findByPk(id);
            case 3:
              specialistDoc = _context17.sent;
              if (specialistDoc) {
                _context17.next = 6;
                break;
              }
              return _context17.abrupt("return", {
                statusCode: 2,
                msg: "Không tìm thấy tài liệu này."
              });
            case 6:
              return _context17.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: specialistDoc
              });
            case 7:
            case "end":
              return _context17.stop();
          }
        }, _callee17);
      }));
      function getSpecialistById(_x15) {
        return _getSpecialistById.apply(this, arguments);
      }
      return getSpecialistById;
    }() // Delete Specialist
  }, {
    key: "deleteSpecialist",
    value: function () {
      var _deleteSpecialist = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(_ref16) {
        var id, specialistDoc;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              id = _ref16.id;
              _context18.next = 3;
              return _models["default"].Specialist.destroy({
                where: {
                  id: id
                },
                force: true
              });
            case 3:
              specialistDoc = _context18.sent;
              if (!(specialistDoc > 0)) {
                _context18.next = 6;
                break;
              }
              return _context18.abrupt("return", {
                statusCode: 0,
                msg: "Xóa thành công.",
                data: specialistDoc
              });
            case 6:
              return _context18.abrupt("return", {
                statusCode: 1,
                msg: "Xóa thất bại."
              });
            case 7:
            case "end":
              return _context18.stop();
          }
        }, _callee18);
      }));
      function deleteSpecialist(_x16) {
        return _deleteSpecialist.apply(this, arguments);
      }
      return deleteSpecialist;
    }() // Get rank
  }, {
    key: "getRank",
    value: function () {
      var _getRank = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
        var healthFacilityDocs, resultPromise, result, resultData;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              _context21.next = 2;
              return _models["default"].HealthFacility.findAll({
                raw: true
              });
            case 2:
              healthFacilityDocs = _context21.sent;
              resultPromise = healthFacilityDocs.map( /*#__PURE__*/function () {
                var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(h) {
                  var healthFacilityId, docs, dataHealthRecord, endData, data;
                  return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                    while (1) switch (_context20.prev = _context20.next) {
                      case 0:
                        healthFacilityId = h.id;
                        _context20.next = 3;
                        return _models["default"].HealthRecord.findAll({
                          raw: true,
                          where: {
                            statusCode: _defineProperty({}, _sequelize.Op.eq, "S2")
                          },
                          include: [{
                            model: _models["default"].Booking,
                            include: [{
                              model: _models["default"].HealthExaminationSchedule,
                              include: [{
                                model: _models["default"].Working,
                                where: {
                                  healthFacilityId: healthFacilityId
                                },
                                include: [{
                                  model: _models["default"].HealthFacility
                                }]
                              }]
                            }]
                          }],
                          nest: true
                        });
                      case 3:
                        docs = _context20.sent;
                        dataHealthRecord = docs.filter(function (d) {
                          var _d$Booking;
                          return ((_d$Booking = d.Booking) === null || _d$Booking === void 0 || (_d$Booking = _d$Booking.HealthExaminationSchedule) === null || _d$Booking === void 0 ? void 0 : _d$Booking.Working.id) !== null;
                        });
                        endData = dataHealthRecord.map( /*#__PURE__*/function () {
                          var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(record) {
                            var workRoomDoc;
                            return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                              while (1) switch (_context19.prev = _context19.next) {
                                case 0:
                                  _context19.next = 2;
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
                                  workRoomDoc = _context19.sent;
                                  return _context19.abrupt("return", _objectSpread({
                                    workRoom: workRoomDoc
                                  }, record));
                                case 4:
                                case "end":
                                  return _context19.stop();
                              }
                            }, _callee19);
                          }));
                          return function (_x18) {
                            return _ref18.apply(this, arguments);
                          };
                        }());
                        _context20.next = 8;
                        return Promise.all(endData);
                      case 8:
                        data = _context20.sent;
                        return _context20.abrupt("return", _objectSpread(_objectSpread({}, h), {}, {
                          data: data
                        }));
                      case 10:
                      case "end":
                        return _context20.stop();
                    }
                  }, _callee20);
                }));
                return function (_x17) {
                  return _ref17.apply(this, arguments);
                };
              }());
              _context21.next = 6;
              return Promise.all(resultPromise);
            case 6:
              result = _context21.sent;
              resultData = result.map(function (h) {
                var total = h.data.reduce(function (init, value) {
                  return value.workRoom.checkUpPrice + init;
                }, 0);
                return {
                  name: h.name,
                  total: total
                };
              });
              return _context21.abrupt("return", {
                statusCode: 0,
                msg: "Lay thanh cong",
                data: resultData
              });
            case 9:
            case "end":
              return _context21.stop();
          }
        }, _callee21);
      }));
      function getRank() {
        return _getRank.apply(this, arguments);
      }
      return getRank;
    }() // Create | Update Admin Manager Of Health Facility
  }, {
    key: "createAdminHealthFacility",
    value: function () {
      var _createAdminHealthFacility = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(_ref19) {
        var staffId, healthFacilityId, id, isAcctive, _yield$Promise$all, _yield$Promise$all2, healthFacilityDoc, staffDoc, docExist, doc, workDoc;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              staffId = _ref19.staffId, healthFacilityId = _ref19.healthFacilityId, id = _ref19.id, isAcctive = _ref19.isAcctive;
              if (id) {
                _context22.next = 23;
                break;
              }
              _context22.next = 4;
              return Promise.all([_models["default"].HealthFacility.findByPk(healthFacilityId, {
                raw: true
              }), _models["default"].Staff.findByPk(staffId)]);
            case 4:
              _yield$Promise$all = _context22.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              healthFacilityDoc = _yield$Promise$all2[0];
              staffDoc = _yield$Promise$all2[1];
              if (!(!healthFacilityDoc || !staffDoc)) {
                _context22.next = 10;
                break;
              }
              return _context22.abrupt("return", {
                statusCode: 400,
                msg: "Không tìm thấy Cơ cơ sở y tế hoặc nhân viên này."
              });
            case 10:
              _context22.next = 12;
              return _models["default"].HospitalManager.findOne({
                where: {
                  staffId: staffId
                }
              });
            case 12:
              docExist = _context22.sent;
              if (!docExist) {
                _context22.next = 15;
                break;
              }
              return _context22.abrupt("return", {
                statusCode: 400,
                msg: "Ng\u01B0\u1EDDi n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c th\xEAm v\xE0o danh s\xE1ch qu\u1EA3n l\xFD cho ".concat(healthFacilityDoc.name, ".")
              });
            case 15:
              _context22.next = 17;
              return _models["default"].HospitalManager.create({
                staffId: staffId,
                healthFacilityId: healthFacilityId
              });
            case 17:
              doc = _context22.sent;
              if (!doc) {
                _context22.next = 20;
                break;
              }
              return _context22.abrupt("return", {
                statusCode: 200,
                msg: "Thêm quản lý cơ sở y tế thành công."
              });
            case 20:
              return _context22.abrupt("return", {
                statusCode: 500,
                msg: "Thêm quản lý cơ sở y tế thất bại, vui lòng thử lại."
              });
            case 23:
              _context22.next = 25;
              return _models["default"].HospitalManager.update({
                staffId: staffId,
                isAcctive: isAcctive
              }, {
                where: {
                  id: id
                }
              });
            case 25:
              workDoc = _context22.sent;
              if (!(workDoc[0] > 0)) {
                _context22.next = 30;
                break;
              }
              return _context22.abrupt("return", {
                statusCode: 200,
                msg: "Cập nhật thành công."
              });
            case 30:
              return _context22.abrupt("return", {
                statusCode: 400,
                msg: "Cập nhật thất bại. Không tìm thấy dữ liệu này."
              });
            case 31:
            case "end":
              return _context22.stop();
          }
        }, _callee22);
      }));
      function createAdminHealthFacility(_x19) {
        return _createAdminHealthFacility.apply(this, arguments);
      }
      return createAdminHealthFacility;
    }()
  }, {
    key: "getAdminHealthFacility",
    value: function () {
      var _getAdminHealthFacility = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(_ref20) {
        var _ref20$offset, offset, _ref20$limit, limit, healthFacilityName, healthFacilityEmail, whereQuery, healthFacilitieDocs, promises, docs;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              _ref20$offset = _ref20.offset, offset = _ref20$offset === void 0 ? 0 : _ref20$offset, _ref20$limit = _ref20.limit, limit = _ref20$limit === void 0 ? 3 : _ref20$limit, healthFacilityName = _ref20.healthFacilityName, healthFacilityEmail = _ref20.healthFacilityEmail;
              whereQuery = {};
              healthFacilityName && (whereQuery.name = _defineProperty({}, _sequelize.Op.substring, healthFacilityName));
              healthFacilityEmail && (whereQuery.email = _defineProperty({}, _sequelize.Op.substring, healthFacilityEmail));
              _context24.next = 6;
              return _models["default"].HealthFacility.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                where: whereQuery,
                order: [["name", "asc"]]
              });
            case 6:
              healthFacilitieDocs = _context24.sent;
              promises = healthFacilitieDocs.rows.map( /*#__PURE__*/function () {
                var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(h) {
                  var d;
                  return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                    while (1) switch (_context23.prev = _context23.next) {
                      case 0:
                        _context23.next = 2;
                        return _models["default"].HospitalManager.findAll({
                          where: {
                            healthFacilityId: h.id
                          },
                          raw: true,
                          nest: true,
                          include: [{
                            model: _models["default"].Staff
                          }]
                        });
                      case 2:
                        d = _context23.sent;
                        return _context23.abrupt("return", {
                          healthFacility: h,
                          manager: d,
                          managerCount: d.length
                        });
                      case 4:
                      case "end":
                        return _context23.stop();
                    }
                  }, _callee23);
                }));
                return function (_x21) {
                  return _ref21.apply(this, arguments);
                };
              }());
              _context24.next = 10;
              return Promise.all(promises);
            case 10:
              docs = _context24.sent;
              return _context24.abrupt("return", {
                statusCode: 200,
                msg: "Lấy thông tin thành công.",
                data: {
                  count: healthFacilitieDocs.count,
                  rows: docs,
                  offset: offset,
                  limit: limit
                }
              });
            case 12:
            case "end":
              return _context24.stop();
          }
        }, _callee24);
      }));
      function getAdminHealthFacility(_x20) {
        return _getAdminHealthFacility.apply(this, arguments);
      }
      return getAdminHealthFacility;
    }()
  }, {
    key: "deleteAdminHealthFacility",
    value: function () {
      var _deleteAdminHealthFacility = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(_ref22) {
        var id, docs;
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) switch (_context25.prev = _context25.next) {
            case 0:
              id = _ref22.id;
              _context25.next = 3;
              return _models["default"].HospitalManager.destroy({
                where: {
                  id: id
                }
              });
            case 3:
              docs = _context25.sent;
              if (!(docs > 0)) {
                _context25.next = 6;
                break;
              }
              return _context25.abrupt("return", {
                statusCode: 200,
                msg: "Xóa thành công.",
                data: docs
              });
            case 6:
              return _context25.abrupt("return", {
                statusCode: 400,
                msg: "Sắp xếp này chưa được xóa hay không tồn tại."
              });
            case 7:
            case "end":
              return _context25.stop();
          }
        }, _callee25);
      }));
      function deleteAdminHealthFacility(_x22) {
        return _deleteAdminHealthFacility.apply(this, arguments);
      }
      return deleteAdminHealthFacility;
    }()
  }, {
    key: "getService",
    value: function () {
      var _getService = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(_ref23) {
        var _ref23$offset, offset, _ref23$limit, limit, healthFacilityName, healthFacilityEmail, whereQuery, healthFacilitieDocs, promises, docs;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) switch (_context27.prev = _context27.next) {
            case 0:
              _ref23$offset = _ref23.offset, offset = _ref23$offset === void 0 ? 0 : _ref23$offset, _ref23$limit = _ref23.limit, limit = _ref23$limit === void 0 ? 3 : _ref23$limit, healthFacilityName = _ref23.healthFacilityName, healthFacilityEmail = _ref23.healthFacilityEmail;
              whereQuery = {};
              healthFacilityName && (whereQuery.name = _defineProperty({}, _sequelize.Op.substring, healthFacilityName));
              healthFacilityEmail && (whereQuery.email = _defineProperty({}, _sequelize.Op.substring, healthFacilityEmail));
              _context27.next = 6;
              return _models["default"].HealthFacility.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                where: whereQuery,
                order: [["name", "asc"]]
              });
            case 6:
              healthFacilitieDocs = _context27.sent;
              promises = healthFacilitieDocs.rows.map( /*#__PURE__*/function () {
                var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(h) {
                  var d;
                  return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                    while (1) switch (_context26.prev = _context26.next) {
                      case 0:
                        _context26.next = 2;
                        return _models["default"].HospitalService.findAll({
                          where: {
                            healthFacilityId: h.id
                          },
                          raw: true,
                          nest: true,
                          include: [{
                            model: _models["default"].ExaminationService
                          }]
                        });
                      case 2:
                        d = _context26.sent;
                        return _context26.abrupt("return", {
                          healthFacility: h,
                          service: d,
                          serviceCount: d.length
                        });
                      case 4:
                      case "end":
                        return _context26.stop();
                    }
                  }, _callee26);
                }));
                return function (_x24) {
                  return _ref24.apply(this, arguments);
                };
              }());
              _context27.next = 10;
              return Promise.all(promises);
            case 10:
              docs = _context27.sent;
              return _context27.abrupt("return", {
                statusCode: 200,
                msg: "Lấy thông tin thành công.",
                data: {
                  count: healthFacilitieDocs.count,
                  rows: docs,
                  offset: offset,
                  limit: limit
                }
              });
            case 12:
            case "end":
              return _context27.stop();
          }
        }, _callee27);
      }));
      function getService(_x23) {
        return _getService.apply(this, arguments);
      }
      return getService;
    }()
  }]);
  return healthFacilitiesServices;
}();
var _default = new healthFacilitiesServices();
exports["default"] = _default;