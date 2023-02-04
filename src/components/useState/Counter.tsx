import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incremental = (number: number = 1): void => {
        setCounter(counter + number);
    }
    const reset = (): void => {
        setCounter(0);
    }
    return (
        <section>
            <div>Counter-useState: {counter}</div>
            <button onClick={() => incremental()}> +1 </button>
            <button onClick={() => incremental(2)}> +2 </button>
            <button onClick={() => reset()}> Reset </button>
        </section>

    )
}

export { Counter }