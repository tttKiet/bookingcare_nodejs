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
            return queryInterface.bulkInsert("HealthFacilities", [{
              id: "35504152-ab4b-4c5b-a840-95326627eabe",
              addressCode: ["27169", "771", "79"],
              images: ["https://bookingcare-clound.s3.amazonaws.com/1714662127000", "https://bookingcare-clound.s3.amazonaws.com/1714662127002"],
              name: "Phòng khám đa khoa Saigon Healthcare",
              address: "45 Thành Thái, Phường 14, Quận 10, Thành phố Hồ Chí Minh",
              phone: "0967682834",
              email: "Healthcare@gmail.com",
              typeHealthFacilityId: "0892100d-ff1c-4478-9e63-c07983c3f24e",
              markdownHtml: null,
              markdownContent: null,
              createdAt: "2024-05-02T15:02:12.577Z",
              updatedAt: "2024-05-02T15:02:12.577Z"
            }, {
              id: "a137a530-7f9f-489a-ba92-ffdade06842e",
              addressCode: ["00352", "009", "01"],
              images: ["https://bookingcare-clound.s3.amazonaws.com/1714661992329", "https://bookingcare-clound.s3.amazonaws.com/1714661992329"],
              name: "Phòng Xét Nghiệm Y Khoa Novamed",
              address: "Tầng 2, 183 Trường Chinh, Khương Mai, Thanh Xuân, Hà Nội",
              phone: "0967682834",
              email: "xnykhoaNovamed@gmail.com",
              typeHealthFacilityId: "525f7809-f820-4f96-910c-bf23788815b7",
              markdownHtml: null,
              markdownContent: null,
              createdAt: "2024-05-02T14:59:55.265Z",
              updatedAt: "2024-05-02T14:59:55.265Z"
            }, {
              id: "558174f5-813a-47a0-9138-02945db6de6f",
              addressCode: ["26749", "760", "79"],
              images: ["https://bookingcare-clound.s3.amazonaws.com/1714661857406", "https://bookingcare-clound.s3.amazonaws.com/1714661857407", "https://bookingcare-clound.s3.amazonaws.com/1714661857410"],
              name: "Bệnh viện Phụ Sản Quốc Tế Sài Gòn",
              address: "63 Bùi Thị Xuân, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh",
              phone: "0967682834",
              email: "phusanquoctesg@gmail.com",
              typeHealthFacilityId: "525f7809-f820-4f96-910c-bf23788815b7",
              markdownHtml: null,
              markdownContent: null,
              createdAt: "2024-05-02T14:57:40.216Z",
              updatedAt: "2024-05-02T14:57:40.216Z"
            }, {
              id: "00702834-feb8-4572-a476-bd407ed7d9b7",
              addressCode: ["26794", "762", "79"],
              images: ["https://bookingcare-clound.s3.amazonaws.com/1714661769367", "https://bookingcare-clound.s3.amazonaws.com/1714661769368", "https://bookingcare-clound.s3.amazonaws.com/1714661769371"],
              name: "Bệnh viện Đa khoa Quốc Tế Hoàn Mỹ Thủ Đức",
              address: "241 Quốc lộ 1K, Linh Xuân, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh",
              phone: "0967682834",
              email: "timchunghoangmy@gmail.com",
              typeHealthFacilityId: "525f7809-f820-4f96-910c-bf23788815b7",
              markdownHtml: null,
              markdownContent: null,
              createdAt: "2024-05-02T14:56:14.568Z",
              updatedAt: "2024-05-02T14:56:14.568Z"
            }, {
              id: "b7a0501f-861c-409a-9a74-b773e486df58",
              addressCode: ["27436", "777", "79"],
              images: ["https://bookingcare-clound.s3.amazonaws.com/1714661685110", "https://bookingcare-clound.s3.amazonaws.com/1714661685110"],
              name: "Phòng Khám Đa Khoa Phước Linh",
              address: "210 Phạm Đăng Giảng, phường Bình Hưng Hòa, Quận Bình Tân, Ho Chi Minh",
              phone: "0967682834",
              email: "phuoclinh@gmail.com",
              typeHealthFacilityId: "525f7809-f820-4f96-910c-bf23788815b8",
              markdownHtml: null,
              markdownContent: null,
              createdAt: "2024-05-02T14:54:48.309Z",
              updatedAt: "2024-05-02T14:54:48.309Z"
            }, {
              id: "5b73b044-9601-42a0-8d6c-e6fd778841ed",
              addressCode: ["25771", "718", "74"],
              images: ["https://bookingcare-clound.s3.amazonaws.com/1714661523949", "https://bookingcare-clound.s3.amazonaws.com/1714661523955", "https://bookingcare-clound.s3.amazonaws.com/1714661523963"],
              name: "Bệnh viện Hoàn Mỹ Bình Dương (Vạn Phúc 1)",
              address: "45 Hồ văn Cống, Khu Phố 4, P. Tương Bình Hiệp TP. Thủ Dầu Một, Bình Dương",
              phone: "0967681234",
              email: "hoangmybd@gmail.com",
              typeHealthFacilityId: "3d3bd98f-234e-4bd3-9c4d-3d29f649ccb7",
              markdownHtml: null,
              markdownContent: null,
              createdAt: "2024-05-02T14:52:10.374Z",
              updatedAt: "2024-05-02T14:52:10.374Z"
            }, {
              id: "35e2cea4-7d46-411e-85ee-b487f2a2920e",
              addressCode: ["27172", "771", "79"],
              images: ["https://bookingcare-clound.s3.amazonaws.com/1714661385154", "https://bookingcare-clound.s3.amazonaws.com/1714661385156", "https://bookingcare-clound.s3.amazonaws.com/1714661385159"],
              name: "Bệnh viện Đa khoa Vạn Hạnh",
              address: "781/B1-B3-B5 Lê Hồng Phong nối dài, Phường 12, Quận 10, TP.HCM",
              phone: "0967682009",
              email: "dkvanhanh@gmail.com",
              typeHealthFacilityId: "3d3bd98f-234e-4bd3-9c4d-3d29f649ccb7",
              markdownHtml: null,
              markdownContent: null,
              createdAt: "2024-05-02T14:49:50.416Z",
              updatedAt: "2024-05-02T14:49:50.416Z"
            }, {
              id: "82ae2a90-baea-4539-b23b-5b1f3441a142",
              addressCode: ["31149", "916", "92"],
              images: ["https://bookingcare-clound.s3.amazonaws.com/1714661302977", "https://bookingcare-clound.s3.amazonaws.com/1714661302981", "https://bookingcare-clound.s3.amazonaws.com/1714661302987", "https://bookingcare-clound.s3.amazonaws.com/1714661302989"],
              name: "Bệnh viện Đa khoa Trung ương Cần Thơ",
              address: "315 Nguyễn Văn Linh, Phường An Khánh, Quận Ninh Kiều, TP. Cần Thơ",
              phone: "0967682987",
              email: "trunguongcantho@gmail.com",
              typeHealthFacilityId: "555f7809-f220-4f96-910c-bf23788815b9",
              markdownHtml: null,
              markdownContent: null,
              createdAt: "2024-05-02T14:48:31.540Z",
              updatedAt: "2024-05-02T14:48:31.540Z"
            }, {
              id: "1f94a2dc-bd47-40cf-a2eb-ae4103a164e0",
              addressCode: ["27169", "771", "79"],
              images: ["https://bookingcare-clound.s3.amazonaws.com/1699622474677", "https://bookingcare-clound.s3.amazonaws.com/1714659913398", "https://bookingcare-clound.s3.amazonaws.com/1714659913405", "https://bookingcare-clound.s3.amazonaws.com/1714659913457", "https://bookingcare-clound.s3.amazonaws.com/1714659913465"],
              name: "Bệnh viện Trưng Vương",
              address: "266 Lý Thường Kiệt, Phường 14, Quận 10, TP.HCM",
              phone: "0901161786",
              email: "trungvuong@gmail.com",
              typeHealthFacilityId: "3d3bd98f-234e-4bd3-9c4d-3d29f649ccb7",
              markdownHtml: null,
              markdownContent: null,
              createdAt: "2023-11-10T13:21:20.134Z",
              updatedAt: "2024-05-02T14:25:21.442Z"
            }, {
              id: "187628dd-8362-44a9-aa30-63050a3bce19",
              addressCode: ["27616", "785", "79"],
              images: ["https://bookingcare-clound.s3.amazonaws.com/1699622572228", "https://bookingcare-clound.s3.amazonaws.com/1699622572233", "https://bookingcare-clound.s3.amazonaws.com/1714660031940", "https://bookingcare-clound.s3.amazonaws.com/1714660031943", "https://bookingcare-clound.s3.amazonaws.com/1714660031948"],
              name: "Bệnh viện Nhi Đồng Thành Phố",
              address: "Số 15 Võ Trần Chí, Xã Tân Kiên, Huyện Bình Chánh, TP. Hồ Chí Minh",
              phone: "0967688822",
              email: "nhidongthanhpho@gmail.com",
              typeHealthFacilityId: "555f7809-f220-4f96-910c-bf23788815b9",
              markdownHtml: null,
              markdownContent: null,
              createdAt: "2023-11-10T13:18:37.686Z",
              updatedAt: "2024-05-02T14:27:21.695Z"
            }, {
              id: "54f834f6-c064-497d-bf68-94752d5e64e8",
              addressCode: ["27310", "774", "79"],
              images: ["https://bookingcare-clound.s3.amazonaws.com/1714660137311", "https://bookingcare-clound.s3.amazonaws.com/1714660137313", "https://bookingcare-clound.s3.amazonaws.com/1714660137319", "https://bookingcare-clound.s3.amazonaws.com/1714660137325"],
              name: "Bệnh viện Chợ Rẫy",
              address: "201B Nguyễn Chí Thanh, Phường 12, Quận 5, TP.HCM",
              phone: "0967688859",
              email: "choray@gmail.com",
              typeHealthFacilityId: "3d3bd98f-234e-4bd3-9c4d-3d29f649ccb7",
              markdownHtml: null,
              markdownContent: null,
              createdAt: "2023-11-10T13:06:46.925Z",
              updatedAt: "2024-05-02T14:29:03.022Z"
            }, {
              id: "242fd0e5-7985-4194-8b98-470543b0f2fc",
              addressCode: ["27193", "771", "79"],
              images: ["https://bookingcare-clound.s3.amazonaws.com/1714660237420", "https://bookingcare-clound.s3.amazonaws.com/1714660237420", "https://bookingcare-clound.s3.amazonaws.com/1714660237423"],
              name: "Phòng Khám Đa Khoa Pháp Anh",
              address: "222-224-226 Nguyễn Duy Dương, Phường 4, Quận 10, TP.HCM",
              phone: "0967688850",
              email: "dakhoaphapanh@gmail.com",
              typeHealthFacilityId: "0892100d-ff1c-4478-9e63-c07983c3f24e",
              markdownHtml: null,
              markdownContent: null,
              createdAt: "2023-11-10T13:02:45.614Z",
              updatedAt: "2024-05-02T14:30:40.994Z"
            }, {
              id: "b772c549-13de-4fed-a5ef-f39a193e265f",
              addressCode: ["27154", "770", "79"],
              images: ["https://bookingcare-clound.s3.amazonaws.com/1714660335769", "https://bookingcare-clound.s3.amazonaws.com/1714660335770", "https://bookingcare-clound.s3.amazonaws.com/1714660335774", "https://bookingcare-clound.s3.amazonaws.com/1714660335777"],
              name: "Bệnh viện Mắt",
              address: "280 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh",
              phone: "0901161454",
              email: "mat@gmai.com",
              typeHealthFacilityId: "555f7809-f220-4f96-910c-bf23788815b9",
              markdownHtml: null,
              markdownContent: null,
              createdAt: "2023-11-10T12:55:01.415Z",
              updatedAt: "2024-05-02T14:33:07.085Z"
            }, {
              id: "e6317bfd-321b-4ba7-8d6c-47867e5715e5",
              addressCode: ["31141", "916", "92"],
              images: ["https://bookingcare-clound.s3.amazonaws.com/1714660562154", "https://bookingcare-clound.s3.amazonaws.com/1714660562155"],
              name: "Phòng Khám Đa khoa Cần Thơ",
              address: "133A TRẦN HƯNG ĐẠO, P. AN PHÚ, Q. NINH KIỀU, TP. CẦN THƠ",
              phone: "0901161453",
              email: "pkdakhoacantho1@gmail.com",
              typeHealthFacilityId: "0892100d-ff1c-4478-9e63-c07983c3f24e",
              markdownHtml: null,
              markdownContent: null,
              createdAt: "2023-11-10T12:51:55.289Z",
              updatedAt: "2024-05-02T14:36:09.541Z"
            }, {
              id: "50bd30f5-dff1-4547-9556-7e040f17a6d7",
              addressCode: ["30322", "884", "89"],
              images: ["https://bookingcare-clound.s3.amazonaws.com/1714660726403", "https://bookingcare-clound.s3.amazonaws.com/1714660726403", "https://bookingcare-clound.s3.amazonaws.com/1714660726406", "https://bookingcare-clound.s3.amazonaws.com/1714660726410"],
              name: "Bệnh viện Đa khoa Khu vực Tỉnh An Giang",
              address: "917 Tôn Đức Thắng, Phường Vĩnh Mỹ, TP. Châu Đốc, Tỉnh An Giang",
              phone: "0901161450",
              email: "dkag@gmail.com",
              typeHealthFacilityId: "555f7809-f220-4f96-910c-bf23788815b9",
              markdownHtml: null,
              markdownContent: null,
              createdAt: "2023-11-10T12:50:54.657Z",
              updatedAt: "2024-05-02T14:39:10.330Z"
            }, {
              id: "cbac52e0-bb9d-4ab0-9ef5-0c77c0451067",
              addressCode: ["26539", "747", "77"],
              images: ["https://bookingcare-clound.s3.amazonaws.com/1714661005925", "https://bookingcare-clound.s3.amazonaws.com/1714661005929", "https://bookingcare-clound.s3.amazonaws.com/1714661005930"],
              name: "Bệnh viện Vũng Tàu",
              address: "Số 27, Đường 2/9, Phường 11, Thành phố Vũng Tàu",
              phone: "0123456788",
              email: "bvvungtau@gmail.com",
              typeHealthFacilityId: "555f7809-f220-4f96-910c-bf23788815b9",
              markdownHtml: null,
              markdownContent: null,
              createdAt: "2023-09-16T06:17:07.573Z",
              updatedAt: "2024-05-02T14:43:34.703Z"
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