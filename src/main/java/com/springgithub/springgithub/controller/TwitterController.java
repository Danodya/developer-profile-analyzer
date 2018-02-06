package com.springgithub.springgithub.controller;

import com.springgithub.springgithub.config.Configuration;
import com.springgithub.springgithub.helpers.twitter.CustomTwitterService;
import org.springframework.web.bind.annotation.*;
import twitter4j.Twitter;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;
import twitter4j.User;
import twitter4j.conf.ConfigurationBuilder;

@RestController
public class TwitterController {

    private static final CustomTwitterService tw = new CustomTwitterService();

    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/gettwitteruser/{username}")
    public Object getTwitterUser(@PathVariable String username) throws TwitterException {
        return tw.getTwitterUser(username);
    }

}
