import { createSignal } from "solid-js"

export const Counter = () => {
    const [ counter, setCounter ] = createSignal(10);

    return (

        <>
            <h1>Counter</h1>
            <h3>Value: { counter() } </h3>

            <button
                class="py-2 px-4 bg-blue-500 text-white rounded cursor-pointer"
                onClick={() => setCounter( prev => ++prev)}> + 
                </button>
            <button
                class="py-2 px-4 bg-red-500 text-white rounded cursor-pointer"
                onClick={() => setCounter( prev => --prev)} > - 
                </button>
        </>
    )
}