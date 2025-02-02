package com.webjump.training.core.models;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import com.adobe.cq.export.json.ComponentExporter;
import org.apache.sling.models.annotations.Exporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;


@Model(adaptables = SlingHttpServletRequest.class,
        adapters = {ComponentExporter.class},
        resourceType = HeaderModel.RESOURCE_TYPE)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class HeaderModel implements ComponentExporter {
    protected static final String RESOURCE_TYPE = "training-spa/components/header";

    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    protected String title;

    public String getTitle() {
        return title;
    }

    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
