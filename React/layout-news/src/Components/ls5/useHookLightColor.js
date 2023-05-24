import { useState } from "react";

const useHookLight = () => {
    const [numberLight, setNumberLight] = useState(0);

    const changeColor = () => {
        setNumberLight((prev) => (prev + 1) % 3);
    };

    return { numberLight, changeColor };
};

export default useHookLight;
