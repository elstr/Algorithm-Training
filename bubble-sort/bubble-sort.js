const bubbleSort = list => {
  let doItAgain = false
  for (let i = 0; i < list.length - 1; i++) {
    const thisValue = list[i]
    const nextValue = list[i + 1]
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
