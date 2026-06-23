const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('response', async response => {
    if (response.url().includes('localhost')) {
      try {
        const text = await response.text();
        if (text.includes('SectionHeader')) {
          console.log('FOUND IN:', response.url());
        }
      } catch (e) {}
    }
  });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await browser.close();
})();
