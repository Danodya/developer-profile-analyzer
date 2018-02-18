package com.springgithub.springgithub.services.github;

import com.springgithub.springgithub.data.GithubData;
import com.springgithub.springgithub.repositories.GithubRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.DbRefResolver;
import org.springframework.data.mongodb.core.convert.DefaultDbRefResolver;
import org.springframework.data.mongodb.core.convert.MappingMongoConverter;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Service;

@EnableMongoRepositories(basePackageClasses = GithubRepository.class)
@Service
public class GithubDBUtility {

    @Autowired
    GithubRepository githubRepository;

    @Autowired
    private CustomGithubService customGithubService;

    public GithubDBUtility() { }

    public void insertData(String username) {

        GithubData githubData = new GithubData(ObjectId.get());

        // Insert Data
        githubData.setUser(customGithubService.getUser(username));
        githubData.setCommits(this.customGithubService.getCommitsAdaptorRe(username));
//        githubData.setForks(this.customGithubService.getForks(username));
//        githubData.setIssues(this.customGithubService.getIssues(username));
//        githubData.setRepos(this.customGithubService.getRepo(username));
//        githubData.setOrganizations(this.customGithubService.getOrganizations(username));
//        githubData.setStarsPerLang(this.customGithubService.getStarsPerLang(username));
//        githubData.setWatchers(this.customGithubService.getWatchers(username));

        githubRepository.save(githubData);
    }


}
