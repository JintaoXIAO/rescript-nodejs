// Generated by ReScript, PLEASE EDIT WITH CARE

import * as EventEmitter$NodeJs from "./EventEmitter.res.js";

EventEmitter$NodeJs.Impl({});

var Interface = {};

function close(rl, f) {
  return rl.on("close", f);
}

function line(rl, f) {
  return rl.on("line", f);
}

function history(rl, f) {
  return rl.on("history", f);
}

var Events = {
  close: close,
  line: line,
  history: history
};

export {
  Interface ,
  Events ,
}
/*  Not a pure module */
