package com.springgithub.springgithub.repositories;

import com.springgithub.springgithub.data.TestData;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TestRepository extends MongoRepository<TestData, ObjectId>{ }
