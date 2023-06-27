# Playwright bfcache Demo

This is a demo of how to use the bfcache with playwright and more specifically to demonstrate that it is not working properly in playwright after version `1.22.2`.

## Usage

1. Clone this repo
2. Run `npm install`
3. Run `npm run test`

Now a test page should open at [http://localhost:8080/page1](http://localhost:8080/page1).

First open the DevTools and go to the console, there you should see a message that indicates whether the current page was loaded from the bfcache or not.

The test page contains a link to a second page. When you click the link, the second page will open. When you click the back button or navigate back via link in browser history, the first page should be restored from the bfcache (see console). This works in playwright version `1.22.2` but not in newer versions.

## Bfcache in newer versions

To compare with newer versions, you can change the playwright version, for example to `latest`, in `package.json` and run `npm install` again.

Make sure you have the latest version installed (check with `npm list @playwright/test`) and you will probably also need to run `npx playwright install` to install the new browser binaries.

Now run `npm run test` again, go to the page and follow the instructions, and you will see that after going back in history bfcache is not used anymore. The console will show that the page is loaded without cache.

You can also compare this directly to your browser. Just open a fresh version of Chrome (or any Chromium based browser), run `npm run serve` and go to [http://localhost:8080/page1](http://localhost:8080/page1). Now follow the instructions again, and you will see that the bfcache is used in the DevTools console message.

## Other browsers

The test and repository focuses mainly on Chrome / Chromium. You can also use Firefox by commenting out Chromium browser in the `browsers` array in the `bffcache.spec.mjs` test file.

Bfcache in Firefox seems to work in versions greater than `1.22.2`, but also not with the latest version. So this probably needs investigation as well.
