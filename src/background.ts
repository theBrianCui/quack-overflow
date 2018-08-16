import { browser } from "webextension-polyfill-ts";

browser.browserAction.onClicked.addListener(async (tab) => {
    console.log("Duck Clicked!");
    const tabs = await browser.tabs.query({
        active: true,
        currentWindow: true,
    });

    await browser.tabs.insertCSS({
        file: browser.extension.getURL("content/content.css"),
    });
    await browser.tabs.executeScript({
        file: browser.extension.getURL("content/content.js"),
    });

    browser.tabs.sendMessage(tabs[0].id, {
        action: "browserActionClicked"
    });
});
