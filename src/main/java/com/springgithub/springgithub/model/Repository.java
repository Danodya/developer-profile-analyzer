package com.springgithub.springgithub.model;

public class Repository {

    private String id;
    private String name;
    private String html_url;
    private String description;
    private boolean fork;
    private String url;
    private String created_at;
    private String pushed_at;
    private String size;
    private String forks_count;
    private String language;
    private String stargazers_count;
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

    String full_name;
}
