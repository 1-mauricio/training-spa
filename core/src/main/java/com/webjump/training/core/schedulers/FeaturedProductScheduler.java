package com.webjump.training.core.schedulers;

import org.apache.sling.commons.scheduler.ScheduleOptions;
import org.apache.sling.commons.scheduler.Scheduler;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Deactivate;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.webjump.training.core.servlets.FeaturedProductServlet;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Component(immediate = true, service = Runnable.class)
public class FeaturedProductScheduler implements Runnable {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Reference
    private Scheduler scheduler;

    private ScheduleOptions schedulerId;

    private static final Random random = new Random();

    @Activate
    protected void activate() {
        schedulerId = scheduler.EXPR("*/30 * * * * ?");
        ScheduleOptions options = scheduler.EXPR("*/30 * * * * ?");
        options.name("Featured Product Scheduler");
        scheduler.schedule(this, options);
        logger.info("Featured Product Scheduler activated");
    }

    @Deactivate
    protected void deactivate() {
        scheduler.unschedule(String.valueOf(schedulerId));
        logger.info("Featured Product Scheduler deactivated");
    }

    @Override
    public void run() {
        logger.info("Featured Product Scheduler is running");
        updateFeaturedProducts();
    }

    private void updateFeaturedProducts() {
        List<FeaturedProductServlet.Product> newProducts = new ArrayList<>();

        for (int i = 0; i < 4; i++) {
            String title = "Produto " + (i + 1);
            String image = "/content/dam/core-components-examples/library/sample-assets/mountain-range.jpg";
            String originalPrice = "R$" + (100 + random.nextInt(200));
            String salePrice = "R$" + (80 + random.nextInt(150));
            newProducts.add(new FeaturedProductServlet.Product(title, image, originalPrice, salePrice));
        }

        FeaturedProductServlet.updateProducts(newProducts);
        logger.info("Produtos em destaque atualizados.");
    }
}
