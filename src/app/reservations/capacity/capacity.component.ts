import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ChildsPerState } from 'src/app/models/Subscriptor';
import { Week } from 'src/app/models/Week';
import { ApolloService } from 'src/app/service/apollo.service';

@Component({
  selector: 'app-capacity',
  templateUrl: './capacity.component.html',
  styleUrls: ['./capacity.component.scss']
})
export class CapacityComponent implements OnInit {

  @Input() week: number = 0;

  childsPerStates$: Observable<ChildsPerState[]> | undefined

  constructor(
    private apolloService: ApolloService) { }

  ngOnInit(): void {
    if (this.week) {
      this.childsPerStates$ = this.apolloService.GetReservationsPerWeek(this.week)
        .pipe(
          tap(returnz => { console.log(JSON.stringify(returnz)) }),
          map(returnz => {
            return returnz;
          }
          )
        )
    }
  }

}
