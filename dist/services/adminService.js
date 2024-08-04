"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _models = _interopRequireDefault(require("../app/models"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
// import temp from "../untils/py/temp.json";
var adminService = /*#__PURE__*/function () {
  function adminService() {
    _classCallCheck(this, adminService);
  }
  _createClass(adminService, [{
    key: "createOrUpdateCedicine",
    value: // Cedicine
    function () {
      var _createOrUpdateCedicine = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var name, desc, id, cedicineExist, cedicineDoc, _cedicineDoc;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              name = _ref.name, desc = _ref.desc, id = _ref.id;
              if (id) {
                _context.next = 15;
                break;
              }
              _context.next = 4;
              return _models["default"].Cedicine.findOne({
                where: {
                  name: name
                },
                raw: true
              });
            case 4:
              cedicineExist = _context.sent;
              if (!cedicineExist) {
                _context.next = 7;
                break;
              }
              return _context.abrupt("return", {
                statusCode: 400,
                msg: "Loại thuôc này đã tồn tại!",
                data: cedicineDoc
              });
            case 7:
              _context.next = 9;
              return _models["default"].Cedicine.create({
                name: name,
                desc: desc
              });
            case 9:
              cedicineDoc = _context.sent;
              if (!cedicineDoc) {
                _context.next = 12;
                break;
              }
              return _context.abrupt("return", {
                statusCode: 200,
                msg: "Tạo thuốc thành công!",
                data: cedicineDoc
              });
            case 12:
              return _context.abrupt("return", {
                statusCode: 500,
                msg: "Tạo thuốc thất bại! Đã có lỗi xảy ra."
              });
            case 15:
              _context.next = 17;
              return _models["default"].Cedicine.update({
                name: name,
                desc: desc
              }, {
                where: {
                  id: id
                }
              });
            case 17:
              _cedicineDoc = _context.sent;
              if (!((_cedicineDoc === null || _cedicineDoc === void 0 ? void 0 : _cedicineDoc[0]) > 0)) {
                _context.next = 20;
                break;
              }
              return _context.abrupt("return", {
                statusCode: 200,
                msg: "Đã lưu thay đổi."
              });
            case 20:
              return _context.abrupt("return", {
                statusCode: 500,
                msg: "Đã có lỗi xảy ra. Không có id thuốc này!"
              });
            case 21:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function createOrUpdateCedicine(_x) {
        return _createOrUpdateCedicine.apply(this, arguments);
      }
      return createOrUpdateCedicine;
    }()
  }, {
    key: "getCedicine",
    value: function () {
      var _getCedicine = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref2) {
        var _ref2$offset, offset, _ref2$limit, limit, name, whereQuery, docs;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _ref2$offset = _ref2.offset, offset = _ref2$offset === void 0 ? 0 : _ref2$offset, _ref2$limit = _ref2.limit, limit = _ref2$limit === void 0 ? 3 : _ref2$limit, name = _ref2.name;
              whereQuery = {};
              name && (whereQuery.name = _defineProperty({}, _sequelize.Op.substring, name));
              _context2.next = 5;
              return _models["default"].Cedicine.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                where: whereQuery,
                order: [["name", "asc"]]
              });
            case 5:
              docs = _context2.sent;
              return _context2.abrupt("return", {
                statusCode: 200,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, docs), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function getCedicine(_x2) {
        return _getCedicine.apply(this, arguments);
      }
      return getCedicine;
    }()
  }, {
    key: "deleteCedicine",
    value: function () {
      var _deleteCedicine = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref3) {
        var id, docs;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              id = _ref3.id;
              _context3.next = 3;
              return _models["default"].Cedicine.destroy({
                where: {
                  id: id
                }
              });
            case 3:
              docs = _context3.sent;
              if (!(docs > 0)) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return", {
                statusCode: 200,
                msg: "Xóa thành công.",
                data: docs
              });
            case 6:
              return _context3.abrupt("return", {
                statusCode: 400,
                msg: "Thuốc này chưa được xóa hay không tồn tại."
              });
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function deleteCedicine(_x3) {
        return _deleteCedicine.apply(this, arguments);
      }
      return deleteCedicine;
    }() // Examination Services
  }, {
    key: "createOrUpdateExaminationService",
    value: function () {
      var _createOrUpdateExaminationService = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_ref4) {
        var name, description, id, docExist, serviceDoc, doc;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              name = _ref4.name, description = _ref4.description, id = _ref4.id;
              if (id) {
                _context4.next = 15;
                break;
              }
              _context4.next = 4;
              return _models["default"].ExaminationService.findOne({
                where: {
                  name: name
                },
                raw: true
              });
            case 4:
              docExist = _context4.sent;
              if (!docExist) {
                _context4.next = 7;
                break;
              }
              return _context4.abrupt("return", {
                statusCode: 400,
                msg: "Tên dịch vụ đã tồn tại",
                data: docExist
              });
            case 7:
              _context4.next = 9;
              return _models["default"].ExaminationService.create({
                name: name,
                description: description
              });
            case 9:
              serviceDoc = _context4.sent;
              if (!serviceDoc) {
                _context4.next = 12;
                break;
              }
              return _context4.abrupt("return", {
                statusCode: 200,
                msg: "Tạo dịch vụ thành công!",
                data: serviceDoc
              });
            case 12:
              return _context4.abrupt("return", {
                statusCode: 500,
                msg: "Tạo dịch vụ khám bệnh thất bại! Đã có lỗi xảy ra."
              });
            case 15:
              _context4.next = 17;
              return _models["default"].ExaminationService.update({
                name: name,
                description: description
              }, {
                where: {
                  id: id
                }
              });
            case 17:
              doc = _context4.sent;
              if (!((doc === null || doc === void 0 ? void 0 : doc[0]) > 0)) {
                _context4.next = 20;
                break;
              }
              return _context4.abrupt("return", {
                statusCode: 200,
                msg: "Đã lưu thay đổi."
              });
            case 20:
              return _context4.abrupt("return", {
                statusCode: 400,
                msg: "Đã có lỗi xảy ra. Không có id này!"
              });
            case 21:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function createOrUpdateExaminationService(_x4) {
        return _createOrUpdateExaminationService.apply(this, arguments);
      }
      return createOrUpdateExaminationService;
    }()
  }, {
    key: "getExaminationService",
    value: function () {
      var _getExaminationService = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(_ref5) {
        var _ref5$offset, offset, _ref5$limit, limit, name, whereQuery, docs;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _ref5$offset = _ref5.offset, offset = _ref5$offset === void 0 ? 0 : _ref5$offset, _ref5$limit = _ref5.limit, limit = _ref5$limit === void 0 ? 3 : _ref5$limit, name = _ref5.name;
              whereQuery = {};
              name && (whereQuery.name = _defineProperty({}, _sequelize.Op.substring, name));
              _context5.next = 5;
              return _models["default"].ExaminationService.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                where: whereQuery,
                order: [["createdAt", "desc"]]
              });
            case 5:
              docs = _context5.sent;
              return _context5.abrupt("return", {
                statusCode: 200,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, docs), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function getExaminationService(_x5) {
        return _getExaminationService.apply(this, arguments);
      }
      return getExaminationService;
    }()
  }, {
    key: "deleteExaminationService",
    value: function () {
      var _deleteExaminationService = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_ref6) {
        var id, hospitalServiceExisted, docs;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              id = _ref6.id;
              _context6.next = 3;
              return _models["default"].HospitalService.findOne({
                raw: true,
                where: {
                  examinationServiceId: id
                }
              });
            case 3:
              hospitalServiceExisted = _context6.sent;
              if (!hospitalServiceExisted) {
                _context6.next = 6;
                break;
              }
              return _context6.abrupt("return", {
                statusCode: 400,
                msg: "Dịch vụ này đang được dùng."
              });
            case 6:
              _context6.next = 8;
              return _models["default"].ExaminationService.destroy({
                where: {
                  id: id
                }
              });
            case 8:
              docs = _context6.sent;
              if (!(docs > 0)) {
                _context6.next = 11;
                break;
              }
              return _context6.abrupt("return", {
                statusCode: 200,
                msg: "Xóa thành công.",
                data: docs
              });
            case 11:
              return _context6.abrupt("return", {
                statusCode: 400,
                msg: "Dịch vụ này chưa được xóa hay không tồn tại."
              });
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function deleteExaminationService(_x6) {
        return _deleteExaminationService.apply(this, arguments);
      }
      return deleteExaminationService;
    }() // markdown
  }, {
    key: "healthFacilityEditMarkDown",
    value: function () {
      var _healthFacilityEditMarkDown = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(_ref7) {
        var healthFacilityId, content, html, doc;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              healthFacilityId = _ref7.healthFacilityId, content = _ref7.content, html = _ref7.html;
              _context7.next = 3;
              return _models["default"].HealthFacility.update({
                markdownHtml: html,
                markdownContent: content
              }, {
                where: {
                  id: healthFacilityId
                }
              });
            case 3:
              doc = _context7.sent;
              if (!((doc === null || doc === void 0 ? void 0 : doc[0]) > 0)) {
                _context7.next = 6;
                break;
              }
              return _context7.abrupt("return", {
                statusCode: 200,
                msg: "Đã lưu thay đổi."
              });
            case 6:
              return _context7.abrupt("return", {
                statusCode: 400,
                msg: "Đã có lỗi xảy ra. Không có id này!"
              });
            case 7:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function healthFacilityEditMarkDown(_x7) {
        return _healthFacilityEditMarkDown.apply(this, arguments);
      }
      return healthFacilityEditMarkDown;
    }()
  }, {
    key: "doctorEditMarkDown",
    value: function () {
      var _doctorEditMarkDown = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(_ref8) {
        var doctorId, content, html, doc;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              doctorId = _ref8.doctorId, content = _ref8.content, html = _ref8.html;
              _context8.next = 3;
              return _models["default"].Staff.update({
                markdownHtml: html,
                markdownContent: content
              }, {
                where: {
                  id: doctorId
                }
              });
            case 3:
              doc = _context8.sent;
              if (!((doc === null || doc === void 0 ? void 0 : doc[0]) > 0)) {
                _context8.next = 6;
                break;
              }
              return _context8.abrupt("return", {
                statusCode: 200,
                msg: "Đã lưu thay đổi."
              });
            case 6:
              return _context8.abrupt("return", {
                statusCode: 400,
                msg: "Đã có lỗi xảy ra. Không có id này!"
              });
            case 7:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      function doctorEditMarkDown(_x8) {
        return _doctorEditMarkDown.apply(this, arguments);
      }
      return doctorEditMarkDown;
    }()
  }, {
    key: "trigerLog",
    value: function () {
      var _trigerLog = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(_ref9) {
        var userId, isBanded, user, doc;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              userId = _ref9.userId, isBanded = _ref9.isBanded;
              _context9.next = 3;
              return _models["default"].User.findOne({
                where: {
                  id: userId
                },
                raw: true
              });
            case 3:
              user = _context9.sent;
              if (user) {
                _context9.next = 6;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 400,
                msg: "Đã có lỗi xảy ra. Không tìm thấy người dùng này!"
              });
            case 6:
              _context9.next = 8;
              return _models["default"].User.update({
                banded: isBanded
              }, {
                where: {
                  id: userId
                }
              });
            case 8:
              doc = _context9.sent;
              if (!((doc === null || doc === void 0 ? void 0 : doc[0]) > 0)) {
                _context9.next = 11;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 200,
                msg: "Đã lưu thay đổi."
              });
            case 11:
              return _context9.abrupt("return", {
                statusCode: 400,
                msg: "Đã có lỗi xảy ra. Không có id này!"
              });
            case 12:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      function trigerLog(_x9) {
        return _trigerLog.apply(this, arguments);
      }
      return trigerLog;
    }() // chart
  }, {
    key: "getIndexAdminHome1",
    value: function () {
      var _getIndexAdminHome = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var _where5, _where6;
        var patientCount, patientCountLast, bookingCount, bookingCountLastMonth, bookingCountSuccess, sumRenvenueMonth, bookingCountSuccessLast, sumRenvenueMonthLast;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return _models["default"].Patient.count({
                where: _defineProperty({}, _sequelize.Op.and, [_sequelize.Sequelize.where(_sequelize.Sequelize.fn("date_part", "month", _sequelize.Sequelize.col("createdAt")), (0, _moment["default"])().month() + 1)])
              });
            case 2:
              patientCount = _context10.sent;
              _context10.next = 5;
              return _models["default"].Patient.count({
                where: _defineProperty({}, _sequelize.Op.and, [_sequelize.Sequelize.where(_sequelize.Sequelize.fn("date_part", "month", _sequelize.Sequelize.col("createdAt")), (0, _moment["default"])().month())])
              });
            case 5:
              patientCountLast = _context10.sent;
              _context10.next = 8;
              return _models["default"].Booking.count({
                where: _defineProperty({}, _sequelize.Op.and, [_sequelize.Sequelize.where(_sequelize.Sequelize.fn("date_part", "month", _sequelize.Sequelize.col("createdAt")), (0, _moment["default"])().month() + 1)])
              });
            case 8:
              bookingCount = _context10.sent;
              _context10.next = 11;
              return _models["default"].Booking.count({
                where: _defineProperty({}, _sequelize.Op.and, [_sequelize.Sequelize.where(_sequelize.Sequelize.fn("date_part", "month", _sequelize.Sequelize.col("createdAt")), (0, _moment["default"])().month())])
              });
            case 11:
              bookingCountLastMonth = _context10.sent;
              _context10.next = 14;
              return _models["default"].HealthRecord.findAll({
                raw: true,
                nest: true,
                include: [{
                  model: _models["default"].Booking
                }],
                where: (_where5 = {}, _defineProperty(_where5, _sequelize.Op.and, [_sequelize.Sequelize.where(_sequelize.Sequelize.fn("date_part", "month", _sequelize.Sequelize.col("HealthRecord.createdAt")), (0, _moment["default"])().month() + 1)]), _defineProperty(_where5, "statusCode", "HR4"), _where5)
              });
            case 14:
              bookingCountSuccess = _context10.sent;
              sumRenvenueMonth = bookingCountSuccess.reduce(function (init, v) {
                return init + v.Booking.doctorPrice;
              }, 0);
              _context10.next = 18;
              return _models["default"].HealthRecord.findAll({
                raw: true,
                nest: true,
                include: [{
                  model: _models["default"].Booking
                }],
                where: (_where6 = {}, _defineProperty(_where6, _sequelize.Op.and, [_sequelize.Sequelize.where(_sequelize.Sequelize.fn("date_part", "month", _sequelize.Sequelize.col("HealthRecord.createdAt")), (0, _moment["default"])().month())]), _defineProperty(_where6, "statusCode", "HR4"), _where6)
              });
            case 18:
              bookingCountSuccessLast = _context10.sent;
              sumRenvenueMonthLast = bookingCountSuccessLast.reduce(function (init, v) {
                return init + v.Booking.doctorPrice;
              }, 0);
              return _context10.abrupt("return", {
                booking: {
                  month: bookingCount,
                  lastMonth: bookingCountLastMonth
                },
                bookingSuccess: {
                  month: bookingCountSuccess.length,
                  lastMonth: bookingCountSuccessLast.length
                },
                revenue: {
                  month: sumRenvenueMonth,
                  lastMonth: sumRenvenueMonthLast
                },
                patient: {
                  month: patientCount,
                  lastMonth: patientCountLast
                }
              });
            case 21:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function getIndexAdminHome1() {
        return _getIndexAdminHome.apply(this, arguments);
      }
      return getIndexAdminHome1;
    }()
  }, {
    key: "getIndexAdminHome2",
    value: function () {
      var _getIndexAdminHome2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(_ref10) {
        var year, patientDoc, array1, array2, maleCount, femaleCount;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              year = _ref10.year;
              if (year) {
                _context11.next = 3;
                break;
              }
              return _context11.abrupt("return", null);
            case 3:
              _context11.next = 5;
              return _models["default"].Patient.findAll({
                raw: true,
                nest: true,
                where: _defineProperty({}, _sequelize.Op.and, [_sequelize.Sequelize.where(_sequelize.Sequelize.fn("date_part", "year", _sequelize.Sequelize.col("Patient.createdAt")), year)])
              });
            case 5:
              patientDoc = _context11.sent;
              array1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              array2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              maleCount = patientDoc.filter(function (p) {
                return p.gender == "male";
              }).map(function (r) {
                var month = new Date(r.createdAt).getMonth();
                array1[month] += 1;
              });
              femaleCount = patientDoc.filter(function (p) {
                return p.gender == "female";
              }).map(function (r) {
                var month = new Date(r.createdAt).getMonth();
                array2[month] += 1;
              });
              return _context11.abrupt("return", {
                male: array1,
                female: array2
              });
            case 11:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function getIndexAdminHome2(_x10) {
        return _getIndexAdminHome2.apply(this, arguments);
      }
      return getIndexAdminHome2;
    }()
  }, {
    key: "getIndexAdminHome3",
    value: function () {
      var _getIndexAdminHome3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var bookingDoc, specialistIds, specialistIdUniques, cacularPromises, data;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return _models["default"].Booking.findAll({
                where: {
                  status: "CU2"
                },
                nest: true,
                raw: true,
                include: [{
                  model: _models["default"].HealthExaminationSchedule,
                  include: [{
                    model: _models["default"].Working,
                    include: [{
                      model: _models["default"].Staff
                    }]
                  }]
                }]
              });
            case 2:
              bookingDoc = _context13.sent;
              specialistIds = bookingDoc.map(function (s) {
                return s.HealthExaminationSchedule.Working.Staff.specialistId;
              });
              specialistIdUniques = _toConsumableArray(new Set(specialistIds));
              cacularPromises = specialistIdUniques.map( /*#__PURE__*/function () {
                var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(id) {
                  var bookingCount, specialist;
                  return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                      case 0:
                        _context12.next = 2;
                        return _models["default"].Booking.count({
                          where: {
                            status: "CU2"
                          },
                          nest: true,
                          raw: true,
                          include: [{
                            model: _models["default"].HealthExaminationSchedule,
                            where: {},
                            include: [{
                              model: _models["default"].Working,
                              where: {},
                              include: [{
                                model: _models["default"].Staff,
                                where: {},
                                include: [{
                                  model: _models["default"].Specialist,
                                  where: {
                                    id: id
                                  }
                                }]
                              }]
                            }]
                          }]
                        });
                      case 2:
                        bookingCount = _context12.sent;
                        _context12.next = 5;
                        return _models["default"].Specialist.findOne({
                          raw: true,
                          where: {
                            id: id
                          }
                        });
                      case 5:
                        specialist = _context12.sent;
                        return _context12.abrupt("return", {
                          specialist: specialist,
                          count: bookingCount,
                          percent: (bookingCount * 100 / bookingDoc.length).toPrecision(2)
                        });
                      case 7:
                      case "end":
                        return _context12.stop();
                    }
                  }, _callee12);
                }));
                return function (_x11) {
                  return _ref11.apply(this, arguments);
                };
              }());
              _context13.next = 8;
              return Promise.all(cacularPromises);
            case 8:
              data = _context13.sent;
              return _context13.abrupt("return", data);
            case 10:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }));
      function getIndexAdminHome3() {
        return _getIndexAdminHome3.apply(this, arguments);
      }
      return getIndexAdminHome3;
    }()
  }, {
    key: "getIndexAdminService1",
    value: function () {
      var _getIndexAdminService = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        var serviceActive, serviceNonActive;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return _models["default"].HospitalService.count({
                where: {
                  isAcctive: true
                }
              });
            case 2:
              serviceActive = _context14.sent;
              _context14.next = 5;
              return _models["default"].HospitalService.count({
                where: {
                  isAcctive: false
                }
              });
            case 5:
              serviceNonActive = _context14.sent;
              return _context14.abrupt("return", {
                serviceActive: serviceActive,
                serviceNonActive: serviceNonActive
              });
            case 7:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      }));
      function getIndexAdminService1() {
        return _getIndexAdminService.apply(this, arguments);
      }
      return getIndexAdminService1;
    }()
  }, {
    key: "getIndexDoctorHome1",
    value: function () {
      var _getIndexDoctorHome = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(_ref12) {
        var _where8;
        var staffId, bookingCountSuccess, bookingCountLastMonth, bookingCountSum, patientCountHere, patientIdDistances, patientCountLast, patientIdDistancesLast, patientCountSum, patientIdDistancesSum, chatCountHere, chatCountLast, chatCountSum, scheduleCountHere, scheduleCountLast, scheduleCountSum;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              staffId = _ref12.staffId;
              if (staffId) {
                _context15.next = 3;
                break;
              }
              return _context15.abrupt("return", null);
            case 3:
              _context15.next = 5;
              return _models["default"].HealthRecord.findAll({
                raw: true,
                nest: true,
                include: [{
                  model: _models["default"].Booking,
                  where: {},
                  include: [{
                    model: _models["default"].HealthExaminationSchedule,
                    where: {},
                    include: [_defineProperty({
                      model: _models["default"].Working,
                      where: {}
                    }, "where", {
                      staffId: staffId
                    })]
                  }]
                }],
                where: (_where8 = {}, _defineProperty(_where8, _sequelize.Op.and, [_sequelize.Sequelize.where(_sequelize.Sequelize.fn("date_part", "month", _sequelize.Sequelize.col("HealthRecord.createdAt")), (0, _moment["default"])().month() + 1)]), _defineProperty(_where8, "statusCode", "HR4"), _where8)
              });
            case 5:
              bookingCountSuccess = _context15.sent;
              _context15.next = 8;
              return _models["default"].Booking.count({
                include: [{
                  model: _models["default"].HealthExaminationSchedule,
                  where: {},
                  include: [{
                    model: _models["default"].Working,
                    where: {
                      staffId: staffId
                    }
                  }]
                }],
                where: _defineProperty({}, _sequelize.Op.and, [_sequelize.Sequelize.where(_sequelize.Sequelize.fn("date_part", "month", _sequelize.Sequelize.col("Booking.createdAt")), (0, _moment["default"])().month())])
              });
            case 8:
              bookingCountLastMonth = _context15.sent;
              _context15.next = 11;
              return _models["default"].Booking.count({
                raw: true,
                nest: true,
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
              });
            case 11:
              bookingCountSum = _context15.sent;
              _context15.next = 14;
              return _models["default"].Booking.findAll({
                model: _models["default"].Booking,
                nest: true,
                raw: true,
                include: [_models["default"].PatientProfile, {
                  model: _models["default"].HealthExaminationSchedule,
                  where: {},
                  include: [{
                    model: _models["default"].Working,
                    where: {
                      staffId: staffId
                    }
                  }]
                }],
                where: _defineProperty({
                  status: "CU2"
                }, _sequelize.Op.and, [_sequelize.Sequelize.where(_sequelize.Sequelize.fn("date_part", "month", _sequelize.Sequelize.col("Booking.createdAt")), (0, _moment["default"])().month() + 1)])
              });
            case 14:
              patientCountHere = _context15.sent;
              patientIdDistances = _toConsumableArray(new Set(patientCountHere.map(function (s) {
                return s.patientProfileId;
              })));
              _context15.next = 18;
              return _models["default"].Booking.findAll({
                model: _models["default"].Booking,
                nest: true,
                raw: true,
                include: [_models["default"].PatientProfile, {
                  model: _models["default"].HealthExaminationSchedule,
                  where: {},
                  include: [{
                    model: _models["default"].Working,
                    where: {
                      staffId: staffId
                    }
                  }]
                }],
                where: _defineProperty({
                  status: "CU2"
                }, _sequelize.Op.and, [_sequelize.Sequelize.where(_sequelize.Sequelize.fn("date_part", "month", _sequelize.Sequelize.col("Booking.createdAt")), (0, _moment["default"])().month())])
              });
            case 18:
              patientCountLast = _context15.sent;
              patientIdDistancesLast = _toConsumableArray(new Set(patientCountLast.map(function (s) {
                return s.patientProfileId;
              })));
              _context15.next = 22;
              return _models["default"].Booking.findAll({
                model: _models["default"].Booking,
                nest: true,
                raw: true,
                where: {
                  status: "CU2"
                },
                include: [_models["default"].PatientProfile, {
                  model: _models["default"].HealthExaminationSchedule,
                  where: {},
                  include: [{
                    model: _models["default"].Working,
                    where: {
                      staffId: staffId
                    }
                  }]
                }]
              });
            case 22:
              patientCountSum = _context15.sent;
              console.log("\n\n\n\npatientCountSum", patientCountSum);
              patientIdDistancesSum = _toConsumableArray(new Set(patientCountSum.map(function (s) {
                return s.patientProfileId;
              }))); // chat
              _context15.next = 27;
              return _models["default"].ChatRoom.count({
                where: _defineProperty({
                  staffId: staffId
                }, _sequelize.Op.and, [_sequelize.Sequelize.where(_sequelize.Sequelize.fn("date_part", "month", _sequelize.Sequelize.col("createdAt")), (0, _moment["default"])().month() + 1)])
              });
            case 27:
              chatCountHere = _context15.sent;
              _context15.next = 30;
              return _models["default"].ChatRoom.count({
                where: _defineProperty({
                  staffId: staffId
                }, _sequelize.Op.and, [_sequelize.Sequelize.where(_sequelize.Sequelize.fn("date_part", "month", _sequelize.Sequelize.col("createdAt")), (0, _moment["default"])().month())])
              });
            case 30:
              chatCountLast = _context15.sent;
              _context15.next = 33;
              return _models["default"].ChatRoom.count({
                where: {
                  staffId: staffId
                }
              });
            case 33:
              chatCountSum = _context15.sent;
              _context15.next = 36;
              return _models["default"].HealthExaminationSchedule.count({
                raw: true,
                nest: true,
                include: [{
                  model: _models["default"].Working,
                  where: {
                    staffId: staffId
                  }
                }],
                where: _defineProperty({}, _sequelize.Op.and, [_sequelize.Sequelize.where(_sequelize.Sequelize.fn("date_part", "month", _sequelize.Sequelize.fn("TO_DATE", _sequelize.Sequelize.col("date"), "MM/DD/YYYY")), (0, _moment["default"])().month() + 1)])
              });
            case 36:
              scheduleCountHere = _context15.sent;
              _context15.next = 39;
              return _models["default"].HealthExaminationSchedule.count({
                raw: true,
                nest: true,
                include: [{
                  model: _models["default"].Working,
                  where: {
                    staffId: staffId
                  }
                }],
                where: _defineProperty({}, _sequelize.Op.and, [_sequelize.Sequelize.where(_sequelize.Sequelize.fn("date_part", "month", _sequelize.Sequelize.fn("TO_DATE", _sequelize.Sequelize.col("date"), "MM/DD/YYYY")), (0, _moment["default"])().month())])
              });
            case 39:
              scheduleCountLast = _context15.sent;
              _context15.next = 42;
              return _models["default"].HealthExaminationSchedule.count({
                raw: true,
                nest: true,
                include: [{
                  model: _models["default"].Working,
                  where: {
                    staffId: staffId
                  }
                }],
                where: {}
              });
            case 42:
              scheduleCountSum = _context15.sent;
              return _context15.abrupt("return", {
                booking: {
                  bookingCountSuccess: bookingCountSuccess.length,
                  bookingCountLastMonth: bookingCountLastMonth,
                  bookingCountSum: bookingCountSum
                },
                patient: {
                  patientCountHere: patientIdDistances.length,
                  patientCountLast: patientIdDistancesLast.length,
                  patientCountSum: patientIdDistancesSum.length
                },
                chat: {
                  chatCountHere: chatCountHere,
                  chatCountLast: chatCountLast,
                  chatCountSum: chatCountSum
                },
                schedule: {
                  scheduleCountHere: scheduleCountHere,
                  scheduleCountLast: scheduleCountLast,
                  scheduleCountSum: scheduleCountSum
                }
              });
            case 44:
            case "end":
              return _context15.stop();
          }
        }, _callee15);
      }));
      function getIndexDoctorHome1(_x12) {
        return _getIndexDoctorHome.apply(this, arguments);
      }
      return getIndexDoctorHome1;
    }()
  }, {
    key: "getIndexDoctorHome2",
    value: function () {
      var _getIndexDoctorHome2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(_ref14) {
        var year, staffId, array, bookings;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              year = _ref14.year, staffId = _ref14.staffId;
              if (!(!year || !staffId)) {
                _context16.next = 3;
                break;
              }
              return _context16.abrupt("return", null);
            case 3:
              array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              _context16.next = 6;
              return _models["default"].Booking.findAll({
                raw: true,
                nest: true,
                where: {
                  status: "CU2"
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
              });
            case 6:
              bookings = _context16.sent;
              bookings.map(function (r) {
                var month = new Date(r.HealthExaminationSchedule.date).getMonth();
                var yearHere = new Date(r.HealthExaminationSchedule.date).getFullYear();
                if (year == yearHere) array[month] += r.doctorPrice;
              });
              return _context16.abrupt("return", {
                data: array
              });
            case 9:
            case "end":
              return _context16.stop();
          }
        }, _callee16);
      }));
      function getIndexDoctorHome2(_x13) {
        return _getIndexDoctorHome2.apply(this, arguments);
      }
      return getIndexDoctorHome2;
    }()
  }, {
    key: "getIndexDoctorHome3",
    value: function () {
      var _getIndexDoctorHome3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(_ref15) {
        var staffId, bookingMale, bookingFeMale;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              staffId = _ref15.staffId;
              if (staffId) {
                _context17.next = 3;
                break;
              }
              return _context17.abrupt("return", null);
            case 3:
              _context17.next = 5;
              return _models["default"].Booking.count({
                raw: true,
                nest: true,
                where: {
                  status: "CU2"
                },
                include: [{
                  model: _models["default"].PatientProfile,
                  where: {
                    gender: "male"
                  }
                }, {
                  model: _models["default"].HealthExaminationSchedule,
                  where: {},
                  include: [{
                    model: _models["default"].Working,
                    where: {
                      staffId: staffId
                    }
                  }]
                }]
              });
            case 5:
              bookingMale = _context17.sent;
              _context17.next = 8;
              return _models["default"].Booking.count({
                raw: true,
                nest: true,
                where: {
                  status: "CU2"
                },
                include: [{
                  model: _models["default"].PatientProfile,
                  where: {
                    gender: "female"
                  }
                }, {
                  model: _models["default"].HealthExaminationSchedule,
                  where: {},
                  include: [{
                    model: _models["default"].Working,
                    where: {
                      staffId: staffId
                    }
                  }]
                }]
              });
            case 8:
              bookingFeMale = _context17.sent;
              return _context17.abrupt("return", {
                bookingMale: bookingMale,
                bookingFeMale: bookingFeMale
              });
            case 10:
            case "end":
              return _context17.stop();
          }
        }, _callee17);
      }));
      function getIndexDoctorHome3(_x14) {
        return _getIndexDoctorHome3.apply(this, arguments);
      }
      return getIndexDoctorHome3;
    }()
  }, {
    key: "getIndexDoctorHome4",
    value: function () {
      var _getIndexDoctorHome4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(_ref16) {
        var staffId, bookingDoc, keyWordPatient, patientProfileIds, patientProfileIdsDistance, dataPromise, result;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              staffId = _ref16.staffId;
              if (staffId) {
                _context19.next = 3;
                break;
              }
              return _context19.abrupt("return", null);
            case 3:
              _context19.next = 5;
              return _models["default"].Booking.findAll({
                raw: true,
                nest: true,
                where: {
                  status: "CU2"
                },
                include: [{
                  model: _models["default"].PatientProfile,
                  where: {}
                }, {
                  model: _models["default"].HealthExaminationSchedule,
                  where: {},
                  include: [{
                    model: _models["default"].Working,
                    where: {
                      staffId: staffId
                    }
                  }]
                }]
              });
            case 5:
              bookingDoc = _context19.sent;
              keyWordPatient = bookingDoc.map(function (b) {
                return b.descriptionDisease;
              });
              patientProfileIds = bookingDoc.map(function (b) {
                return b.PatientProfile.id;
              });
              patientProfileIdsDistance = _toConsumableArray(new Set(patientProfileIds));
              dataPromise = patientProfileIdsDistance.map( /*#__PURE__*/function () {
                var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(d) {
                  var bookingDoc;
                  return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                    while (1) switch (_context18.prev = _context18.next) {
                      case 0:
                        _context18.next = 2;
                        return _models["default"].Booking.findAll({
                          raw: true,
                          nest: true,
                          where: {
                            status: "CU2"
                          },
                          order: [[_models["default"].HealthExaminationSchedule, "date", "desc"]],
                          include: [{
                            model: _models["default"].PatientProfile,
                            where: {
                              id: d
                            }
                          }, {
                            model: _models["default"].HealthExaminationSchedule,
                            where: {},
                            include: [{
                              model: _models["default"].Code,
                              as: "TimeCode"
                            }, {
                              model: _models["default"].Working,
                              where: {
                                staffId: staffId
                              }
                            }]
                          }]
                        });
                      case 2:
                        bookingDoc = _context18.sent;
                        return _context18.abrupt("return", {
                          bookingLast: bookingDoc === null || bookingDoc === void 0 ? void 0 : bookingDoc[0],
                          count: bookingDoc.length
                        });
                      case 4:
                      case "end":
                        return _context18.stop();
                    }
                  }, _callee18);
                }));
                return function (_x16) {
                  return _ref17.apply(this, arguments);
                };
              }());
              _context19.next = 12;
              return Promise.all(dataPromise);
            case 12:
              result = _context19.sent;
              return _context19.abrupt("return", {
                patient: result,
                keyWordPatient: keyWordPatient
              });
            case 14:
            case "end":
              return _context19.stop();
          }
        }, _callee19);
      }));
      function getIndexDoctorHome4(_x15) {
        return _getIndexDoctorHome4.apply(this, arguments);
      }
      return getIndexDoctorHome4;
    }() // index use
  }, {
    key: "getIndex",
    value: function () {
      var _getIndex = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(_ref18) {
        var role, page, index, pagrams, data;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              role = _ref18.role, page = _ref18.page, index = _ref18.index, pagrams = _ref18.pagrams;
              data = null;
              if (!(role == "admin")) {
                _context20.next = 28;
                break;
              }
              _context20.t0 = page;
              _context20.next = _context20.t0 === "home" ? 6 : _context20.t0 === "service" ? 21 : 26;
              break;
            case 6:
              if (!(index == 1)) {
                _context20.next = 11;
                break;
              }
              _context20.next = 9;
              return this.getIndexAdminHome1();
            case 9:
              data = _context20.sent;
              return _context20.abrupt("break", 26);
            case 11:
              if (!(index == 2)) {
                _context20.next = 16;
                break;
              }
              _context20.next = 14;
              return this.getIndexAdminHome2(pagrams);
            case 14:
              data = _context20.sent;
              return _context20.abrupt("break", 26);
            case 16:
              if (!(index == 3)) {
                _context20.next = 21;
                break;
              }
              _context20.next = 19;
              return this.getIndexAdminHome3(pagrams);
            case 19:
              data = _context20.sent;
              return _context20.abrupt("break", 26);
            case 21:
              if (!(index == 1)) {
                _context20.next = 26;
                break;
              }
              _context20.next = 24;
              return this.getIndexAdminService1();
            case 24:
              data = _context20.sent;
              return _context20.abrupt("break", 26);
            case 26:
              _context20.next = 52;
              break;
            case 28:
              if (!(role == "doctor")) {
                _context20.next = 52;
                break;
              }
              _context20.t1 = page;
              _context20.next = _context20.t1 === "home" ? 32 : 52;
              break;
            case 32:
              if (!(index == 1)) {
                _context20.next = 37;
                break;
              }
              _context20.next = 35;
              return this.getIndexDoctorHome1(pagrams);
            case 35:
              data = _context20.sent;
              return _context20.abrupt("break", 52);
            case 37:
              if (!(index == 2)) {
                _context20.next = 42;
                break;
              }
              _context20.next = 40;
              return this.getIndexDoctorHome2(pagrams);
            case 40:
              data = _context20.sent;
              return _context20.abrupt("break", 52);
            case 42:
              if (!(index == 3)) {
                _context20.next = 47;
                break;
              }
              _context20.next = 45;
              return this.getIndexDoctorHome3(pagrams);
            case 45:
              data = _context20.sent;
              return _context20.abrupt("break", 52);
            case 47:
              if (!(index == 4)) {
                _context20.next = 52;
                break;
              }
              _context20.next = 50;
              return this.getIndexDoctorHome4(pagrams);
            case 50:
              data = _context20.sent;
              return _context20.abrupt("break", 52);
            case 52:
              return _context20.abrupt("return", {
                statusCode: 0,
                msg: "Lấy Index thành công.",
                data: data
              });
            case 53:
            case "end":
              return _context20.stop();
          }
        }, _callee20, this);
      }));
      function getIndex(_x17) {
        return _getIndex.apply(this, arguments);
      }
      return getIndex;
    }()
  }]);
  return adminService;
}();
var _default = new adminService();
exports["default"] = _default;