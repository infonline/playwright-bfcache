import path from 'node:path';

const config = {
    // testDir: 'e2e/tests',
    webServer: {
        command: 'npm run serve',
        port: 8080,
    },
    headless: false,
    retries: 3,
    // projects: [
    //     {
    //         name: 'Chromium',
    //         use: {
    //             browserName: 'chromium',
    //             userAgent: 'chromium',
    //         },
    //     },
    //     // {
    //     //   name: 'Chrome Beta Channel',
    //     //   use: {
    //     //     browserName: 'chromium',
    //     //     // Test against Chrome Beta channel
    //     //     channel: 'chrome-beta',
    //     //     userAgent: 'Chrome',
    //     //   },
    //     // },
    //     // {
    //     //   name: 'Chrome',
    //     //   use: {
    //     //     browserName: 'chromium',
    //     //     userAgent: 'Chrome',
    //     //     // Test against latest Chrome channel
    //     //     channel: 'chrome',
    //     //   },
    //     // },
    //     // {
    //     //   name: 'MS Edge',
    //     //   use: {
    //     //     browserName: 'chromium',
    //     //     userAgent: 'Edg',
    //     //     // Test against Chrome channel
    //     //     channel: 'msedge-beta', // compatability for linux, stable not released for linux yet
    //     //   },
    //     // },
    //     // {
    //     //   name: 'Firefox',
    //     //   use: {
    //     //     browserName: 'firefox',
    //     //     userAgent: 'firefox',
    //     //   },
    //     // },
    //     // {
    //     //   name: 'WebKit',
    //     //   use: {
    //     //     browserName: 'webkit',
    //     //     userAgent: 'Safari',
    //     //   },
    //     // },
    // ],
};

export default config;
