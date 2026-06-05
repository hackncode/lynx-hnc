// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

var promiseFactor = require('./core');
var es6 = require('./es6-extensions');
var rejectionHandle = require('./rejection-tracking');
// SECURITY: CSP safe global resolution prioritizing direct feature detection
// to prevent 'unsafe-eval' violations.
var gg = (function() {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  if (typeof this !== 'undefined') return this;
  try {
    return new Function('return this')();
  } catch (e) {
    return {};
  }
})();
// eslint-disable-next-line no-multi-assign
gg.getPromise = module.exports.getPromise = (opt) => {
  var setTimeout = opt.setTimeout;
  var onUnhandled = opt.onUnhandled;
  var clearTimeout = opt.clearTimeout;
  var nextTick = opt.nextTick || (fn => { setTimeout(fn, 0); });
  var Promise = promiseFactor({ nextTick: nextTick });
  Promise = es6(Promise);
  Promise = rejectionHandle(Promise, setTimeout, clearTimeout).enable({
    allRejections: true,
    onUnhandled,
  });

  return Promise;
};
