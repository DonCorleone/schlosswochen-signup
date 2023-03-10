import { createReducer, on } from '@ngrx/store';
import { Subscription, Week, Week_Capacity } from "../../../../../netlify/models/Graphqlx";
import {
  decreaseCurrentParticipantNumber,
  increaseCurrentParticipantNumber,
  resetCurrentParticipantNumber,
  saveNewInscriptionAPISuccess,
  updateInscriptionAPISuccess,
  upsertChild,
  weeksFetchAPISuccess,
} from './reservation.action';

export interface State {
  inscription: Subscription;
  weeks: ReadonlyArray<Week_Capacity>;
  currentParticipantNumber: number;
}
export const initialState: State = {
  inscription: {},
  weeks: [],
  currentParticipantNumber: 0
};

export const reservationReducer = createReducer(
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
