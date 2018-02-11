package com.springgithub.springgithub.controller;

import com.google.code.stackexchange.schema.Reputation;
import com.springgithub.springgithub.services.stackoverflow.CustomStackService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getstackuserbadges/{id}")
    public @ResponseBody Object getBadges(@PathVariable String id) {
        return so.getBadges(id);
    }

    // Uses an adapter
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getstackuserquestionscount/{id}")
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
    public @ResponseBody List<Reputation> getReputation(@PathVariable String id) { return so.getReputation(id); }

    // Get Tags (100 responses) -- Can put up a chart.
    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getstackusertags/{id}")
    public @ResponseBody ArrayList<Object> getTags(@PathVariable String id) { return so.getTags(id); }

    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getstackusermensions/{id}")
    public @ResponseBody Object getMentions(@PathVariable String id) { return so.getMentions(id); }

    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getstackuserfavorites/{id}")
    public @ResponseBody Object getFavorites(@PathVariable String id) { return so.getFavorites(id); }

}
