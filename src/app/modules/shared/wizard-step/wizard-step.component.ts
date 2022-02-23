import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.scss'],
})
export class WizardStepComponent implements OnInit{

  @Input() title: string;
  @Input() titlePostfix = '';
  @Input() saveStep: boolean = false;
  @Input() nextEnabled: boolean = true;
  @Input() previousEnabled: boolean = true;
  @Output() previousStepClicked = new EventEmitter();
  @Output() saveStepClicked = new EventEmitter();
  @Output() nextStepClicked = new EventEmitter();

  constructor(private viewportScroller: ViewportScroller) {
  }
  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0,0]);
  }

  goToPreviousStep() {
    this.previousStepClicked.emit();
  }

  goToNextStep() {
    this.nextStepClicked.emit();
  }

  goToSaveStep() {
    this.saveStepClicked.emit();
  }
}
