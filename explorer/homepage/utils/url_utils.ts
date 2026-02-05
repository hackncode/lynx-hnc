// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

export function isValidUrl(url: string): boolean {
  if (!url) {
    return false;
  }
  // Allow http, https, lynx, and file schemes.
  const schemaRegex = /^(http|https|lynx|file):/i;
  return schemaRegex.test(url);
}
