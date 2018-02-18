package com.springgithub.springgithub.repositories;

import com.springgithub.springgithub.data.TwitterData;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TwitterRepository extends MongoRepository<TwitterData, Integer>{
}
