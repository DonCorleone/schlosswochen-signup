import { Component, Input } from '@angular/core';
import { WeekVM } from '../../../models/Week';

@Component({
  selector: 'app-capacity',
  templateUrl: './capacity.component.html',
  styleUrls: ['./capacity.component.scss'],
})
export class CapacityComponent {
  @Input() weekVM: WeekVM;
}
