package io.github.jhipster.application.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import org.springframework.data.elasticsearch.annotations.FieldType;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A ChatListGrupo.
 */
@Entity
@Table(name = "chat_list_grupo")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@org.springframework.data.elasticsearch.annotations.Document(indexName = "chatlistgrupo")
public class ChatListGrupo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @org.springframework.data.elasticsearch.annotations.Field(type = FieldType.Keyword)
    private Long id;

    @ManyToOne
    @JsonIgnoreProperties("chatListGrupos")
    private Miembros propietario;

    @ManyToOne
    @JsonIgnoreProperties("chatListGrupos")
    private Miembros destinatario;

    @OneToMany(mappedBy = "chatListGrupo")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<ChatGrupo> chatGrupos = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Miembros getPropietario() {
        return propietario;
    }

    public ChatListGrupo propietario(Miembros miembros) {
        this.propietario = miembros;
        return this;
    }

    public void setPropietario(Miembros miembros) {
        this.propietario = miembros;
    }

    public Miembros getDestinatario() {
        return destinatario;
    }

    public ChatListGrupo destinatario(Miembros miembros) {
        this.destinatario = miembros;
        return this;
    }

    public void setDestinatario(Miembros miembros) {
        this.destinatario = miembros;
    }

    public Set<ChatGrupo> getChatGrupos() {
        return chatGrupos;
    }

    public ChatListGrupo chatGrupos(Set<ChatGrupo> chatGrupos) {
        this.chatGrupos = chatGrupos;
        return this;
    }

    public ChatListGrupo addChatGrupo(ChatGrupo chatGrupo) {
        this.chatGrupos.add(chatGrupo);
        chatGrupo.setChatListGrupo(this);
        return this;
    }

    public ChatListGrupo removeChatGrupo(ChatGrupo chatGrupo) {
        this.chatGrupos.remove(chatGrupo);
        chatGrupo.setChatListGrupo(null);
        return this;
    }

    public void setChatGrupos(Set<ChatGrupo> chatGrupos) {
        this.chatGrupos = chatGrupos;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ChatListGrupo)) {
            return false;
        }
        return id != null && id.equals(((ChatListGrupo) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "ChatListGrupo{" +
            "id=" + getId() +
            "}";
    }
}
