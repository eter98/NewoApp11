import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NewoApp11SharedModule } from 'app/shared';
import {
  PerfilEquipoEmpresaComponent,
  PerfilEquipoEmpresaDetailComponent,
  PerfilEquipoEmpresaUpdateComponent,
  PerfilEquipoEmpresaDeletePopupComponent,
  PerfilEquipoEmpresaDeleteDialogComponent,
  perfilEquipoEmpresaRoute,
  perfilEquipoEmpresaPopupRoute
} from './';

const ENTITY_STATES = [...perfilEquipoEmpresaRoute, ...perfilEquipoEmpresaPopupRoute];

@NgModule({
  imports: [NewoApp11SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    PerfilEquipoEmpresaComponent,
    PerfilEquipoEmpresaDetailComponent,
    PerfilEquipoEmpresaUpdateComponent,
    PerfilEquipoEmpresaDeleteDialogComponent,
    PerfilEquipoEmpresaDeletePopupComponent
  ],
  entryComponents: [
    PerfilEquipoEmpresaComponent,
    PerfilEquipoEmpresaUpdateComponent,
    PerfilEquipoEmpresaDeleteDialogComponent,
    PerfilEquipoEmpresaDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp11PerfilEquipoEmpresaModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}