package com.springgithub.springgithub.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Repo {

    @JsonProperty("id")
    private String id;
    @JsonProperty("name")
    private String name;
    @JsonProperty("html_url")
    private String html_url;
    @JsonProperty("description")
    private String description;
    @JsonProperty("fork")
    private boolean fork;
    @JsonProperty("url")
    private String url;
    @JsonProperty("created_at")
    private String created_at;
    @JsonProperty("pushed_at")
    private String pushed_at;
    @JsonProperty("size")
    private String size;
    @JsonProperty("forks_count")
    private String forks_count;
    @JsonProperty("language")
    private String language;
    @JsonProperty("stargazers_count")
    private String stargazers_count;
    @JsonProperty("watchers_count")
    private String watchers_count;



    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getFull_name() {
        return full_name;
    }

    public String getHtml_url() {
        return html_url;
    }

    public String getDescription() {
        return description;
    }

    public boolean isFork() {
        return fork;
    }

    public String getUrl() {
        return url;
    }

    public String getCreated_at() {
        return created_at;
    }

    public String getPushed_at() {
        return pushed_at;
    }

    public String getSize() {
        return size;
    }

    public String getForks_count() {
        return forks_count;
    }

    public String getLanguage() {
        return language;
    }

    public String getStargazers_count() {
        return stargazers_count;
    }

    public String getWatchers_count() {
        return watchers_count;
    }

    String full_name;
}
