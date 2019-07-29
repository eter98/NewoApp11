import { IMiembros } from 'app/shared/model/miembros.model';
import { IChat } from 'app/shared/model/chat.model';

export interface IChatsListado {
  id?: number;
  propietario?: IMiembros;
  destinatario?: IMiembros;
  chats?: IChat[];
}

export class ChatsListado implements IChatsListado {
  constructor(public id?: number, public propietario?: IMiembros, public destinatario?: IMiembros, public chats?: IChat[]) {}
}
