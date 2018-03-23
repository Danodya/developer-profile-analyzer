package com.springgithub.springgithub.controller;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.gson.JsonObject;
import com.springgithub.springgithub.repositories.GithubRepository;
import com.springgithub.springgithub.services.github.CustomGithubService;
import org.hamcrest.Matcher;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Matchers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.servlet.mvc.method.annotation.ExceptionHandlerExceptionResolver;

import static org.junit.Assert.*;

import javax.print.attribute.standard.Media;

@RunWith(SpringJUnit4ClassRunner.class)
public class GithubControllerTest {

    private MockMvc mockMvc;

    @InjectMocks
    private GithubController githubController;

    @Before
    public void setUp() throws Exception {
        mockMvc = MockMvcBuilders.standaloneSetup(githubController).setHandlerExceptionResolvers(new ExceptionHandlerExceptionResolver()).build();
    }
    
    /*
     * Testing for the /getuser/:username endpoint is an integration test - not a unit test
     * This fact can be supported by the fact that it traverses through several layers like -
     * - Data Access layer and Service Layer
     */

    @Test
    // Tests for whether the user is validated.
    // A positive case.
    public void testUserEndpointCorrect() throws Exception{
        mockMvc.perform(
                MockMvcRequestBuilders.get("/getuserfortests/dasunpubudumal")
                        .accept(MediaType.APPLICATION_JSON)
        )
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.name",
                        org.hamcrest.Matchers.is("Dasun Pubudumal")))
                .andExpect(MockMvcResultMatchers.jsonPath("$.validated",
                        org.hamcrest.Matchers.is(true)))
                .andExpect(MockMvcResultMatchers.jsonPath("$.public_repos",
                        org.hamcrest.Matchers.is("22")));
    }
    
    @Test
    // Negative case for the user endpoint.
    // Since the error is handled through ResponseErrorHandler class, you should still get an okay response
    // - eventually.
    public void testUserEndpointIncorrect() throws Exception {
    	mockMvc.perform(MockMvcRequestBuilders.get("/getuserfortests/dausnpubudumal")
    					.accept(MediaType.APPLICATION_JSON)
    					
    	)
    			.andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    // Checks whether this endpoint returns anything
    // A positive case.
    public void testCommitsEndpoint() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.get("/getcommitsadapterRe/dilantha95")
                        .accept(MediaType.APPLICATION_JSON)
        )
                .andExpect(MockMvcResultMatchers.jsonPath("$.*", org.hamcrest.Matchers.hasSize(9)));
    }

    @Test
    // Checks whether there are two arrays - one for languages and the other for counts.
    // A positive case.
    public void testStarsPerLang() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.get("/getstarsperlang/dasunpubudumal")
                        .accept(MediaType.APPLICATION_JSON)
        )
                .andExpect(MockMvcResultMatchers.content()
                        .string("[[\"Java\",\"Kotlin\",\"JavaScript\",\"TypeScript\"],[3,1,3,1]]"));
    }
    
    @Test
    // Checks whether the correct forks are being received.
    // A positive case.
    public void testGetForks() throws Exception{
		mockMvc.perform(
				MockMvcRequestBuilders.get("/getforks/dasunpubudumal")
					.accept(MediaType.APPLICATION_JSON)
		)
				.andExpect(MockMvcResultMatchers.content()
                    .string("[[\"Java\",\"TypeScript\",\"JavaScript\"],[5,1,1]]"));

	}

    @Test
    // Checks whether the correct number of watchers are being received.
    public void testGetWatchers() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.get("/getwatchers/dasunpubudumal")
                    .accept(MediaType.APPLICATION_JSON)
        )
                .andExpect(MockMvcResultMatchers.content()
                        .string("8"));
    }

    @Test
    // Check whether the correct number of issues are received.
    // A positive case.
    public void testGetIssues() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.get("/getissues/dasunpubudumal")
                    .accept(MediaType.APPLICATION_JSON)
        )
                .andExpect(MockMvcResultMatchers.content()
                        .string("15"));
    }

    @Test
    // Check whether the correct number of organizations are received.
    // A positive case.
    public void testGetOrganizations() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.get("/getorganizations/dasunpubudumal")
                        .accept(MediaType.APPLICATION_JSON)
        )
                .andExpect(MockMvcResultMatchers.content()
                        .string("0"));
    }
}