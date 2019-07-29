import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NewoApp11SharedModule } from 'app/shared';
import {
  ChatListGrupoComponent,
  ChatListGrupoDetailComponent,
  ChatListGrupoUpdateComponent,
  ChatListGrupoDeletePopupComponent,
  ChatListGrupoDeleteDialogComponent,
  chatListGrupoRoute,
  chatListGrupoPopupRoute
} from './';

const ENTITY_STATES = [...chatListGrupoRoute, ...chatListGrupoPopupRoute];

@NgModule({
  imports: [NewoApp11SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ChatListGrupoComponent,
    ChatListGrupoDetailComponent,
    ChatListGrupoUpdateComponent,
    ChatListGrupoDeleteDialogComponent,
    ChatListGrupoDeletePopupComponent
  ],
  entryComponents: [
    ChatListGrupoComponent,
    ChatListGrupoUpdateComponent,
    ChatListGrupoDeleteDialogComponent,
    ChatListGrupoDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp11ChatListGrupoModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
