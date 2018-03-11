package com.springgithub.springgithub.controller;

import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import javax.print.attribute.standard.Media;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
public class StackControllerTest {

    private MockMvc mockMvc;

    @InjectMocks
    private StackController stackController;

    @Before
    public void setUp() throws Exception {
        mockMvc = MockMvcBuilders.standaloneSetup(stackController).build();
    }

    @Test
    public void testGetUser() throws Exception{
        mockMvc.perform(
                MockMvcRequestBuilders.get("/getstackuser/7870026")
                    .accept(MediaType.APPLICATION_JSON)
        )
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$" , Matchers.is("")));
    }
}