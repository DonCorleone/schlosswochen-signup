import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { RowWrapperComponent } from './formly-wrappers/row-wrapper.component';
import { FormlyModule } from '@ngx-formly/core';



@NgModule({
  declarations: [WizardStepComponent],
  imports: [
    CommonModule,
    FormlyModule.forRoot({
      wrappers: [
        { name: 'row', component: RowWrapperComponent },
      ],
    }),
  ],
  exports: [
    WizardStepComponent
  ]
})
export class SharedModule { }
