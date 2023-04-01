// 元素直接可以不连续 但是保证先后顺序
// function max(str1, str2) {
//   const len1 = str1.length;
//   const len2 = str2.length;

//   // 递归基
//   if (len1 === 0 || len2 === 0) return "";

//   // 从后开始比较
//   if (str1[len1 - 1] === str2[len2 - 1])
//     return (
//       max(str1.slice(0, len1 - 1), str2.slice(0, len2 - 1)) + str1[len1 - 1]
//     );

//   const v1 = max(str1, str2.slice(0, len2 - 1));
//   const v2 = max(str1.slice(0, len1 - 1), str2);

//   return v1.length >= v2.length ? v1 : v2;
// }

function max(str1, str2) {
  // 迭代
  const len1 = str1.length;
  const len2 = str2.length;

  if (len1 === 0 || len2 === 0) return 0;

  const dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0));

  for (let i = 0; i < len1; i++) {
    const v1 = str1[i]
    for (let j = 0; j < len2; j++) {
      const v2 = str2[j]
      if (v1 === v2) {
        dp[i + 1][j + 1] = dp[i][j] + 1
      } else {
        dp[i + 1][j + 1] = Math.min(dp[i][j + 1], dp[i + 1][j])
      }
    }
  }

  return dp[len1][len2]
}

console.log(max("sttt1r", "ttr"));
