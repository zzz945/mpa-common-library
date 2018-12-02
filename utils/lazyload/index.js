export function lazyloadInit () {
  if (!window.addEventListener || !window.requestAnimationFrame) return
  window.addEventListener('scroll', calcAndLoad, false);
  window.addEventListener('resize', calcAndLoad, false);
  let items = Array.from(document.querySelectorAll('img[data-src]'));
  calcAndLoad();

  function calcAndLoad() {
    if (!items.length) {
      window.removeEventListener('scroll', calcAndLoad, false);
      window.removeEventListener('resize', calcAndLoad), false;
      return
    }
    setTimeout(function () {
      const wt = window.pageYOffset;
      const wb = wt + window.innerHeight;
      items = items.filter(item => {
        const rect = item.getBoundingClientRect();
        const t = wt + rect.top;
        const b = wt + rect.height;
        if (b > wt && t < wb) {
          item.src = item.dataset.src;
          item.dataset.loaded = true;
          return false
        } else {
          return true
        }
      })
    }, 300/** delayed */);
  }
}
