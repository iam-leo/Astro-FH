import { createSignal, type Component } from "solid-js";

interface Props {
    initialValue: number;
}

export const Counter: Component<Props> = (props) => {
    const [ counter, setCounter ] = createSignal(props.initialValue);

    return (

        <>
            <div class="flex flex-col gap-3 bg-indigo-950 py-6 px-8 rounded-md">
                <h1>Counter</h1>
                <h3>Value: { counter() } </h3>

                <div class="flex gap-x-5">
                    <button
                        class="py-2 px-4 bg-blue-500 text-white font-bold rounded cursor-pointer"
                        onClick={() => setCounter( prev => ++prev)}> + 
                        </button>
                    <button
                        class="py-2 px-4 bg-red-500 text-white font-bold rounded cursor-pointer"
                        onClick={() => setCounter( prev => --prev)} > -
                    </button>
                </div>
            </div>
        </>
    )
}