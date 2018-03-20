package com.springgithub.springgithub.data;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Map;

@Document
public class StackData {

    @Id
    private Integer id;
    private Object user;
    private Map badges;
    private Object questionsCount;
    private Object answersCount;
    private Object comments;
    private Object reputation;
    private ArrayList<Object> tags;
    private Object mentions;
    private Object favorites;
    private Object timeline;
    private Object topTags;
    private Object reputationHistory;

    public StackData() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Object getUser() {
        return user;
    }

    public void setUser(Object user) {
        this.user = user;
    }

    public Map getBadges() {
        return badges;
    }

    public void setBadges(Map badges) {
        this.badges = badges;
    }

    public Object getQuestionsCount() {
        return questionsCount;
    }

    public void setQuestionsCount(Object questionsCount) {
        this.questionsCount = questionsCount;
    }

    public Object getAnswersCount() {
        return answersCount;
    }

    public void setAnswersCount(Object answersCount) {
        this.answersCount = answersCount;
    }

    public Object getComments() {
        return comments;
    }

    public void setComments(Object comments) {
        this.comments = comments;
    }

    public Object getReputation() {
        return reputation;
    }

    public void setReputation(Object reputation) {
        this.reputation = reputation;
    }

    public ArrayList<Object> getTags() {
        return tags;
    }

    public void setTags(ArrayList<Object> tags) {
        this.tags = tags;
    }

    public Object getMentions() {
        return mentions;
    }

    public void setMentions(Object mentions) {
        this.mentions = mentions;
    }

    public Object getFavorites() {
        return favorites;
    }

    public void setFavorites(Object favorites) {
        this.favorites = favorites;
    }

    public Object getTimeline() {
        return timeline;
    }

    public void setTimeline(Object timeline) {
        this.timeline = timeline;
    }

    public Object getTopTags() {
        return topTags;
    }

    public void setTopTags(Object topTags) {
        this.topTags = topTags;
    }

    public Object getReputationHistory() {
        return reputationHistory;
    }

    public void setReputationHistory(Object reputationHistory) {
        this.reputationHistory = reputationHistory;
    }
}
