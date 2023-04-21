import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

const {state,increment,decrement,reset} = useCounter(20);

    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr />
            <button className="btn btn-primary" onClick={()=>increment(2)}>+2</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
            {/* <button className="btn btn-primary" onClick={decrement}>-1</button> */}
            <button className="btn btn-primary" onClick={(event)=>decrement(event)}>-1</button>
        </>
    )
}
