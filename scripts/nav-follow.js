(() => {
  const links = Array.from(document.querySelectorAll('.topbar__nav a[href^="#"]'));
  if (!links.length) return;

  const entries = links
    .map((link) => {
      const id = (link.getAttribute('href') || '').slice(1);
      const section = id ? document.getElementById(id) : null;
      return id && section ? { id, link, section } : null;
    })
    .filter(Boolean);

  if (!entries.length) return;

  const setActive = (activeId) => {
    entries.forEach(({ id, link }) => {
      const active = id === activeId;
      link.classList.toggle('is-active', active);
      if (active) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const resolveByScroll = () => {
    const pivot = 130;
    let activeId = entries[0].id;

    entries.forEach(({ id, section }) => {
      if (section.getBoundingClientRect().top - pivot <= 0) {
        activeId = id;
      }
    });

    setActive(activeId);
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      resolveByScroll();
      ticking = false;
    });
  };

  resolveByScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  window.addEventListener('hashchange', () => {
    const id = window.location.hash.replace('#', '');
    if (!id) return;
    const target = entries.find((entry) => entry.id === id);
    if (target) setActive(target.id);
  });
})();
