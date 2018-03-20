package com.springgithub.springgithub.services.twitter;

import com.springgithub.springgithub.config.Configuration;
import org.apache.commons.codec.binary.Base64;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import twitter4j.*;
import twitter4j.conf.ConfigurationBuilder;

import java.util.List;

@Service
public class CustomTwitterService {

    private static final ConfigurationBuilder cb =
            new ConfigurationBuilder().setDebugEnabled(true)
                    .setOAuthConsumerKey(Configuration.TWITTER_CONSUMER_KEY)
                    .setOAuthConsumerSecret(Configuration.TWITTER_CONSUMER_SECRET)
                    .setOAuthAccessToken(Configuration.TWITTER_ACCESS_TOKEN)
                    .setOAuthAccessTokenSecret(Configuration.TWITTER_ACCESS_TOKEN_SECRET);
    private static final TwitterFactory tf = new TwitterFactory(cb.build());
    private static String bearerToken = "";

    // User details
    public User getTwitterUser(String username) throws TwitterException {
        Twitter twitter = tf.getInstance();
        return twitter.showUser(username);
    }

    // User timelines
    public Object getTwitterUserTimelines(String handle) throws TwitterException {
        Twitter twitter = tf.getInstance();
        Paging paging = new Paging();
        paging.setCount(5);
        return twitter.getUserTimeline(handle, paging);
    }

    /*
    Resource - https://developer.twitter.com/en/docs/basics/authentication/overview/application-only
     */
    public Object getFriendsAPI(String handle) throws TwitterException {

        // Retrieve the bearer token.
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        String enc = Configuration.TWITTER_CONSUMER_KEY + ":" + Configuration.TWITTER_CONSUMER_SECRET;
        byte[] bytes = Base64.encodeBase64(enc.getBytes());
        String encoded64 = new String(bytes);
        String headerValue = "Basic " + encoded64;
        headers.add("Authorization", headerValue);
        headers.add("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        HttpEntity<String> entity = new HttpEntity<>("grant_type=client_credentials", headers);
        ResponseEntity<TwitterToken> response = restTemplate.exchange("https://api.twitter.com/oauth2/token"
                , HttpMethod.POST, entity, TwitterToken.class);
        TwitterToken tokenResponse = response.getBody();   // Retrieve the token
        bearerToken = tokenResponse.getAccess_token();
        // Hit Twitter endpoints with the retrieved token.
        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.add("Authorization", "Bearer " + tokenResponse.getAccess_token());

        String URL = "https://api.twitter.com/1.1/friends/list.json?screen_name=" + handle + "&count=5";

        HttpEntity<String> entity1 = new HttpEntity<>("parameters", requestHeaders);
        ResponseEntity<Object> friends = restTemplate.exchange(URL, HttpMethod.GET, entity1, Object.class);

        return friends.getBody();
    }

    public Object getTwitterFollowersRe(String handle) {
        System.out.println("Token: " + bearerToken);
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + bearerToken);
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);

        String URL = "https://api.twitter.com/1.1/followers/list.json?screen_name=" + handle + "&count=5";
        return restTemplate.exchange(URL, HttpMethod.GET, entity, Object.class).getBody();
    }
}
