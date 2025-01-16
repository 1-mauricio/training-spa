package com.webjump.training.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Model(adaptables = Resource.class)
public class FeaturedModel {

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title;
}
