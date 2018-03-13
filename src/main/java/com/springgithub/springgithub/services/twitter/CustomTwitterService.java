package com.springgithub.springgithub.services.twitter;

import com.springgithub.springgithub.config.Configuration;
import org.springframework.stereotype.Service;
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

    public List<Status> getTwitterUserStatuses(String handle) throws TwitterException {
        Twitter twitter = tf.getInstance();
        Paging paging = new Paging();
        paging.setCount(5);
        return twitter.getUserTimeline(handle, paging);
    }

    public PagableResponseList<User> getTwitterFollowers(String handle) throws TwitterException {
        Twitter twitter = tf.getInstance();
//        twitter.onRateLimitReached();
        Paging paging = new Paging();
        paging.setCount(5);
        return twitter.getFriendsList(handle, -1, 5);
    }




}
