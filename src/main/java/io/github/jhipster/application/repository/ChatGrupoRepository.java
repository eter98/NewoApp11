package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.ChatGrupo;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the ChatGrupo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ChatGrupoRepository extends JpaRepository<ChatGrupo, Long>, JpaSpecificationExecutor<ChatGrupo> {

}
