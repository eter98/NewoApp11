import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NewoApp11SharedModule } from 'app/shared';
import {
  EmpresaComponent,
  EmpresaDetailComponent,
  EmpresaUpdateComponent,
  EmpresaDeletePopupComponent,
  EmpresaDeleteDialogComponent,
  empresaRoute,
  empresaPopupRoute
} from './';

const ENTITY_STATES = [...empresaRoute, ...empresaPopupRoute];

@NgModule({
  imports: [NewoApp11SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    EmpresaComponent,
    EmpresaDetailComponent,
    EmpresaUpdateComponent,
    EmpresaDeleteDialogComponent,
    EmpresaDeletePopupComponent
  ],
  entryComponents: [EmpresaComponent, EmpresaUpdateComponent, EmpresaDeleteDialogComponent, EmpresaDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp11EmpresaModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
