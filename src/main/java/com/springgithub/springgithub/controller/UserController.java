package com.springgithub.springgithub.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.springgithub.springgithub.model.Repository;
import com.springgithub.springgithub.model.User;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;


@RestController
public class UserController {

    private static final Gson gson = new GsonBuilder().create();
    private static final String client_id = "2c77c5a8d6e0519eb3a5";
    private static final String client_secret = "04ba9edca249e4adf378919a5a1d7e36fad00e96";
    private RestTemplate restTemplate;
    private HttpHeaders headers;

    @CrossOrigin("http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/getuser/{username}")
    public User getUser(@PathVariable String username) {
        restTemplate = new RestTemplate();
        headers = new HttpHeaders();
        headers.set("User-Agent", "profile-analyzer");
        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
        ResponseEntity<User> user = restTemplate.exchange("https://api.github.com/users/"+ username +
                "?client_id=" + client_id + "&client_secret=" + client_secret,
                HttpMethod.GET, entity, User.class);
        return user.getBody();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getrepo/{username}")
    public Object getRepository(@PathVariable String username) {
        restTemplate = new RestTemplate();
        headers = new HttpHeaders();
        headers.set("User-Agent", "profile-analyzer");
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);
        ResponseEntity<Object> repository = restTemplate.exchange("https://api.github.com/users/"+ username +
                        "/repos" + "?client_id=" + client_id + "&client_secret=" + client_secret,
                HttpMethod.GET, entity, Object.class);
        return repository;
    }

}
