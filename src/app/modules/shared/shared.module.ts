import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { RowWrapperComponent } from './formly-wrappers/row-wrapper.component';
import { FormlyModule } from '@ngx-formly/core';
import { CountDownComponent } from './count-down/count-down.component';



@NgModule({
  declarations: [WizardStepComponent, CountDownComponent],
  imports: [
    CommonModule,
    FormlyModule.forRoot({
      wrappers: [
        { name: 'row', component: RowWrapperComponent },
      ],
    }),
  ],
    exports: [
        WizardStepComponent,
        CountDownComponent
    ]
})
export class SharedModule { }
