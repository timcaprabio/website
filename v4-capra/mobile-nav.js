// Mobile navigation toggle — injects a hamburger that opens the nav links as an overlay.
(function(){
  const nav = document.querySelector('nav.nav');
  if(!nav || nav.querySelector('.nav-toggle')) return;

  const links = nav.querySelector('.nav-links');
  if(!links) return;

  // Build the toggle button
  const btn = document.createElement('button');
  btn.className = 'nav-toggle';
  btn.setAttribute('aria-label', 'Open menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.type = 'button';
  btn.innerHTML = '<span class="nav-toggle-bars" aria-hidden="true"><i></i><i></i><i></i></span>';

  // Place it inside .nav-cta so it sits on the right with the CTA
  const cta = nav.querySelector('.nav-cta');
  if(cta) cta.insertBefore(btn, cta.firstChild);
  else nav.appendChild(btn);

  function close(){
    nav.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  }
  function open(){
    nav.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
  }
  btn.addEventListener('click', () => {
    if(nav.classList.contains('is-open')) close(); else open();
  });

  // Close when a nav link is tapped (single-page anchors + page changes)
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

  // Close if viewport widens back past mobile breakpoint
  const mq = window.matchMedia('(min-width: 1025px)');
  mq.addEventListener('change', e => { if(e.matches) close(); });
})();
