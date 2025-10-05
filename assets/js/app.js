// Shared helpers
(function() {
  function preventContextMenu(e) { e.preventDefault(); }
  function preventKeySave(e) {
    const key = e.key.toLowerCase();
    if ((e.ctrlKey || e.metaKey) && (key === 's' || key === 'p' || key === 'u')) { e.preventDefault(); }
    if (key === 'f12') { e.preventDefault(); }
    if (e.ctrlKey && e.shiftKey && (key === 'i' || key === 'c' || key === 'j')) { e.preventDefault(); }
  }
  function blockDragStart(e) { e.preventDefault(); }
  document.addEventListener('contextmenu', preventContextMenu);
  document.addEventListener('keydown', preventKeySave);
  document.addEventListener('dragstart', blockDragStart);

  // Basic viewport unit fix for mobile address bar
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  setVh();
  window.addEventListener('resize', setVh);
})();


