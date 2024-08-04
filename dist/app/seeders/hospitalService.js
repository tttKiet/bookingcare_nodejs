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
            return queryInterface.bulkInsert("HospitalServices", [{
              id: "017afe2f-232d-4db6-b7ed-9f0536fa2b1d",
              examinationServiceId: "e4b2aa61-993a-41e5-8b3e-9d581fa8a7b1",
              healthFacilityId: "54f834f6-c064-497d-bf68-94752d5e64e8",
              price: 250000,
              isAcctive: true,
              createdAt: "2024-05-03T16:59:19.818Z",
              updatedAt: "2024-05-03T16:59:19.818Z"
            }, {
              id: "1aba0689-2275-48de-9d67-df9fe684e9a5",
              examinationServiceId: "c158c75a-23f0-45ec-9bd0-88dcd1a96854",
              healthFacilityId: "54f834f6-c064-497d-bf68-94752d5e64e8",
              price: 340000,
              isAcctive: true,
              createdAt: "2024-05-03T16:59:27.231Z",
              updatedAt: "2024-05-03T16:59:27.231Z"
            }, {
              id: "de0d92d2-2be5-4a8d-a247-61b03f0f1485",
              examinationServiceId: "025c94df-1698-4786-b965-0bcdf0c4a262",
              healthFacilityId: "54f834f6-c064-497d-bf68-94752d5e64e8",
              price: 120000,
              isAcctive: true,
              createdAt: "2024-05-03T16:59:33.734Z",
              updatedAt: "2024-05-03T16:59:33.734Z"
            }, {
              id: "358c727f-d061-4e1a-8fb2-3f63ef6ee661",
              examinationServiceId: "56921431-a116-4125-bf3d-d51880c56c5d",
              healthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              price: 100000,
              isAcctive: true,
              createdAt: "2024-05-03T17:00:28.513Z",
              updatedAt: "2024-05-03T17:00:28.513Z"
            }, {
              id: "9c1b2dfe-57d7-41bf-98fd-f10a97ed5698",
              examinationServiceId: "e4b2aa61-993a-41e5-8b3e-9d581fa8a7b1",
              healthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              price: 70000,
              isAcctive: true,
              createdAt: "2024-05-03T17:00:32.452Z",
              updatedAt: "2024-05-03T17:00:32.452Z"
            }, {
              id: "3f28999f-659e-4d14-8584-38782ac44850",
              examinationServiceId: "025c94df-1698-4786-b965-0bcdf0c4a262",
              healthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              price: 120000,
              isAcctive: true,
              createdAt: "2024-05-03T17:00:40.461Z",
              updatedAt: "2024-05-03T17:00:40.461Z"
            }, {
              id: "a56c9eb4-93bc-43ff-895e-c27943ec903b",
              examinationServiceId: "56921431-a116-4125-bf3d-d51880c56c5d",
              healthFacilityId: "54f834f6-c064-497d-bf68-94752d5e64e8",
              price: 100000,
              isAcctive: true,
              createdAt: "2024-05-03T16:59:11.699Z",
              updatedAt: "2024-05-03T17:04:28.876Z"
            }, {
              id: "c2e634e7-8271-43f1-bd9e-3249b1be2bcf",
              examinationServiceId: "e4b2aa61-993a-41e5-8b3e-9d581fa8a7b1",
              healthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
              price: 100000,
              isAcctive: true,
              createdAt: "2024-05-03T17:04:53.679Z",
              updatedAt: "2024-05-03T17:04:53.679Z"
            }, {
              id: "97ad61dc-3e3a-4cee-a1e1-f9b192a1f109",
              examinationServiceId: "56921431-a116-4125-bf3d-d51880c56c5d",
              healthFacilityId: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
              price: 120000,
              isAcctive: true,
              createdAt: "2024-05-03T17:05:02.298Z",
              updatedAt: "2024-05-03T17:05:02.298Z"
            }, {
              id: "079ecc4b-d936-45d5-83c8-988dbe8b75c0",
              examinationServiceId: "73900570-e42c-4ea3-afdd-d1e81050bad8",
              healthFacilityId: "00702834-feb8-4572-a476-bd407ed7d9b7",
              price: 200000,
              isAcctive: true,
              createdAt: "2024-05-03T17:05:12.469Z",
              updatedAt: "2024-05-03T17:05:12.469Z"
            }, {
              id: "e6974319-4e46-4cdd-a8f4-9f1bf327a1cc",
              examinationServiceId: "025c94df-1698-4786-b965-0bcdf0c4a262",
              healthFacilityId: "00702834-feb8-4572-a476-bd407ed7d9b7",
              price: 300000,
              isAcctive: true,
              createdAt: "2024-05-03T17:05:22.363Z",
              updatedAt: "2024-05-03T17:05:22.363Z"
            }, {
              id: "2579fb16-1c62-4670-b6a8-b252c1e76679",
              examinationServiceId: "8424a07f-90f1-4572-9d1c-ebef3e027472",
              healthFacilityId: "00702834-feb8-4572-a476-bd407ed7d9b7",
              price: 400000,
              isAcctive: true,
              createdAt: "2024-05-03T17:05:28.171Z",
              updatedAt: "2024-05-03T17:05:28.171Z"
            }, {
              id: "db75a2cd-d367-4710-a08f-7a90f8d337fb",
              examinationServiceId: "8424a07f-90f1-4572-9d1c-ebef3e027472",
              healthFacilityId: "82ae2a90-baea-4539-b23b-5b1f3441a142",
              price: 232000,
              isAcctive: true,
              createdAt: "2024-05-03T17:05:37.651Z",
              updatedAt: "2024-05-03T17:05:37.651Z"
            }, {
              id: "190979c8-5aa9-408c-b9e6-a7c216b713c4",
              examinationServiceId: "019b4a22-64cc-4d73-9bba-5346bc9dac28",
              healthFacilityId: "82ae2a90-baea-4539-b23b-5b1f3441a142",
              price: 120000,
              isAcctive: true,
              createdAt: "2024-05-03T17:05:46.464Z",
              updatedAt: "2024-05-03T17:05:46.464Z"
            }, {
              id: "55f67b83-2be6-4b2d-af32-a5355dca8ae0",
              examinationServiceId: "73900570-e42c-4ea3-afdd-d1e81050bad8",
              healthFacilityId: "35e2cea4-7d46-411e-85ee-b487f2a2920e",
              price: 122222,
              isAcctive: true,
              createdAt: "2024-05-03T17:05:53.949Z",
              updatedAt: "2024-05-03T17:05:53.949Z"
            }, {
              id: "400198b6-a2c7-4c72-9a46-66f4870c52da",
              examinationServiceId: "2a297db6-745d-4b5c-88e1-5fbc1c7da66c",
              healthFacilityId: "5b73b044-9601-42a0-8d6c-e6fd778841ed",
              price: 250000,
              isAcctive: true,
              createdAt: "2024-05-03T17:06:06.440Z",
              updatedAt: "2024-05-03T17:06:06.440Z"
            }, {
              id: "916d245d-b43c-4a4c-a7e0-2c152f9f30f0",
              examinationServiceId: "bdc36bc7-320d-4006-b87a-de49aadf9fa7",
              healthFacilityId: "5b73b044-9601-42a0-8d6c-e6fd778841ed",
              price: 300000,
              isAcctive: true,
              createdAt: "2024-05-03T17:06:13.806Z",
              updatedAt: "2024-05-03T17:06:13.806Z"
            }, {
              id: "d7cc3425-50c2-440c-91d8-f83cac756f45",
              examinationServiceId: "c158c75a-23f0-45ec-9bd0-88dcd1a96854",
              healthFacilityId: "b772c549-13de-4fed-a5ef-f39a193e265f",
              price: 125000,
              isAcctive: true,
              createdAt: "2024-05-03T17:06:26.633Z",
              updatedAt: "2024-05-03T17:06:26.633Z"
            }, {
              id: "99d0836d-77e6-4987-acee-4fe9a8423afa",
              examinationServiceId: "025c94df-1698-4786-b965-0bcdf0c4a262",
              healthFacilityId: "187628dd-8362-44a9-aa30-63050a3bce19",
              price: 100000,
              isAcctive: true,
              createdAt: "2024-05-03T17:06:33.951Z",
              updatedAt: "2024-05-03T17:06:33.951Z"
            }, {
              id: "2de61840-4764-4a03-ba0b-71bdb3e1db0b",
              examinationServiceId: "2a297db6-745d-4b5c-88e1-5fbc1c7da66c",
              healthFacilityId: "558174f5-813a-47a0-9138-02945db6de6f",
              price: 250000,
              isAcctive: true,
              createdAt: "2024-05-03T17:06:41.173Z",
              updatedAt: "2024-05-03T17:06:41.173Z"
            }, {
              id: "5f14d856-83b2-44c9-bb8f-071d19557b9a",
              examinationServiceId: "c158c75a-23f0-45ec-9bd0-88dcd1a96854",
              healthFacilityId: "558174f5-813a-47a0-9138-02945db6de6f",
              price: 70000,
              isAcctive: true,
              createdAt: "2024-05-03T17:06:47.051Z",
              updatedAt: "2024-05-03T17:06:47.051Z"
            }, {
              id: "0b22db5f-235c-4597-b6fd-01bf3a10e978",
              examinationServiceId: "c158c75a-23f0-45ec-9bd0-88dcd1a96854",
              healthFacilityId: "1f94a2dc-bd47-40cf-a2eb-ae4103a164e0",
              price: 560000,
              isAcctive: true,
              createdAt: "2024-05-03T17:06:54.618Z",
              updatedAt: "2024-05-03T17:06:54.618Z"
            }, {
              id: "10e1443e-ec0c-4616-a3c2-cd65bbda3523",
              examinationServiceId: "72bd2f8f-8c3d-4764-b0b5-db36fa9bebbb",
              healthFacilityId: "e6317bfd-321b-4ba7-8d6c-47867e5715e5",
              price: 254090,
              isAcctive: true,
              createdAt: "2024-05-03T17:07:03.898Z",
              updatedAt: "2024-05-03T17:07:03.898Z"
            }, {
              id: "2d3349f9-ddcb-4c94-8400-1b5dfab16ae0",
              examinationServiceId: "025c94df-1698-4786-b965-0bcdf0c4a262",
              healthFacilityId: "cbac52e0-bb9d-4ab0-9ef5-0c77c0451067",
              price: 100000,
              isAcctive: true,
              createdAt: "2024-05-03T17:07:15.664Z",
              updatedAt: "2024-05-03T17:07:15.664Z"
            }, {
              id: "461c5a25-154f-4b1c-ab44-066e654e3bcb",
              examinationServiceId: "e4b2aa61-993a-41e5-8b3e-9d581fa8a7b1",
              healthFacilityId: "242fd0e5-7985-4194-8b98-470543b0f2fc",
              price: 70000,
              isAcctive: true,
              createdAt: "2024-05-03T17:09:13.880Z",
              updatedAt: "2024-05-03T17:09:13.880Z"
            }, {
              id: "7601666c-39c5-4df7-9006-9c014cabb233",
              examinationServiceId: "c158c75a-23f0-45ec-9bd0-88dcd1a96854",
              healthFacilityId: "242fd0e5-7985-4194-8b98-470543b0f2fc",
              price: 300000,
              isAcctive: true,
              createdAt: "2024-05-03T17:09:18.501Z",
              updatedAt: "2024-05-03T17:09:18.501Z"
            }, {
              id: "55cc0eee-f284-45f8-bd9f-f44fe6fb5ea2",
              examinationServiceId: "72bd2f8f-8c3d-4764-b0b5-db36fa9bebbb",
              healthFacilityId: "b7a0501f-861c-409a-9a74-b773e486df58",
              price: 250000,
              isAcctive: true,
              createdAt: "2024-05-03T17:09:26.529Z",
              updatedAt: "2024-05-03T17:09:26.529Z"
            }, {
              id: "e2ef67f4-c973-4e55-814b-c2ddf1c2c3a3",
              examinationServiceId: "2a297db6-745d-4b5c-88e1-5fbc1c7da66c",
              healthFacilityId: "a137a530-7f9f-489a-ba92-ffdade06842e",
              price: 1200000,
              isAcctive: true,
              createdAt: "2024-05-03T17:09:36.758Z",
              updatedAt: "2024-05-03T17:09:36.758Z"
            }, {
              id: "6a578c06-8625-4163-9a8e-f8d6945afc31",
              examinationServiceId: "8424a07f-90f1-4572-9d1c-ebef3e027472",
              healthFacilityId: "b7a0501f-861c-409a-9a74-b773e486df58",
              price: 70000,
              isAcctive: true,
              createdAt: "2024-05-03T17:09:48.142Z",
              updatedAt: "2024-05-03T17:09:48.142Z"
            }, {
              id: "0a95bc03-77e6-4ed8-9ca6-34dcc44a6736",
              examinationServiceId: "73900570-e42c-4ea3-afdd-d1e81050bad8",
              healthFacilityId: "a137a530-7f9f-489a-ba92-ffdade06842e",
              price: 100000,
              isAcctive: true,
              createdAt: "2024-05-03T17:09:56.653Z",
              updatedAt: "2024-05-03T17:09:56.653Z"
            }, {
              id: "34234207-3d83-43eb-93cd-330cb3608be3",
              examinationServiceId: "8424a07f-90f1-4572-9d1c-ebef3e027472",
              healthFacilityId: "35504152-ab4b-4c5b-a840-95326627eabe",
              price: 1200000,
              isAcctive: false,
              createdAt: "2024-05-03T17:10:08.910Z",
              updatedAt: "2024-05-03T17:10:12.004Z"
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