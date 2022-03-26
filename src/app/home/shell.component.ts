import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'pm-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ShellComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
