// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

// Get the global variable of the current JS runtime.
const _global = (function () {
  // eslint-disable-next-line no-eval
  return typeof globalThis !== 'undefined'
    ? globalThis
    // @ts-ignore
    : typeof global !== 'undefined'
      // @ts-ignore
      ? global
      : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
          ? window
          : this;
})();
export default _global;
