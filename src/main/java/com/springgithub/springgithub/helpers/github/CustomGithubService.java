package com.springgithub.springgithub.helpers.github;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.springgithub.springgithub.config.Configuration;
import com.springgithub.springgithub.controller.GithubController;
import com.springgithub.springgithub.model.Repo;
import com.springgithub.springgithub.model.User;
import org.eclipse.egit.github.core.Repository;
import org.eclipse.egit.github.core.client.GitHubClient;
import org.eclipse.egit.github.core.client.PageIterator;
import org.eclipse.egit.github.core.service.CommitService;
import org.eclipse.egit.github.core.service.OrganizationService;
import org.eclipse.egit.github.core.service.RepositoryService;
import org.eclipse.egit.github.core.service.WatcherService;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.*;

public class CustomGithubService {
    RestTemplate restTemplate;
    HttpHeaders headers;

    public CustomGithubService() {
        restTemplate = new RestTemplate();
    }

    // Get basic info of a user.
    public User getUser(String username) {
        headers = new HttpHeaders();
        headers = new HttpHeaders();
        headers.set("User-Agent", "profile-analyzer");
        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
        ResponseEntity<User> user = restTemplate.exchange("https://api.github.com/users/"+ username +
                        "?client_id=" + Configuration.GITHUB_CLIENT_ID + "&client_secret=" + Configuration.GITHUB_CLIENT_SECRET,
                HttpMethod.GET, entity, User.class);
        return user.getBody();
    }

    // Get top 30 repositories
    public Object getRepo(String username) {
        restTemplate = new RestTemplate();
        headers = new HttpHeaders();
        headers.set("User-Agent", "profile-analyzer");
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);
        ResponseEntity<Object> repository = restTemplate.exchange("https://api.github.com/users/"+ username +
                        "/repos" + "?per_page=100&client_id=" + Configuration.GITHUB_CLIENT_ID + "&client_secret=" + Configuration.GITHUB_CLIENT_SECRET,
                HttpMethod.GET, entity, Object.class);
        return repository;
    }

    // Get a map with <Repository, Commits>
    public Map getCommitsAdaptorRe(String username){

        Map<String, Integer> map = new HashMap<>();

        try {
            GitHubClient client = new GitHubClient();
            client.setOAuth2Token(Configuration.GITHUB_TOKEN);
            RepositoryService repositoryService = new RepositoryService(client);
            CommitService commitService = new CommitService(client);

            List<Repository> repositories = repositoryService.getRepositories(username);
            PageIterator<Repository> pageIterator = repositoryService.pageRepositories(username, 1, 10);

            for (Repository repository: pageIterator.iterator().next()) {
                map.put(repository.getName(), commitService.getCommits(repository).size());
            }
        } catch (IOException e) {
            map.put("NO DATA", 0);
        }

        return map;
    }

    // Get starts per Language
    public ArrayList<Object> getStarsPerLang(String username) {

        ArrayList<Object> output = new ArrayList<>();
        ArrayList<String> languages = new ArrayList<>();
        ArrayList<Integer> star_counts = new ArrayList<>();

        String URL = "https://api.github.com/users/" + username + "/starred?client_id=" + Configuration.GITHUB_CLIENT_ID
                + "&client_secret=" + Configuration.GITHUB_CLIENT_SECRET;

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

    // Get the total amount of forks
    public ArrayList<Object> getForks(String username) {

        ArrayList<Object> output = new ArrayList<>();
        ArrayList<Repository> forkedRepos = new ArrayList<>();
        ArrayList<String> languages = new ArrayList<>();
        ArrayList<Integer> forkCounts = new ArrayList<>();

        GitHubClient client = new GitHubClient();
        client.setOAuth2Token(Configuration.GITHUB_TOKEN);
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

    // Get total amount of watchers.
    public Integer getWatchers(String username) {

        int watchers = 0;

        GitHubClient gitHubClient = new GitHubClient();
        gitHubClient.setOAuth2Token(Configuration.GITHUB_TOKEN);

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

    // Get total amount of issues
    public Integer getIssues(String username) {

        int issue_count = 0;

        GitHubClient gitHubClient = new GitHubClient();
        gitHubClient.setOAuth2Token(Configuration.GITHUB_TOKEN);
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

    // Get total amount of organizations
    public Integer getOrganizations(String username) {

        int organization_count = 0;

        GitHubClient gitHubClient = new GitHubClient();
        gitHubClient.setOAuth2Token(Configuration.GITHUB_TOKEN);
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

    /*
    Testing Sandbox
     */

    public Object test(String username) {

        Map<String, Integer> map = new HashMap<>();

        GitHubClient client = new GitHubClient();
        client.setOAuth2Token(Configuration.GITHUB_TOKEN);
        RepositoryService repositoryService = new RepositoryService(client);
        CommitService commitService = new CommitService(client);
        List<Repository> r = new ArrayList<>();

        PageIterator<Repository> iterator = repositoryService.pageRepositories(username,1,20);

        return iterator.iterator().next().size();
    }

}
