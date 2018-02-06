package com.springgithub.springgithub.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.springgithub.springgithub.config.Configuration;
import com.springgithub.springgithub.helpers.StargazerService;
import com.springgithub.springgithub.model.Repo;
import com.springgithub.springgithub.model.User;
import org.eclipse.egit.github.core.Repository;
import org.eclipse.egit.github.core.client.GitHubClient;
import org.eclipse.egit.github.core.service.*;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.lang.reflect.Array;
import java.util.*;
import java.util.stream.Collectors;


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

    // New Commits adapter - Uses EGit
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

            for (Repository repository: repositories) {
                map.put(repository.getName(), commitService.getCommits(repository).size());
            }
        } catch (IOException e) {
            map.put("NO DATA", 0);
        }

        return map;
    }

    // Uses RestTemplate to fetch from API
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getstarsperlang/{username}")
    public @ResponseBody ArrayList<Object> getStarsPerLang(@PathVariable String username) {

        ArrayList<Object> output = new ArrayList<>();
        ArrayList<String> languages = new ArrayList<>();
        ArrayList<Integer> star_counts = new ArrayList<>();

        String URL = "https://api.github.com/users/" + username + "/starred?client_id=" + Configuration.client_id
                + "&client_secret=" + Configuration.client_secret;

        restTemplate = new RestTemplate();
        headers = new HttpHeaders();
        headers.set("User-Agent", "profile-analyzer");
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);

        ResponseEntity<Repo[]> repos = restTemplate.exchange(URL, HttpMethod.GET, entity, Repo[].class);

        Repo[] arr = repos.getBody();

        for (Repo repo : arr) {
            languages.add(repo.getLanguage());
        }

        // Remove Duplicates
        languages = new ArrayList<String>(new LinkedHashSet<String>(languages));

        if(languages.contains(null)) {
            languages.set(languages.indexOf(null), "Other");
        }

        // Synthesize output.
        for(String language : languages) {
            int count = 0;
            for(Repo repo: arr){
                if(Objects.equals(repo.getLanguage(), language)){
                    count++;
                }
            }
            star_counts.add(count);
        }

        output.add(languages);
        output.add(star_counts);

        return output;

    }


    // Uses Egit adapter
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getforks/{username}")
    public @ResponseBody ArrayList<Object> getForks(@PathVariable String username) {

        ArrayList<Object> output = new ArrayList<>();
        ArrayList<Repository> forkedRepos = new ArrayList<>();
        ArrayList<String> languages = new ArrayList<>();
        ArrayList<Integer> forkCounts = new ArrayList<>();

        GitHubClient client = new GitHubClient();
        client.setOAuth2Token(token);
        RepositoryService repositoryService = new RepositoryService(client);
        List<Repository> repos = null;

        try {
            repos = repositoryService.getRepositories(username);
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Get forked repos
        for(Repository repo: repos) {
            if(repo.isFork()) {
                forkedRepos.add(repo);
                languages.add(repo.getLanguage());
            }

        }

        // Set null language to other
        if(languages.contains(null)) {
            languages.set(languages.indexOf(null), "Other");
        }

        // Remove Duplicates
        languages = new ArrayList<String>(new LinkedHashSet<String>(languages));

        for (String language: languages){
            int count = 0;
            for(Repository forkedRepo: forkedRepos) {
                if(Objects.equals(forkedRepo.getLanguage(), language)) count++;
            }
            forkCounts.add(count);
        }

        // Synthesize the output
        output.add(languages);
        output.add(forkCounts);

        return output;
    }

    // Uses Egit adapte
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getwatchers/{username}")
    public @ResponseBody Integer getWatchers(@PathVariable String username) {

        int watchers = 0;

        GitHubClient gitHubClient = new GitHubClient();
        gitHubClient.setOAuth2Token(token);

        WatcherService watcherService = new WatcherService(gitHubClient);

        List<Repository> repositories = new ArrayList<>();

        try {
            repositories = watcherService.getWatched(username);
        } catch (IOException e) {
            e.printStackTrace();
        }

        watchers = repositories.size();

        return watchers;
    }

    // Uses Egit adapter
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getissues/{username}")
    public @ResponseBody Integer getIssues(@PathVariable String username) {

        int issue_count = 0;

        GitHubClient gitHubClient = new GitHubClient();
        gitHubClient.setOAuth2Token(token);
        List<Repository> repositories = new ArrayList<>();
        RepositoryService repositoryService = new RepositoryService(gitHubClient);

        try {
            repositories = repositoryService.getRepositories(username);
        } catch (IOException e) {
            e.printStackTrace();
        }

        for (Repository repository: repositories) {
            if(repository.isHasIssues()) issue_count++;
        }

        return issue_count;
    }

    // Uses Egit adapter
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getorganizations/{username}")
    public @ResponseBody Integer getCommitsLastYear(@PathVariable String username) {

        int organization_count = 0;

        GitHubClient gitHubClient = new GitHubClient();
        gitHubClient.setOAuth2Token(token);
        List<org.eclipse.egit.github.core.User> organizations = new ArrayList<>();
        OrganizationService organizationService = new OrganizationService(gitHubClient);

        try {
            organizations = organizationService.getOrganizations(username);
        } catch (IOException e) {
            e.printStackTrace();
        }

        organization_count = organizations.size();

        return organization_count;
    }


}
