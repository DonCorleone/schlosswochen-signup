import { Injectable } from '@angular/core';
import {BehaviorSubject, delay, distinctUntilChanged, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class LoadingIndicatorService {
  private loading = 0;

  // Subject to emit the state of the loading indicator. By default there is no on-going task
  private readonly _loading$: Subject<boolean> = new BehaviorSubject<boolean>(false);

  // Observable to expose the state of the loading indicator. The value is emitted only when it changes.
  readonly loading$: Observable<boolean> = this._loading$.pipe(
    distinctUntilChanged(),
    delay(0)
  );

  /**
   * Start a loading task (e.g. when a new server connection is started)
   */
  start() {
    this.loading++;
    this.emit();
  }

  /**
   * Stop a loading task (e.g. when a server connection has been finished)
   */
  stop() {
    if (this.loading > 0) {
      this.loading--;
      this.emit();
    }
  }

  /**
   * Emit the loading state
   */
  private emit() {
    this._loading$.next(this.isLoading());
  }

  /**
   * Return the loading state
   */
  private isLoading(): boolean {
    return this.loading > 0;
  }
}
