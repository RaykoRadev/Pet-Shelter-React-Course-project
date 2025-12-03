import { useState } from "react";

export default function usePersistedState(stateKey, initState) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(stateKey);

        if (!persistedState) {
            return typeof initState === "function" ? initState() : initState;
        }

        if (persistedState === "undefined") {
            localStorage.removeItem(stateKey);
        }

        const persistedStateData = JSON.parse(persistedState);

        return persistedStateData;
    });

    const setPersistedState = (input) => {
        const data = typeof input === "function" ? input(state) : input;

        const persistedData = JSON.stringify(data);

        localStorage.setItem(stateKey, persistedData);

        setState(data);
    };

    return [state, setPersistedState];
}
