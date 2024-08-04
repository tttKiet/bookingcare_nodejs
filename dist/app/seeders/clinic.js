"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = require("uuid"),
  uuidv4 = _require.v4;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return queryInterface.bulkInsert("ClinicRooms", [{
              roomNumber: 99,
              healthFacilityId: "cbac52e0-bb9d-4ab0-9ef5-0c77c0451067",
              capacity: 2,
              createdAt: "2024-05-03T05:06:23.030Z",
              updatedAt: "2024-05-03T05:06:23.030Z"
            }, {
              roomNumber: 100,
              healthFacilityId: "cbac52e0-bb9d-4ab0-9ef5-0c77c0451067",
              capacity: 1,
              createdAt: "2024-05-03T05:06:18.978Z",
              updatedAt: "2024-05-03T05:06:18.978Z"
            }, {
              roomNumber: 100,
              healthFacilityId: "558174f5-813a-47a0-9138-02945db6de6f",
              capacity: 3,
              createdAt: "2024-05-03T03:57:02.339Z",
              updatedAt: "2024-05-03T03:57:02.339Z"
            }, {
              roomNumber: 100,
              healthFacilityId: "1f94a2dc-bd47-40cf-a2eb-ae4103a164e0",
              capacity: 1,
              createdAt: "2024-05-03T03:59:12.064Z",
              updatedAt: "2024-05-03T03:59:12.064Z"
            }, {
              roomNumber: 101,
              healthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              capacity: 1,
              createdAt: "2024-05-03T03:54:55.907Z",
              updatedAt: "2024-05-03T03:54:55.907Z"
            }, {
              roomNumber: 101,
              healthFacilityId: "00702834-feb8-4572-a476-bd407ed7d9b7",
              capacity: 2,
              createdAt: "2024-05-03T03:57:23.474Z",
              updatedAt: "2024-05-03T03:57:23.474Z"
            }, {
              roomNumber: 101,
              healthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
              capacity: 1,
              createdAt: "2024-05-03T05:05:45.549Z",
              updatedAt: "2024-05-03T05:05:45.549Z"
            }, {
              roomNumber: 101,
              healthFacilityId: "e6317bfd-321b-4ba7-8d6c-47867e5715e5",
              capacity: 1,
              createdAt: "2024-05-03T05:05:29.220Z",
              updatedAt: "2024-05-03T05:05:29.220Z"
            }, {
              roomNumber: 101,
              healthFacilityId: "b772c549-13de-4fed-a5ef-f39a193e265f",
              capacity: 2,
              createdAt: "2024-05-03T05:04:55.372Z",
              updatedAt: "2024-05-03T05:04:55.372Z"
            }, {
              roomNumber: 101,
              healthFacilityId: "5b73b044-9601-42a0-8d6c-e6fd778841ed",
              capacity: 2,
              createdAt: "2024-05-03T03:58:09.451Z",
              updatedAt: "2024-05-03T03:58:09.451Z"
            }, {
              roomNumber: 101,
              healthFacilityId: "242fd0e5-7985-4194-8b98-470543b0f2fc",
              capacity: 1,
              createdAt: "2024-05-03T05:04:33.758Z",
              updatedAt: "2024-05-03T05:04:33.758Z"
            }, {
              roomNumber: 101,
              healthFacilityId: "54f834f6-c064-497d-bf68-94752d5e64e8",
              capacity: 2,
              createdAt: "2024-05-03T05:04:09.958Z",
              updatedAt: "2024-05-03T05:04:09.958Z"
            }, {
              roomNumber: 101,
              healthFacilityId: "187628dd-8362-44a9-aa30-63050a3bce19",
              capacity: 2,
              createdAt: "2024-05-03T03:59:46.313Z",
              updatedAt: "2024-05-03T03:59:46.313Z"
            }, {
              roomNumber: 101,
              healthFacilityId: "35e2cea4-7d46-411e-85ee-b487f2a2920e",
              capacity: 3,
              createdAt: "2024-05-03T03:58:38.475Z",
              updatedAt: "2024-05-03T03:58:38.475Z"
            }, {
              roomNumber: 101,
              healthFacilityId: "82ae2a90-baea-4539-b23b-5b1f3441a142",
              capacity: 3,
              createdAt: "2024-05-03T03:58:54.229Z",
              updatedAt: "2024-05-03T03:58:54.229Z"
            }, {
              roomNumber: 101,
              healthFacilityId: "1f94a2dc-bd47-40cf-a2eb-ae4103a164e0",
              capacity: 2,
              createdAt: "2024-05-03T03:59:15.154Z",
              updatedAt: "2024-05-03T03:59:15.154Z"
            }, {
              roomNumber: 101,
              healthFacilityId: "a137a530-7f9f-489a-ba92-ffdade06842e",
              capacity: 1,
              createdAt: "2024-05-03T03:56:34.291Z",
              updatedAt: "2024-05-03T03:56:34.291Z"
            }, {
              roomNumber: 102,
              healthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
              capacity: 2,
              createdAt: "2024-05-03T05:05:48.643Z",
              updatedAt: "2024-05-03T05:05:48.643Z"
            }, {
              roomNumber: 102,
              healthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              capacity: 2,
              createdAt: "2024-05-03T03:54:59.103Z",
              updatedAt: "2024-05-03T03:54:59.103Z"
            }, {
              roomNumber: 102,
              healthFacilityId: "a137a530-7f9f-489a-ba92-ffdade06842e",
              capacity: 2,
              createdAt: "2024-05-03T03:56:37.928Z",
              updatedAt: "2024-05-03T03:56:37.928Z"
            }, {
              roomNumber: 102,
              healthFacilityId: "558174f5-813a-47a0-9138-02945db6de6f",
              capacity: 1,
              createdAt: "2024-05-03T03:57:06.259Z",
              updatedAt: "2024-05-03T03:57:06.259Z"
            }, {
              roomNumber: 102,
              healthFacilityId: "187628dd-8362-44a9-aa30-63050a3bce19",
              capacity: 2,
              createdAt: "2024-05-03T03:59:50.793Z",
              updatedAt: "2024-05-03T03:59:50.793Z"
            }, {
              roomNumber: 102,
              healthFacilityId: "54f834f6-c064-497d-bf68-94752d5e64e8",
              capacity: 2,
              createdAt: "2024-05-03T05:04:13.419Z",
              updatedAt: "2024-05-03T05:04:13.419Z"
            }, {
              roomNumber: 102,
              healthFacilityId: "242fd0e5-7985-4194-8b98-470543b0f2fc",
              capacity: 2,
              createdAt: "2024-05-03T05:04:37.402Z",
              updatedAt: "2024-05-03T05:04:37.402Z"
            }, {
              roomNumber: 102,
              healthFacilityId: "e6317bfd-321b-4ba7-8d6c-47867e5715e5",
              capacity: 1,
              createdAt: "2024-05-03T05:05:32.173Z",
              updatedAt: "2024-05-03T05:05:32.173Z"
            }, {
              roomNumber: 103,
              healthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
              capacity: 1,
              createdAt: "2024-05-03T05:05:52.365Z",
              updatedAt: "2024-05-03T05:05:52.365Z"
            }, {
              roomNumber: 200,
              healthFacilityId: "35e2cea4-7d46-411e-85ee-b487f2a2920e",
              capacity: 1,
              createdAt: "2024-05-03T03:58:42.121Z",
              updatedAt: "2024-05-03T03:58:42.121Z"
            }, {
              roomNumber: 200,
              healthFacilityId: "82ae2a90-baea-4539-b23b-5b1f3441a142",
              capacity: 1,
              createdAt: "2024-05-03T03:59:00.400Z",
              updatedAt: "2024-05-03T03:59:00.400Z"
            }, {
              roomNumber: 200,
              healthFacilityId: "187628dd-8362-44a9-aa30-63050a3bce19",
              capacity: 2,
              createdAt: "2024-05-03T03:59:53.951Z",
              updatedAt: "2024-05-03T03:59:53.951Z"
            }, {
              roomNumber: 200,
              healthFacilityId: "5b73b044-9601-42a0-8d6c-e6fd778841ed",
              capacity: 1,
              createdAt: "2024-05-03T03:58:15.275Z",
              updatedAt: "2024-05-03T03:58:15.275Z"
            }, {
              roomNumber: 201,
              healthFacilityId: "b772c549-13de-4fed-a5ef-f39a193e265f",
              capacity: 1,
              createdAt: "2024-05-03T05:04:59.464Z",
              updatedAt: "2024-05-03T05:04:59.464Z"
            }, {
              roomNumber: 201,
              healthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
              capacity: 1,
              createdAt: "2024-05-03T05:05:56.176Z",
              updatedAt: "2024-05-03T05:05:56.176Z"
            }, {
              roomNumber: 201,
              healthFacilityId: "54f834f6-c064-497d-bf68-94752d5e64e8",
              capacity: 2,
              createdAt: "2024-05-03T05:04:18.015Z",
              updatedAt: "2024-05-03T05:04:18.015Z"
            }, {
              roomNumber: 201,
              healthFacilityId: "a137a530-7f9f-489a-ba92-ffdade06842e",
              capacity: 4,
              createdAt: "2024-05-03T03:56:43.178Z",
              updatedAt: "2024-05-03T03:56:43.178Z"
            }, {
              roomNumber: 201,
              healthFacilityId: "242fd0e5-7985-4194-8b98-470543b0f2fc",
              capacity: 1,
              createdAt: "2024-05-03T05:04:40.589Z",
              updatedAt: "2024-05-03T05:04:40.589Z"
            }, {
              roomNumber: 201,
              healthFacilityId: "b7a0501f-861c-409a-9a74-b773e486df58",
              capacity: 1,
              createdAt: "2024-05-03T03:57:50.565Z",
              updatedAt: "2024-05-03T03:57:50.565Z"
            }, {
              roomNumber: 201,
              healthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              capacity: 1,
              createdAt: "2024-05-03T03:55:02.687Z",
              updatedAt: "2024-05-03T03:55:02.687Z"
            }, {
              roomNumber: 201,
              healthFacilityId: "e6317bfd-321b-4ba7-8d6c-47867e5715e5",
              capacity: 1,
              createdAt: "2024-05-03T05:05:35.301Z",
              updatedAt: "2024-05-03T05:05:35.301Z"
            }, {
              roomNumber: 201,
              healthFacilityId: "00702834-feb8-4572-a476-bd407ed7d9b7",
              capacity: 1,
              createdAt: "2024-05-03T03:57:26.479Z",
              updatedAt: "2024-05-03T03:57:26.479Z"
            }, {
              roomNumber: 201,
              healthFacilityId: "558174f5-813a-47a0-9138-02945db6de6f",
              capacity: 2,
              createdAt: "2024-05-03T03:57:10.482Z",
              updatedAt: "2024-05-03T03:57:10.482Z"
            }, {
              roomNumber: 300,
              healthFacilityId: "5b73b044-9601-42a0-8d6c-e6fd778841ed",
              capacity: 3,
              createdAt: "2024-05-03T03:58:20.037Z",
              updatedAt: "2024-05-03T03:58:20.037Z"
            }, {
              roomNumber: 300,
              healthFacilityId: "b7a0501f-861c-409a-9a74-b773e486df58",
              capacity: 4,
              createdAt: "2024-05-03T03:57:45.237Z",
              updatedAt: "2024-05-03T03:57:45.237Z"
            }, {
              roomNumber: 300,
              healthFacilityId: "82ae2a90-baea-4539-b23b-5b1f3441a142",
              capacity: 2,
              createdAt: "2024-05-03T03:58:57.357Z",
              updatedAt: "2024-05-03T03:58:57.357Z"
            }, {
              roomNumber: 301,
              healthFacilityId: "1f94a2dc-bd47-40cf-a2eb-ae4103a164e0",
              capacity: 2,
              createdAt: "2024-05-03T03:59:19.203Z",
              updatedAt: "2024-05-03T03:59:19.203Z"
            }, {
              roomNumber: 302,
              healthFacilityId: "b772c549-13de-4fed-a5ef-f39a193e265f",
              capacity: 1,
              createdAt: "2024-05-03T05:05:07.675Z",
              updatedAt: "2024-05-03T05:05:07.675Z"
            }, {
              roomNumber: 302,
              healthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
              capacity: 3,
              createdAt: "2024-05-03T05:06:05.512Z",
              updatedAt: "2024-05-03T05:06:05.512Z"
            }], {});
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  down: function down(queryInterface, Sequelize) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  } /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
};