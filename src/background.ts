import { browser } from "webextension-polyfill-ts";

browser.browserAction.onClicked.addListener((tab) => {
    console.log("Duck clicked!");
});
