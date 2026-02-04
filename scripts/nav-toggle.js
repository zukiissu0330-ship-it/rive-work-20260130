(() => {
  const toggle = document.querySelector('.topbar__toggle');
  const nav = document.querySelector('.topbar__nav');

  if (!toggle || !nav) return;

  const setExpanded = (expanded) => {
    toggle.setAttribute('aria-expanded', String(expanded));
    nav.classList.toggle('is-open', expanded);
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('is-open');
    setExpanded(!isOpen);
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      setExpanded(false);
    }
  });

  const mq = window.matchMedia('(min-width: 761px)');
  const handleChange = (event) => {
    if (event.matches) {
      setExpanded(false);
    }
  };

  if (mq.addEventListener) {
    mq.addEventListener('change', handleChange);
  } else if (mq.addListener) {
    mq.addListener(handleChange);
  }
})();
