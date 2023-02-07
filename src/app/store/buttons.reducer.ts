import { createReducer,on } from "@ngrx/store";
import { addString } from "./buttons.actions";

export const initialState = 'initial';

export const buttonsReducer = createReducer(
    initialState,
    on(addString,(state,action)=>state+action)
)