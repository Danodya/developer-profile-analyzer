package com.springgithub.springgithub.helpers.stackoverflow;

import com.google.code.stackexchange.client.StackExchangeApiClient;
import com.google.code.stackexchange.client.StackExchangeApiClientFactory;
import com.google.code.stackexchange.client.query.*;
import com.google.code.stackexchange.common.PagedList;
import com.google.code.stackexchange.schema.*;
import com.springgithub.springgithub.config.Configuration;
import com.springgithub.springgithub.model.StackOverflow.Badges;
import org.apache.http.impl.client.HttpClientBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import java.util.*;

/*
StackOverflow resoponses are gzip encoded. Therefore, Jackson cannot parse the data directly. Therefore, HttpComponentsClientHttpRequestFactory should be employed into RestTemplate.
 */

public class CustomStackService {

    private static final String key = Configuration.STACK_KEY;
    private static final String site = Configuration.SITE;
    private StackExchangeApiClientFactory clientFactory = StackExchangeApiClientFactory
            .newInstance(key, StackExchangeSite.fromValue(site));
    private static final HttpComponentsClientHttpRequestFactory clientHttpRequestFactory = new HttpComponentsClientHttpRequestFactory(
            HttpClientBuilder.create().build());
    private static final StackExchangeApiQueryFactory queryFactory = StackExchangeApiQueryFactory.newInstance(key, StackExchangeSite.fromValue(site));

    // Get User information
    public Object getUser(String id) {
        RestTemplate restTemplate = new RestTemplate(clientHttpRequestFactory);
        String URL = "https://api.stackexchange.com/users/" + id + "?site=" + Configuration.SITE + "&key=" + Configuration.STACK_KEY;
        return restTemplate.getForObject(URL, Object.class);
    }

    /* Get User badges
     *  This will return a map of <Badge, Count>
     *  */
    public Map getBadges(String id) {
        StackExchangeApiClient client = clientFactory.createStackExchangeApiClient();
        Map<String, Integer> map = new HashMap<>();

        PagedList<Badge> badges = client.getBadgesForUsers(Long.valueOf(id));

        ArrayList<String> ranks = new ArrayList<>();
        ranks.add("BRONZE");
        ranks.add("GOLD");
        ranks.add("SILVER");

        for (String rank: ranks) {
            int count = 0;
            for (Badge badge: badges) {
                if(Objects.equals(badge.getRank().toString(), rank)) count++;
            }
            map.put(rank, count);
        }

        return map;
    }

    //    Get user questions - No Adapter
    public Object getQuestionsCount(String id) {
        RestTemplate restTemplate = new RestTemplate(clientHttpRequestFactory);
        String URL = "https://api.stackexchange.com/users/" + id + "/questions?site=" + Configuration.SITE + "&key=" + Configuration.STACK_KEY + "&filter=total";
        return restTemplate.getForObject(URL, Object.class);
    }

    //    Get user answers - No Adapter
    public Object getAnswersCount(String id) {
        RestTemplate restTemplate = new RestTemplate(clientHttpRequestFactory);
        String URL = "https://api.stackexchange.com/users/" + id + "/answers?site=" + Configuration.SITE + "&key=" + Configuration.STACK_KEY + "&filter=total";
        return restTemplate.getForObject(URL, Object.class);
    }

    //  Get user comments
    public Object getComments(String id) {
        StackExchangeApiClient client = clientFactory.createStackExchangeApiClient();
        return client.getUsersComments(Long.valueOf(id));
    }

    // Get favorite questions by users
    public Object getFavorites(String id) {
        StackExchangeApiClient client = clientFactory.createStackExchangeApiClient();
        return client.getFavoriteQuestionsByUsers(Long.valueOf(id));
    }

    // Get user reputations
    public Object getReputation(String id) {
        StackExchangeApiClient client = clientFactory.createStackExchangeApiClient();
        return client.getUsersReputations(Long.valueOf(id));
    }

    public Object test(String id) {
        return "";
    }


}
