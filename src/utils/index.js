export const throttle = (func, wait = 100) => {
  console.log('func:', func);
  let timer = null;
  return function (...args) {
    if (timer === null) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
};
