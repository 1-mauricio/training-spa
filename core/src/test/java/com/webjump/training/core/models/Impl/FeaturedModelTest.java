package com.webjump.training.core.models.Impl;

import com.webjump.training.core.models.FeaturedModel;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FeaturedModelTest {
    

    private FeaturedModel featuredModel;

    @Before
    public void setUp() {
        featuredModel = new FeaturedModel();
    }

    @Test
    public void testTitleInjection() {
        String expectedTitle = "Test Title";
        featuredModel = new FeaturedModel() {
            {
                setTitle(expectedTitle);
            }
        };

        assertEquals("The title should be the same as the expected title", expectedTitle, featuredModel.getTitle());
    }
    
}
