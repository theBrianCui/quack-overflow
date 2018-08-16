import { browser } from "webextension-polyfill-ts";

(function () {
    if ((window as any).hasRun) {
        return;
    }
    (window as any).hasRun = true;

    browser.runtime.onMessage.addListener((message: any) => {
        if (message.action === "browserActionClicked") {
            var textDuck = document.createElement("div");
            textDuck.textContent = "Quack!";
            textDuck.className = "duck";
            document.body.appendChild(textDuck);
        }
    });

})();
