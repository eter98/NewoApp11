import { Moment } from 'moment';
import { IMiembros } from 'app/shared/model/miembros.model';
import { IChatListGrupo } from 'app/shared/model/chat-list-grupo.model';
import { IGrupos } from 'app/shared/model/grupos.model';

export interface IChatGrupo {
  id?: number;
  mensaje?: string;
  fecha?: Moment;
  leido?: boolean;
  de?: IMiembros;
  para?: IMiembros;
  chatListGrupo?: IChatListGrupo;
  grupo?: IGrupos;
}

export class ChatGrupo implements IChatGrupo {
  constructor(
    public id?: number,
    public mensaje?: string,
    public fecha?: Moment,
    public leido?: boolean,
    public de?: IMiembros,
    public para?: IMiembros,
    public chatListGrupo?: IChatListGrupo,
    public grupo?: IGrupos
  ) {
    this.leido = this.leido || false;
  }
}
