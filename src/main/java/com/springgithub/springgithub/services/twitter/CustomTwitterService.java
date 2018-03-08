package com.springgithub.springgithub.services.twitter;

import com.springgithub.springgithub.config.Configuration;
import org.springframework.stereotype.Service;
import twitter4j.Twitter;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;
import twitter4j.User;
import twitter4j.conf.ConfigurationBuilder;

@Service
public class CustomTwitterService {

    private static final ConfigurationBuilder cb =
            new ConfigurationBuilder().setDebugEnabled(true)
                    .setOAuthConsumerKey(Configuration.TWITTER_CONSUMER_KEY)
                    .setOAuthConsumerSecret(Configuration.TWITTER_CONSUMER_SECRET)
                    .setOAuthAccessToken(Configuration.TWITTER_ACCESS_TOKEN)
                    .setOAuthAccessTokenSecret(Configuration.TWITTER_ACCESS_TOKEN_SECRET);
    private static final TwitterFactory tf = new TwitterFactory(cb.build());

    public User getTwitterUser(String username) throws TwitterException {
        Twitter twitter = tf.getInstance();
        return twitter.showUser(username);
    }

}
