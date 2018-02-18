package com.springgithub.springgithub.data;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class TestData {

    @Id
    private ObjectId id;
    private String name;

    public TestData(String name, ObjectId objectId) {
        this.name = name;
        this.id = objectId;
    }


    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
