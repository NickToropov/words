package com.ntoropov.wordsservice.data.entity;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "words")
public class WordEntity {

    @Id
    @GeneratedValue
    private UUID id;

    @NotBlank(message = "Name can't be empty")
    @Length(min = 1, max = 300)
    private String name;

    @Column(name = "create_at", nullable = false)
    private Date createAt;

    public WordEntity() {
    }

    public WordEntity(UUID id, String name) {
        this.id = id;
        this.name = name;
        this.createAt = new Date();
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public void setCreateAt(Date createAt) {
        this.createAt = createAt;
    }
}
