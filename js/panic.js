(function () {
  const panicKey = JSON.parse(localStorage.getItem('panicKey'));
  if (!panicKey) return;

  document.addEventListener('keydown', e => {
    if (e.key === panicKey) {
      triggerPanic();
    }
  });

  function triggerPanic() {
    // ===== DEFINE ACTION LATER =====

    // Example 1: Redirect instantly
    // window.location.href = 'https://classroom.google.com';

    // Example 2: Blank page
    // document.body.innerHTML = '';
    // document.title = 'Google Docs';

    // Example 3: Close tab (may not always work)
    // window.close();

    console.log('PANIC KEY ACTIVATED');
  }
})();
