package com.springgithub.springgithub.helpers.github.validators;

import com.springgithub.springgithub.helpers.RESTUtil;
import com.springgithub.springgithub.model.User;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.web.client.ResponseErrorHandler;
import sun.misc.IOUtils;
import sun.nio.ch.IOUtil;

import java.io.IOException;
import java.util.Map;
import java.util.Objects;

public class GithubUserValidator implements ResponseErrorHandler{

    private boolean found;  // 404 Error Handler
    private boolean badRequest; // 400 Bad Request
    private boolean unexpected;

    public GithubUserValidator() {
        this.found = true;
        this.badRequest = false;
        this.unexpected = false;
    }

    @Override
    public boolean hasError(ClientHttpResponse response) throws IOException {
        return RESTUtil.isError(response.getStatusCode());
    }

    @Override
    public void handleError(ClientHttpResponse response) throws IOException {
        String responseBody = "";
        if(response != null && response.getBody() != null) {
            responseBody = response.getBody().toString();
        }
        switch (response.getRawStatusCode()) {
            case 200:
                this.found = true;
            case 404:
                this.found = false;
            case 400:
                this.badRequest = true;
            default:
                this.unexpected = true;
        }
    }

    public boolean isFound() {
        return found;
    }

    public void setFound(boolean found) {
        this.found = found;
    }
}
