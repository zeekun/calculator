import { createAction,props } from "@ngrx/store";

export const addString = createAction('[Buttons Component] AddString',props<{value:String}>())