package com.springgithub.springgithub.data;

import com.springgithub.springgithub.model.User;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;

@Document
public class GithubData {

    @Id()
    private ObjectId id;
    private String username;
    private User user;
//    private Map commits;

    public GithubData(ObjectId id) {
        this.id = id;
    }

    public ObjectId getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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

//    public Map getCommits() {
//        return commits;
//    }
//
//    public void setCommits(Map commits) {
//        this.commits = commits;
//    }

}
