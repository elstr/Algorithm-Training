const bubbleSort = list => {
  let doItAgain = false
  const limit = list.length
  const defaultValue = Number.POSITIVE_INFINITY
  for (let i = 0; i < list.length; i++) {
    const thisValue = list[i]
    const nextValue = i + 1 < limit ? list[i + 1] : defaultValue
    if (nextValue < thisValue) {
      list[i] = nextValue
      list[i + 1] = thisValue
      doItAgain = true
    }
  }
  doItAgain && bubbleSort(list)
  return list
}

module.exports = bubbleSort
