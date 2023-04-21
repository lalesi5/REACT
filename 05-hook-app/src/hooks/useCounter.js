import { useState } from "react"


export const useCounter = (initialValue = 10) => {
    const [state, setState] = useState(initialValue);

    const increment = (value = 1) => {

        setState(state + value);

    }
    const decrement = () => {
        if (state === 0) return;
        setState(state - 1);

    }
    const reset = () => {

        setState(initialValue);

    }

    return {
        state,
        increment,
        decrement,
        reset
    }
}