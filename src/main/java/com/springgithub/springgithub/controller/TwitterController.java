package com.springgithub.springgithub.controller;

import com.springgithub.springgithub.config.Configuration;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import twitter4j.Twitter;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;
import twitter4j.User;
import twitter4j.conf.ConfigurationBuilder;

@RestController
public class TwitterController {

    private static final ConfigurationBuilder cb =
            new ConfigurationBuilder().setDebugEnabled(true)
                    .setOAuthConsumerKey(Configuration.TWITTER_CONSUMER_KEY)
                    .setOAuthConsumerSecret(Configuration.TWITTER_CONSUMER_SECRET)
                    .setOAuthAccessToken(Configuration.TWITTER_ACCESS_TOKEN)
                    .setOAuthAccessTokenSecret(Configuration.TWITTER_ACCESS_TOKEN_SECRET);
    private static final TwitterFactory tf = new TwitterFactory(cb.build());

    @RequestMapping(method = RequestMethod.GET, value = "/gettwitteruser/{username}")
    public Object getTwitterUser(@PathVariable String username) throws TwitterException {

        Twitter twitter = tf.getInstance();

        return twitter.showUser(username);

    }

}
