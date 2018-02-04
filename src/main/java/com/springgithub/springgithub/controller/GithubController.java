package com.springgithub.springgithub.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.springgithub.springgithub.config.Configuration;
import com.springgithub.springgithub.model.User;
import org.eclipse.egit.github.core.Commit;
import org.eclipse.egit.github.core.IRepositoryIdProvider;
import org.eclipse.egit.github.core.Repository;
import org.eclipse.egit.github.core.RepositoryCommit;
import org.eclipse.egit.github.core.client.GitHubClient;
import org.eclipse.egit.github.core.client.PageIterator;
import org.eclipse.egit.github.core.service.CommitService;
import org.eclipse.egit.github.core.service.RepositoryService;
import org.eclipse.egit.github.core.service.UserService;
import org.eclipse.egit.github.core.service.WatcherService;
import org.springframework.boot.autoconfigure.info.ProjectInfoProperties;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.json.Json;
import java.io.IOException;
import java.util.*;


@RestController
public class GithubController {

    private static final Gson gson = new GsonBuilder().create();
    private static final String client_id = Configuration.client_id;
    private static final String client_secret = Configuration.client_secret;
    private static final String token = Configuration.token;
    private RestTemplate restTemplate;
    private HttpHeaders headers;

    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getuser/{username}")
    public User getUser(@PathVariable String username) {
        restTemplate = new RestTemplate();
        headers = new HttpHeaders();
        headers.set("User-Agent", "profile-analyzer");
        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
        ResponseEntity<User> user = restTemplate.exchange("https://api.github.com/users/"+ username +
                "?client_id=" + client_id + "&client_secret=" + client_secret,
                HttpMethod.GET, entity, User.class);
        return user.getBody();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getrepo/{username}")
    public @ResponseBody Object getRepository(@PathVariable String username) {
        restTemplate = new RestTemplate();
        headers = new HttpHeaders();
        headers.set("User-Agent", "profile-analyzer");
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);
        ResponseEntity<Object> repository = restTemplate.exchange("https://api.github.com/users/"+ username +
                        "/repos" + "?per_page=100&client_id=" + client_id + "&client_secret=" + client_secret,
                HttpMethod.GET, entity, Object.class);
        return repository;
    }

    // Commits
    @RequestMapping(method = RequestMethod.GET, value = "/getcommits/{username}/{repo}")
    public @ResponseBody Object getCommits(@PathVariable String username, @PathVariable String repo) {
        restTemplate = new RestTemplate();
        headers = new HttpHeaders();
        headers.set("User-Agent", "profile-analyzer");
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);

        ResponseEntity<Object> commits = restTemplate.exchange("https://api.github.com/repos/" + username + "/" + repo + "/commits?client_id=" +  client_id + "&client_secret=" + client_secret,HttpMethod.GET, entity, Object.class);

        return commits;
    }

    // Commits using adapter
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getcommitsadapter/{username}")
    public @ResponseBody Map getCommitsAdaptor(@PathVariable String username) throws IOException {

        GitHubClient client = new GitHubClient();
        client.setOAuth2Token(token);
        RepositoryService repositoryService = new RepositoryService(client);
        CommitService commitService = new CommitService(client);
        Map<String, Integer> map = new HashMap<>();

        List<Repository> repositories = repositoryService.getRepositories(username);

//        PageIterator<RepositoryCommit> commits = commitService.pageCommits()
//        PageIterator<Repository> repos = repositoryService.pageRepositories()

        for (Repository repository: repositories) {
            map.put(repository.getName(), commitService.getCommits(repository).size());
        }

        return map;
    }

    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getcounts/{username}")
    public Object getCounts(@PathVariable String username) {
        restTemplate = new RestTemplate();
        headers = new HttpHeaders();
//        headers.set("User-Agent", "profile-analyzer");
        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
        ResponseEntity<Object> counts = restTemplate.exchange("https://github-contributions-api.herokuapp.com/" + username+ "/count",
                HttpMethod.GET, entity, Object.class);
        return counts.getBody();
    }

    // New Commits adapter
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getcommitsadapterRe/{username}")
    public @ResponseBody Map getCommitsAdaptorRe(@PathVariable String username){

        Map<String, Integer> map = new HashMap<>();

        try {
            GitHubClient client = new GitHubClient();
            client.setOAuth2Token(token);
            RepositoryService repositoryService = new RepositoryService(client);
            CommitService commitService = new CommitService(client);


            List<Repository> repositories = repositoryService.getRepositories(username);

//        PageIterator<RepositoryCommit> commits = commitService.pageCommits()
//        PageIterator<Repository> repos = repositoryService.pageRepositories()

            for (Repository repository: repositories) {
                map.put(repository.getName(), commitService.getCommits(repository).size());
            }
        } catch (IOException e) {
            map.put("NO DATA", 0);
        }


        return map;
    }


}
