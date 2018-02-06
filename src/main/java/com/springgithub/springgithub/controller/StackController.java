package com.springgithub.springgithub.controller;

import com.google.code.stackexchange.client.StackExchangeApiClient;
import com.google.code.stackexchange.client.StackExchangeApiClientFactory;
import com.google.code.stackexchange.common.PagedList;
import com.google.code.stackexchange.schema.Badge;
import com.google.code.stackexchange.schema.StackExchangeSite;
import com.springgithub.springgithub.config.Configuration;
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

    private static final String key = Configuration.STACK_KEY;
    private static final String site = Configuration.SITE;

    @RequestMapping(method = RequestMethod.GET, value = "/getstackuserbadges/{id}")
    public @ResponseBody Object getBadges(@PathVariable String id) {

        StackExchangeApiClientFactory clientFactory = StackExchangeApiClientFactory
                .newInstance(key, StackExchangeSite.fromValue(site));

        StackExchangeApiClient client = clientFactory.createStackExchangeApiClient();

        return client.getBadgesForUsers(Long.valueOf(id));

    }


}
