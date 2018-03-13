package com.springgithub.springgithub.controller;

import com.springgithub.springgithub.services.twitter.CustomTwitterService;
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

    @RequestMapping(method = RequestMethod.GET, value = "/gettwittertimeline/{handle}")
    public Object getTwitterUserTimelline(@PathVariable String handle) throws TwitterException {
        return tw.getTwitterUserTimelines(handle);
    }

    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/gettwitterstatuses/{handle}")
    public Object getTwitterUserStatuses(@PathVariable String handle) throws TwitterException {
        return tw.getTwitterUserTimelines(handle);
    }

    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/gettwitterfollowers/{handle}")
    public PagableResponseList<User> getTwitterFollowers(@PathVariable String handle) throws TwitterException {
        return tw.getTwitterFollowers(handle);
    }

}
