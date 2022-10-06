import { useEffect, useState } from "react";
export function useDebounce(initValue: string = "", delay: number = 1000) {
    const [value, setValue] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue(initValue);
        }, delay);
        return () => {
            clearTimeout(timer);
        };
    }, [initValue, delay]);
    return value;
}
