const mergeSort = list => {
  if (list.length < 2) return list
  const middle = Math.floor(list.length / 2)
  const left = list.slice(0, middle)
  const right = list.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  const sorted = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }
  return [...sorted, ...left, ...right]
}

module.exports = mergeSort
