package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.ComentarioFeed;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the ComentarioFeed entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ComentarioFeedRepository extends JpaRepository<ComentarioFeed, Long>, JpaSpecificationExecutor<ComentarioFeed> {

}
