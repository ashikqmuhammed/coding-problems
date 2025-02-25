function sorting(arr) {
  const size = arr.length;
  let swapped;
  for (let i = 0; i < size; i++) {
    swapped = false;
    for (let j = 0; j < size - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr
}

console.log(sorting([3,6,3,2,6,3]))

