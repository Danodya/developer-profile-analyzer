package com.springgithub.springgithub.controller;

import com.springgithub.springgithub.services.twitter.CustomTwitterService;
import org.springframework.web.bind.annotation.*;
import twitter4j.TwitterException;

@RestController
public class TwitterController {

    private static final CustomTwitterService tw = new CustomTwitterService();

    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/gettwitteruser/{username}")
    public Object getTwitterUser(@PathVariable String username) throws TwitterException {
        return tw.getTwitterUser(username);
    }

}
