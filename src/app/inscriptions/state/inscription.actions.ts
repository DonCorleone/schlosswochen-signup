import { createAction, props } from "@ngrx/store";
import { Inscriptor } from "src/app/models/Inscriptor";

export const setInscription = createAction(
  '[Inscription] Set Inscription',
  props<{ inscription: Inscriptor }>()
);
