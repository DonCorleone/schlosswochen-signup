import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-row',
  template: `
    <div class="form-group row mb-2">
      <label class="col-md-2 col-form-label text-light">{{ to.label }}</label>
      <div class="col-md-8">
        <ng-container #fieldComponent></ng-container>
      </div>
    </div>
  `,
})
export class RowWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef })
  fieldComponent: ViewContainerRef;
}
