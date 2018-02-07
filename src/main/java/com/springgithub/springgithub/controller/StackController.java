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
    @RequestMapping(method = RequestMethod.GET, value = "/getstackuserbadges/{id}")
    public @ResponseBody Object getBadges(@PathVariable String id) {
        return so.getBadges(id);
    }

    // Uses an adapter
    @RequestMapping(method = RequestMethod.GET, value = "/getstackuserquestions/{id}")
    public @ResponseBody Object getQuestions(@PathVariable String id) {
        return so.getQuestions(id);
    }

    // Uses RestTemplate
    @RequestMapping(method = RequestMethod.GET, value = "/getstackuseranswers/{id}")
    public @ResponseBody Object getAnswers(@PathVariable String id) { return so.getAnswers(id); }

    // Uses an adapter
    @RequestMapping(method = RequestMethod.GET, value = "/getstackusercomments/{id}")
    public @ResponseBody Object getComments(@PathVariable String id) { return so.getComments(id); }


}
