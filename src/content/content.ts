import { browser } from "webextension-polyfill-ts";

(function () {
    if ((window as any).hasRun) {
        return;
    }
    (window as any).hasRun = true;

    browser.runtime.onMessage.addListener((message: any) => {
        if (message.action === "browserActionClicked") {
            document.body.innerHTML = "Heyoooo";
        }
    });

})();
