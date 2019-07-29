package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.ChatListGrupo;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the ChatListGrupo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ChatListGrupoRepository extends JpaRepository<ChatListGrupo, Long>, JpaSpecificationExecutor<ChatListGrupo> {

}
