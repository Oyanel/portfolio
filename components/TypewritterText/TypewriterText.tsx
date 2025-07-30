import { HTMLAttributes, useCallback, useEffect, useRef } from "react";

type TypewriterProps = {
    text: string;
    speed?: number;
    pauseBetweenLines?: number;
} & HTMLAttributes<HTMLParagraphElement>;

let textProgressIntervalId: ReturnType<typeof setTimeout>;

export const TypewriterText = ({ text, speed = 20, className, ...paragraphProps }: TypewriterProps) => {
    const textRef = useRef<HTMLParagraphElement>(null);

    const progressTextCallback = useCallback(() => {
        if (!textRef.current) {
            return;
        }

        if (textRef.current.innerHTML === text) {
            clearInterval(textProgressIntervalId);
            return;
        }

        textRef.current.innerText = text.slice(0, textRef.current.innerHTML.length + 1);
    }, [text]);

    useEffect(() => {
        if (!textRef.current) {
            return;
        }

        textRef.current.innerText = text.slice(0, 1);

        textProgressIntervalId = setInterval(progressTextCallback, speed);

        return () => {
            clearInterval(textProgressIntervalId);
        };
    }, [progressTextCallback, speed, text]);

    return <p {...paragraphProps} className={className} ref={textRef} />;
};
