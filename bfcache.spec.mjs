import {chromium, firefox, test} from '@playwright/test';

const browsers = [
    {
        instance: chromium,
        name: 'Chromium',
        options: {
            headless: false,
        },
    },
    {
        instance: firefox,
        name: 'Firefox',
        options: {
            headless: false,
        },
    },
];

browsers.map(async (browser) => {
    test(`[${browser.name}] bfcache demo`, async () => {
        const browserInstance = await browser.instance.launch(
            browser.options,
        );
        const page = await browserInstance.newPage();

        const [iombRequest, iompRequest] = await Promise.all([
            page.goto(
                `http://localhost:8080/page1`,
            ),
            page.waitForTimeout(6000000),
        ]);
    })
});
