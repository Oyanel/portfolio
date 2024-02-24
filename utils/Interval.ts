export const setGlitchedInterval = (intervalFunction: () => void) => {
    let timeout: NodeJS.Timeout;

    const timeoutFunction = () => {
        intervalFunction();
        runInterval();
    };

    const runInterval = () => {
        let delay = Math.floor(Math.max(400, Math.random() * 2000));
        if (delay > 1500) {
            delay = 50;
        }

        timeout = setTimeout(timeoutFunction, delay);
    };

    runInterval();

    return {
        clear() {
            clearTimeout(timeout);
        },
    };
};
