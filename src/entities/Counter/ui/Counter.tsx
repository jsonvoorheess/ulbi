import React from "react";
import { increment } from "entities/Counter/model/CounterSlice";
import { useDispatch, useSelector } from "react-redux";
import { StoreSchema } from "shared/config/store/StoreSchema";

export const Counter = () => {
    const count = useSelector((state:StoreSchema) => state.counter.value)
    const dispatch = useDispatch()

    const onIncrmt = () =>{
        dispatch(increment())

    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrmt} >increment</button>
        </div>
    );
};
