function pageCount(n, p) {
  let begCount = 0,
    revCount = 0;

  if (n === p) {
    return 0;
  } else if (p <= Math.floor(n / 2)) {
    for (let i = 1; i < n; i += 2) {
      if (p > i) {
        begCount += 1;
      }
    }
    return begCount;
  } else if (p > Math.floor(n / 2)) {
    if (n % 2 != 0) {
      n -= 1;
    }
    for (let j = n; j >= 0; j -= 2) {
      if (p < j) {
        revCount += 1;
      }
    }
    return revCount;
  }
}
