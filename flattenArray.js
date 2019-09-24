// These are functions to flatten an array
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

function bfs(givenArr) {
  let arr = givenArr.slice(0);
  let ret = [];
  while (arr.length > 0) {
    if (Array.isArray(arr[0])) {
      arr.push(...arr[0]);
    } else {
      ret.push(arr[0]);
    }
    arr.shift();
  }
  return ret;
}


// console.log(dfs([1, 2, [3, 4, [5, 6, 0], 4, [3, 7], 0]])); -> [1, 2, 3, 4, 5, 6, 0, 4, 3, 7, 0]
// console.log(bfs([1, 2, [3, 4, [5, 6, 0], 4, [3, 7], 0]])); -> [1, 2, 3, 4, 4, 0, 5, 6, 0, 3, 7]