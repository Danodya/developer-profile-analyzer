package com.springgithub.springgithub.repositories;

import com.springgithub.springgithub.data.StackData;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StackRepository extends MongoRepository<StackData, Integer>{
}
