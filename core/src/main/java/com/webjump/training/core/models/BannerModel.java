package com.webjump.training.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = Resource.class)
public class BannerModel {
    
    @ValueMapValue
    private String backgroundImage;
    
    @ValueMapValue
    private String buttonText;

    @ValueMapValue
    private String firstTitle;
    
    @ValueMapValue
    private String secondTitle;
    
    public String getBackgroundImage() {
        return backgroundImage;
    }
    
    public String getFirstTitle() {
        return firstTitle;
    }

    public String getSecondTitle() {
        return secondTitle;
    }
    
    public String getButtonText() {
        return buttonText;
    }
}
