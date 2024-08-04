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
            return queryInterface.bulkInsert("WorkRooms", [{
              id: "a0fdb62e-32a5-46cb-9031-52ce52a66e0d",
              ClinicRoomRoomNumber: 101,
              ClinicRoomHealthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              workingId: "d6f4d58e-f7a9-496c-98c4-41b58e04541f",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "7ac29cdb-4773-425c-a073-aa409281610a",
              ClinicRoomRoomNumber: 102,
              ClinicRoomHealthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              workingId: "9186a501-0ab4-4e3a-94c6-d167af8af32c",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "f464715b-f329-4b6c-8661-fbf618b887d3",
              ClinicRoomRoomNumber: 102,
              ClinicRoomHealthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              workingId: "9e65668e-3708-4fd5-9f20-115c44dd65c2",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "2a1097e2-249d-4c6b-ae5b-98741c17962b",
              ClinicRoomRoomNumber: 201,
              ClinicRoomHealthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              workingId: "50d23b65-c8e3-48b7-ba7b-a2cf8a0cb255",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "08b0182a-c539-4344-b258-8924eabf3da1",
              ClinicRoomRoomNumber: 300,
              ClinicRoomHealthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              workingId: "2ec2cf94-63cd-4d9c-9fad-ca8a9e418a8d",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "e8a14aae-5750-4c50-a59d-31eee16dc6d8",
              ClinicRoomRoomNumber: 300,
              ClinicRoomHealthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              workingId: "dd771cc0-8425-4505-b536-95898128a77a",
              checkUpPrice: 4,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "8abc9bf8-7ee6-4a57-964c-072d24ab2357",
              ClinicRoomRoomNumber: 301,
              ClinicRoomHealthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              workingId: "62f6cbfb-4078-4cbe-a377-28b74766185e",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "38add3eb-9707-4502-9678-622f386c8f38",
              ClinicRoomRoomNumber: 301,
              ClinicRoomHealthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              workingId: "f00fb219-5bfc-46a3-aaf3-02ee015556fb",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "1e57d07c-a116-4f2b-a0ed-f82406822529",
              ClinicRoomRoomNumber: 101,
              ClinicRoomHealthFacilityId: "a137a530-7f9f-489a-ba92-ffdade06842e",
              workingId: "8bb1df38-1810-4933-817e-2f035033bf8a",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "3c98d31e-505f-496a-bfe5-cfb9405a3ab4",
              ClinicRoomRoomNumber: 102,
              ClinicRoomHealthFacilityId: "a137a530-7f9f-489a-ba92-ffdade06842e",
              workingId: "0df6b262-bcad-4564-a2e0-829dee5050f1",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "3b5b2001-7c8d-4a5f-bf1c-ac828baa6ca5",
              ClinicRoomRoomNumber: 100,
              ClinicRoomHealthFacilityId: "558174f5-813a-47a0-9138-02945db6de6f",
              workingId: "1bdf27e3-5093-4908-8d82-25f246350289",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "561710bc-cc30-4314-acdd-90eb3c16c685",
              ClinicRoomRoomNumber: 101,
              ClinicRoomHealthFacilityId: "00702834-feb8-4572-a476-bd407ed7d9b7",
              workingId: "a8a6de91-f050-4d16-8584-dd277e9cd8f2",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "efb6904a-920e-497b-9100-1674830d8fbd",
              ClinicRoomRoomNumber: 101,
              ClinicRoomHealthFacilityId: "5b73b044-9601-42a0-8d6c-e6fd778841ed",
              workingId: "46c85f27-70ea-441a-8345-a2d46df6ce88",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "84414d41-7342-47be-9e6c-6f86c8980665",
              ClinicRoomRoomNumber: 201,
              ClinicRoomHealthFacilityId: "b7a0501f-861c-409a-9a74-b773e486df58",
              workingId: "ca06933e-5cfc-4ed2-a526-a7cefd60ac14",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "b07767aa-96ce-4758-aca5-56c97993929f",
              ClinicRoomRoomNumber: 101,
              ClinicRoomHealthFacilityId: "35e2cea4-7d46-411e-85ee-b487f2a2920e",
              workingId: "481f855b-847f-4452-987b-51cbe33dee69",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "28298030-ae43-4cf2-93bf-65da232b55fc",
              ClinicRoomRoomNumber: 101,
              ClinicRoomHealthFacilityId: "82ae2a90-baea-4539-b23b-5b1f3441a142",
              workingId: "3e7908ea-d41b-4694-bb18-2720049f931a",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "2a5ce14f-659d-4072-8e6a-da302daafff3",
              ClinicRoomRoomNumber: 101,
              ClinicRoomHealthFacilityId: "82ae2a90-baea-4539-b23b-5b1f3441a142",
              workingId: "f8f55815-c777-4c74-9a04-3ae7b780f947",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "498c39b3-469b-4076-9e97-7b8b2eae18f2",
              ClinicRoomRoomNumber: 100,
              ClinicRoomHealthFacilityId: "1f94a2dc-bd47-40cf-a2eb-ae4103a164e0",
              workingId: "90837230-cd7a-4c7b-8bd5-31994acc1a25",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "a62d3864-0b5f-41dc-a061-cfcc6519219b",
              ClinicRoomRoomNumber: 101,
              ClinicRoomHealthFacilityId: "187628dd-8362-44a9-aa30-63050a3bce19",
              workingId: "078d43cc-5c45-4f9e-baee-677a4349676f",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "68f0d955-139d-4058-8ec1-ddf54ca9864b",
              ClinicRoomRoomNumber: 99,
              ClinicRoomHealthFacilityId: "cbac52e0-bb9d-4ab0-9ef5-0c77c0451067",
              workingId: "be771412-c286-497d-9d8a-0414cdd57423",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "81720102-7471-4d48-b36a-2ea3fb0186db",
              ClinicRoomRoomNumber: 101,
              ClinicRoomHealthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
              workingId: "5d1378c1-4c22-4571-877c-3509715146c6",
              checkUpPrice: 200000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "3d10c0b5-0f60-47a4-9c6e-fc80be7dcaed",
              ClinicRoomRoomNumber: 102,
              ClinicRoomHealthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
              workingId: "8341cc0c-cb4c-41cf-ae93-c6712af8145a",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "ae1edcfd-0934-42ad-bbef-09b92e2e1867",
              ClinicRoomRoomNumber: 103,
              ClinicRoomHealthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
              workingId: "743c19d1-45bd-46bd-a5bf-68d4d3de4812",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "351437e5-eb7b-4f41-918f-7ce576fb3de7",
              ClinicRoomRoomNumber: 101,
              ClinicRoomHealthFacilityId: "e6317bfd-321b-4ba7-8d6c-47867e5715e5",
              workingId: "aba019f9-30d1-42b5-b588-6c9595ae7e95",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "e3f5e387-b391-4a6e-b2e9-f458f05940b6",
              ClinicRoomRoomNumber: 101,
              ClinicRoomHealthFacilityId: "b772c549-13de-4fed-a5ef-f39a193e265f",
              workingId: "107699da-e94c-4ad9-a418-d5d26d3e56d0",
              checkUpPrice: 500000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "1c847161-f2e1-4711-bdbb-cec5cd862f9c",
              ClinicRoomRoomNumber: 101,
              ClinicRoomHealthFacilityId: "242fd0e5-7985-4194-8b98-470543b0f2fc",
              workingId: "6758330f-f2ee-47bb-8487-bce6b45bb20a",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "e4253eb7-1f9e-4bac-bd34-c4953fec6c33",
              ClinicRoomRoomNumber: 101,
              ClinicRoomHealthFacilityId: "54f834f6-c064-497d-bf68-94752d5e64e8",
              workingId: "fe1e2b0a-4c2f-4b15-aa1e-56724b33b38e",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
            }, {
              id: "d049c16a-e1ad-4ee6-bfa6-fd2f5c3144ed",
              ClinicRoomRoomNumber: 101,
              ClinicRoomHealthFacilityId: "54f834f6-c064-497d-bf68-94752d5e64e8",
              workingId: "2a1d9020-2e9b-4889-b7c3-648f6a1ef0c5",
              checkUpPrice: 100000,
              applyDate: "2024-05-04T00:00:00.000Z"
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