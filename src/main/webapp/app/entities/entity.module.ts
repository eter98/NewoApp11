import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'miembros',
        loadChildren: './miembros/miembros.module#NewoApp11MiembrosModule'
      },
      {
        path: 'entrada-miembros',
        loadChildren: './entrada-miembros/entrada-miembros.module#NewoApp11EntradaMiembrosModule'
      },
      {
        path: 'invitados',
        loadChildren: './invitados/invitados.module#NewoApp11InvitadosModule'
      },
      {
        path: 'entrada-invitados',
        loadChildren: './entrada-invitados/entrada-invitados.module#NewoApp11EntradaInvitadosModule'
      },
      {
        path: 'sedes',
        loadChildren: './sedes/sedes.module#NewoApp11SedesModule'
      },
      {
        path: 'espacio-libre',
        loadChildren: './espacio-libre/espacio-libre.module#NewoApp11EspacioLibreModule'
      },
      {
        path: 'tipo-espacio',
        loadChildren: './tipo-espacio/tipo-espacio.module#NewoApp11TipoEspacioModule'
      },
      {
        path: 'host-sede',
        loadChildren: './host-sede/host-sede.module#NewoApp11HostSedeModule'
      },
      {
        path: 'reservas',
        loadChildren: './reservas/reservas.module#NewoApp11ReservasModule'
      },
      {
        path: 'espacios-reserva',
        loadChildren: './espacios-reserva/espacios-reserva.module#NewoApp11EspaciosReservaModule'
      },
      {
        path: 'registro-compra',
        loadChildren: './registro-compra/registro-compra.module#NewoApp11RegistroCompraModule'
      },
      {
        path: 'facturacion',
        loadChildren: './facturacion/facturacion.module#NewoApp11FacturacionModule'
      },
      {
        path: 'equipo-empresas',
        loadChildren: './equipo-empresas/equipo-empresas.module#NewoApp11EquipoEmpresasModule'
      },
      {
        path: 'miembros-equipo-empresas',
        loadChildren: './miembros-equipo-empresas/miembros-equipo-empresas.module#NewoApp11MiembrosEquipoEmpresasModule'
      },
      {
        path: 'cuenta-asociada',
        loadChildren: './cuenta-asociada/cuenta-asociada.module#NewoApp11CuentaAsociadaModule'
      },
      {
        path: 'beneficio',
        loadChildren: './beneficio/beneficio.module#NewoApp11BeneficioModule'
      },
      {
        path: 'perfil-equipo-empresa',
        loadChildren: './perfil-equipo-empresa/perfil-equipo-empresa.module#NewoApp11PerfilEquipoEmpresaModule'
      },
      {
        path: 'empresa',
        loadChildren: './empresa/empresa.module#NewoApp11EmpresaModule'
      },
      {
        path: 'landing',
        loadChildren: './landing/landing.module#NewoApp11LandingModule'
      },
      {
        path: 'productos-servicios',
        loadChildren: './productos-servicios/productos-servicios.module#NewoApp11ProductosServiciosModule'
      },
      {
        path: 'pais',
        loadChildren: './pais/pais.module#NewoApp11PaisModule'
      },
      {
        path: 'ciudad',
        loadChildren: './ciudad/ciudad.module#NewoApp11CiudadModule'
      },
      {
        path: 'blog',
        loadChildren: './blog/blog.module#NewoApp11BlogModule'
      },
      {
        path: 'comentario-blog',
        loadChildren: './comentario-blog/comentario-blog.module#NewoApp11ComentarioBlogModule'
      },
      {
        path: 'feed',
        loadChildren: './feed/feed.module#NewoApp11FeedModule'
      },
      {
        path: 'comentario-feed',
        loadChildren: './comentario-feed/comentario-feed.module#NewoApp11ComentarioFeedModule'
      },
      {
        path: 'chat',
        loadChildren: './chat/chat.module#NewoApp11ChatModule'
      },
      {
        path: 'chat-grupo',
        loadChildren: './chat-grupo/chat-grupo.module#NewoApp11ChatGrupoModule'
      },
      {
        path: 'chats-listado',
        loadChildren: './chats-listado/chats-listado.module#NewoApp11ChatsListadoModule'
      },
      {
        path: 'chat-list-grupo',
        loadChildren: './chat-list-grupo/chat-list-grupo.module#NewoApp11ChatListGrupoModule'
      },
      {
        path: 'evento',
        loadChildren: './evento/evento.module#NewoApp11EventoModule'
      },
      {
        path: 'categoria-contenidos',
        loadChildren: './categoria-contenidos/categoria-contenidos.module#NewoApp11CategoriaContenidosModule'
      },
      {
        path: 'grupos',
        loadChildren: './grupos/grupos.module#NewoApp11GruposModule'
      },
      {
        path: 'miembros-grupo',
        loadChildren: './miembros-grupo/miembros-grupo.module#NewoApp11MiembrosGrupoModule'
      },
      {
        path: 'recursos-fisicos',
        loadChildren: './recursos-fisicos/recursos-fisicos.module#NewoApp11RecursosFisicosModule'
      },
      {
        path: 'uso-recurso-fisico',
        loadChildren: './uso-recurso-fisico/uso-recurso-fisico.module#NewoApp11UsoRecursoFisicoModule'
      },
      {
        path: 'tipo-recurso',
        loadChildren: './tipo-recurso/tipo-recurso.module#NewoApp11TipoRecursoModule'
      },
      {
        path: 'consumo-market',
        loadChildren: './consumo-market/consumo-market.module#NewoApp11ConsumoMarketModule'
      },
      {
        path: 'prepago-consumo',
        loadChildren: './prepago-consumo/prepago-consumo.module#NewoApp11PrepagoConsumoModule'
      },
      {
        path: 'margen-newo-eventos',
        loadChildren: './margen-newo-eventos/margen-newo-eventos.module#NewoApp11MargenNewoEventosModule'
      },
      {
        path: 'margen-newo-grupos',
        loadChildren: './margen-newo-grupos/margen-newo-grupos.module#NewoApp11MargenNewoGruposModule'
      },
      {
        path: 'margen-newo-blog',
        loadChildren: './margen-newo-blog/margen-newo-blog.module#NewoApp11MargenNewoBlogModule'
      },
      {
        path: 'margen-newo-productos',
        loadChildren: './margen-newo-productos/margen-newo-productos.module#NewoApp11MargenNewoProductosModule'
      },
      {
        path: 'tipo-prepago-consumo',
        loadChildren: './tipo-prepago-consumo/tipo-prepago-consumo.module#NewoApp11TipoPrepagoConsumoModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp11EntityModule {}
