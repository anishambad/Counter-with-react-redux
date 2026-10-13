import { useSelector , useDispatch} from "react-redux";
import { increment , decrement , reset, incrementBy5 } from "./counterSlice";

function Counter() {
    const value = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();


    return (
        <div>
            <h2>Count  : {value}</h2>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>
            <button onClick={()=> dispatch(reset())}>Reset</button>
            <button onClick={()=> dispatch(incrementBy5())}>+5</button>
        </div>
    )
}

export default Counter;