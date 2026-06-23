const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => {
    if (msg.type() === 'error') console.log("CONSOLE ERROR:", msg.text());
  });
  page.on('pageerror', error => console.log("PAGE ERROR:", error.message));
  page.on('response', response => {
    if (response.status() >= 400) console.log("FAILED HTTP:", response.status(), response.url());
  });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
