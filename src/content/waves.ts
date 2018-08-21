import { createNode } from "./domHelpers";
import { browser } from "webextension-polyfill-ts";

function createVideo(): HTMLMediaElement {
    const video: HTMLMediaElement = (createNode("video") as HTMLMediaElement);
    video.setAttribute("muted", "muted");
    video.setAttribute("autoPlay", "true");
    video.setAttribute("loop", "true");
    video.setAttribute("preload", "auto");
    video.setAttribute("width", "230");
    return video;
}

const waves = createVideo();
waves.setAttribute("src", browser.extension.getURL("static/waves.webm"));

const wavesQuiet = createVideo();
wavesQuiet.setAttribute("src", browser.extension.getURL("static/waves-quiet.webm"));

export { waves, wavesQuiet };
