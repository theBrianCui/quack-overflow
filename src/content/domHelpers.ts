export function createNode(type: string): HTMLElement {
    return document.createElement(type);
}

export function appendTo(base: HTMLElement, ... children: HTMLElement[]): HTMLElement {
    for (const child of children) {
        base.appendChild(child);
    }

    return base;
}
