import { browser } from "webextension-polyfill-ts";

browser.browserAction.onClicked.addListener(async (tab) => {
    const tabs = await browser.tabs.query({
        active: true,
        currentWindow: true,
    });

    await browser.tabs.insertCSS({
        file: "content/content.css",
    });
    await browser.tabs.executeScript({
        file: "content/content.js",
    });

    browser.tabs.sendMessage(tabs[0].id, {
        action: "browserActionClicked"
    });
});
