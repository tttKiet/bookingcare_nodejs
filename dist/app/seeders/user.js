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
            return queryInterface.bulkInsert("Users", [{
              id: "f481c6cc-5692-4d3c-b3c3-4fa6c07c9502",
              fullName: "Bui Tuan Kiet",
              email: "user@gmail.com",
              password: "$2b$10$iuH69vrqzsaadhYLa0QPN.PK5ToH6IL7KCOmnbEe.wPiLMSoYuFaK",
              phone: "0967688854",
              gender: "male",
              address: "444 Phan Châu Trinh, Quận Hải Châu, Đà Nẵng",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "bee0dcde-a6a4-494e-bc3f-89c9540de2e1",
              fullName: "Nguyễn Văn Anh",
              email: "user0@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688528",
              address: "123 Nguyễn Trãi, Quận 1, TP. Hồ Chí Minh",
              gender: "female",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "c258d3e6-874d-4669-b7ad-34443fd09c98",
              fullName: "Trần Thị Bảo Châu",
              email: "user1@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688811",
              address: "45 Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội",
              gender: "male",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "01d44525-e87b-4299-8930-c7fd76dbfda8",
              fullName: "Lê Hoàng Duy",
              email: "user2@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688137",
              address: "789 Lê Duẩn, Quận Hai Bà Trưng, Hà Nội",
              gender: "female",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "4679826c-908d-4e9f-a2c6-76ba5fe3c21d",
              fullName: "Phạm Quỳnh Hương",
              email: "user3@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688460",
              address: "21 Nguyễn Thị Minh Khai, Quận 3, TP. Hồ Chí Minh",
              gender: "male",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "c7471af8-b372-4281-be50-45ea73a6b1d5",
              fullName: "Võ Thanh Kiều",
              email: "user4@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688615",
              address: "56 Lý Thường Kiệt, Quận Tân Bình, TP. Hồ Chí Minh",
              gender: "female",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "742b6ec0-4367-4da8-b6ed-73395681ac66",
              fullName: "Huỳnh Văn Linh",
              email: "user5@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688144",
              address: "112 Trần Phú, Quận Hải Châu, Đà Nẵng",
              gender: "male",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "ce24165d-cb49-4deb-be71-5f8ff32d0e9a",
              fullName: "Đặng Thị Mai",
              email: "user6@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688525",
              address: "67 Lê Lợi, Quận Ngô Quyền, Hải Phòng",
              gender: "female",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "37ff83ce-6c24-4826-a915-fa7d95e6abd5",
              fullName: "Lâm Văn Nghĩa",
              email: "user7@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688460",
              address: "34 Điện Biên Phủ, Quận Bình Thạnh, TP. Hồ Chí Minh",
              gender: "male",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "02c84af6-1f9a-4b2e-8740-656ca2107673",
              fullName: "Bùi Thị Oanh",
              email: "user8@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688761",
              address: "89 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
              gender: "male",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "715681ec-ef9c-4084-ad5e-42bdef2b856a",
              fullName: "Nguyễn Văn Phúc",
              email: "user9@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688589",
              address: "145 Lê Văn Sỹ, Quận 3, TP. Hồ Chí Minh",
              gender: "female",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "5298be53-8166-4551-8e09-128201d6800b",
              fullName: "Trần Thị Quỳnh",
              email: "user10@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688291",
              address: "234 Cao Thắng, Quận 10, TP. Hồ Chí Minh",
              gender: "male",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "41f1b269-9b4d-4c85-8323-37ebad14f475",
              fullName: "Lê Thanh Sơn",
              email: "user11@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688165",
              address: "456 Bà Triệu, Quận Hai Bà Trưng, Hà Nội",
              gender: "female",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "00c629d9-6963-4eaa-843f-953e7fcfeb0b",
              fullName: "Phạm Văn Tài",
              email: "user12@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688657",
              address: "678 Lê Lợi, Quận Hải Châu, Đà Nẵng",
              gender: "female",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "1b3a6427-3316-4ba5-9c6e-81d0685d948f",
              fullName: "Vũ Thị Uyên",
              email: "user13@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688370",
              address: "789 Điện Biên Phủ, Quận Thanh Khê, Đà Nẵng",
              gender: "female",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "8c642e9e-62ea-4547-962c-4153ff2b9100",
              fullName: "Nguyễn Văn Việt",
              email: "user14@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688972",
              address: "890 Nguyễn Văn Linh, Quận An Hải Bắc, Đà Nẵng",
              gender: "female",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "3f510e31-c39b-4fa6-98d8-cbce92629f34",
              fullName: "Trần Thị Xuân",
              email: "user15@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688538",
              address: "111 Trần Phú, Quận Hải Châu, Đà Nẵng",
              gender: "female",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "fb76d8d8-fec1-4e55-a101-a5d2a60b402e",
              fullName: "Lê Văn Yên",
              email: "user16@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688124",
              address: "222 Lê Duẩn, Quận Hải Châu, Đà Nẵng",
              gender: "female",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "f07b1975-16a3-4f30-ac34-38cf38aa1028",
              fullName: "Phạm Thị Lan",
              email: "user17@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688255",
              address: "333 Lê Lai, Quận Hải Châu, Đà Nẵng",
              gender: "male",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "8b672563-285a-4fbc-a73b-2e4d8d35ea33",
              fullName: "Võ Hoàng Long",
              email: "user18@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688635",
              address: "444 Phan Châu Trinh, Quận Hải Châu, Đà Nẵng",
              gender: "female",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }, {
              id: "1fee4712-69c4-4647-a9e1-2116ab09e978",
              fullName: "Nguyễn Thị Hương",
              email: "user19@gmail.com",
              password: "$2b$10$SZ5fT6KQX0f/rr6NxOvy5ePZFQiPcO8Tqekfyt6elQH7zMIvumi2a",
              phone: "0967688865",
              address: "555 Nguyễn Văn Linh, Quận An Hải Bắc, Đà Nẵng",
              gender: "female",
              createdAt: "2024-05-03T10:45:37.826110Z",
              updatedAt: "2024-05-03T10:45:37.826110Z"
            }]);
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