import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'pm-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ShellComponent implements OnInit {
  constructor(@Inject(DOCUMENT) readonly document: Document) {}

  /** The Window object from Document defaultView */
  get window(): Window | null {
    return this.document.defaultView;
  }

  routeTo(url: string) {
      this.redirect(url);
  }

  ngOnInit(): void {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      const mySVG = document.getElementById('svg-icon');
      mySVG?.setAttribute('viewBox', '830 0 3421.971 595.281');
    }
  }

  /** Redirects to the specified external link with the mediation of the router */
  private redirect(url: string, target = '_self'): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        resolve(!!this.window?.open('https://' + url, target));
      } catch (e) {
        reject(e);
      }
    });
  }
}
