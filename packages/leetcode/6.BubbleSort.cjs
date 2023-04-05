function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    // 提前退出的标志
    let flag = false

    // 每次循环 都有 1个元素达到正确位置，只需要遍历乱序区间
    for (let j = 0; j < nums.length - i + 1 && !flag; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
        flag = true // 表示有数据交换
      }
    }
  }

  return nums
}

const test = [1, 5, 4, 3, 2, 7]

console.log(bubbleSort(test))
