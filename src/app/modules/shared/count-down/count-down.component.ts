import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, of, Subscription, timer } from 'rxjs';
import { map, shareReplay, take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit {
  private subscription: Subscription;

  @Input() dDay = new Date('Jan 01 2022 00:00:00');
  @Input() title = 'countdown';

  secondsToDday$: Observable<number>;
  minutesToDday$: Observable<number>;
  hoursToDday$: Observable<number>;
  daysToDday$: Observable<number>;
  private secondsToDdayTotal$: Observable<number>;

  ngOnInit() {
    const timeDifference = this.dDay.getTime() - new Date().getTime();
    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const SecondsInAMinute = 60;

    const time = Math.floor(timeDifference / milliSecondsInASecond);
    this.secondsToDdayTotal$ = interval(1000).pipe(
      take(time),
      map((x) => time - x)
    );
    this.secondsToDday$ = this.secondsToDdayTotal$.pipe(
      map((x) => Math.floor(x % SecondsInAMinute))
    );
    this.minutesToDday$ = this.secondsToDdayTotal$.pipe(
      map((x) => Math.floor(
        (x / SecondsInAMinute))
      )
    );
    this.hoursToDday$ = this.secondsToDdayTotal$.pipe(
      map((x) => Math.floor(
        (x / (SecondsInAMinute * minutesInAnHour)))
      )
    );
    this.daysToDday$ = this.secondsToDdayTotal$.pipe(
      map((x) => Math.floor(
        (x / (SecondsInAMinute * minutesInAnHour * hoursInADay)))
      )
    );
  }
}
