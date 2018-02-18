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


}
