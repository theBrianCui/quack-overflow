export default function once(fun: () => HTMLElement): () => HTMLElement {
    let result: HTMLElement;
    return () => {
        if (result) {
            return result;
        }

        result = fun();
        return result;
    };
}