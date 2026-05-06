// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

var globalThis = (function() {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  if (typeof this !== 'undefined') return this;

  // For specialized embedded runtimes like QuickJS/V8 in strict mode where 'this' might be undefined
  // and standard globals are missing, we must define a fallback that references the actual global.
  // In Lynx environment, there's usually a native global exposed. If not, this fallback is dangerous.
  // However, returning {} is definitely wrong because globalThis.globalThis = {} won't modify the real global object.
  // A safer approach if all standard detections fail is to use a Function constructor as a last resort,
  // acknowledging that environments needing this polyfill AND having CSP might be incompatible.
  try {
    return Function('return this')();
  } catch (e) {
    return {};
  }
})();
globalThis.globalThis = globalThis;
