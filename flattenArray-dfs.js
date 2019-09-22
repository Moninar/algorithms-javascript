function dfs(givenArr) {
  let ret = [];
  for (let val of givenArr) {
    if (Array.isArray(val)) {
      ret.push(...dfs(val));
    } else {
      ret.push(val);
    }
  }
  return ret;
}

// console.log(dfs([1, 2, [3, 4, [5, 6, 0], 4, [3, 7], 0]]));