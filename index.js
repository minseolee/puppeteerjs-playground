const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => {
        console.log(error.message);
    });

    await page.goto('https://7942yongdae.tistory.com/87');
    await page.setCookie()
    await browser.close();
})();
