import { createNode } from "./domHelpers";
import { browser } from "webextension-polyfill-ts";

function createVideo(): HTMLMediaElement {
    const video: HTMLMediaElement = (createNode("video") as HTMLMediaElement);
    video.setAttribute("muted", "muted");
    video.setAttribute("autoPlay", "true");
    video.setAttribute("loop", "true");
    video.setAttribute("preload", "auto");
    video.setAttribute("width", "230");
    video.style.maxHeight = "33px";
    return video;
}

const waves = () => {
    const video = createVideo();
    video.setAttribute("src", browser.extension.getURL("static/waves.webm"));
    return video;
}

const wavesQuiet = () => {
    const video = createVideo();
    video.setAttribute("src", browser.extension.getURL("static/waves-quiet.webm"));
    return video;
}

export { waves, wavesQuiet };
