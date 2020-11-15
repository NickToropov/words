package com.ntoropov.wordsservice.validation;

public class FieldError {
    private String field;
    private String errorMessage;
    private Object rejectedValue;

    FieldError(String field, String errorMessage, Object rejectedValue) {
        this.field = field;
        this.errorMessage = errorMessage;
        this.rejectedValue = rejectedValue;
    }

    public String getField() {
        return field;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public Object getRejectedValue() {
        return rejectedValue;
    }
}
