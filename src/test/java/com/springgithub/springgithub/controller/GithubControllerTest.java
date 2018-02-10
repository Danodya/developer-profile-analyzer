package com.springgithub.springgithub.controller;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Matchers;
import org.mockito.internal.matchers.Matches;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.io.IOException;

import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringJUnit4ClassRunner.class)
public class GithubControllerTest {

    private MockMvc mockMvc;

    @InjectMocks
    private GithubController githubController;

    @Before
    public void setUp() throws Exception {
        mockMvc = MockMvcBuilders.standaloneSetup(githubController).build();
    }

    // Test for validation of the user. Tested with the user with the highest volume of data.
    @Test
    public void testValidateUser() throws Exception {
        mockMvc.perform(get("/getuser/fabpot").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.validated", org.hamcrest.Matchers.is(true)));
    }

    // Test for the maximum size of repos.
    @Test()
    public void testCommitsAdapter() throws Exception {
        mockMvc.perform(get("/getcommitsadapterRe/ims94").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.*", org.hamcrest.Matchers.hasSize(10)));
    }


}