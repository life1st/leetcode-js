/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let dp = Array(n + 1).fill(null)
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
};
// @lc code=end

