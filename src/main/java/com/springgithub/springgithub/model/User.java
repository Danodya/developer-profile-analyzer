package com.springgithub.springgithub.model;

public class User {

    private String login, avatar_url, name, company, blog, location, email, bio, public_repos, public_gists
            , followers, following, created_at;

    public User(){}

    public String getLogin() {
        return login;
    }

    public String getAvatar_url() {
        return avatar_url;
    }

    public String getName() {
        return name;
    }

    public String getCompany() {
        return company;
    }

    public String getBlog() {
        return blog;
    }

    public String getLocation() {
        return location;
    }

    public String getEmail() {
        return email;
    }

    public String getBio() {
        return bio;
    }

    public String getPublic_repos() {
        return public_repos;
    }

    public String getPublic_gists() {
        return public_gists;
    }

    public String getFollowers() {
        return followers;
    }

    public String getFollowing() {
        return following;
    }

    public String getCreated_at() {
        return created_at;
    }
}
