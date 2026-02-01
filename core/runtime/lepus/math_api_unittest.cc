// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

#include "core/runtime/lepus/math_api.h"

#include "core/runtime/lepus/vm_context.h"
#include "third_party/googletest/googletest/include/gtest/gtest.h"

namespace lynx {
namespace lepus {

TEST(MathApiTest, Random) {
  // Random does not use context, so nullptr is safe
  for (int i = 0; i < 100; ++i) {
    RestrictedValue val = Random(nullptr);
    EXPECT_TRUE(val.IsNumber());
    double num = val.Number();
    EXPECT_GE(num, 0.0);
    EXPECT_LT(num, 1.0);
  }
}

}  // namespace lepus
}  // namespace lynx
