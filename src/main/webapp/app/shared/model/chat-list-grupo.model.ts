import { IMiembros } from 'app/shared/model/miembros.model';
import { IChatGrupo } from 'app/shared/model/chat-grupo.model';

export interface IChatListGrupo {
  id?: number;
  propietario?: IMiembros;
  destinatario?: IMiembros;
  chatGrupos?: IChatGrupo[];
}

export class ChatListGrupo implements IChatListGrupo {
  constructor(public id?: number, public propietario?: IMiembros, public destinatario?: IMiembros, public chatGrupos?: IChatGrupo[]) {}
}
