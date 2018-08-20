import once from "./once";
import { createNode, appendTo } from "./domHelpers";

const popup = {
    node: (() => {
        const popup = createNode("div");
        popup.className = "quack-overflow-popup";
    
        let arrow = createNode("div");
        arrow.className = "arrow";
    
        popup.appendChild(arrow);
    
        return popup;
    })(),
    onPage: () => document.querySelectorAll(".popup").length > 0,
    hasContent: () => popup.node.children.length > 1,
    clear: () => {
        if (!popup.hasContent()) return;
        popup.node.removeChild(popup.node.children[1]);
    },
    set: (body: HTMLElement) => {
        popup.clear();
        popup.node.appendChild(body);
    }
}

const renderCanIHelp: () => HTMLElement = once(() => {
    const canIHelp = createNode("div");
    canIHelp.className = "smallTextWrapper";
    canIHelp.textContent = "Can I help?";
    return canIHelp;
});

const renderAskTheDuck: () => HTMLElement = once(() => {
    const wrapper = createNode("div");
    wrapper.className = "contentWrapper";

    const header = createNode("h2");
    header.textContent = "Ask the duck!";

    const body = createNode("p");
    body.innerHTML = "You'll need to explain your problem.<br>Do you have a microphone?";

    const buttonWrapper = createNode("div");
    buttonWrapper.className = "buttonWrapper";

    const yesButton = createNode("button");
    yesButton.classList.add("yesButton", "blueButton");
    yesButton.textContent = "Yes";

    const noButton = createNode("button");
    noButton.classList.add("noButton", "clearButton");
    noButton.textContent = "No";

    appendTo(buttonWrapper, yesButton, noButton);
    appendTo(wrapper, header, body, buttonWrapper);
    return wrapper;
});

const renderListening: () => HTMLElement = once(() => {
    const wrapper = createNode("div");
    wrapper.className = "contentWrapper";

    const listening = createNode("p");
    listening.textContent = "Quack Overflow is listening...";

    const speak = createNode("p");
    speak.textContent = ""
    return wrapper;
});

const renderQuack: () => HTMLElement = once(() => {
    const quack = createNode("span");
    quack.textContent = "Quack!";
    return quack;
})

export default function showDuck(): HTMLElement {
    if (document.querySelectorAll(".quack-overflow-svgDuck").length > 0) {
        return;
    }

    let svgDuck = createNode("div");
    svgDuck.className = "quack-overflow-svgDuck";
    svgDuck.style.bottom = "-100px";
    svgDuck.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg">
        <g fill="none">
            <path fill="#fff" d="M 8.9 12 v -1.6 C 10 4.8 15 0.6 20.7 1 A 11 11 0 0 1 31 12.8 c 0.3 1.2 0 2.8 -0.7 4.4 l -0.6 2.7 H 40 c 2 0 3.2 -0.6 4.4 -1.9 a 6.6 6.6 0 0 1 5 -2.3 c 2 0 3.7 2 3.7 4.5 v 12.5 A 13.4 13.4 0 0 1 39.8 46 h -25 c -5.6 0 -10.2 -3.4 -12.1 -9 a 14 14 0 0 1 3.7 -14.7 l 1.8 -1.5 l -2.3 -0.7 c -2.8 -1 -4.9 -3.4 -4.9 -6 V 12 h 7.9 Z" />
            <path fill="#ffb935" d="M 52 18.8 a 4 4 0 0 1 4 4 v 13 C 56 43 50.2 49 43 49 H 16 c -5.4 0 -10.4 -3.5 -12.3 -8.8 a 14 14 0 0 1 4 -14.8 L 9.5 24 v -0.4 L 7.4 23 A 5.6 5.6 0 0 1 3 17.4 V 15 h 7.3 v -1 c 1 -6 6.2 -10.3 12 -9.9 a 11.4 11.4 0 0 1 9.4 16.2 l -1 2.7 h 12.2 c 2.9 0 4.2 -1.6 5.5 -2.7 c 0.8 -0.6 1.9 -1.5 3.6 -1.5 Z m -35.5 -8.4 a 2 2 0 1 0 0 -4 a 2 2 0 0 0 0 4 Z" />
            <path fill="#f48024" d="M 2 14.3 c 0 2 1.8 4 4.3 5 l 3.9 1.2 l -1.4 1.2 L 7.1 23 a 13 13 0 0 0 -3.5 13.7 c 1.8 5 6 8.2 11.2 8.2 h 25 c 6.8 0 12.3 -5.5 12.3 -12.3 V 20.2 c 0 -2 -1.3 -3.4 -2.7 -3.4 a 5.7 5.7 0 0 0 -4.3 1.9 a 6.2 6.2 0 0 1 -5.1 2.2 H 28.4 l 0.9 -4 a 6 6 0 0 0 0.7 -3.8 v -0.3 A 10 10 0 0 0 20.6 2 c -5.1 -0.3 -9.9 3.4 -10.7 8.6 V 13 H 2 v 1.3 Z m -0.2 23.2 a 15 15 0 0 1 4 -15.9 l 0.3 -0.3 l -0.5 -0.2 C 2.4 20 0 17.3 0 14.3 V 11 h 7.9 v -0.6 A 12.5 12.5 0 0 1 20.8 0 A 12 12 0 0 1 32 12.7 a 8 8 0 0 1 -0.8 4.9 l -0.3 1.3 h 9 c 1.8 0 2.8 -0.5 3.7 -1.5 a 8 8 0 0 1 1.7 -1.4 a 7.6 7.6 0 0 1 4.1 -1.2 c 2.6 0 4.7 2.4 4.7 5.4 v 12.5 A 14.3 14.3 0 0 1 39.8 47 h -25 c -6 0 -11 -3.7 -13 -9.5 Z" />
            <path fill="#f48024" d="M 46 27 v 2 H 34 a 7.8 7.8 0 0 0 -7.6 8 c 0 4.4 3.4 8 7.6 8 v 2 a 9.8 9.8 0 0 1 -9.6 -10 c 0 -5.5 4.3 -10 9.6 -10 h 12 Z M 16.5 10 a 1.5 1.5 0 1 0 0 -3 a 1.5 1.5 0 0 0 0 3 Z m 0 2 a 3.5 3.5 0 1 1 0 -7 a 3.5 3.5 0 0 1 0 7 Z m -8.6 0 l 2 0.1 c -0.2 2.2 0.7 4.4 2.6 6.3 a 1.3 1.3 0 0 1 -0.7 2.3 c -0.9 0.2 -2.6 0.7 -3 1 L 7.7 20 c 0.5 -0.4 1.7 -0.8 2.8 -1.1 a 9.5 9.5 0 0 1 -2.5 -7 Z" />
        </g>
    </svg>`;
    
    document.body.appendChild(svgDuck);

    setTimeout(() => {
        svgDuck.style.bottom = "32px";
        svgDuck.addEventListener("click", () => {
            if (!popup.onPage()) {
                document.body.appendChild(popup.node);
            }

            popup.set(renderAskTheDuck());
        });
    }, 4);

    setTimeout(() => {
        if (!popup.onPage()) {
            document.body.appendChild(popup.node);
        }

        if (!popup.hasContent()) {
            popup.set(renderCanIHelp());
        }
    }, 2000);

    return svgDuck;
}
