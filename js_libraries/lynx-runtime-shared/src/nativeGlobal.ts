// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

// Get the global variable of the current JS runtime.
// @ts-ignore
const _global =
  typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
    ? self
    : typeof window !== 'undefined'
    ? window
    // @ts-ignore
    : typeof global !== 'undefined'
    // @ts-ignore
    ? global
    : this;
export default _global;
