package com.springgithub.springgithub.repositories;

import com.springgithub.springgithub.data.GithubData;
import com.springgithub.springgithub.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Map;

public interface GithubRepository extends MongoRepository<GithubData, Integer>{
    GithubData findByUsername(String username);
}
