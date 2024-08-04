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
            return queryInterface.bulkInsert("Cedicines", [{
              id: "59ec1c59-ce6c-42ae-9d36-928bfb4c07ab",
              name: "Paracetamol",
              desc: "Paracetamol là một loại thuốc giảm đau và hạ sốt phổ biến được sử dụng để điều trị đau nhức và sốt.",
              createdAt: "2024-05-04T00:27:50.091609Z",
              updatedAt: "2024-05-04T00:27:50.091609Z"
            }, {
              id: "d2d2427f-a0fc-4ea5-8673-51d2e80e3b8f",
              name: "Ibuprofen",
              desc: "Ibuprofen là một loại thuốc giảm đau, chống viêm và hạ sốt thường được sử dụng để giảm đau và viêm.",
              createdAt: "2024-05-04T00:27:50.091609Z",
              updatedAt: "2024-05-04T00:27:50.091609Z"
            }, {
              id: "1801c790-ef11-4799-9d9f-6c80b57810d9",
              name: "Aspirin",
              desc: "Aspirin là một loại thuốc giảm đau, chống viêm và có tác dụng ức chế đông máu, thường được sử dụng để giảm đau và hạ sốt.",
              createdAt: "2024-05-04T00:27:50.091609Z",
              updatedAt: "2024-05-04T00:27:50.091609Z"
            }, {
              id: "3e266b3d-d919-42e0-a0d9-d31dc9f81fd7",
              name: "Cetirizine",
              desc: "Cetirizine là một loại thuốc chống dị ứng (antihistamine) được sử dụng để giảm triệu chứng dị ứng như sổ mũi, ngứa và nước mắt.",
              createdAt: "2024-05-04T00:27:50.091609Z",
              updatedAt: "2024-05-04T00:27:50.091609Z"
            }, {
              id: "18049b80-4e64-4e7f-b18c-06929a56b629",
              name: "Loratadine",
              desc: "Loratadine là một loại thuốc chống dị ứng (antihistamine) được sử dụng để giảm triệu chứng dị ứng như sổ mũi, ngứa và nước mắt.",
              createdAt: "2024-05-04T00:27:50.091609Z",
              updatedAt: "2024-05-04T00:27:50.091609Z"
            }, {
              id: "5564b7af-a651-4364-a76d-c6f5ba9ff9db",
              name: "Omeprazole",
              desc: "Omeprazole là một loại thuốc ức chế bơm proton (PPI) được sử dụng để giảm axit trong dạ dày và điều trị bệnh loét dạ dày và dạ dày.",
              createdAt: "2024-05-04T00:27:50.091609Z",
              updatedAt: "2024-05-04T00:27:50.091609Z"
            }, {
              id: "4cc71f0f-21f5-492d-b2f5-c5bd352e801c",
              name: "Lansoprazole",
              desc: "Lansoprazole là một loại thuốc ức chế bơm proton (PPI) được sử dụng để giảm axit trong dạ dày và điều trị bệnh loét dạ dày và dạ dày.",
              createdAt: "2024-05-04T00:27:50.091609Z",
              updatedAt: "2024-05-04T00:27:50.091609Z"
            }, {
              id: "d9672f8e-e0f8-4fcf-96d3-de19c7895468",
              name: "Amoxicillin",
              desc: "Amoxicillin là một loại thuốc kháng sinh penicillin thường được sử dụng để điều trị các loại nhiễm trùng vi khuẩn như viêm họng và viêm phổi.",
              createdAt: "2024-05-04T00:27:50.091609Z",
              updatedAt: "2024-05-04T00:27:50.091609Z"
            }, {
              id: "85b33509-b728-4b3c-b6aa-ecaf12343ee8",
              name: "Azithromycin",
              desc: "Azithromycin là một loại thuốc kháng sinh macrolide thường được sử dụng để điều trị các loại nhiễm trùng vi khuẩn như viêm họng, viêm phổi và bệnh truyền nhiễm.",
              createdAt: "2024-05-04T00:27:50.091609Z",
              updatedAt: "2024-05-04T00:27:50.091609Z"
            }, {
              id: "f55edb72-01bf-4765-83f3-70d632f6103c",
              name: "Ciprofloxacin",
              desc: "Ciprofloxacin là một loại thuốc kháng sinh fluoroquinolone thường được sử dụng để điều trị các loại nhiễm trùng vi khuẩn như tiêu chảy và nhiễm trùng tiểu đường.",
              createdAt: "2024-05-04T00:27:50.091609Z",
              updatedAt: "2024-05-04T00:27:50.091609Z"
            }, {
              id: "887edcb8-1c8b-4d4e-85b6-f5f13687e7c8",
              name: "Naproxen",
              desc: "Naproxen là một loại thuốc chống viêm không steroid (NSAID) thường được sử dụng để giảm đau và viêm.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "457c97f4-4801-4f77-b49d-3eb722c0c110",
              name: "Diphenhydramine",
              desc: "Diphenhydramine là một loại thuốc chống dị ứng (antihistamine) thường được sử dụng để giảm triệu chứng dị ứng và ngủ.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "7f0195e2-7b47-4c13-b9b0-aa08f7278c10",
              name: "Cimetidine",
              desc: "Cimetidine là một loại thuốc ức chế H2 được sử dụng để giảm axit trong dạ dày và điều trị loét dạ dày.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "a23a8521-b9c6-4fe8-9849-65e3f523a8b8",
              name: "Ranitidine",
              desc: "Ranitidine là một loại thuốc ức chế H2 được sử dụng để giảm axit trong dạ dày và điều trị loét dạ dày.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "94c7f7cd-e35e-4317-95e0-34d256f9bfde",
              name: "Simvastatin",
              desc: "Simvastatin là một loại thuốc giảm cholesterol được sử dụng để điều trị tăng cholesterol máu.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "0d560ae2-26e5-485c-a074-e3c3133a83e7",
              name: "Atorvastatin",
              desc: "Atorvastatin là một loại thuốc giảm cholesterol được sử dụng để điều trị tăng cholesterol máu.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "3b2f4237-4ad5-4020-866d-48965f813e2d",
              name: "Furosemide",
              desc: "Furosemide là một loại thuốc lợi tiểu (diuretic) thường được sử dụng để điều trị cao huyết áp và suy tim.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "77ddb0b3-654a-4338-9526-039df4006693",
              name: "Metformin",
              desc: "Metformin là một loại thuốc giảm đường huyết thường được sử dụng để điều trị tiểu đường.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "e0dd6fed-e319-4f2f-8e98-fce9eb3b2b72",
              name: "Prednisone",
              desc: "Prednisone là một loại thuốc corticosteroid thường được sử dụng để điều trị viêm nhiễm và rối loạn miễn dịch.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "297f7ef4-582a-4e96-bf3c-1ac41f07f586",
              name: "Cephalexin",
              desc: "Cephalexin là một loại thuốc kháng sinh cephalosporin thường được sử dụng để điều trị các loại nhiễm trùng vi khuẩn.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "f06ed813-d57e-427a-a2d2-93c6bccd0a29",
              name: "Levofloxacin",
              desc: "Levofloxacin là một loại thuốc kháng sinh fluoroquinolone thường được sử dụng để điều trị các loại nhiễm trùng vi khuẩn.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "71db4c73-9950-4e02-ac58-07e5ec7223c5",
              name: "Doxycycline",
              desc: "Doxycycline là một loại thuốc kháng sinh tetracycline thường được sử dụng để điều trị các loại nhiễm trùng vi khuẩn.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "b50f111f-b340-4a0b-a7ae-e811c7a9b966",
              name: "Fluconazole",
              desc: "Fluconazole là một loại thuốc kháng nấm thường được sử dụng để điều trị nhiễm nấm.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "10e0d635-ef61-41e4-80e5-33fb7d2c8207",
              name: "Pantoprazole",
              desc: "Pantoprazole là một loại thuốc ức chế bơm proton (PPI) được sử dụng để giảm axit trong dạ dày và điều trị loét dạ dày.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "ffc9b1ec-3471-4728-9b86-a1e1a1b0e31e",
              name: "Metronidazole",
              desc: "Metronidazole là một loại thuốc kháng sinh nitroimidazole thường được sử dụng để điều trị các loại nhiễm trùng vi khuẩn.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "911e3f91-10b6-47ea-bfd0-dd3982cb0d48",
              name: "Amitriptyline",
              desc: "Amitriptyline là một loại thuốc chống trầm cảm và cũng được sử dụng để điều trị đau thần kinh.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "3adf73b4-5396-4f8f-9f34-fcc82a751d62",
              name: "Bupropion",
              desc: "Bupropion là một loại thuốc chống trầm cảm thường được sử dụng để điều trị trầm cảm và hỗ trợ ngừng hút thuốc lá.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "6efb2476-275d-4d9f-9d0e-71b5be251b30",
              name: "Venlafaxine",
              desc: "Venlafaxine là một loại thuốc chống trầm cảm thường được sử dụng để điều trị trầm cảm và rối loạn lo âu.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "ef61077c-bbe4-46da-b8ad-7b0ce5d119c4",
              name: "Sertraline",
              desc: "Sertraline là một loại thuốc chống trầm cảm thường được sử dụng để điều trị trầm cảm, rối loạn lo âu và rối loạn ám ảnh.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "e75b9af6-f8c9-4977-9d7e-72c95a3232f1",
              name: "Trazodone",
              desc: "Trazodone là một loại thuốc chống trầm cảm thường được sử dụng để điều trị trầm cảm và rối loạn ngủ.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "9c556f07-1998-409a-b3ec-88f8677a863a",
              name: "Olanzapine",
              desc: "Olanzapine là một loại thuốc chống loạn thần thường được sử dụng để điều trị rối loạn tâm thần.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "deaa365e-e50d-43ae-ba84-bd42c9c35f3a",
              name: "Lorazepam",
              desc: "Lorazepam là một loại thuốc an thần thuộc nhóm benzodiazepine thường được sử dụng để giảm lo âu và căng thẳng.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "677fd20e-74bb-4904-889d-b4045c0d722d",
              name: "Clonazepam",
              desc: "Clonazepam là một loại thuốc an thần thuộc nhóm benzodiazepine thường được sử dụng để điều trị lo âu và co giật.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "b97aa0bb-5c37-4f87-8018-a21640289621",
              name: "Alprazolam",
              desc: "Alprazolam là một loại thuốc an thần thuộc nhóm benzodiazepine thường được sử dụng để giảm lo âu và căng thẳng.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
            }, {
              id: "6b823d2d-be50-4600-9fc6-84678b98e73c",
              name: "Zolpidem",
              desc: "Zolpidem là một loại thuốc an thần giảm căng thẳng thường được sử dụng để điều trị rối loạn ngủ.",
              createdAt: "2024-05-04T00:30:15.631342Z",
              updatedAt: "2024-05-04T00:30:15.631342Z"
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