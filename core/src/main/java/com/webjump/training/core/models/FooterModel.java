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
        resourceType = FooterModel.RESOURCE_TYPE)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class FooterModel implements ComponentExporter {
    protected static final String RESOURCE_TYPE = "training-spa/components/footer";

    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    protected String footerText;
    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    protected String address;

    public String getFooterText() {
        return footerText;
    }
    
    public String getAddress() {
        return address;
    }

    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
