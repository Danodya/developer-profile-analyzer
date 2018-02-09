package com.springgithub.springgithub.model;

public class User {

    private String login, avatar_url, name, company, blog, location, email, bio, public_repos, public_gists
            , followers, following, created_at ,url, html_url;
    private boolean validated;

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

    public String getHtml_url() {
        return html_url;
    }

    public String getUrl() {
        return url;
    }

    public boolean isValidated() {
        return validated;
    }

    public void setValidated(boolean validated) {
        this.validated = validated;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public void setAvatar_url(String avatar_url) {
        this.avatar_url = avatar_url;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public void setBlog(String blog) {
        this.blog = blog;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public void setPublic_repos(String public_repos) {
        this.public_repos = public_repos;
    }

    public void setPublic_gists(String public_gists) {
        this.public_gists = public_gists;
    }

    public void setFollowers(String followers) {
        this.followers = followers;
    }

    public void setFollowing(String following) {
        this.following = following;
    }

    public void setCreated_at(String created_at) {
        this.created_at = created_at;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setHtml_url(String html_url) {
        this.html_url = html_url;
    }
}
