import { createAction, props } from "@ngrx/store";


export const setNumberOfChildren = createAction(
  '[Reservation] set numberOfChildren',
  props< {numberOfChildren: number} >()
);
