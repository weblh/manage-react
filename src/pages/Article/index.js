import { useReducer } from "react"

function reducer(state, action){
    switch (action.type) {
        case "INC":
            return state + 1
        case "DEC":
            return state - 1
        case "RESET":
            return 0
        case "SET":
            return action.payload
        default:
            return state
    }
}
const Article = () => {
    const [count, dispatch] = useReducer(reducer, 0)
    return <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        <button onClick={() => dispatch({ type: "SET", payload: 100 })}>Set</button>
        <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>


    </div>;
}
export default Article;