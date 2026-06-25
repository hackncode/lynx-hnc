// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

// Get the global variable of the current JS runtime.
const _global = (function (): any {
  // Security: Prioritize direct feature detection to prevent CSP 'unsafe-eval' crashes
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  // @ts-ignore
  if (typeof global !== 'undefined') return global;
  if (typeof this !== 'undefined') return this;
  try {
    return Function('return this')();
  } catch (e) {
    return {};
  }
})();
export default _global;
