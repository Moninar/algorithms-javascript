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
  let isFlatten = false;
  let arr = givenArr.slice(0);
  let ret = [];
  while(!isFlatten) {
    isFlatten = true;
    for (let val of arr) {
      if (Array.isArray(val)) {
        ret.push(...val);
        isFlatten = false;
      } else {
        ret.push(val);
      }
    }
    if (isFlatten) break;
    arr = ret.slice(0);
    ret = [];
  }
  return ret;
}


// console.log(dfs([1, 2, [3, 4, [5, 6, 0], 4, [3, 7], 0]]));
// console.log(bfs([1, 2, [3, 4, [5, 6, 0], 4, [3, 7], 0]]));