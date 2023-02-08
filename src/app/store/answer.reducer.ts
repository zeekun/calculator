import { createReducer,on } from "@ngrx/store";
import { addString, getAnswer } from "./buttons.actions";
import { countOccurrences, hasOnlyOneType } from "../utils/utils";

export const initialAnswer = '';

export const answerReducer = createReducer(
    initialAnswer,
    on(getAnswer,(state,action)=>{
            let input:string = action.input;

            return state;
        }   
    )
)
