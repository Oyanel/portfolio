export const setGlitchedInterval = (intervalFunction: () => void) => {
    let timeout: NodeJS.Timeout;

    const timeoutFunction = () => {
        intervalFunction();
        runInterval();
    };

    const runInterval = () => {
        const delay = Math.max(800, Math.random() * 2000);

        timeout = setTimeout(timeoutFunction, delay);
    };

    runInterval();

    return {
        clear() {
            clearTimeout(timeout);
        },
    };
};
