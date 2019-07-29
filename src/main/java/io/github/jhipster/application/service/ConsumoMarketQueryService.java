package io.github.jhipster.application.service;

import java.util.List;

import javax.persistence.criteria.JoinType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.github.jhipster.service.QueryService;

import io.github.jhipster.application.domain.ConsumoMarket;
import io.github.jhipster.application.domain.*; // for static metamodels
import io.github.jhipster.application.repository.ConsumoMarketRepository;
import io.github.jhipster.application.repository.search.ConsumoMarketSearchRepository;
import io.github.jhipster.application.service.dto.ConsumoMarketCriteria;

/**
 * Service for executing complex queries for {@link ConsumoMarket} entities in the database.
 * The main input is a {@link ConsumoMarketCriteria} which gets converted to {@link Specification},
 * in a way that all the filters must apply.
 * It returns a {@link List} of {@link ConsumoMarket} or a {@link Page} of {@link ConsumoMarket} which fulfills the criteria.
 */
@Service
@Transactional(readOnly = true)
public class ConsumoMarketQueryService extends QueryService<ConsumoMarket> {

    private final Logger log = LoggerFactory.getLogger(ConsumoMarketQueryService.class);

    private final ConsumoMarketRepository consumoMarketRepository;

    private final ConsumoMarketSearchRepository consumoMarketSearchRepository;

    public ConsumoMarketQueryService(ConsumoMarketRepository consumoMarketRepository, ConsumoMarketSearchRepository consumoMarketSearchRepository) {
        this.consumoMarketRepository = consumoMarketRepository;
        this.consumoMarketSearchRepository = consumoMarketSearchRepository;
    }

    /**
     * Return a {@link List} of {@link ConsumoMarket} which matches the criteria from the database.
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public List<ConsumoMarket> findByCriteria(ConsumoMarketCriteria criteria) {
        log.debug("find by criteria : {}", criteria);
        final Specification<ConsumoMarket> specification = createSpecification(criteria);
        return consumoMarketRepository.findAll(specification);
    }

    /**
     * Return a {@link Page} of {@link ConsumoMarket} which matches the criteria from the database.
     * @param criteria The object which holds all the filters, which the entities should match.
     * @param page The page, which should be returned.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public Page<ConsumoMarket> findByCriteria(ConsumoMarketCriteria criteria, Pageable page) {
        log.debug("find by criteria : {}, page: {}", criteria, page);
        final Specification<ConsumoMarket> specification = createSpecification(criteria);
        return consumoMarketRepository.findAll(specification, page);
    }

    /**
     * Return the number of matching entities in the database.
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the number of matching entities.
     */
    @Transactional(readOnly = true)
    public long countByCriteria(ConsumoMarketCriteria criteria) {
        log.debug("count by criteria : {}", criteria);
        final Specification<ConsumoMarket> specification = createSpecification(criteria);
        return consumoMarketRepository.count(specification);
    }

    /**
     * Function to convert ConsumerCriteria to a {@link Specification}
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the matching {@link Specification} of the entity.
     */    
    private Specification<ConsumoMarket> createSpecification(ConsumoMarketCriteria criteria) {
        Specification<ConsumoMarket> specification = Specification.where(null);
        if (criteria != null) {
            if (criteria.getId() != null) {
                specification = specification.and(buildSpecification(criteria.getId(), ConsumoMarket_.id));
            }
            if (criteria.getTotalConsumido() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getTotalConsumido(), ConsumoMarket_.totalConsumido));
            }
            if (criteria.getRegistroFechaInicial() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getRegistroFechaInicial(), ConsumoMarket_.registroFechaInicial));
            }
            if (criteria.getRegistroFechaFinal() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getRegistroFechaFinal(), ConsumoMarket_.registroFechaFinal));
            }
            if (criteria.getImpuesto() != null) {
                specification = specification.and(buildSpecification(criteria.getImpuesto(), ConsumoMarket_.impuesto));
            }
            if (criteria.getMiembroId() != null) {
                specification = specification.and(buildSpecification(criteria.getMiembroId(),
                    root -> root.join(ConsumoMarket_.miembro, JoinType.LEFT).get(Miembros_.id)));
            }
        }
        return specification;
    }
}