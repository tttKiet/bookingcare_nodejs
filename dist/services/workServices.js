"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _models = _interopRequireDefault(require("../app/models"));
var _moment = _interopRequireDefault(require("moment"));
var _userServices = _interopRequireDefault(require("./userServices"));
var _workServices = _interopRequireDefault(require("./workServices"));
var _untils = require("../untils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var WorkServices = /*#__PURE__*/function () {
  function WorkServices() {
    _classCallCheck(this, WorkServices);
  }
  _createClass(WorkServices, [{
    key: "checkInsertWorking",
    value: // Work
    function () {
      var _checkInsertWorking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(staffId) {
        var workCheck;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _models["default"].Working.findOne({
                where: {
                  staffId: staffId
                },
                raw: true,
                order: [["createdAt", "DESC"]],
                nest: true,
                include: [_models["default"].HealthFacility]
              });
            case 2:
              workCheck = _context.sent;
              if (!workCheck) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", workCheck);
            case 5:
              return _context.abrupt("return", true);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function checkInsertWorking(_x) {
        return _checkInsertWorking.apply(this, arguments);
      }
      return checkInsertWorking;
    }()
  }, {
    key: "isWorking",
    value: function () {
      var _isWorking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(staffId, healthFacilityId) {
        var where, workDoc;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              where = {};
              healthFacilityId && (where.healthFacilityId = healthFacilityId);
              _context2.next = 4;
              return _models["default"].Working.findOne({
                where: _objectSpread(_objectSpread({}, where), {}, _defineProperty({
                  staffId: staffId
                }, _sequelize.Op.or, [{
                  endDate: null
                }, {
                  endDate: _defineProperty({}, _sequelize.Op.gt, new Date())
                }])),
                raw: true
              });
            case 4:
              workDoc = _context2.sent;
              return _context2.abrupt("return", workDoc);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function isWorking(_x2, _x3) {
        return _isWorking.apply(this, arguments);
      }
      return isWorking;
    }()
  }, {
    key: "createOrUpdateWorking",
    value: function () {
      var _createOrUpdateWorking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref) {
        var staffId, healthFacilityId, id, _yield$Promise$all, _yield$Promise$all2, healthFacilityDoc, staffDoc, isInsert, workDoc, _workDoc;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              staffId = _ref.staffId, healthFacilityId = _ref.healthFacilityId, id = _ref.id;
              _context3.next = 3;
              return Promise.all([_models["default"].HealthFacility.findByPk(healthFacilityId), _models["default"].Staff.findByPk(staffId)]);
            case 3:
              _yield$Promise$all = _context3.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              healthFacilityDoc = _yield$Promise$all2[0];
              staffDoc = _yield$Promise$all2[1];
              if (!(!healthFacilityDoc || !staffDoc)) {
                _context3.next = 9;
                break;
              }
              return _context3.abrupt("return", {
                statusCode: 1,
                msg: "Không tìm thấy Cơ cơ sở y tế hoặc nhân viên này."
              });
            case 9:
              if (id) {
                _context3.next = 25;
                break;
              }
              _context3.next = 12;
              return this.checkInsertWorking(staffId);
            case 12:
              isInsert = _context3.sent;
              if (!(isInsert !== true)) {
                _context3.next = 15;
                break;
              }
              return _context3.abrupt("return", {
                statusCode: 1,
                msg: "Nh\xE2n vi\xEAn n\xE0y \u0111ang l\xE0m vi\u1EC7c \u1EDF b\u1EC7nh vi\u1EC7n *".concat(isInsert.HealthFacility.name, "*.")
              });
            case 15:
              _context3.next = 17;
              return _models["default"].Working.create({
                staffId: staffId,
                healthFacilityId: healthFacilityId,
                startDate: new Date()
              });
            case 17:
              workDoc = _context3.sent;
              if (!workDoc) {
                _context3.next = 22;
                break;
              }
              return _context3.abrupt("return", {
                statusCode: 0,
                msg: "Tạo thành công.",
                data: workDoc
              });
            case 22:
              return _context3.abrupt("return", {
                statusCode: 5,
                msg: "Tạo thất bại."
              });
            case 23:
              _context3.next = 33;
              break;
            case 25:
              _context3.next = 27;
              return _models["default"].Working.update({
                staffId: staffId,
                healthFacilityId: healthFacilityId
              }, {
                where: {
                  id: id
                }
              });
            case 27:
              _workDoc = _context3.sent;
              if (!(_workDoc[0] > 0)) {
                _context3.next = 32;
                break;
              }
              return _context3.abrupt("return", {
                statusCode: 0,
                msg: "Cập nhật thành công."
              });
            case 32:
              return _context3.abrupt("return", {
                statusCode: 2,
                msg: "Cập nhật thất bại. Không tìm thấy dữ liệu này."
              });
            case 33:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function createOrUpdateWorking(_x4) {
        return _createOrUpdateWorking.apply(this, arguments);
      }
      return createOrUpdateWorking;
    }()
  }, {
    key: "getWorking",
    value: function () {
      var _getWorking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_ref2) {
        var _ref2$offset, offset, _ref2$limit, limit, doctorName, id, doctorId, doctorEmail, healthFacilityName, healthFacilityId, roleId, Role, whereQuery, whereQueryDoctor, whereQueryHeal, whereRole, workingDoc;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _ref2$offset = _ref2.offset, offset = _ref2$offset === void 0 ? 0 : _ref2$offset, _ref2$limit = _ref2.limit, limit = _ref2$limit === void 0 ? 10 : _ref2$limit, doctorName = _ref2.doctorName, id = _ref2.id, doctorId = _ref2.doctorId, doctorEmail = _ref2.doctorEmail, healthFacilityName = _ref2.healthFacilityName, healthFacilityId = _ref2.healthFacilityId, roleId = _ref2.roleId, Role = _ref2.Role;
              whereQuery = {};
              whereQueryDoctor = {};
              whereQueryHeal = {};
              whereRole = {};
              if (Role && Role.length > 0) {
                whereRole.keyType = _defineProperty({}, _sequelize.Op["in"], Role);
              } else if (roleId) {
                whereRole.id = roleId;
              }
              id && (whereQuery.id = _defineProperty({}, _sequelize.Op.substring, id));
              doctorName && (whereQueryDoctor.fullName = (0, _untils.searchLikeDeep)("Staff", "fullName", doctorName));
              doctorEmail && (whereQueryDoctor.email = _defineProperty({}, _sequelize.Op.substring, doctorEmail));
              healthFacilityName && (whereQueryHeal.name = (0, _untils.searchLikeDeep)("HealthFacility", "name", healthFacilityName));
              doctorId && (whereQueryDoctor.id = doctorId);
              healthFacilityId && (whereQuery.healthFacilityId = healthFacilityId);
              _context4.next = 14;
              return _models["default"].Working.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                where: whereQuery,
                order: [["createdAt", "desc"]],
                include: [{
                  model: _models["default"].Staff,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"]
                  },
                  where: whereQueryDoctor,
                  include: [_models["default"].AcademicDegree, {
                    model: _models["default"].Role,
                    where: whereRole
                  }]
                }, {
                  model: _models["default"].HealthFacility,
                  where: whereQueryHeal,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"]
                  }
                }],
                nest: true
              });
            case 14:
              workingDoc = _context4.sent;
              return _context4.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, workingDoc), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 16:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function getWorking(_x5) {
        return _getWorking.apply(this, arguments);
      }
      return getWorking;
    }()
  }, {
    key: "deleteWorking",
    value: function () {
      var _deleteWorking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
        var workingDoc;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _models["default"].Working.destroy({
                force: true,
                where: {
                  id: id
                }
              });
            case 2:
              workingDoc = _context5.sent;
              if (!(workingDoc > 0)) {
                _context5.next = 7;
                break;
              }
              return _context5.abrupt("return", {
                statusCode: 0,
                msg: "Đã xóa thành công."
              });
            case 7:
              return _context5.abrupt("return", {
                statusCode: 1,
                msg: "Không tìm thấy tài nguyên này."
              });
            case 8:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function deleteWorking(_x6) {
        return _deleteWorking.apply(this, arguments);
      }
      return deleteWorking;
    }() // Work Room
  }, {
    key: "getWorkRoomFromWorking",
    value: function () {
      var _getWorkRoomFromWorking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_ref3) {
        var workingId, type, order, docs;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              workingId = _ref3.workingId, type = _ref3.type;
              order = [];
              if (type == "thanFromDateHere") {
                order = [["applyDate", "desc"]];
              }
              _context6.next = 5;
              return _models["default"].WorkRoom.findOne({
                raw: true,
                include: [{
                  model: _models["default"].ClinicRoom,
                  on: _defineProperty({}, _sequelize.Op.and, [{
                    roomNumber: _defineProperty({}, _sequelize.Op.col, "WorkRoom.ClinicRoomRoomNumber"),
                    healthFacilityId: _defineProperty({}, _sequelize.Op.col, "WorkRoom.ClinicRoomHealthFacilityId")
                  }]),
                  include: [{
                    model: _models["default"].HealthFacility
                  }]
                }, {
                  model: _models["default"].Working,
                  where: {
                    id: workingId
                  },
                  include: [{
                    model: _models["default"].Staff
                  }]
                }],
                nest: true,
                order: order
              });
            case 5:
              docs = _context6.sent;
              return _context6.abrupt("return", docs);
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function getWorkRoomFromWorking(_x7) {
        return _getWorkRoomFromWorking.apply(this, arguments);
      }
      return getWorkRoomFromWorking;
    }()
  }, {
    key: "getWorkRoom",
    value: function () {
      var _getWorkRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(_ref4) {
        var _ref4$offset, offset, _ref4$limit, limit, healthFacilityId, roomNumber, whereQueryWorkRoom, res, countWorkRoom, docs;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _ref4$offset = _ref4.offset, offset = _ref4$offset === void 0 ? 0 : _ref4$offset, _ref4$limit = _ref4.limit, limit = _ref4$limit === void 0 ? 10 : _ref4$limit, healthFacilityId = _ref4.healthFacilityId, roomNumber = _ref4.roomNumber;
              whereQueryWorkRoom = {};
              healthFacilityId && (whereQueryWorkRoom.ClinicRoomHealthFacilityId = healthFacilityId);
              roomNumber && (whereQueryWorkRoom.ClinicRoomRoomNumber = roomNumber);
              res = {};
              if (!(healthFacilityId && roomNumber)) {
                _context7.next = 10;
                break;
              }
              _context7.next = 8;
              return _models["default"].WorkRoom.count({
                where: {
                  ClinicRoomRoomNumber: roomNumber,
                  ClinicRoomHealthFacilityId: healthFacilityId
                },
                group: ["workingId"]
              });
            case 8:
              countWorkRoom = _context7.sent;
              res.currentParticipate = countWorkRoom.length;
            case 10:
              _context7.next = 12;
              return _models["default"].WorkRoom.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                where: whereQueryWorkRoom,
                order: [["applyDate", "desc"]],
                include: [{
                  model: _models["default"].ClinicRoom,
                  on: _defineProperty({}, _sequelize.Op.and, [{
                    roomNumber: _defineProperty({}, _sequelize.Op.col, "WorkRoom.ClinicRoomRoomNumber"),
                    healthFacilityId: _defineProperty({}, _sequelize.Op.col, "WorkRoom.ClinicRoomHealthFacilityId")
                  }]),
                  // Sequelize.col(

                  include: [{
                    model: _models["default"].HealthFacility
                  }]
                }, {
                  model: _models["default"].Working,
                  include: [{
                    model: _models["default"].Staff,
                    include: [_models["default"].AcademicDegree, _models["default"].Specialist]
                  }]
                }],
                nest: true
              });
            case 12:
              docs = _context7.sent;
              return _context7.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread(_objectSpread({}, docs), res), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 14:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function getWorkRoom(_x8) {
        return _getWorkRoom.apply(this, arguments);
      }
      return getWorkRoom;
    }()
  }, {
    key: "createOrUpdateWorkRoom",
    value: function () {
      var _createOrUpdateWorkRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(_ref5) {
        var ClinicRoomRoomNumber, ClinicRoomHealthFacilityId, checkUpPrice, applyDate, id, workingId, _yield$Promise$all3, _yield$Promise$all4, clinicRoomDoc, workingDoc, countWorkRoom, datePassed, workRoomExistsOrtherRoom, optionFindWorkRoom, workRoomExists, workDoc, _workDoc2;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              ClinicRoomRoomNumber = _ref5.ClinicRoomRoomNumber, ClinicRoomHealthFacilityId = _ref5.ClinicRoomHealthFacilityId, checkUpPrice = _ref5.checkUpPrice, applyDate = _ref5.applyDate, id = _ref5.id, workingId = _ref5.workingId;
              _context8.next = 3;
              return Promise.all([_models["default"].ClinicRoom.findOne({
                where: {
                  roomNumber: ClinicRoomRoomNumber,
                  healthFacilityId: ClinicRoomHealthFacilityId
                },
                raw: true
              }), _models["default"].Working.findByPk(workingId, {
                raw: true
              })]);
            case 3:
              _yield$Promise$all3 = _context8.sent;
              _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 2);
              clinicRoomDoc = _yield$Promise$all4[0];
              workingDoc = _yield$Promise$all4[1];
              if (!(!clinicRoomDoc || !workingDoc)) {
                _context8.next = 9;
                break;
              }
              return _context8.abrupt("return", {
                statusCode: 1,
                msg: "Không tìm thấy phòng hoặc lịch công tác của Bác sĩ."
              });
            case 9:
              _context8.next = 11;
              return _models["default"].WorkRoom.count({
                where: {
                  ClinicRoomRoomNumber: ClinicRoomRoomNumber,
                  ClinicRoomHealthFacilityId: ClinicRoomHealthFacilityId,
                  workingId: _defineProperty({}, _sequelize.Op.ne, workingId)
                },
                group: ["workingId"]
              });
            case 11:
              countWorkRoom = _context8.sent;
              if (!(countWorkRoom.length >= clinicRoomDoc.capacity)) {
                _context8.next = 14;
                break;
              }
              return _context8.abrupt("return", {
                statusCode: 7,
                msg: "Phòng đã đủ chổ khám."
              });
            case 14:
              if (!(workingDoc.healthFacilityId !== ClinicRoomHealthFacilityId)) {
                _context8.next = 16;
                break;
              }
              return _context8.abrupt("return", {
                statusCode: 4,
                msg: "Lịch công tác không phải của Bác sĩ này."
              });
            case 16:
              datePassed = new Date(applyDate).toISOString();
              _context8.next = 19;
              return _models["default"].WorkRoom.findOne({
                where: {
                  workingId: workingId
                },
                raw: true
              });
            case 19:
              workRoomExistsOrtherRoom = _context8.sent;
              if (!(workRoomExistsOrtherRoom && workRoomExistsOrtherRoom.ClinicRoomRoomNumber !== ClinicRoomRoomNumber)) {
                _context8.next = 22;
                break;
              }
              return _context8.abrupt("return", {
                statusCode: 402,
                msg: "B\xE1c s\u0129 \u0111ang \u0111\u01B0\u1EE3c ph\xE2n c\xF4ng \u1EDF ph\xF2ng ".concat(workRoomExistsOrtherRoom.ClinicRoomRoomNumber, ".")
              });
            case 22:
              optionFindWorkRoom = {};
              if (id) {
                optionFindWorkRoom.id = _defineProperty({}, _sequelize.Op.not, id);
              }
              optionFindWorkRoom.workingId = workingId;
              _context8.next = 27;
              return _models["default"].WorkRoom.findOne({
                where: _objectSpread(_defineProperty({}, _sequelize.Op.or, [_sequelize.Sequelize.where(_sequelize.Sequelize.fn("DATE", _sequelize.Sequelize.col("applyDate")), _sequelize.Sequelize.fn("DATE", _sequelize.Sequelize.literal("'".concat(datePassed, "'"))))]), optionFindWorkRoom),
                raw: true
              });
            case 27:
              workRoomExists = _context8.sent;
              if (!workRoomExists) {
                _context8.next = 30;
                break;
              }
              return _context8.abrupt("return", {
                statusCode: 401,
                msg: "Ngày áp dụng đã có."
              });
            case 30:
              if (id) {
                _context8.next = 41;
                break;
              }
              _context8.next = 33;
              return _models["default"].WorkRoom.create({
                ClinicRoomRoomNumber: ClinicRoomRoomNumber,
                ClinicRoomHealthFacilityId: ClinicRoomHealthFacilityId,
                checkUpPrice: checkUpPrice,
                applyDate: applyDate,
                workingId: workingId
              });
            case 33:
              workDoc = _context8.sent;
              if (!workDoc) {
                _context8.next = 38;
                break;
              }
              return _context8.abrupt("return", {
                statusCode: 0,
                msg: "Tạo thành công.",
                data: workDoc
              });
            case 38:
              return _context8.abrupt("return", {
                statusCode: 5,
                msg: "Tạo thất bại."
              });
            case 39:
              _context8.next = 49;
              break;
            case 41:
              _context8.next = 43;
              return _models["default"].WorkRoom.update({
                checkUpPrice: checkUpPrice,
                applyDate: applyDate
              }, {
                where: {
                  id: id
                }
              });
            case 43:
              _workDoc2 = _context8.sent;
              if (!(_workDoc2[0] > 0)) {
                _context8.next = 48;
                break;
              }
              return _context8.abrupt("return", {
                statusCode: 0,
                msg: "Cập nhật thành công."
              });
            case 48:
              return _context8.abrupt("return", {
                statusCode: 2,
                msg: "Cập nhật thất bại. Không tìm thấy dữ liệu này."
              });
            case 49:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      function createOrUpdateWorkRoom(_x9) {
        return _createOrUpdateWorkRoom.apply(this, arguments);
      }
      return createOrUpdateWorkRoom;
    }()
  }, {
    key: "deleteWorkRoom",
    value: function () {
      var _deleteWorkRoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(id) {
        var isDeleted;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return _models["default"].WorkRoom.destroy({
                force: true,
                where: {
                  id: id
                }
              });
            case 2:
              isDeleted = _context9.sent;
              if (!(isDeleted > 0)) {
                _context9.next = 7;
                break;
              }
              return _context9.abrupt("return", {
                statusCode: 0,
                msg: "Đã xóa thành công."
              });
            case 7:
              return _context9.abrupt("return", {
                statusCode: 1,
                msg: "Không tìm thấy tài nguyên này."
              });
            case 8:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      function deleteWorkRoom(_x10) {
        return _deleteWorkRoom.apply(this, arguments);
      }
      return deleteWorkRoom;
    }() // return a list of id doctor
  }, {
    key: "getListIdDoctorWorking",
    value: function () {
      var _getListIdDoctorWorking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(_ref6) {
        var healthFacilityId, doctorName, doctorEmail, specialistId, gender, doctorId, academicDegreeId, whereStaff, whereWorking, workDoc;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              healthFacilityId = _ref6.healthFacilityId, doctorName = _ref6.doctorName, doctorEmail = _ref6.doctorEmail, specialistId = _ref6.specialistId, gender = _ref6.gender, doctorId = _ref6.doctorId, academicDegreeId = _ref6.academicDegreeId;
              whereStaff = {};
              whereWorking = {};
              if (healthFacilityId) {
                whereWorking.healthFacilityId = healthFacilityId;
              }
              if (doctorName) {
                whereStaff.fullName = (0, _untils.searchLikeDeep)("Staff", "fullName", doctorName);
              }
              if (doctorId) {
                whereStaff.id = doctorId;
              }
              if (doctorEmail) {
                whereStaff.email = _defineProperty({}, _sequelize.Op.substring, doctorEmail);
              }
              if (specialistId) {
                whereStaff.specialistId = specialistId;
              }
              if (gender) {
                whereStaff.gender = gender;
              }
              if (academicDegreeId) {
                whereStaff.academicDegreeId = academicDegreeId;
              }
              _context10.next = 12;
              return _models["default"].Working.findAll({
                where: _objectSpread(_objectSpread({}, whereWorking), {}, _defineProperty({}, _sequelize.Op.or, [{
                  endDate: null
                }, {
                  endDate: _defineProperty({}, _sequelize.Op.gt, new Date())
                }])),
                include: [{
                  model: _models["default"].Staff,
                  where: whereStaff
                }],
                nest: true,
                raw: true
              });
            case 12:
              workDoc = _context10.sent;
              return _context10.abrupt("return", workDoc);
            case 14:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function getListIdDoctorWorking(_x11) {
        return _getListIdDoctorWorking.apply(this, arguments);
      }
      return getListIdDoctorWorking;
    }()
  }, {
    key: "getHealthExamScheduleToDate",
    value: function () {
      var _getHealthExamScheduleToDate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(staffId) {
        var dateNumber,
          schedule,
          _args11 = arguments;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              dateNumber = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : 7;
              _context11.next = 3;
              return _models["default"].HealthExaminationSchedule.findAll({
                include: [{
                  model: _models["default"].Working,
                  where: {
                    staffId: staffId
                  }
                }],
                limit: dateNumber,
                attributes: [[_sequelize.Sequelize.fn("COUNT", _sequelize.Sequelize.col("Working.id")), "workingCount"], "date"],
                group: ["date", "Working.id"],
                order: [["date", "asc"]]
              });
            case 3:
              schedule = _context11.sent;
              return _context11.abrupt("return", schedule.map(function (s) {
                return s.date;
              }));
            case 5:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function getHealthExamScheduleToDate(_x12) {
        return _getHealthExamScheduleToDate.apply(this, arguments);
      }
      return getHealthExamScheduleToDate;
    }()
  }, {
    key: "getDoctorWorkingAtHealth",
    value: function () {
      var _getDoctorWorkingAtHealth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(_ref7) {
        var _this = this;
        var _ref7$offset, offset, _ref7$limit, limit, healthFacilityId, doctorName, doctorEmail, specialistId, doctorId, gender, academicDegreeId, listIdDoctorWorking, whereWorkRoom, promiseAll, workRoomAndSchedule;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _ref7$offset = _ref7.offset, offset = _ref7$offset === void 0 ? 0 : _ref7$offset, _ref7$limit = _ref7.limit, limit = _ref7$limit === void 0 ? 10 : _ref7$limit, healthFacilityId = _ref7.healthFacilityId, doctorName = _ref7.doctorName, doctorEmail = _ref7.doctorEmail, specialistId = _ref7.specialistId, doctorId = _ref7.doctorId, gender = _ref7.gender, academicDegreeId = _ref7.academicDegreeId;
              _context12.next = 3;
              return this.getListIdDoctorWorking({
                healthFacilityId: healthFacilityId,
                doctorName: doctorName,
                doctorEmail: doctorEmail,
                specialistId: specialistId,
                gender: gender,
                academicDegreeId: academicDegreeId,
                doctorId: doctorId
              });
            case 3:
              listIdDoctorWorking = _context12.sent;
              whereWorkRoom = {};
              if (healthFacilityId) {
                whereWorkRoom.healthFacilityId = healthFacilityId;
              }
              promiseAll = listIdDoctorWorking.map(function (working) {
                return Promise.all([_models["default"].WorkRoom.findOne({
                  raw: true,
                  nest: true,
                  include: [{
                    model: _models["default"].Working,
                    where: _objectSpread({
                      staffId: working.staffId
                    }, whereWorkRoom),
                    include: [{
                      model: _models["default"].Staff,
                      include: [_models["default"].AcademicDegree, _models["default"].Specialist]
                    }]
                  }, {
                    model: _models["default"].ClinicRoom,
                    on: _defineProperty({}, _sequelize.Op.and, [{
                      roomNumber: _defineProperty({}, _sequelize.Op.col, "WorkRoom.ClinicRoomRoomNumber"),
                      healthFacilityId: _defineProperty({}, _sequelize.Op.col, "WorkRoom.ClinicRoomHealthFacilityId")
                    }]),
                    include: [{
                      model: _models["default"].HealthFacility
                    }]
                  }],
                  where: {
                    applyDate: _defineProperty({}, _sequelize.Op.lte, new Date())
                  },
                  order: [["applyDate", "DESC"]]
                }), _this.getHealthExamScheduleToDate(working.staffId), _userServices["default"].calculatorReviewDoctorById({
                  staffId: working.staffId
                })]);
              });
              _context12.next = 9;
              return Promise.all(promiseAll);
            case 9:
              workRoomAndSchedule = _context12.sent;
              return _context12.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: {
                  // rows: listWorkRoom,
                  rows: workRoomAndSchedule.filter(function (_ref8) {
                    var _ref9 = _slicedToArray(_ref8, 1),
                      workRoom = _ref9[0];
                    return workRoom !== null;
                  }).map(function (_ref10) {
                    var _star$data;
                    var _ref11 = _slicedToArray(_ref10, 3),
                      workRoom = _ref11[0],
                      schedule = _ref11[1],
                      star = _ref11[2];
                    return _objectSpread(_objectSpread({}, workRoom), {}, {
                      schedules: schedule || [],
                      starNumber: star === null || star === void 0 || (_star$data = star.data) === null || _star$data === void 0 ? void 0 : _star$data.avg
                    });
                  }),
                  limit: limit,
                  offset: offset
                }
              });
            case 11:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function getDoctorWorkingAtHealth(_x13) {
        return _getDoctorWorkingAtHealth.apply(this, arguments);
      }
      return getDoctorWorkingAtHealth;
    }()
  }, {
    key: "filterUniqueValues",
    value: function filterUniqueValues(arr) {
      return arr.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
    }
    // Health Examination Schedule
  }, {
    key: "getHealthExamSchedule",
    value: function () {
      var _getHealthExamSchedule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(_ref12) {
        var _ref12$offset, offset, _ref12$limit, limit, staffId, date, workingId, _ref12$type, type, raw, whereHealthExaminationSchedule, whereQuery, whereQueryWorking, getWorkingId, _working$data, working, _working$data2, currentDate, dateDistincts, countFuture, ds, docs, results;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              _ref12$offset = _ref12.offset, offset = _ref12$offset === void 0 ? 0 : _ref12$offset, _ref12$limit = _ref12.limit, limit = _ref12$limit === void 0 ? 10 : _ref12$limit, staffId = _ref12.staffId, date = _ref12.date, workingId = _ref12.workingId, _ref12$type = _ref12.type, type = _ref12$type === void 0 ? "all" : _ref12$type, raw = _ref12.raw;
              whereHealthExaminationSchedule = {};
              whereQuery = {};
              whereQueryWorking = {};
              staffId && (whereQueryWorking.staffId = staffId);
              workingId && (whereQueryWorking.id = workingId);
              date && (whereQuery.date = (0, _moment["default"])(date).format("L"));
              if (!staffId) {
                _context16.next = 16;
                break;
              }
              _context16.next = 10;
              return _workServices["default"].getWorking({
                doctorId: staffId
              });
            case 10:
              working = _context16.sent;
              if (!(working.statusCode === 0 && working !== null && working !== void 0 && (_working$data = working.data) !== null && _working$data !== void 0 && (_working$data = _working$data.rows) !== null && _working$data !== void 0 && (_working$data = _working$data[0]) !== null && _working$data !== void 0 && _working$data.id)) {
                _context16.next = 15;
                break;
              }
              getWorkingId = (_working$data2 = working.data) === null || _working$data2 === void 0 || (_working$data2 = _working$data2.rows) === null || _working$data2 === void 0 || (_working$data2 = _working$data2[0]) === null || _working$data2 === void 0 ? void 0 : _working$data2.id;
              _context16.next = 16;
              break;
            case 15:
              return _context16.abrupt("return", {
                statusCode: 400,
                msg: "Bác sĩ chưa được phân công công tác.",
                data: {
                  rows: [],
                  limit: 0,
                  offset: 0,
                  count: 0
                }
              });
            case 16:
              staffId && (whereQuery.workingId = getWorkingId);
              staffId && (whereHealthExaminationSchedule.workingId = getWorkingId);
              currentDate = (0, _moment["default"])().add(1).format("YYYY-MM-DD"); // if (type === "current") {
              //   whereQuery.date = {
              //     [Op.gte]: moment(Sequelize.col("date")).format("L"),
              //   };
              // }
              // check date distinct
              _context16.next = 21;
              return _models["default"].HealthExaminationSchedule.findAndCountAll({
                attributes: [[_sequelize.Sequelize.fn("DISTINCT", _sequelize.Sequelize.col("date")), "date"], [_sequelize.Sequelize.literal("CASE WHEN date < '".concat((0, _moment["default"])().add(1, "day").format("L"), "' THEN 1 ELSE 0 END")), "dateOrder"], [_sequelize.Sequelize.literal("TO_CHAR(\"date\"::date, 'YYYY-MM-DD')"), "formatted_date"]],
                offset: offset,
                limit: limit,
                where: _objectSpread({}, whereQuery),
                order: [["dateOrder", "asc"],
                // ["date", "asc"],
                ["formatted_date", "asc"]
                // Sequelize.literal(
                //   `CASE WHEN date < '${moment().format("L")}' THEN 1 ELSE 0 END`
                // ),
                ]
              });
            case 21:
              dateDistincts = _context16.sent;
              _context16.next = 24;
              return _models["default"].HealthExaminationSchedule.findAll({
                attributes: [[_sequelize.Sequelize.fn("DISTINCT", _sequelize.Sequelize.col("date")), "date"]],
                where: _objectSpread({}, whereHealthExaminationSchedule)
              });
            case 24:
              countFuture = _context16.sent;
              // const wokingIdDistinctsss = await db.HealthExaminationSchedule.findAll({});
              // return {
              //   statusCode: 200,
              //   data: wokingIdDistinctsss,
              // };
              // map every date
              ds = dateDistincts.rows.map( /*#__PURE__*/function () {
                var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(d) {
                  var wokingIdDistincts, resultsPromises, results;
                  return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                    while (1) switch (_context15.prev = _context15.next) {
                      case 0:
                        _context15.next = 2;
                        return _models["default"].HealthExaminationSchedule.findAll({
                          attributes: [[_sequelize.Sequelize.fn("DISTINCT", _sequelize.Sequelize.col("workingId")), "workingId"]],
                          where: _objectSpread({
                            date: d.date
                          }, whereHealthExaminationSchedule),
                          raw: true
                        });
                      case 2:
                        wokingIdDistincts = _context15.sent;
                        // map
                        resultsPromises = wokingIdDistincts.map( /*#__PURE__*/function () {
                          var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(workingId) {
                            var dataSchedule, promiseGetScheduleAvailable, data, staff;
                            return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                              while (1) switch (_context14.prev = _context14.next) {
                                case 0:
                                  _context14.next = 2;
                                  return _models["default"].HealthExaminationSchedule.findAll({
                                    where: {
                                      date: d.date,
                                      workingId: workingId.workingId
                                    },
                                    raw: true,
                                    include: [{
                                      model: _models["default"].Code,
                                      attributes: {},
                                      as: "TimeCode"
                                    }],
                                    nest: true
                                  });
                                case 2:
                                  dataSchedule = _context14.sent;
                                  promiseGetScheduleAvailable = dataSchedule.map( /*#__PURE__*/function () {
                                    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(row) {
                                      var isAvailableBooking;
                                      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                                        while (1) switch (_context13.prev = _context13.next) {
                                          case 0:
                                            _context13.next = 2;
                                            return _userServices["default"].isBooking(row.id);
                                          case 2:
                                            isAvailableBooking = _context13.sent;
                                            return _context13.abrupt("return", _objectSpread(_objectSpread({}, row), {}, {
                                              isAvailableBooking: isAvailableBooking
                                            }));
                                          case 4:
                                          case "end":
                                            return _context13.stop();
                                        }
                                      }, _callee13);
                                    }));
                                    return function (_x17) {
                                      return _ref15.apply(this, arguments);
                                    };
                                  }());
                                  _context14.next = 6;
                                  return Promise.all(promiseGetScheduleAvailable);
                                case 6:
                                  data = _context14.sent;
                                  _context14.next = 9;
                                  return _models["default"].Working.findOne({
                                    where: _objectSpread({
                                      id: workingId.workingId
                                    }, whereQueryWorking),
                                    include: [_models["default"].HealthFacility, {
                                      model: _models["default"].Staff,
                                      include: [_models["default"].AcademicDegree, _models["default"].Specialist]
                                    }]
                                  });
                                case 9:
                                  staff = _context14.sent;
                                  return _context14.abrupt("return", {
                                    working: staff,
                                    schedules: data
                                  });
                                case 11:
                                case "end":
                                  return _context14.stop();
                              }
                            }, _callee14);
                          }));
                          return function (_x16) {
                            return _ref14.apply(this, arguments);
                          };
                        }());
                        _context15.next = 6;
                        return Promise.all(resultsPromises);
                      case 6:
                        results = _context15.sent;
                        return _context15.abrupt("return", {
                          date: d.date,
                          data: results
                        });
                      case 8:
                      case "end":
                        return _context15.stop();
                    }
                  }, _callee15);
                }));
                return function (_x15) {
                  return _ref13.apply(this, arguments);
                };
              }());
              _context16.next = 28;
              return Promise.all(ds);
            case 28:
              docs = _context16.sent;
              results = {
                count: ds.count,
                rows: docs
              };
              return _context16.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, results), {}, {
                  limit: limit,
                  offset: offset,
                  count: countFuture.length
                })
              });
            case 31:
            case "end":
              return _context16.stop();
          }
        }, _callee16);
      }));
      function getHealthExamSchedule(_x14) {
        return _getHealthExamSchedule.apply(this, arguments);
      }
      return getHealthExamSchedule;
    }() // Health Examination Schedule
  }, {
    key: "getHealthExamScheduleDoctorAndTimeCode",
    value: function () {
      var _getHealthExamScheduleDoctorAndTimeCode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(_ref16) {
        var _db$HealthExamination;
        var _ref16$limit, limit, _ref16$offset, offset, staffId, date, workingId, healthFacilityName, staffName, whereHealthExaminationSchedule, whereQuery, whereQueryWorking, getWorkingId, _working$data3, working, _working$data4, staffistincts, ds, docs, results;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              _ref16$limit = _ref16.limit, limit = _ref16$limit === void 0 ? 5 : _ref16$limit, _ref16$offset = _ref16.offset, offset = _ref16$offset === void 0 ? 0 : _ref16$offset, staffId = _ref16.staffId, date = _ref16.date, workingId = _ref16.workingId, healthFacilityName = _ref16.healthFacilityName, staffName = _ref16.staffName;
              whereHealthExaminationSchedule = {};
              whereQuery = {};
              whereQueryWorking = {};
              staffId && (whereQueryWorking.staffId = staffId);
              workingId && (whereQueryWorking.id = workingId);
              if (date && (0, _moment["default"])(date).isValid()) {
                whereQuery.date = (0, _moment["default"])(date).format("L");
              }
              if (workingId) {
                whereQuery.workingId = workingId;
              }
              if (!(staffId || healthFacilityName || staffName)) {
                _context18.next = 17;
                break;
              }
              _context18.next = 11;
              return _workServices["default"].getWorking({
                doctorId: staffId,
                doctorName: staffName,
                healthFacilityName: healthFacilityName
              });
            case 11:
              working = _context18.sent;
              if (!(working.statusCode === 0 && working !== null && working !== void 0 && (_working$data3 = working.data) !== null && _working$data3 !== void 0 && (_working$data3 = _working$data3.rows) !== null && _working$data3 !== void 0 && (_working$data3 = _working$data3[0]) !== null && _working$data3 !== void 0 && _working$data3.id)) {
                _context18.next = 16;
                break;
              }
              getWorkingId = (_working$data4 = working.data) === null || _working$data4 === void 0 || (_working$data4 = _working$data4.rows) === null || _working$data4 === void 0 || (_working$data4 = _working$data4[0]) === null || _working$data4 === void 0 ? void 0 : _working$data4.id;
              _context18.next = 17;
              break;
            case 16:
              return _context18.abrupt("return", {
                statusCode: 400,
                msg: "Bác sĩ chưa được phân công công tác.",
                data: {
                  rows: [],
                  limit: 0,
                  offset: 0,
                  count: 0
                }
              });
            case 17:
              staffId && (whereQuery.workingId = getWorkingId);
              staffId && (whereHealthExaminationSchedule.workingId = getWorkingId);
              if (getWorkingId) {
                whereQuery.workingId = _defineProperty({}, _sequelize.Op["in"], Array.isArray(getWorkingId) ? getWorkingId : [getWorkingId]);
              }
              _context18.next = 22;
              return _models["default"].HealthExaminationSchedule.findAndCountAll((_db$HealthExamination = {
                raw: true,
                attributes: ["date", "workingId", [_sequelize.Sequelize.literal("CASE WHEN date < '".concat((0, _moment["default"])().format("L"), "' THEN 1 ELSE 0 END")), "dateOrder"], [_sequelize.Sequelize.literal("TO_CHAR(\"date\"::date, 'YYYY-MM-DD')"), "formatted_date"]],
                offset: offset,
                limit: limit,
                where: _objectSpread({}, whereQuery),
                nest: true
              }, _defineProperty(_db$HealthExamination, "raw", true), _defineProperty(_db$HealthExamination, "group", ["date", "workingId"]), _defineProperty(_db$HealthExamination, "order", [["dateOrder", "asc"],
              // ["date", "asc"],
              ["formatted_date", "asc"]
              // Sequelize.literal(
              //   `CASE WHEN date < '${moment().format("L")}' THEN 1 ELSE 0 END`
              // ),
              ]), _db$HealthExamination));
            case 22:
              staffistincts = _context18.sent;
              // return {
              //   statusCode: 0,
              //   msg: "ok",
              //   staffistincts,
              // };
              // map every date
              ds = staffistincts.rows.map( /*#__PURE__*/function () {
                var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(d) {
                  var wokingIdDistincts, workingDoc;
                  return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                    while (1) switch (_context17.prev = _context17.next) {
                      case 0:
                        _context17.next = 2;
                        return _models["default"].HealthExaminationSchedule.findAll({
                          where: _objectSpread({
                            workingId: d.workingId,
                            date: d.date
                          }, whereHealthExaminationSchedule),
                          include: [{
                            model: _models["default"].Code,
                            as: "TimeCode"
                          }],
                          order: [["timeCode", "asc"]],
                          raw: true,
                          nest: true
                        });
                      case 2:
                        wokingIdDistincts = _context17.sent;
                        _context17.next = 5;
                        return _models["default"].Working.findOne({
                          where: {
                            id: d.workingId
                          },
                          include: [_models["default"].Staff, _models["default"].HealthFacility]
                        });
                      case 5:
                        workingDoc = _context17.sent;
                        return _context17.abrupt("return", {
                          date: d.date,
                          working: workingDoc,
                          schedule: wokingIdDistincts
                        });
                      case 7:
                      case "end":
                        return _context17.stop();
                    }
                  }, _callee17);
                }));
                return function (_x19) {
                  return _ref17.apply(this, arguments);
                };
              }());
              _context18.next = 26;
              return Promise.all(ds);
            case 26:
              docs = _context18.sent;
              results = {
                count: ds.count,
                rows: docs
              };
              return _context18.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, results), {}, {
                  count: staffistincts.count.length,
                  limit: limit,
                  offset: offset
                })
              });
            case 29:
            case "end":
              return _context18.stop();
          }
        }, _callee18);
      }));
      function getHealthExamScheduleDoctorAndTimeCode(_x18) {
        return _getHealthExamScheduleDoctorAndTimeCode.apply(this, arguments);
      }
      return getHealthExamScheduleDoctorAndTimeCode;
    }() // Health Examination Schedule for Doctor
  }, {
    key: "getHealthExamScheduleForDoctor",
    value: function () {
      var _getHealthExamScheduleForDoctor = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(_ref18) {
        var _ref18$offset, offset, _ref18$limit, limit, staffId, date, workingId, _ref18$type, type, raw, whereQuery, whereQueryWorking, currentDate, documents, promiseFields, docs, results;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              _ref18$offset = _ref18.offset, offset = _ref18$offset === void 0 ? 0 : _ref18$offset, _ref18$limit = _ref18.limit, limit = _ref18$limit === void 0 ? 100 : _ref18$limit, staffId = _ref18.staffId, date = _ref18.date, workingId = _ref18.workingId, _ref18$type = _ref18.type, type = _ref18$type === void 0 ? "all" : _ref18$type, raw = _ref18.raw;
              // const whereQueryDoctor = {};
              whereQuery = {};
              whereQueryWorking = {};
              staffId && (whereQueryWorking.staffId = staffId);
              workingId && (whereQueryWorking.id = workingId);
              date && (whereQuery.date = (0, _moment["default"])(date).format("L"));
              currentDate = (0, _moment["default"])().format("YYYY-MM-DD");
              if (type === "current") {
                whereQuery.date = _defineProperty({}, _sequelize.Op.gte, _sequelize.Sequelize.fn("DATE", _sequelize.Sequelize.literal("'".concat(currentDate, "'"))));
              }
              _context20.next = 10;
              return _models["default"].HealthExaminationSchedule.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                order: [["date", "desc"]],
                where: whereQuery,
                include: !raw ? [{
                  model: _models["default"].Code,
                  attributes: {},
                  as: "TimeCode"
                }] : [{
                  model: _models["default"].Working,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"]
                  },
                  where: whereQueryWorking,
                  include: [{
                    model: _models["default"].Staff,
                    include: [_models["default"].Specialist]
                  }, _models["default"].HealthFacility]
                }, {
                  model: _models["default"].Code,
                  attributes: {},
                  as: "TimeCode"
                }],
                nest: true
              });
            case 10:
              documents = _context20.sent;
              promiseFields = documents.rows.map( /*#__PURE__*/function () {
                var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(row) {
                  var isAvailableBooking;
                  return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                    while (1) switch (_context19.prev = _context19.next) {
                      case 0:
                        _context19.next = 2;
                        return _userServices["default"].isBooking(row.id);
                      case 2:
                        isAvailableBooking = _context19.sent;
                        return _context19.abrupt("return", _objectSpread(_objectSpread({}, row), {}, {
                          isAvailableBooking: isAvailableBooking
                        }));
                      case 4:
                      case "end":
                        return _context19.stop();
                    }
                  }, _callee19);
                }));
                return function (_x21) {
                  return _ref19.apply(this, arguments);
                };
              }());
              _context20.next = 14;
              return Promise.all(promiseFields);
            case 14:
              docs = _context20.sent;
              results = {
                count: documents.count,
                rows: docs
              };
              return _context20.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, results), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 17:
            case "end":
              return _context20.stop();
          }
        }, _callee20);
      }));
      function getHealthExamScheduleForDoctor(_x20) {
        return _getHealthExamScheduleForDoctor.apply(this, arguments);
      }
      return getHealthExamScheduleForDoctor;
    }() // Health Examination Schedule for Doctor
  }, {
    key: "getHealthExamScheduleDoctorAll",
    value: function () {
      var _getHealthExamScheduleDoctorAll = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(_ref20) {
        var _ref20$offset, offset, _ref20$limit, limit, staffId, date, workingId, _ref20$type, type, healthFacilityName, staffName, whereQueryHealth, whereQuery, whereQueryWorking, documents;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              _ref20$offset = _ref20.offset, offset = _ref20$offset === void 0 ? 0 : _ref20$offset, _ref20$limit = _ref20.limit, limit = _ref20$limit === void 0 ? 100 : _ref20$limit, staffId = _ref20.staffId, date = _ref20.date, workingId = _ref20.workingId, _ref20$type = _ref20.type, type = _ref20$type === void 0 ? "all" : _ref20$type, healthFacilityName = _ref20.healthFacilityName, staffName = _ref20.staffName;
              // const whereQueryDoctor = {};
              whereQueryHealth = {};
              whereQuery = {};
              whereQueryWorking = {};
              staffId && (whereQueryWorking.staffId = staffId);
              workingId && (whereQueryWorking.id = workingId);
              console.log("\n\n\nmoment(date).isValid()", (0, _moment["default"])(date).isValid());
              if (date && (0, _moment["default"])(date).isValid()) {
                whereQuery.date = (0, _moment["default"])(date).format("L");
              }
              if (type === "current") {
                whereQuery.date = _defineProperty({}, _sequelize.Op.gt, (0, _moment["default"])(new Date()).format("L"));
              }
              if (healthFacilityName) {
                whereQueryHealth.name = (0, _untils.searchLikeDeep)("HealthFacility", "name", healthFacilityName);
              }
              _context21.next = 12;
              return _models["default"].HealthExaminationSchedule.findAndCountAll({
                raw: true,
                offset: offset,
                limit: limit,
                order: [["date", "asc"]],
                where: whereQuery,
                include: [{
                  model: _models["default"].Working,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"]
                  },
                  where: whereQueryWorking,
                  include: [{
                    model: _models["default"].Staff,
                    include: [_models["default"].Specialist]
                  }, {
                    model: _models["default"].HealthFacility,
                    where: whereQueryHealth
                  }]
                }, {
                  model: _models["default"].Code,
                  as: "TimeCode"
                }],
                nest: true
              });
            case 12:
              documents = _context21.sent;
              return _context21.abrupt("return", {
                statusCode: 0,
                msg: "Lấy thông tin thành công.",
                data: _objectSpread(_objectSpread({}, documents), {}, {
                  limit: limit,
                  offset: offset
                })
              });
            case 14:
            case "end":
              return _context21.stop();
          }
        }, _callee21);
      }));
      function getHealthExamScheduleDoctorAll(_x22) {
        return _getHealthExamScheduleDoctorAll.apply(this, arguments);
      }
      return getHealthExamScheduleDoctorAll;
    }()
  }, {
    key: "createOrUpdateHealthExamSchedule",
    value: function () {
      var _createOrUpdateHealthExamSchedule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(_ref21) {
        var date, maxNumber, timeCode, workingId, isWorking, workRoomCreated, codes, isDateFuture, dateMoment, scheduleExists, timeCodeExists, sameAs, docDelete, dateSelect, bookingDoc, docCreate, isDeleted, data, scheduleDoc, _data, _scheduleDoc;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              date = _ref21.date, maxNumber = _ref21.maxNumber, timeCode = _ref21.timeCode, workingId = _ref21.workingId;
              _context22.next = 3;
              return _models["default"].Working.findByPk(workingId, {
                raw: true
              });
            case 3:
              isWorking = _context22.sent;
              if (isWorking) {
                _context22.next = 6;
                break;
              }
              return _context22.abrupt("return", {
                statusCode: 7,
                msg: "Bác sĩ chưa được thêm vào nơi làm việc."
              });
            case 6:
              _context22.next = 8;
              return _models["default"].WorkRoom.findOne({
                where: {
                  workingId: workingId
                }
              });
            case 8:
              workRoomCreated = _context22.sent;
              if (workRoomCreated) {
                _context22.next = 11;
                break;
              }
              return _context22.abrupt("return", {
                statusCode: 8,
                msg: "Bác sĩ chưa được phân công vào phòng làm việc."
              });
            case 11:
              _context22.next = 13;
              return _models["default"].Code.findAll({
                where: {
                  key: _defineProperty({}, _sequelize.Op["in"], timeCode)
                },
                raw: true
              });
            case 13:
              codes = _context22.sent;
              if (!(timeCode.length !== codes.length)) {
                _context22.next = 16;
                break;
              }
              return _context22.abrupt("return", {
                statusCode: 2,
                msg: "Kh\xF4ng t\xECm th\u1EA5y m\xE3 th\u1EDDi gian n\xE0o \u0111\xF3."
              });
            case 16:
              isDateFuture = new Date(date) > new Date();
              if (isDateFuture) {
                _context22.next = 19;
                break;
              }
              return _context22.abrupt("return", {
                statusCode: 2,
                msg: "Ngày cập nhật phải ở tương lai."
              });
            case 19:
              // const scheduleExists = db.HealthExaminationSchedulefindAll
              //  Check if have schedule
              dateMoment = (0, _moment["default"])(date).format("L");
              _context22.next = 22;
              return _models["default"].HealthExaminationSchedule.findAll({
                where: {
                  date: dateMoment,
                  workingId: workingId
                },
                raw: true
              });
            case 22:
              scheduleExists = _context22.sent;
              if (!scheduleExists) {
                _context22.next = 53;
                break;
              }
              timeCodeExists = scheduleExists.map(function (t) {
                return t.timeCode;
              }); // schedule T1, T2
              // time code T1, T4
              // result T4
              // filter same as doc
              sameAs = timeCode.filter(function (t) {
                return timeCodeExists.includes(t);
              }); // filter doc need to delete
              docDelete = timeCodeExists.filter(function (t) {
                return !sameAs.includes(t);
              });
              dateSelect = (0, _moment["default"])(date).format("L"); // check booking
              _context22.next = 30;
              return _models["default"].Booking.findOne({
                raw: true,
                nest: true,
                where: {},
                include: [{
                  model: _models["default"].HealthExaminationSchedule,
                  where: {
                    date: dateSelect,
                    timeCode: _defineProperty({}, _sequelize.Op["in"], docDelete)
                  },
                  include: [{
                    model: _models["default"].Code,
                    as: "TimeCode"
                  }]
                }]
              });
            case 30:
              bookingDoc = _context22.sent;
              if (!bookingDoc) {
                _context22.next = 33;
                break;
              }
              return _context22.abrupt("return", {
                statusCode: 4,
                msg: "Kh\xF4ng th\u1EC3 x\xF3a. L\u1ECBch ".concat(bookingDoc.HealthExaminationSchedule.TimeCode.value, " \u0111\xE3 c\xF3 ng\u01B0\u1EDDi \u0111\u1EB7t.")
              });
            case 33:
              // filter doc need to create
              docCreate = timeCode.filter(function (t) {
                return !sameAs.includes(t);
              }); // delete doc
              if (!(docDelete.length > 0)) {
                _context22.next = 40;
                break;
              }
              _context22.next = 37;
              return _models["default"].HealthExaminationSchedule.destroy({
                force: true,
                where: {
                  date: dateMoment,
                  workingId: workingId,
                  timeCode: _defineProperty({}, _sequelize.Op["in"], docDelete)
                }
              });
            case 37:
              isDeleted = _context22.sent;
              if (!(isDeleted == 0)) {
                _context22.next = 40;
                break;
              }
              return _context22.abrupt("return", {
                statusCode: 1,
                msg: "Không tìm thấy tài nguyên này."
              });
            case 40:
              if (!(docCreate.length > 0)) {
                _context22.next = 50;
                break;
              }
              data = docCreate.map(function (timeCode) {
                return {
                  date: (0, _moment["default"])(date).format("L"),
                  timeCode: timeCode,
                  workingId: workingId,
                  maxNumber: maxNumber
                };
              });
              _context22.next = 44;
              return _models["default"].HealthExaminationSchedule.bulkCreate(data);
            case 44:
              scheduleDoc = _context22.sent;
              if (!scheduleDoc) {
                _context22.next = 49;
                break;
              }
              return _context22.abrupt("return", {
                statusCode: 0,
                msg: "C\u1EADp nh\u1EADt l\u1ECBch th\xE0nh c\xF4ng.",
                data: scheduleDoc
              });
            case 49:
              return _context22.abrupt("return", {
                statusCode: 3,
                msg: "Cập nhật thất bại. Đã có lỗi xảy ra."
              });
            case 50:
              return _context22.abrupt("return", {
                statusCode: 0,
                msg: "Đã lưu thay đổi."
              });
            case 53:
              // If creating a new schedule
              _data = timeCode.map(function (timeCode) {
                return {
                  date: (0, _moment["default"])(date).format("L"),
                  timeCode: timeCode,
                  workingId: workingId,
                  maxNumber: maxNumber
                };
              });
              _context22.next = 56;
              return _models["default"].HealthExaminationSchedule.bulkCreate(_data);
            case 56:
              _scheduleDoc = _context22.sent;
              if (!_scheduleDoc) {
                _context22.next = 61;
                break;
              }
              return _context22.abrupt("return", {
                statusCode: 0,
                msg: "T\u1EA1o l\u1ECBch th\xE0nh c\xF4ng.",
                data: _scheduleDoc
              });
            case 61:
              return _context22.abrupt("return", {
                statusCode: 3,
                msg: "Tạo thất bại. Đã có lỗi xảy ra."
              });
            case 62:
            case "end":
              return _context22.stop();
          }
        }, _callee22);
      }));
      function createOrUpdateHealthExamSchedule(_x23) {
        return _createOrUpdateHealthExamSchedule.apply(this, arguments);
      }
      return createOrUpdateHealthExamSchedule;
    }()
  }, {
    key: "registerSchedule",
    value: function () {
      var _registerSchedule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(_ref22) {
        var workingId, unit, startDate, endDate, quantity, optionTimeCode, timeCodeArray, maxNumber, isWorking, timeCodes, timeCodeAllDoc, momentStartDate, momentEndDate, dateWhile, dateWhileEnd, data, scheduleDoc, _timeCodes, _timeCodeAllDoc, _momentStartDate, _dateWhile, _dateWhileEnd, _data2, _scheduleDoc2, _timeCodes2, _timeCodeAllDoc2, _momentStartDate2, _dateWhile2, _dateWhileEnd2, _data3, _scheduleDoc3;
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              workingId = _ref22.workingId, unit = _ref22.unit, startDate = _ref22.startDate, endDate = _ref22.endDate, quantity = _ref22.quantity, optionTimeCode = _ref22.optionTimeCode, timeCodeArray = _ref22.timeCodeArray, maxNumber = _ref22.maxNumber;
              _context23.next = 3;
              return _models["default"].Working.findByPk(workingId, {
                raw: true
              });
            case 3:
              isWorking = _context23.sent;
              if (isWorking) {
                _context23.next = 6;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 500,
                msg: "Bác sĩ chưa được thêm vào nơi làm việc."
              });
            case 6:
              if (optionTimeCode) {
                _context23.next = 8;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 400,
                msg: "Vui lòng số khung giờ [all - custom]"
              });
            case 8:
              _context23.t0 = unit;
              _context23.next = _context23.t0 === "date" ? 11 : _context23.t0 === "week" ? 41 : _context23.t0 === "month" ? 74 : 107;
              break;
            case 11:
              timeCodes = [];
              if (!(optionTimeCode === "all")) {
                _context23.next = 21;
                break;
              }
              _context23.next = 15;
              return _models["default"].Code.findAll({
                where: {
                  name: "Time"
                },
                raw: true
              });
            case 15:
              timeCodeAllDoc = _context23.sent;
              // get array time code
              timeCodes = timeCodeAllDoc.map(function (t) {
                return t.key;
              });
              if (!(timeCodes.length == 0)) {
                _context23.next = 19;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 500,
                msg: "M\xE3 th\u1EDDi gian ch\u01B0a c\xF3."
              });
            case 19:
              _context23.next = 25;
              break;
            case 21:
              if (!(optionTimeCode == "custom")) {
                _context23.next = 25;
                break;
              }
              if (!(!timeCodeArray || (timeCodeArray === null || timeCodeArray === void 0 ? void 0 : timeCodeArray.length) == 0)) {
                _context23.next = 24;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 400,
                msg: "Mã thời gian chưa truyền array timecode"
              });
            case 24:
              timeCodes = timeCodeArray;
            case 25:
              if (!(!startDate || !endDate)) {
                _context23.next = 27;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 400,
                msg: "Vui l\xF2ng truy\u1EC1n \u0111\u1EE7 ng\xE0y b\u1EAFt \u0111\u1EA7u v\xE0 ng\xE0y k\u1EBFt th\xFAc l\u1ECBch."
              });
            case 27:
              momentStartDate = (0, _moment["default"])(new Date(startDate), "DD-MM-YYYY");
              momentEndDate = (0, _moment["default"])(new Date(endDate), "DD-MM-YYYY");
              dateWhile = momentStartDate;
              dateWhileEnd = momentEndDate.add("days", 1);
              data = [];
              while (!dateWhile.isSame(dateWhileEnd) && dateWhile.isValid() && dateWhileEnd.isValid()) {
                timeCodes.forEach(function (time) {
                  var temp = {
                    date: dateWhile.format("L"),
                    timeCode: time,
                    workingId: workingId,
                    maxNumber: maxNumber
                  };
                  data.push(temp);
                });
                dateWhile = dateWhile.add("days", 1);
              }

              // push data
              _context23.next = 35;
              return _models["default"].HealthExaminationSchedule.bulkCreate(data, {
                // updateOnDuplicate:  ["date", "workingId", "timeCode"]
                // upsertKeys: ["schedule"],
                updateOnDuplicate: ["date", "workingId", "timeCode"]
                // ignoreDuplicates: true,
              });
            case 35:
              scheduleDoc = _context23.sent;
              if (!scheduleDoc) {
                _context23.next = 40;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 0,
                msg: "T\u1EA1o l\u1ECBch th\xE0nh c\xF4ng.",
                data: scheduleDoc
              });
            case 40:
              return _context23.abrupt("return", {
                statusCode: 3,
                msg: "Tạo thất bại. Đã có lỗi xảy ra."
              });
            case 41:
              _timeCodes = [];
              if (!(optionTimeCode === "all")) {
                _context23.next = 51;
                break;
              }
              _context23.next = 45;
              return _models["default"].Code.findAll({
                where: {
                  name: "Time"
                },
                raw: true
              });
            case 45:
              _timeCodeAllDoc = _context23.sent;
              // get array time code
              _timeCodes = _timeCodeAllDoc.map(function (t) {
                return t.key;
              });
              if (!(_timeCodes.length == 0)) {
                _context23.next = 49;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 500,
                msg: "M\xE3 th\u1EDDi gian ch\u01B0a c\xF3."
              });
            case 49:
              _context23.next = 55;
              break;
            case 51:
              if (!(optionTimeCode == "custom")) {
                _context23.next = 55;
                break;
              }
              if (!(!timeCodeArray || (timeCodeArray === null || timeCodeArray === void 0 ? void 0 : timeCodeArray.length) == 0)) {
                _context23.next = 54;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 400,
                msg: "Mã thời gian chưa truyền array timecode"
              });
            case 54:
              _timeCodes = timeCodeArray;
            case 55:
              if (startDate) {
                _context23.next = 57;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 400,
                msg: "Vui l\xF2ng truy\u1EC1n ng\xE0y b\u1EAFt \u0111\u1EA7u c\u1EE7a l\u1ECBch."
              });
            case 57:
              if (quantity) {
                _context23.next = 59;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 400,
                msg: "Vui l\xF2ng truy\u1EC1n s\u1ED1 l\u01B0\u1EE3ng tu\u1EA7n."
              });
            case 59:
              if (maxNumber) {
                _context23.next = 61;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 400,
                msg: "Vui l\xF2ng truy\u1EC1n s\u1ED1 l\u01B0\u1EE3ng t\u1ED1i \u0111\xE1 b\u1EC7nh nh\xE2n kh\xE1m trong m\u1ED9t khung gi\u1EDD."
              });
            case 61:
              _momentStartDate = (0, _moment["default"])(new Date(startDate), "DD-MM-YYYY");
              _dateWhile = _momentStartDate;
              _dateWhileEnd = (0, _moment["default"])(new Date(startDate), "DD-MM-YYYY").add("days", quantity * 7);
              _data2 = [];
              while (!_dateWhile.isSame(_dateWhileEnd) && _dateWhile.isValid() && _dateWhileEnd.isValid()) {
                _timeCodes.forEach(function (time) {
                  var temp = {
                    date: _dateWhile.format("L"),
                    timeCode: time,
                    workingId: workingId,
                    maxNumber: maxNumber
                  };
                  _data2.push(temp);
                });
                _dateWhile = _dateWhile.add("days", 1);
              }
              // push data
              _context23.next = 68;
              return _models["default"].HealthExaminationSchedule.bulkCreate(_data2, {
                // updateOnDuplicate:  ["date", "workingId", "timeCode"]
                // upsertKeys: ["schedule"],
                updateOnDuplicate: ["date", "workingId", "timeCode"]
                // ignoreDuplicates: true,
              });
            case 68:
              _scheduleDoc2 = _context23.sent;
              if (!_scheduleDoc2) {
                _context23.next = 73;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 0,
                msg: "T\u1EA1o l\u1ECBch th\xE0nh c\xF4ng.",
                data: _scheduleDoc2
              });
            case 73:
              return _context23.abrupt("return", {
                statusCode: 3,
                msg: "Tạo thất bại. Đã có lỗi xảy ra."
              });
            case 74:
              _timeCodes2 = [];
              if (!(optionTimeCode === "all")) {
                _context23.next = 84;
                break;
              }
              _context23.next = 78;
              return _models["default"].Code.findAll({
                where: {
                  name: "Time"
                },
                raw: true
              });
            case 78:
              _timeCodeAllDoc2 = _context23.sent;
              // get array time code
              _timeCodes2 = _timeCodeAllDoc2.map(function (t) {
                return t.key;
              });
              if (!(_timeCodes2.length == 0)) {
                _context23.next = 82;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 500,
                msg: "M\xE3 th\u1EDDi gian ch\u01B0a c\xF3."
              });
            case 82:
              _context23.next = 88;
              break;
            case 84:
              if (!(optionTimeCode == "custom")) {
                _context23.next = 88;
                break;
              }
              if (!(!timeCodeArray || (timeCodeArray === null || timeCodeArray === void 0 ? void 0 : timeCodeArray.length) == 0)) {
                _context23.next = 87;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 400,
                msg: "Mã thời gian chưa truyền array timecode"
              });
            case 87:
              _timeCodes2 = timeCodeArray;
            case 88:
              if (startDate) {
                _context23.next = 90;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 400,
                msg: "Vui l\xF2ng truy\u1EC1n ng\xE0y b\u1EAFt \u0111\u1EA7u c\u1EE7a l\u1ECBch."
              });
            case 90:
              if (quantity) {
                _context23.next = 92;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 400,
                msg: "Vui l\xF2ng truy\u1EC1n s\u1ED1 l\u01B0\u1EE3ng tu\u1EA7n."
              });
            case 92:
              if (maxNumber) {
                _context23.next = 94;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 400,
                msg: "Vui l\xF2ng truy\u1EC1n s\u1ED1 l\u01B0\u1EE3ng t\u1ED1i \u0111\xE1 b\u1EC7nh nh\xE2n kh\xE1m trong m\u1ED9t khung gi\u1EDD."
              });
            case 94:
              _momentStartDate2 = (0, _moment["default"])(new Date(startDate), "DD-MM-YYYY");
              _dateWhile2 = _momentStartDate2;
              _dateWhileEnd2 = (0, _moment["default"])(new Date(startDate), "DD-MM-YYYY").add("months", quantity);
              _data3 = [];
              while (!_dateWhile2.isSame(_dateWhileEnd2) && _dateWhile2.isValid() && _dateWhileEnd2.isValid()) {
                _timeCodes2.forEach(function (time) {
                  var temp = {
                    date: _dateWhile2.format("L"),
                    timeCode: time,
                    workingId: workingId,
                    maxNumber: maxNumber
                  };
                  _data3.push(temp);
                });
                _dateWhile2 = _dateWhile2.add("days", 1);
              }
              // push data
              _context23.next = 101;
              return _models["default"].HealthExaminationSchedule.bulkCreate(_data3, {
                // updateOnDuplicate:  ["date", "workingId", "timeCode"]
                // upsertKeys: ["schedule"],
                updateOnDuplicate: ["date", "workingId", "timeCode"]
                // ignoreDuplicates: true,
              });
            case 101:
              _scheduleDoc3 = _context23.sent;
              if (!_scheduleDoc3) {
                _context23.next = 106;
                break;
              }
              return _context23.abrupt("return", {
                statusCode: 0,
                msg: "T\u1EA1o l\u1ECBch th\xE0nh c\xF4ng.",
                data: _scheduleDoc3
              });
            case 106:
              return _context23.abrupt("return", {
                statusCode: 3,
                msg: "Tạo thất bại. Đã có lỗi xảy ra."
              });
            case 107:
              return _context23.abrupt("return", {
                statusCode: 400,
                msg: "Vui lòng chọn option [date-date,week,month]"
              });
            case 108:
            case "end":
              return _context23.stop();
          }
        }, _callee23);
      }));
      function registerSchedule(_x24) {
        return _registerSchedule.apply(this, arguments);
      }
      return registerSchedule;
    }()
  }, {
    key: "deleteHealthExamSchedule",
    value: function () {
      var _deleteHealthExamSchedule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(id) {
        var isHaveDoc, isDeleted;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              _context24.next = 2;
              return _models["default"].Booking.findOne({
                where: {
                  healthExaminationScheduleId: id
                },
                raw: true
              });
            case 2:
              isHaveDoc = _context24.sent;
              if (!isHaveDoc) {
                _context24.next = 5;
                break;
              }
              return _context24.abrupt("return", {
                statusCode: 2,
                msg: "Lịch này đã có người đặt."
              });
            case 5:
              _context24.next = 7;
              return _models["default"].HealthExaminationSchedule.destroy({
                force: true,
                where: {
                  id: id
                }
              });
            case 7:
              isDeleted = _context24.sent;
              if (!(isDeleted > 0)) {
                _context24.next = 12;
                break;
              }
              return _context24.abrupt("return", {
                statusCode: 0,
                msg: "Đã xóa thành công."
              });
            case 12:
              return _context24.abrupt("return", {
                statusCode: 1,
                msg: "Không tìm thấy tài nguyên này."
              });
            case 13:
            case "end":
              return _context24.stop();
          }
        }, _callee24);
      }));
      function deleteHealthExamSchedule(_x25) {
        return _deleteHealthExamSchedule.apply(this, arguments);
      }
      return deleteHealthExamSchedule;
    }() // test api
  }, {
    key: "testapi",
    value: function () {
      var _testapi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
        var workingDoc;
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) switch (_context25.prev = _context25.next) {
            case 0:
              _context25.next = 2;
              return _models["default"].ServiceDetail.findAll({
                raw: true,
                nest: true
              });
            case 2:
              workingDoc = _context25.sent;
              return _context25.abrupt("return", {
                statusCode: 200,
                msg: "Ok!",
                data: workingDoc
              });
            case 4:
            case "end":
              return _context25.stop();
          }
        }, _callee25);
      }));
      function testapi() {
        return _testapi.apply(this, arguments);
      }
      return testapi;
    }()
  }]);
  return WorkServices;
}();
var _default = new WorkServices();
exports["default"] = _default;