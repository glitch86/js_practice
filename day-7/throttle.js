function throttle(fn, limit) {
  let fnRan = false;
  return function (...args) {
    if (fnRan) return;

    fn.apply(this, args);
    fnRan = true;

    setTimeout(() => {
      fnRan = false;
    }, limit);
  };
}
