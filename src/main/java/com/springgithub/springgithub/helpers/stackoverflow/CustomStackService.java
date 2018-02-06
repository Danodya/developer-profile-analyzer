package com.springgithub.springgithub.helpers.stackoverflow;

import com.google.code.stackexchange.client.StackExchangeApiClient;
import com.google.code.stackexchange.client.StackExchangeApiClientFactory;
import com.google.code.stackexchange.schema.StackExchangeSite;
import com.springgithub.springgithub.config.Configuration;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

public class CustomStackService {

    private static final String key = Configuration.STACK_KEY;
    private static final String site = Configuration.SITE;

    public Object getBadges(String id) {

        StackExchangeApiClientFactory clientFactory = StackExchangeApiClientFactory
                .newInstance(key, StackExchangeSite.fromValue(site));

        StackExchangeApiClient client = clientFactory.createStackExchangeApiClient();

        return client.getBadgesForUsers(Long.valueOf(id));

    }
}
