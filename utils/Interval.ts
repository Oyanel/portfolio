export const setGlitchedInterval = (intervalFunction: () => void) => {
    let timeout: NodeJS.Timeout;

    const runInterval = (runCounter = 0) => {
        const timeoutFunction = () => {
            intervalFunction();
            runInterval(runCounter + (1 % 2));
        };

        const delay = Math.floor(Math.random() * (2000 - 10)) + 10;

        timeout = setTimeout(timeoutFunction, delay);
    };

    runInterval();

    return {
        clear() {
            clearTimeout(timeout);
        },
    };
};
