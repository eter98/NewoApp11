import { Moment } from 'moment';
import { IChatsListado } from 'app/shared/model/chats-listado.model';
import { IMiembros } from 'app/shared/model/miembros.model';

export interface IChat {
  id?: number;
  mensaje?: string;
  fecha?: Moment;
  leido?: boolean;
  chatsListado?: IChatsListado;
  de?: IMiembros;
  para?: IMiembros;
}

export class Chat implements IChat {
  constructor(
    public id?: number,
    public mensaje?: string,
    public fecha?: Moment,
    public leido?: boolean,
    public chatsListado?: IChatsListado,
    public de?: IMiembros,
    public para?: IMiembros
  ) {
    this.leido = this.leido || false;
  }
}
