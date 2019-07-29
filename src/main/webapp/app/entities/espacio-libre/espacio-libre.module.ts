import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NewoApp11SharedModule } from 'app/shared';
import {
  EspacioLibreComponent,
  EspacioLibreDetailComponent,
  EspacioLibreUpdateComponent,
  EspacioLibreDeletePopupComponent,
  EspacioLibreDeleteDialogComponent,
  espacioLibreRoute,
  espacioLibrePopupRoute
} from './';

const ENTITY_STATES = [...espacioLibreRoute, ...espacioLibrePopupRoute];

@NgModule({
  imports: [NewoApp11SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    EspacioLibreComponent,
    EspacioLibreDetailComponent,
    EspacioLibreUpdateComponent,
    EspacioLibreDeleteDialogComponent,
    EspacioLibreDeletePopupComponent
  ],
  entryComponents: [
    EspacioLibreComponent,
    EspacioLibreUpdateComponent,
    EspacioLibreDeleteDialogComponent,
    EspacioLibreDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp11EspacioLibreModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}