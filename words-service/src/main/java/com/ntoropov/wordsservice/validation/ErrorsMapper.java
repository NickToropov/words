package com.ntoropov.wordsservice.validation;

import org.springframework.validation.Errors;

import java.util.ArrayList;
import java.util.List;

public class ErrorsMapper {
    public static List<FieldError> fromNativeErrors(Errors errors) {
        final List<org.springframework.validation.FieldError> nativeFieldErrors = errors.getFieldErrors();
        final List<FieldError> ret = new ArrayList<>(nativeFieldErrors.size());
        for (org.springframework.validation.FieldError error: nativeFieldErrors) {
            ret.add(new FieldError(error.getField(),
                    error.getDefaultMessage(), error.getRejectedValue()));
        }

        return ret;
    }
}

