package com.springgithub.springgithub.services.github;

import com.springgithub.springgithub.data.GithubData;
import com.springgithub.springgithub.model.User;
import com.springgithub.springgithub.repositories.GithubRepository;
import org.bson.types.ObjectId;
import org.eclipse.egit.github.core.client.GitHubClient;
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

        if(customGithubService.getUser(username).getLogin() != null) {
            githubData.setUsername(customGithubService.getUser(username).getLogin().toLowerCase());
            githubData.setUser(customGithubService.getUser(username));
//            githubData.setCommits(this.customGithubService.getCommitsAdaptorRe(username));

            githubRepository.save(githubData);
        }

    }

    public GithubData getUserDB(String username) {

        GithubData githubData = githubRepository.findByUsername(username);
        if(githubData == null) {
            githubData = new GithubData(ObjectId.get());
            User user = new User();
            user.setValidated(false);
            user.setLogin(null);
            user.setAvatar_url(null);
            user.setBio(null);
            user.setBlog(null);
            user.setCompany(null);
            user.setCreated_at(null);
            user.setEmail(null);
            user.setFollowers(null);
            user.setFollowing(null);
            githubData.setUser(user);
        }

        return githubData;
    }

}
