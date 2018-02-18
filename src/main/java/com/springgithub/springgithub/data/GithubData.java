package com.springgithub.springgithub.data;


import com.springgithub.springgithub.model.Repo;
import com.springgithub.springgithub.model.User;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Map;

@Document
public class GithubData {

    @Id()
    private ObjectId id;
    private User user;
//    private Repo[] repos;
    private Map commits;
//    private ArrayList<Object> starsPerLang;
//    private ArrayList<Object> forks;
//    private Integer watchers;
//    private Integer issues;
//    private Integer organizations;

    public GithubData(ObjectId id) {
        this.id = id;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

//    public Repo[] getRepos() {
//        return repos;
//    }
//
//    public void setRepos(Repo[] repos) {
//        this.repos = repos;
//    }

    public Map getCommits() {
        return commits;
    }

    public void setCommits(Map commits) {
        this.commits = commits;
    }

//    public ArrayList<Object> getStarsPerLang() {
//        return starsPerLang;
//    }
//
//    public void setStarsPerLang(ArrayList<Object> starsPerLang) {
//        this.starsPerLang = starsPerLang;
//    }
//
//    public ArrayList<Object> getForks() {
//        return forks;
//    }
//
//    public void setForks(ArrayList<Object> forks) {
//        this.forks = forks;
//    }
//
//    public Integer getWatchers() {
//        return watchers;
//    }
//
//    public void setWatchers(Integer watchers) {
//        this.watchers = watchers;
//    }
//
//    public Integer getIssues() {
//        return issues;
//    }
//
//    public void setIssues(Integer issues) {
//        this.issues = issues;
//    }
//
//    public Integer getOrganizations() {
//        return organizations;
//    }
//
//    public void setOrganizations(Integer organizations) {
//        this.organizations = organizations;
//    }
}
