package com.springgithub.springgithub.repositories;

import com.springgithub.springgithub.data.GithubData;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GithubRepository extends MongoRepository<GithubData, Integer>{
}
