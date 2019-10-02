// 1: implement js array filter function
Array.prototype.filter = function(fn) {
  let arr = [];
  for (let i = 0; i < this.length; ++i) {
    if (fn.call(arguments[1], this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

// let result = [1, 2, 3, 4, 5, 6, 7].filter(elem => elem > 2);
// console.log(result);

// 2: implement js array map function
Array.prototype.map = function(fn) {
  let arr = [];
  for (let i = 0; i < this.length; ++i) {
    arr.push(fn.call(arguments[1], this[i], i, this));
  }
  return arr;
};

// let result = [1, 2, 3, 4, 5, 6, 7].map(elem => elem + 2);
// console.log(result);

// 3: implement js array reduce function
Array.prototype.reduce = function(fn) {
  if (this.length === 0 && (typeof arguments[1] === 'undefined')) {
    throw new TypeError('Invalid Inputs');
  }
  if (this.length === 1 && (typeof arguments[1] === 'undefined')) {
    return this[0];
  }
  if (this.length === 0 && (typeof arguments[1] !== 'undefined')) {
    return arguments[1];
  }

  let acc, idx;
  if (typeof arguments[1] === 'undefined') {
    acc = this[0];
    idx = 1;
  } else {
    acc = arguments[1];
    idx = 0;
  }
  for (; idx < this.length; ++idx) {
    acc = fn(acc, this[idx], idx, this);
  }
  return acc;
};

// let result = [1, 2, 3, 4, 5].reduce((acc, val) => acc + val, 10);
// console.log(result);

// 4: implement js debounce function
function debounce(fn, wait) {
     let timer = null;
     return function() {
       let context = this;
       clearTimeout(timer);
       timer = setTimeout(() => fn.apply(context, [...arguments]), wait);
     }
};

// 5: implement js throttle function
function throttle(fn, limit) {
  let timer = null;
  let lastCall = null;
  return function() {
    let context = this;
    if (!lastCall) {
      fn.apply(context, [...arguments]);
      lastCall = Date.now();
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, [...arguments]);
        lastCall = Date.now();
      }, limit - (Date.now() - lastCall));
    }
  }
};

// 6: implement js bind function
Function.prototype.bind = function() {
  let context = [...arguments].slice(0, 1);
  let prependArgs = [...arguments].slice(1);
  return function() {
    let currentArgs = [...arguments];
    return this.apply(context, [...prependArgs, ...currentArgs]);
  }
};

// 7: given an array and print output data at schedule
function printTasks(list) {
  let idx = -1;
  let len = list.length;
  function execute(content) {
    if (idx >= 0) {
      console.log(content);
    }
    if (++idx < len)
      setTimeout(() => execute(list[idx].Value), list[idx].Time);
  }
  execute();
};

// let input = [{
//   Value: 'a',
//   Time: 2000
// },
// {
//   Value: 'b',
//   Time: 1000
// },
// {
//   Value: 'c',
//   Time: 3000
// }
// ];

// printTasks(input);

