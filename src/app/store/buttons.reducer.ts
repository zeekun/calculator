import { createReducer,on } from "@ngrx/store";
import { addString } from "./buttons.actions";
import { countOccurrences, hasOnlyOneType } from "../utils/utils";

export const initialString = '';

export const buttonsReducer = createReducer(
    initialString,
    on(addString,(state,action)=>{
            let btn:string = action.value;
            const lastStateChar = state.charAt(state.length-1);
            //The Clear button state
            if(btn === 'C'){
                return '';
            }
            //Convert every buton value to a number
            let num:number=0;
            if(btn != '+/-' && btn !='()'){
                num = parseInt(btn);
            }
            
            //Check if the output is currently empty, 
            //if it is empty then the first string in the output should be a number 
            //or a negative sign or an opening bracket
            if(state === '' && isNaN(num)){
                return state;
            }

            //Format negative sign button
            if(btn === '+/-'){
                btn = '(-';
                //if string is not empty, check if the string is a negative, if not then make it a negative else make it a postive
                if(state !=''){
                    return (state.charAt(1)!='-') ? btn+state:state.replace('(-','');
                }    
            }
              
            //Format brackets button
            if(btn === '()'){
                //if the state is empty or has only opening brackets then the button should have an opening bracket
                if(
                    state === '' || 
                    lastStateChar === '(' || 
                    lastStateChar === '/' ||
                    lastStateChar === 'x' ||
                    lastStateChar === '-' ||
                    lastStateChar === '+'
                    //lastStateChar === '%'
                ){
                    btn = '(';
                }
                else if(!isNaN(num)){
                    //check if there exists any opening bracket(s) before updating the btn
                    const openingBracketCount = countOccurrences(state,'(');
                    const closingBracketCount = countOccurrences(state,')');
                    btn = (openingBracketCount != closingBracketCount) ? ')' : 'x(';                    
                }
            }

            //Make sure only opening bracket, number or integer sign can be added after an opening bracket
            if(lastStateChar === '('){
                btn = (!isNaN(num) || btn==='-' || btn==='+') ? btn : '';
            }

            //if last character is an operation replace it with new operation
            if(
                lastStateChar === '/' ||
                lastStateChar === 'x' ||
                lastStateChar === '-' ||
                lastStateChar === '+'
            ){
                state = state.slice(0,-1)
                //btn = (btn === '/' || btn==='x') ? '' : btn;
            }
            return state+btn
        }
    )
)