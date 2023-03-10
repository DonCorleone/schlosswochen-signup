import { Component, Input } from '@angular/core';
import { WeekCapacityCalculated } from "../../../models/week-capacity-calculated";

@Component({
  selector: 'app-capacity',
  templateUrl: './capacity.component.html',
  styleUrls: ['./capacity.component.scss'],
})
export class CapacityComponent {
  @Input() weekVM: WeekCapacityCalculated;
}
