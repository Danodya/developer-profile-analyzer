package com.springgithub.springgithub.controller;

import com.springgithub.springgithub.services.twitter.CustomTwitterService;
import com.springgithub.springgithub.services.twitter.TwitterToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import twitter4j.PagableResponseList;
import twitter4j.TwitterException;
import twitter4j.User;

@RestController
public class TwitterController {

    @Autowired
    private CustomTwitterService tw;

    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/gettwitteruser/{username}")
    public User getTwitterUser(@PathVariable String username) throws TwitterException {
        return tw.getTwitterUser(username);
    }

    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/gettwitterstatuses/{handle}")
    public Object getTwitterUserStatuses(@PathVariable String handle) throws TwitterException {
        return tw.getTwitterUserTimelines(handle);
    }

    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/gettwitterfriends/{handle}")
    public Object authCheck(@PathVariable String handle) throws TwitterException {
        return tw.getFriendsAPI(handle);
    }

    // The endpoint `/gettwitterfriends` should be executed before executing this endpoint.
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/gettwitterfollowers/{handle}")
    public Object getTwitterFollowersRe(@PathVariable String handle) throws TwitterException {
        return tw.getTwitterFollowersRe(handle);
    }

}
