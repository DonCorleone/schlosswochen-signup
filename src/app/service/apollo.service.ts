import { Injectable } from '@angular/core';
import { map,tap  } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Apollo, gql, Mutation } from 'apollo-angular';
import { FetchResult } from '@apollo/client/core';
import { InsertOneParticipant } from '../components/subscription/Subscriptor';

const INSERT_PARTICIPANT = gql`
  mutation insertParticipant($numOfChildren: Int!, $reservationDate: DateTime) {
    insertOneParticipant(data: {
      status: "new"
      reservationDate: $reservationDate
      numOfChildren: $numOfChildren
    }) {
      _id
      reservationDate
    }
  }
`;


@Injectable({
  providedIn: 'root'
})
export class ApolloService {

  constructor(private apollo: Apollo) {
  }

	InsertParticipant(numChildren: number):Observable<InsertOneParticipant | null | undefined> {
   return this.apollo.mutate<InsertOneParticipant>({
      mutation: INSERT_PARTICIPANT,
      variables: {
        numOfChildren: numChildren,
        reservationDate: new Date(),
				deadline: new Date(new Date().getTime() + ((10 + (numChildren*5))) * 60 * 1000),
        state:"reservation"
      }
    }).pipe(
      map(result => {return result.data})
    )
  }
}
