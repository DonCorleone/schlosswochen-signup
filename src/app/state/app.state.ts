import { InscriptionState } from '../modules/inscription/state/inscription.reducer';
// Representation of the entire app state
// Extended by lazy loaded modules
export interface State {
  inscription: InscriptionState;
}
