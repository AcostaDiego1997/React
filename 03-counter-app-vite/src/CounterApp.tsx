import { useState } from "react";


export const CounterApp = ({ value = 10 } : ICounter) => {

    const [count, setCount] = useState(value);

    const handleAdd = () => setCount(count +1);
    const handleSubstract = () => setCount(count -1);
    const handleReset = () => setCount(value);

    return <>
        <h1>CounterApp</h1>
        <h2>  { count } </h2>
        <button onClick={() => handleAdd()}> +1 </button>
        <button onClick={() => handleSubstract()}> -1 </button>
        <button onClick={() => handleReset()}> Reset </button>
    </>
}

interface ICounter  {
    value? : number
}