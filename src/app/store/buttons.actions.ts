import { createAction,props } from "@ngrx/store";

export const addString = createAction('[Buttons Component] AddString',props<{value:string}>())
export const getAnswer = createAction('[Answer Component] GetAnswer',props<{input:string}>())