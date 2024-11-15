// Generated by ReScript, PLEASE EDIT WITH CARE

import * as PervasivesU from "rescript/lib/es6/pervasivesU.js";
import * as Nodeassert from "node:assert";
import * as Internal__JsTypeReflection$NodeJs from "./internal/Internal__JsTypeReflection.res.js";

function setStackTraceLimit(n) {
    Error.stackTraceLimit = n;
    return undefined;
  }
;

function setStackTraceLimit$1(n) {
  setStackTraceLimit(n);
}

function instanceOf(x) {
  return Internal__JsTypeReflection$NodeJs.instanceOfClass(x, Error);
}

function isError(x) {
  if (x.constructor.name === "Error") {
    return Internal__JsTypeReflection$NodeJs.instanceOfClass(x, Error);
  } else {
    return false;
  }
}

function fromJsExn(exn) {
  if (isError(exn)) {
    return exn;
  }
  
}

var $$Error$1 = {
  instanceOf: instanceOf,
  isError: isError,
  fromJsExn: fromJsExn
};

function instanceOf$1(x) {
  return Internal__JsTypeReflection$NodeJs.instanceOfClass(x, Nodeassert.AssertionError);
}

function isAssertionError(x) {
  if (x.constructor.name === "AssertionError") {
    return Internal__JsTypeReflection$NodeJs.instanceOfClass(x, Nodeassert.AssertionError);
  } else {
    return false;
  }
}

function fromJsExn$1(exn) {
  if (isAssertionError(exn)) {
    return exn;
  }
  
}

var AssertionError = {
  instanceOf: instanceOf$1,
  isAssertionError: isAssertionError,
  fromJsExn: fromJsExn$1
};

function instanceOf$2(x) {
  return Internal__JsTypeReflection$NodeJs.instanceOfClass(x, EvalError);
}

function isEvalError(x) {
  if (x.constructor.name === "EvalError") {
    return Internal__JsTypeReflection$NodeJs.instanceOfClass(x, EvalError);
  } else {
    return false;
  }
}

function fromJsExn$2(exn) {
  if (isEvalError(exn)) {
    return exn;
  }
  
}

var $$EvalError$1 = {
  instanceOf: instanceOf$2,
  isEvalError: isEvalError,
  fromJsExn: fromJsExn$2
};

function instanceOf$3(x) {
  return Internal__JsTypeReflection$NodeJs.instanceOfClass(x, RangeError);
}

function isRangeError(x) {
  if (x.constructor.name === "RangeError") {
    return Internal__JsTypeReflection$NodeJs.instanceOfClass(x, RangeError);
  } else {
    return false;
  }
}

function fromJsExn$3(exn) {
  if (isRangeError(exn)) {
    return exn;
  }
  
}

var $$RangeError$1 = {
  instanceOf: instanceOf$3,
  isRangeError: isRangeError,
  fromJsExn: fromJsExn$3
};

function instanceOf$4(x) {
  return Internal__JsTypeReflection$NodeJs.instanceOfClass(x, ReferenceError);
}

function isReferenceError(x) {
  if (x.constructor.name === "ReferenceError") {
    return Internal__JsTypeReflection$NodeJs.instanceOfClass(x, ReferenceError);
  } else {
    return false;
  }
}

function fromJsExn$4(exn) {
  if (isReferenceError(exn)) {
    return exn;
  }
  
}

var $$ReferenceError$1 = {
  instanceOf: instanceOf$4,
  isReferenceError: isReferenceError,
  fromJsExn: fromJsExn$4
};

function instanceOf$5(x) {
  return Internal__JsTypeReflection$NodeJs.instanceOfClass(x, SyntaxError);
}

function isSyntaxError(x) {
  if (x.constructor.name === "SyntaxError") {
    return Internal__JsTypeReflection$NodeJs.instanceOfClass(x, SyntaxError);
  } else {
    return false;
  }
}

function fromJsExn$5(exn) {
  if (isSyntaxError(exn)) {
    return exn;
  }
  
}

var $$SyntaxError$1 = {
  instanceOf: instanceOf$5,
  isSyntaxError: isSyntaxError,
  fromJsExn: fromJsExn$5
};

var SystemError = {};

function instanceOf$6(x) {
  return Internal__JsTypeReflection$NodeJs.instanceOfClass(x, TypeError);
}

function isTypeError(x) {
  if (x.constructor.name === "TypeError") {
    return Internal__JsTypeReflection$NodeJs.instanceOfClass(x, TypeError);
  } else {
    return false;
  }
}

function fromJsExn$6(exn) {
  if (isTypeError(exn)) {
    return exn;
  }
  
}

var $$TypeError$1 = {
  instanceOf: instanceOf$6,
  isTypeError: isTypeError,
  fromJsExn: fromJsExn$6
};

function instanceOf$7(x) {
  return Internal__JsTypeReflection$NodeJs.instanceOfClass(x, URIError);
}

function isURIError(x) {
  if (x.constructor.name === "URIError") {
    return Internal__JsTypeReflection$NodeJs.instanceOfClass(x, URIError);
  } else {
    return false;
  }
}

function fromJsExn$7(exn) {
  if (isURIError(exn)) {
    return exn;
  }
  
}

var $$URIError$1 = {
  instanceOf: instanceOf$7,
  isURIError: isURIError,
  fromJsExn: fromJsExn$7
};

function classifyOpt(value) {
  if (isAssertionError(value)) {
    return {
            TAG: "AssertionError",
            _0: value
          };
  } else if (isEvalError(value)) {
    return {
            TAG: "EvalError",
            _0: value
          };
  } else if (isRangeError(value)) {
    return {
            TAG: "RangeError",
            _0: value
          };
  } else if (isReferenceError(value)) {
    return {
            TAG: "ReferenceError",
            _0: value
          };
  } else if (isSyntaxError(value)) {
    return {
            TAG: "SyntaxError",
            _0: value
          };
  } else if (isTypeError(value)) {
    return {
            TAG: "TypeError",
            _0: value
          };
  } else if (isURIError(value)) {
    return {
            TAG: "URIError",
            _0: value
          };
  } else if (isError(value)) {
    return {
            TAG: "Error",
            _0: value
          };
  } else {
    return ;
  }
}

function classifyExn(value) {
  var err = classifyOpt(value);
  if (err !== undefined) {
    return err;
  } else {
    return PervasivesU.failwith("Unknown data type");
  }
}

function classify(value) {
  var err = classifyOpt(value);
  if (err !== undefined) {
    return {
            TAG: "Ok",
            _0: err
          };
  } else {
    return {
            TAG: "Error",
            _0: value
          };
  }
}

var ErrorCodes = {};

export {
  setStackTraceLimit$1 as setStackTraceLimit,
  $$Error$1 as $$Error,
  AssertionError ,
  $$EvalError$1 as $$EvalError,
  $$RangeError$1 as $$RangeError,
  $$ReferenceError$1 as $$ReferenceError,
  $$SyntaxError$1 as $$SyntaxError,
  SystemError ,
  $$TypeError$1 as $$TypeError,
  $$URIError$1 as $$URIError,
  classifyOpt ,
  classifyExn ,
  classify ,
  ErrorCodes ,
}
/*  Not a pure module */
