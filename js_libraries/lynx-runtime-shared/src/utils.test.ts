// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { describe, it, expect } from 'vitest';
import { guid } from './utils';

describe('guid', () => {
  it('should return a string', () => {
    const result = guid();
    expect(typeof result).toBe('string');
  });

  it('should return a valid UUID format', () => {
    const result = guid();
    expect(result).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  });

  it('should generate unique values', () => {
    const ids = new Set();
    for (let i = 0; i < 1000; i++) {
      ids.add(guid());
    }
    expect(ids.size).toBe(1000);
  });
});
