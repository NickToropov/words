package com.ntoropov.wordsservice.messages;

import com.ntoropov.wordsservice.data.entity.WordEntity;

public class WordsUpdateMessage {
    private final WordEntity updatedEntity;
    private final WordEntity addedEntity;
    private final String removedEntityId;

    private WordsUpdateMessage(WordEntity addedEntity, WordEntity updatedEntity, String removedEntityId) {
        this.updatedEntity = updatedEntity;
        this.addedEntity = addedEntity;
        this.removedEntityId = removedEntityId;
    }

    public static WordsUpdateMessage added(final WordEntity entity) {
        return new WordsUpdateMessage(entity, null, null);
    }

    public static WordsUpdateMessage updated(final WordEntity entity) {
        return new WordsUpdateMessage(null, entity, null);
    }

    public static WordsUpdateMessage removed(final String entityId) {
        return new WordsUpdateMessage(null, null, entityId);
    }

    public WordEntity getUpdatedEntity() {
        return updatedEntity;
    }

    public WordEntity getAddedEntity() {
        return addedEntity;
    }

    public String getRemovedEntityId() {
        return removedEntityId;
    }
}
