(function () {
  const REDIRECT_URL = "https://whoushex.top/4/9122239";
  const COOLDOWN_TIME = 2 * 60 * 1000; // 2 minutes in milliseconds
  const STORAGE_KEY = "lastRedirectTimestamp";

  const now = Date.now();
  const lastRedirect = localStorage.getItem(STORAGE_KEY);

  // Check if 2 minutes have passed
  if (!lastRedirect || now - lastRedirect > COOLDOWN_TIME) {
    // Set timeout for redirect after 4 seconds
    setTimeout(function () {
      localStorage.setItem(STORAGE_KEY, Date.now());
      window.location.replace(REDIRECT_URL);
    }, 20000); // 4 seconds
  }
})();
