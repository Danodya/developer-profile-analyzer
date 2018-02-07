package com.springgithub.springgithub.controller;

import com.google.code.stackexchange.client.StackExchangeApiClient;
import com.google.code.stackexchange.client.StackExchangeApiClientFactory;
import com.google.code.stackexchange.common.PagedList;
import com.google.code.stackexchange.schema.Badge;
import com.google.code.stackexchange.schema.StackExchangeSite;
import com.springgithub.springgithub.config.Configuration;
import com.springgithub.springgithub.helpers.stackoverflow.CustomStackService;
import com.springgithub.springgithub.model.StackOverflow.Badges;
import com.springgithub.springgithub.model.StackOverflow.StackUser;
import com.springgithub.springgithub.model.User;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
public class StackController {

    private static final CustomStackService so = new CustomStackService();

    // Uses an adapter
    // You can get user badges from here as well.
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getstackuser/{id}")
    public @ResponseBody Object getUser(@PathVariable String id) {
        return so.getUser(id);
    }

    // Uses an adapter
    // This will give you a lesser amount of badges.
    @RequestMapping(method = RequestMethod.GET, value = "/getstackuserbadges/{id}")
    public @ResponseBody Object getBadges(@PathVariable String id) {
        return so.getBadges(id);
    }

    // Uses an adapter
    @RequestMapping(method = RequestMethod.GET, value = "/getstackuserquestions/{id}")
    public @ResponseBody Object getQuestions(@PathVariable String id) {
        return so.getQuestionsCount(id);
    }

    // Uses RestTemplate
    @RequestMapping(method = RequestMethod.GET, value = "/getstackuseranswerscount/{id}")
    public @ResponseBody Object getAnswers(@PathVariable String id) { return so.getAnswersCount(id); }

    // Uses an adapter
    @RequestMapping(method = RequestMethod.GET, value = "/getstackusercomments/{id}")
    public @ResponseBody Object getComments(@PathVariable String id) { return so.getComments(id); }

    // Uses an adapter
    @RequestMapping(method = RequestMethod.GET, value = "/getstackuserreputation/{id}")
    public @ResponseBody Object getReputation(@PathVariable String id) { return so.getReputation(id); }

    // Test
    @RequestMapping(method = RequestMethod.GET, value = "/test/{id}")
    public @ResponseBody Object test(@PathVariable String id) { return so.test(id); }

}
