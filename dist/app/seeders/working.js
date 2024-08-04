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
            return queryInterface.bulkInsert("Workings", [{
              id: "9186a501-0ab4-4e3a-94c6-d167af8af32c",
              staffId: "47e2839f-eaa2-40d8-9001-005ee0a64a2f",
              healthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              startDate: "2024-05-03T08:00:14.868Z",
              endDate: null,
              createdAt: "2024-05-03T08:00:14.868Z",
              updatedAt: "2024-05-03T08:00:14.868Z"
            }, {
              id: "9e65668e-3708-4fd5-9f20-115c44dd65c2",
              staffId: "192d8434-fda6-41ee-8174-df75c32127dd",
              healthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              startDate: "2024-05-03T08:00:00.954Z",
              endDate: null,
              createdAt: "2024-05-03T08:00:00.954Z",
              updatedAt: "2024-05-03T08:00:00.954Z"
            }, {
              id: "50d23b65-c8e3-48b7-ba7b-a2cf8a0cb255",
              staffId: "ec2f428d-88e0-4d14-a223-164a6fb587d4",
              healthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              startDate: "2024-05-03T07:59:49.866Z",
              endDate: null,
              createdAt: "2024-05-03T07:59:49.866Z",
              updatedAt: "2024-05-03T07:59:49.866Z"
            }, {
              id: "2ec2cf94-63cd-4d9c-9fad-ca8a9e418a8d",
              staffId: "71192993-7383-4ea8-9372-8fada98d2948",
              healthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              startDate: "2024-05-03T07:59:36.355Z",
              endDate: null,
              createdAt: "2024-05-03T07:59:36.355Z",
              updatedAt: "2024-05-03T07:59:36.355Z"
            }, {
              id: "dd771cc0-8425-4505-b536-95898128a77a",
              staffId: "225fc642-0506-4d7f-a0dc-a5018853fd07",
              healthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              startDate: "2024-05-03T07:59:23.682Z",
              endDate: null,
              createdAt: "2024-05-03T07:59:23.682Z",
              updatedAt: "2024-05-03T07:59:23.682Z"
            }, {
              id: "62f6cbfb-4078-4cbe-a377-28b74766185e",
              staffId: "edf806ec-4e85-49bb-b318-c49eb2219d6e",
              healthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              startDate: "2024-05-03T07:59:03.026Z",
              endDate: null,
              createdAt: "2024-05-03T07:59:03.026Z",
              updatedAt: "2024-05-03T07:59:03.026Z"
            }, {
              id: "f00fb219-5bfc-46a3-aaf3-02ee015556fb",
              staffId: "02975cfd-8316-4c81-b7fa-258f0df9abcd",
              healthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              startDate: "2024-05-03T07:58:50.813Z",
              endDate: null,
              createdAt: "2024-05-03T07:58:50.814Z",
              updatedAt: "2024-05-03T07:58:50.814Z"
            }, {
              id: "88bb0e16-b1af-4d0e-9f9e-2afdf6deed2b",
              staffId: "12801cf2-66e2-4a49-a77f-c03db270b46c",
              healthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              startDate: "2024-05-03T07:06:18.500Z",
              endDate: null,
              createdAt: "2024-05-03T07:06:18.501Z",
              updatedAt: "2024-05-03T07:06:18.501Z"
            }, {
              id: "2a1d9020-2e9b-4889-b7c3-648f6a1ef0c5",
              staffId: "3f7f6c40-22db-4208-8b9e-5095de3488c6",
              healthFacilityId: "54f834f6-c064-497d-bf68-94752d5e64e8",
              startDate: "2024-05-03T05:52:18.183Z",
              endDate: null,
              createdAt: "2024-05-03T05:52:18.183Z",
              updatedAt: "2024-05-03T05:52:18.183Z"
            }, {
              id: "f8f55815-c777-4c74-9a04-3ae7b780f947",
              staffId: "f8245c2a-ce6a-4268-9e8d-2e34310dd79e",
              healthFacilityId: "82ae2a90-baea-4539-b23b-5b1f3441a142",
              startDate: "2024-05-03T05:50:19.064Z",
              endDate: null,
              createdAt: "2024-05-03T05:50:19.064Z",
              updatedAt: "2024-05-03T05:50:19.064Z"
            }, {
              id: "743c19d1-45bd-46bd-a5bf-68d4d3de4812",
              staffId: "418bc007-b26a-489e-9a17-e9ab207750cf",
              healthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
              startDate: "2024-05-04T04:12:44.674Z",
              endDate: null,
              createdAt: "2024-05-04T04:12:44.675Z",
              updatedAt: "2024-05-04T04:12:44.675Z"
            }, {
              id: "0df6b262-bcad-4564-a2e0-829dee5050f1",
              staffId: "17f42be6-7a3b-469a-b39a-19657f3c4328",
              healthFacilityId: "a137a530-7f9f-489a-ba92-ffdade06842e",
              startDate: "2024-05-04T04:31:32.247Z",
              endDate: null,
              createdAt: "2024-05-04T04:31:32.248Z",
              updatedAt: "2024-05-04T04:31:32.248Z"
            }, {
              id: "1bdf27e3-5093-4908-8d82-25f246350289",
              staffId: "778a30aa-34bd-4c0a-8d3a-a5e67301e6bf",
              healthFacilityId: "558174f5-813a-47a0-9138-02945db6de6f",
              startDate: "2024-05-04T04:31:46.980Z",
              endDate: null,
              createdAt: "2024-05-04T04:31:46.980Z",
              updatedAt: "2024-05-04T04:31:46.980Z"
            }, {
              id: "a8a6de91-f050-4d16-8584-dd277e9cd8f2",
              staffId: "71a3ad3b-d1e8-46d1-a6dd-2360bc22a937",
              healthFacilityId: "00702834-feb8-4572-a476-bd407ed7d9b7",
              startDate: "2024-05-04T04:31:58.523Z",
              endDate: null,
              createdAt: "2024-05-04T04:31:58.523Z",
              updatedAt: "2024-05-04T04:31:58.523Z"
            }, {
              id: "ca06933e-5cfc-4ed2-a526-a7cefd60ac14",
              staffId: "8bdba74d-d303-4451-9e85-16dfc9b472a1",
              healthFacilityId: "b7a0501f-861c-409a-9a74-b773e486df58",
              startDate: "2024-05-04T04:32:11.923Z",
              endDate: null,
              createdAt: "2024-05-04T04:32:11.923Z",
              updatedAt: "2024-05-04T04:32:11.923Z"
            }, {
              id: "46c85f27-70ea-441a-8345-a2d46df6ce88",
              staffId: "7409b308-298a-444f-935e-1640eb3ad689",
              healthFacilityId: "5b73b044-9601-42a0-8d6c-e6fd778841ed",
              startDate: "2024-05-04T04:32:23.656Z",
              endDate: null,
              createdAt: "2024-05-04T04:32:23.656Z",
              updatedAt: "2024-05-04T04:32:23.656Z"
            }, {
              id: "481f855b-847f-4452-987b-51cbe33dee69",
              staffId: "8f943310-bbaf-400c-8e7d-fe0cbe6226a9",
              healthFacilityId: "35e2cea4-7d46-411e-85ee-b487f2a2920e",
              startDate: "2024-05-04T04:32:35.417Z",
              endDate: null,
              createdAt: "2024-05-04T04:32:35.418Z",
              updatedAt: "2024-05-04T04:32:35.418Z"
            }, {
              id: "3e7908ea-d41b-4694-bb18-2720049f931a",
              staffId: "8ac47279-79cb-4b4a-ae05-fb66ba20f978",
              healthFacilityId: "82ae2a90-baea-4539-b23b-5b1f3441a142",
              startDate: "2024-05-04T04:32:47.635Z",
              endDate: null,
              createdAt: "2024-05-04T04:32:47.635Z",
              updatedAt: "2024-05-04T04:32:47.635Z"
            }, {
              id: "90837230-cd7a-4c7b-8bd5-31994acc1a25",
              staffId: "e34980af-de4d-4653-8728-942178eeea97",
              healthFacilityId: "1f94a2dc-bd47-40cf-a2eb-ae4103a164e0",
              startDate: "2024-05-04T04:32:58.972Z",
              endDate: null,
              createdAt: "2024-05-04T04:32:58.973Z",
              updatedAt: "2024-05-04T04:32:58.973Z"
            }, {
              id: "078d43cc-5c45-4f9e-baee-677a4349676f",
              staffId: "66db5b1e-b3fe-408d-aadb-8dbc6b1b36d2",
              healthFacilityId: "187628dd-8362-44a9-aa30-63050a3bce19",
              startDate: "2024-05-04T04:33:09.875Z",
              endDate: null,
              createdAt: "2024-05-04T04:33:09.876Z",
              updatedAt: "2024-05-04T04:33:09.876Z"
            }, {
              id: "fe1e2b0a-4c2f-4b15-aa1e-56724b33b38e",
              staffId: "e2093619-9daa-453e-b2ba-9f4baa732754",
              healthFacilityId: "54f834f6-c064-497d-bf68-94752d5e64e8",
              startDate: "2024-05-04T04:33:21.674Z",
              endDate: null,
              createdAt: "2024-05-04T04:33:21.675Z",
              updatedAt: "2024-05-04T04:33:21.675Z"
            }, {
              id: "6758330f-f2ee-47bb-8487-bce6b45bb20a",
              staffId: "08293ec5-414d-4541-8c05-81247d02c64b",
              healthFacilityId: "242fd0e5-7985-4194-8b98-470543b0f2fc",
              startDate: "2024-05-04T04:33:37.930Z",
              endDate: null,
              createdAt: "2024-05-04T04:33:37.930Z",
              updatedAt: "2024-05-04T04:33:37.930Z"
            }, {
              id: "107699da-e94c-4ad9-a418-d5d26d3e56d0",
              staffId: "6017ca37-e629-4240-927f-d63b396a3c7b",
              healthFacilityId: "b772c549-13de-4fed-a5ef-f39a193e265f",
              startDate: "2024-05-04T04:33:51.329Z",
              endDate: null,
              createdAt: "2024-05-04T04:33:51.330Z",
              updatedAt: "2024-05-04T04:33:51.330Z"
            }, {
              id: "8341cc0c-cb4c-41cf-ae93-c6712af8145a",
              staffId: "d5fbbed1-44d3-44c1-adfd-60c050fe1c72",
              healthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
              startDate: "2024-05-04T04:34:04.177Z",
              endDate: null,
              createdAt: "2024-05-04T04:34:04.177Z",
              updatedAt: "2024-05-04T04:34:04.177Z"
            }, {
              id: "be771412-c286-497d-9d8a-0414cdd57423",
              staffId: "a9909e61-3a9a-4d1c-b65c-d77f4d03aaff",
              healthFacilityId: "cbac52e0-bb9d-4ab0-9ef5-0c77c0451067",
              startDate: "2024-05-04T04:34:17.655Z",
              endDate: null,
              createdAt: "2024-05-04T04:34:17.656Z",
              updatedAt: "2024-05-04T04:34:17.656Z"
            }, {
              id: "5d1378c1-4c22-4571-877c-3509715146c6",
              staffId: "d3aceacf-0d13-49d9-833a-7c1698acc79b",
              healthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
              startDate: "2024-05-04T04:34:37.592Z",
              endDate: null,
              createdAt: "2024-05-04T04:34:37.592Z",
              updatedAt: "2024-05-04T04:34:37.592Z"
            }, {
              id: "8bb1df38-1810-4933-817e-2f035033bf8a",
              staffId: "e5bc42eb-39b8-49a3-8508-c809f1eb9ed9",
              healthFacilityId: "a137a530-7f9f-489a-ba92-ffdade06842e",
              startDate: "2024-05-04T04:34:45.676Z",
              endDate: null,
              createdAt: "2024-05-04T04:34:45.677Z",
              updatedAt: "2024-05-04T04:34:45.677Z"
            }, {
              id: "d6f4d58e-f7a9-496c-98c4-41b58e04541f",
              staffId: "44096a8f-f53c-4a97-8460-1c68b108ca73",
              healthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              startDate: "2024-05-04T04:34:57.156Z",
              endDate: null,
              createdAt: "2024-05-04T04:34:57.156Z",
              updatedAt: "2024-05-04T04:34:57.156Z"
            }, {
              id: "f27cd58a-ea5c-408f-a075-d9b70779dfe6",
              staffId: "03e7cebf-694b-4511-a4ff-f359d1f120d0",
              healthFacilityId: "a137a530-7f9f-489a-ba92-ffdade06842e",
              startDate: "2024-05-04T04:35:19.934Z",
              endDate: null,
              createdAt: "2024-05-04T04:35:19.934Z",
              updatedAt: "2024-05-04T04:35:19.934Z"
            }, {
              id: "11af746c-e1e4-4dc0-ae60-d22944a26753",
              staffId: "a4b19e2e-390f-4561-ae3d-143ae4dd5b4d",
              healthFacilityId: "a137a530-7f9f-489a-ba92-ffdade06842e",
              startDate: "2024-05-04T04:35:26.611Z",
              endDate: null,
              createdAt: "2024-05-04T04:35:26.611Z",
              updatedAt: "2024-05-04T04:35:26.611Z"
            }, {
              id: "9552ee1f-9067-4bf3-82bd-b5e224645613",
              staffId: "3578a2c4-42bb-468a-9815-4406d50e3310",
              healthFacilityId: "00702834-feb8-4572-a476-bd407ed7d9b7",
              startDate: "2024-05-04T04:35:34.951Z",
              endDate: null,
              createdAt: "2024-05-04T04:35:34.952Z",
              updatedAt: "2024-05-04T04:35:34.952Z"
            }, {
              id: "3e991570-9173-404e-bcfe-3bf6f7407b02",
              staffId: "80476afc-2142-4a99-965e-0e42ac933fdb",
              healthFacilityId: "b7a0501f-861c-409a-9a74-b773e486df58",
              startDate: "2024-05-04T04:35:42.112Z",
              endDate: null,
              createdAt: "2024-05-04T04:35:42.112Z",
              updatedAt: "2024-05-04T04:35:42.112Z"
            }, {
              id: "6f37ca25-5b97-4331-9c73-821320ddc46f",
              staffId: "67db2c7e-3014-4a0b-be79-874c753b477b",
              healthFacilityId: "5b73b044-9601-42a0-8d6c-e6fd778841ed",
              startDate: "2024-05-04T04:35:50.343Z",
              endDate: null,
              createdAt: "2024-05-04T04:35:50.343Z",
              updatedAt: "2024-05-04T04:35:50.343Z"
            }, {
              id: "4469196f-a739-446a-aeaa-ef4d1c3606fd",
              staffId: "defcd6ee-bb56-4623-b990-c99be13ac795",
              healthFacilityId: "35e2cea4-7d46-411e-85ee-b487f2a2920e",
              startDate: "2024-05-04T04:35:56.212Z",
              endDate: null,
              createdAt: "2024-05-04T04:35:56.212Z",
              updatedAt: "2024-05-04T04:35:56.212Z"
            }, {
              id: "a39eb2a8-8054-4a24-b3ec-9d0c621e93ed",
              staffId: "1ef03a59-d2dc-4ef7-ae4e-decd35693490",
              healthFacilityId: "82ae2a90-baea-4539-b23b-5b1f3441a142",
              startDate: "2024-05-04T04:36:06.582Z",
              endDate: null,
              createdAt: "2024-05-04T04:36:06.582Z",
              updatedAt: "2024-05-04T04:36:06.582Z"
            }, {
              id: "91085dba-79ca-405c-a4dc-3fe6a0438e74",
              staffId: "8a123f2c-42c7-408a-9f1f-bf4c5ba7fa86",
              healthFacilityId: "1f94a2dc-bd47-40cf-a2eb-ae4103a164e0",
              startDate: "2024-05-04T04:36:14.546Z",
              endDate: null,
              createdAt: "2024-05-04T04:36:14.546Z",
              updatedAt: "2024-05-04T04:36:14.546Z"
            }, {
              id: "1662eb76-93b2-4177-8635-9ce9a2ce51b5",
              staffId: "c95380ad-a21e-45c3-b818-0ad6a9ee1a40",
              healthFacilityId: "187628dd-8362-44a9-aa30-63050a3bce19",
              startDate: "2024-05-04T04:36:21.168Z",
              endDate: null,
              createdAt: "2024-05-04T04:36:21.168Z",
              updatedAt: "2024-05-04T04:36:21.168Z"
            }, {
              id: "00c435cf-9975-43f3-adc6-f9da95c1e6c6",
              staffId: "1d4edbfc-6441-4a92-9ca3-6f40a7c93daf",
              healthFacilityId: "54f834f6-c064-497d-bf68-94752d5e64e8",
              startDate: "2024-05-04T04:36:35.619Z",
              endDate: null,
              createdAt: "2024-05-04T04:36:35.619Z",
              updatedAt: "2024-05-04T04:36:35.619Z"
            }, {
              id: "3f24605b-3427-4a48-b15e-8bd0adb64bbf",
              staffId: "d0e42767-926f-4ce0-94cb-343e72a237d4",
              healthFacilityId: "242fd0e5-7985-4194-8b98-470543b0f2fc",
              startDate: "2024-05-04T04:36:48.309Z",
              endDate: null,
              createdAt: "2024-05-04T04:36:48.309Z",
              updatedAt: "2024-05-04T04:36:48.309Z"
            }, {
              id: "6adbfd7b-3195-44ab-b7bc-94898bb2fc6d",
              staffId: "a7b84732-719a-4709-8be2-f7573fb74f2f",
              healthFacilityId: "b772c549-13de-4fed-a5ef-f39a193e265f",
              startDate: "2024-05-04T04:36:55.212Z",
              endDate: null,
              createdAt: "2024-05-04T04:36:55.212Z",
              updatedAt: "2024-05-04T04:36:55.212Z"
            }, {
              id: "93dbc5ec-02c9-4fc4-9169-4ba2fc3f811a",
              staffId: "24514ff9-7a7b-4210-818a-f29610fa7a53",
              healthFacilityId: "82ae2a90-baea-4539-b23b-5b1f3441a142",
              startDate: "2024-05-04T04:37:03.750Z",
              endDate: null,
              createdAt: "2024-05-04T04:37:03.750Z",
              updatedAt: "2024-05-04T04:37:03.750Z"
            }, {
              id: "90de605a-b47f-4e66-8c78-5c1b6ad55232",
              staffId: "367b4d65-bbd5-435b-8878-2df64ff2c862",
              healthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
              startDate: "2024-05-04T04:37:15.580Z",
              endDate: null,
              createdAt: "2024-05-04T04:37:15.580Z",
              updatedAt: "2024-05-04T04:37:15.580Z"
            }, {
              id: "2608d29d-d50f-4093-9ec0-8b4c52d31377",
              staffId: "78f79e22-64b0-4891-904b-1c47a183223d",
              healthFacilityId: "cbac52e0-bb9d-4ab0-9ef5-0c77c0451067",
              startDate: "2024-05-04T04:37:24.007Z",
              endDate: null,
              createdAt: "2024-05-04T04:37:24.007Z",
              updatedAt: "2024-05-04T04:37:24.007Z"
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