import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { RowWrapperComponent } from './formly-wrappers/row-wrapper.component';
import { FormlyModule } from '@ngx-formly/core';
import { CountDownComponent } from './count-down/count-down.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpLoaderFactory } from '../../app.module';
import { HeaderComponent } from './header/header.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [WizardStepComponent, HeaderComponent, CountDownComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      defaultLanguage: 'de',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormlyModule.forRoot({
      wrappers: [{ name: 'row', component: RowWrapperComponent }],
    }),
  ],
  exports: [WizardStepComponent, CountDownComponent, HeaderComponent],
})
export class SharedModule {}
