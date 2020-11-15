package com.ntoropov.wordsservice.data.requests;

import com.ntoropov.wordsservice.data.entity.WordEntity;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;

import java.util.UUID;

@SuppressWarnings("unused")
public class WordRequest {
    private UUID id;

    @NotBlank
    @Length(min = 1, max = 100)
    private String name;

    public WordRequest() {
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public WordEntity toEntity() {
        return new WordEntity(id, name);
    }
}
