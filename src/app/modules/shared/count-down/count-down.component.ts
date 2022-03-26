import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { interval, map, Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountDownComponent implements OnInit, OnDestroy {
  @Input() dDay = new Date('Jan 01 2022 00:00:00');
  @Input() title = 'HELLO';

  secondsToDday$: Observable<number>;
  minutesToDday$: Observable<number>;
  hoursToDday$: Observable<number>;
  daysToDday$: Observable<number>;
  countDownTitle: string;
  private secondsToDdayTotal$: Observable<number>;
  private _ngDestroy$ = new Subject<void>();

  constructor(
    public translate: TranslateService,
    private routerService: Router
  ) {}

  ngOnInit() {
    const timeDifference = this.dDay.getTime() - new Date().getTime();
    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const SecondsInAMinute = 60;

    const time = Math.floor(timeDifference / milliSecondsInASecond);
    this.secondsToDdayTotal$ = interval(1000).pipe(
      take(time),
      map((x) => {
        return time - x;
      }),
      tap((timeLeft) => {
        console.log(timeLeft);
        if (timeLeft === 1) {
          this.routerService.navigate(['']);
        }
      })
    );

    this.secondsToDdayTotal$.pipe(takeUntil(this._ngDestroy$)).subscribe();

    this.secondsToDday$ = this.secondsToDdayTotal$.pipe(
      map((x) => Math.floor(x % SecondsInAMinute))
    );
    this.minutesToDday$ = this.secondsToDdayTotal$.pipe(
      map((x) => Math.floor((x / SecondsInAMinute) % SecondsInAMinute))
    );
    this.hoursToDday$ = this.secondsToDdayTotal$.pipe(
      map((x) =>
        Math.floor((x / (SecondsInAMinute * minutesInAnHour)) % hoursInADay)
      )
    );
    this.daysToDday$ = this.secondsToDdayTotal$.pipe(
      map((x) =>
        Math.floor(x / (SecondsInAMinute * minutesInAnHour * hoursInADay))
      )
    );

    this.translate
      .stream(this.title)
      .pipe(takeUntil(this._ngDestroy$))
      .subscribe((res: string) => {
        this.countDownTitle = res;
      });
  }

  ngOnDestroy(): void {
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }
}
