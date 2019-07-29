import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NewoApp11SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [NewoApp11SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [NewoApp11SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp11SharedModule {
  static forRoot() {
    return {
      ngModule: NewoApp11SharedModule
    };
  }
}
