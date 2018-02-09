package com.springgithub.springgithub.helpers;

import org.springframework.http.HttpStatus;

public class RESTUtil {

    private RESTUtil() {
        throw new IllegalAccessError("Utility class");
    }

    public static boolean isError(HttpStatus status) {
        HttpStatus.Series series = status.series();
        return HttpStatus.Series.CLIENT_ERROR.equals(series)
                || HttpStatus.Series.SERVER_ERROR.equals(series);
    }
}
