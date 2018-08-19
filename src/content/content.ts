import { browser } from "webextension-polyfill-ts";
import showDuck from "./duck";

(function () {
    if ((window as any).hasRun) {
        return;
    }
    (window as any).hasRun = true;

    browser.runtime.onMessage.addListener((message: any) => {
        if (message.action === "browserActionClicked") {
            showDuck();
        }
    });

})();
