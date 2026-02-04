(() => {
  const button = document.querySelector('.back-to-top');
  const showAfter = 200;
  const prefersReduced =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!button) return;
  let ticking = false;

  const updateVisibility = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    button.classList.toggle('is-visible', scrollTop > showAfter);
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateVisibility();
      ticking = false;
    });
  };

  updateVisibility();

  window.addEventListener('scroll', onScroll, { passive: true });

  button.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? 'auto' : 'smooth',
    });
  });
})();
