function merge2Arr(arr1, arr2) {
  const res = []

  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length)
    res.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++])

  while (i < arr1.length) res.push(arr1[i++])

  while (j < arr2.length) res.push(arr2[j++])

  return res
}

function mergeSort(list) {
  if (list.length < 2) return list

  const mid = list.length >> 1
  const left = list.slice(0, mid)
  const right = list.slice(mid)

  return merge2Arr(mergeSort(left), mergeSort(right))
}

const arr = [3, 1, 4, 2, 5]
console.log(mergeSort(arr)) // [1, 2, 3, 4, 5]
