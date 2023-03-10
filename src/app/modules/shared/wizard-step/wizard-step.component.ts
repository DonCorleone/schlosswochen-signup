import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { LoadingIndicatorService } from '../../../service/loading-indicator.service';

@Component({
  selector: 'app-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.scss'],
})
export class WizardStepComponent implements OnInit {
  @Input() saveStep: boolean = false;
  @Input() exitStep: boolean = false;
  @Input() nextEnabled: boolean = true;
  @Input() previousEnabled: boolean = true;
  @Output() previousStepClicked = new EventEmitter();
  @Output() saveStepClicked = new EventEmitter();
  @Output() nextStepClicked = new EventEmitter();

  constructor(
    private viewportScroller: ViewportScroller,
    private readonly loadingIndicatorService: LoadingIndicatorService
  ) {}

  get loading$() {
    return this.loadingIndicatorService.loading$;
  }

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.loadingIndicatorService.stop();
  }

  goToPreviousStep(): void {
    this.loadingIndicatorService.start();
    this.previousStepClicked.emit();
  }

  goToNextStep(): void {
    this.loadingIndicatorService.start();
    this.nextStepClicked.emit();
  }

  goToSaveStep(): void {
    this.saveStepClicked.emit();
  }

  goToExitStep(): void {
    document.location.href = 'https://www.schlosswochen.ch';
  }
}
