package com.springgithub.springgithub.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.springgithub.springgithub.data.GithubData;
import com.springgithub.springgithub.services.github.CustomGithubService;
import com.springgithub.springgithub.model.User;
import com.springgithub.springgithub.services.github.GithubDBUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class GithubController {

    private static final Gson gson = new GsonBuilder().create();

    @Autowired
    private CustomGithubService gh;

    @Autowired
    GithubDBUtility githubDBUtility;

    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getuser/{username}")
    public User getUser(@PathVariable String username) {
        // This condition will ADD a user if the user is not in the DB.
        // But this would not solve the issue of having a 404 error in the server.
        if(githubDBUtility.getUserDB(username.toLowerCase()).getUser().getLogin() == null) {
            githubDBUtility.insertData(username.toLowerCase());
        }
        return githubDBUtility.getUserDB(username.toLowerCase()).getUser();
//        return gh.getUser(username);
    }

    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getrepo/{username}")
    public @ResponseBody Object getRepository(@PathVariable String username) {
        return gh.getRepo(username);
    }

    // New Commits adapter - Uses EGit
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getcommitsadapterRe/{username}")
    public @ResponseBody Map getCommitsAdaptorRe(@PathVariable String username){ return gh.getCommitsAdaptorRe(username);
    }

    // Uses RestTemplate to fetch from API
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getstarsperlang/{username}")
    public @ResponseBody ArrayList<Object> getStarsPerLang(@PathVariable String username) { return gh.getStarsPerLang(username); }

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
    public @ResponseBody Integer getCommitsLastYear(@PathVariable String username) { return gh.getOrganizations(username);
    }

    // Test
    @RequestMapping(method = RequestMethod.GET, value = "/testgithub/{username}")
    public @ResponseBody void test(@PathVariable String username) { }


}
