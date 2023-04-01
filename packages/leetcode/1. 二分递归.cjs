var sum = function (numbers) {
  var fn = function (n, low, heigh) {
    if (low === heigh) return n[low];
    var mid = (low + heigh) >> 1;
    return fn(n, low, mid) + fn(n, mid + 1, heigh);
  };
  return fn(numbers, 0, numbers.length - 1);
};

var arr = new Array(100).fill(0).map(function (_, index) {
  return index + 1;
});

function find2MaxNum(nums) {
  let max1 = 0,
    max2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max2) {
      max2 = nums[i];
      if (max2 > max1) {
        [max2, max1] = [max1, max2];
      }
    }
  }

  return [max1, max2];
}
console.log(find2MaxNum(arr));

function find2MaxNum2(nums, low, heigh) {
  if (low === heigh) return [nums[low], -Infinity];
  if (low + 1 === heigh)
    return [Math.max(nums[low], nums[heigh]), Math.min(nums[low], nums[heigh])];

  const mid = (low + heigh) >> 1;
  const [lmax1, lmax2] = find2MaxNum2(nums, low, mid);
  const [rmax1, rmax2] = find2MaxNum2(nums, mid + 1, heigh);

  let max1 = rmax1,
    max2 = 0;

  if (lmax1 > rmax1) {
    max1 = lmax1;
    max2 = Math.max(lmax2, rmax1);
  } else {
    max1 = rmax1;
    max2 = Math.max(rmax2, lmax1);
  }

  return [max1, max2];
}

console.log(find2MaxNum2(arr, 0, arr.length - 1));
