import { createReducer, on } from '@ngrx/store';
import { Subscription, Week } from '../../../../../netlify/models/Graphqlx';
import {
  decreaseCurrentParticipantNumber,
  increaseCurrentParticipantNumber,
  resetCurrentParticipantNumber,
  saveNewInscriptionAPISuccess,
  setPlaces,
  updateInscriptionAPISuccess,
  upsertChild,
  weeksFetchAPISuccess,
} from './reservation.action';
import { Place } from '../../../models/Interfaces';

export interface StatusQuo {
  inscription: Subscription;
  weeks: ReadonlyArray<Week>;
  currentParticipantNumber: number;
  places: Place[];
}
export const initialState: StatusQuo = {
  inscription: {},
  weeks: [],
  currentParticipantNumber: 0,
  places: [],
};

export const weekReducer = createReducer(
  initialState,
  on(weeksFetchAPISuccess, (state, { allWeeks }) => {
    return { ...state, weeks: allWeeks };
  }),
  on(saveNewInscriptionAPISuccess, (state, { newInscription }) => {
    return {
      ...state,
      inscription: newInscription,
    };
  }),
  on(updateInscriptionAPISuccess, (state, { updateInscription }) => ({
    ...state,
    inscription: updateInscription,
  })),
  on(upsertChild, (state, { child }) => {
    const index = state.inscription?.children?.findIndex(
      (x) => x?.participant_id == child.participant_id
    );

    if (index! < 0 || !state.inscription?.children) {
      return {
        ...state,
        inscription: {
          ...state.inscription,
          children: [...state.inscription.children!, child],
        },
      };
    }
    const newArray = [...state.inscription.children!]; //making a new array

    newArray[index!] = child; //changing value in the new array

    const inscription = { ...state.inscription };
    inscription.children = newArray;

    return {
      ...state, //copying the original state
      inscription,
    };
  }),
  on(setPlaces, (state, action) => {
    return {
      ...state,
      places: [...action.places],
    };
  }),

  on(increaseCurrentParticipantNumber, (state) => {
    return {
      ...state,
      currentParticipantNumber: state.currentParticipantNumber + 1,
    };
  }),
  on(decreaseCurrentParticipantNumber, (state) => {
    return {
      ...state,
      currentParticipantNumber: state.currentParticipantNumber - 1,
    };
  }),
  on(resetCurrentParticipantNumber, (state) => {
    return {
      ...state,
      currentParticipantNumber: 0,
    };
  })
);
