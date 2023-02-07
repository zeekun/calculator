import { createReducer,on } from "@ngrx/store";
import { addString } from "./buttons.actions";

export const initialString = '';

export const buttonsReducer = createReducer(
    initialString,
    on(addString,(state,action)=>state+action.value)
)