package com.ntoropov.wordsservice.exceptions;

import java.util.UUID;

public class WordNotFoundException extends RuntimeException {
    public WordNotFoundException(UUID wordId) {
        super("Word with id " + wordId.toString() + " not found");
    }
}
