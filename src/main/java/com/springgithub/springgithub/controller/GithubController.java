package com.springgithub.springgithub.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.springgithub.springgithub.config.Configuration;
import com.springgithub.springgithub.helpers.StargazerService;
import com.springgithub.springgithub.helpers.github.CustomGithubService;
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
    private static final CustomGithubService gh = new CustomGithubService();

    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getuser/{username}")
    public User getUser(@PathVariable String username) {
        return gh.getUser(username);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getrepo/{username}")
    public @ResponseBody Object getRepository(@PathVariable String username) {
        return gh.getRepo(username);
    }

    // New Commits adapter - Uses EGit
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getcommitsadapterRe/{username}")
    public @ResponseBody Map getCommitsAdaptorRe(@PathVariable String username){
        return gh.getCommitsAdaptorRe(username);
    }

    // Uses RestTemplate to fetch from API
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getstarsperlang/{username}")
    public @ResponseBody ArrayList<Object> getStarsPerLang(@PathVariable String username) {
        return gh.getStarsPerLang(username);
    }


    // Uses Egit adapter
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getforks/{username}")
    public @ResponseBody ArrayList<Object> getForks(@PathVariable String username) {
        return gh.getForks(username);
    }

    // Uses Egit adapte
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getwatchers/{username}")
    public @ResponseBody Integer getWatchers(@PathVariable String username) {
        return gh.getWatchers(username);
    }

    // Uses Egit adapter
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getissues/{username}")
    public @ResponseBody Integer getIssues(@PathVariable String username) {
        return gh.getIssues(username);
    }

    // Uses Egit adapter
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getorganizations/{username}")
    public @ResponseBody Integer getCommitsLastYear(@PathVariable String username) {
        return gh.getOrganizations(username);
    }


}
