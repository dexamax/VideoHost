
  (function () {
    const REDIRECT_URL = "https://whoushex.top/4/9122239";
    const REDIRECT_DELAY = 20000; // 20 seconds
    const COOLDOWN_TIME = 2 * 60 * 1000; // 2 minutes
    const STORAGE_KEY = "lastRedirectTime";

    const now = Date.now();
    const lastRedirect = parseInt(localStorage.getItem(STORAGE_KEY), 10);

    if (isNaN(lastRedirect) || now - lastRedirect > COOLDOWN_TIME) {
      // Save timestamp BEFORE redirecting
      setTimeout(function () {
        const confirmedNow = Date.now();
        localStorage.setItem(STORAGE_KEY, confirmedNow.toString());
        window.location.href = REDIRECT_URL;
      }, REDIRECT_DELAY);
    } else {
      console.log("Redirect skipped due to 2-minute cooldown.");
    }
  })();

