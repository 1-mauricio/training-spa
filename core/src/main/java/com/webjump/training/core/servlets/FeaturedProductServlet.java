package com.webjump.training.core.servlets;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.json.JSONArray;
import org.json.JSONObject;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.servlet.Servlet;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component(service = Servlet.class,
        property = {
                Constants.SERVICE_DESCRIPTION + "=Featured Product Servlet",
                "sling.servlet.methods=" + HttpConstants.METHOD_GET,
                "sling.servlet.methods=" + HttpConstants.METHOD_POST,
                "sling.servlet.paths=/bin/featured/products"
        })
public class FeaturedProductServlet extends SlingAllMethodsServlet {

    private static List<Product> products = new ArrayList<>();

    static {
        products.add(new Product("Produto 1", "/content/dam/core-components-examples/library/sample-assets/mountain-range.jpg", "R$100,00", "R$80,00"));
        products.add(new Product("Produto 2", "/content/dam/core-components-examples/library/sample-assets/mountain-range.jpg", "R$150,00", "R$120,00"));
    }

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
        try {
            JSONArray jsonArray = new JSONArray();
            for (Product product : products) {
                JSONObject productObject = new JSONObject();
                productObject.put("title", product.getTitle());
                productObject.put("image", product.getImage());
                productObject.put("originalPrice", product.getOriginalPrice());
                productObject.put("salePrice", product.getSalePrice());
                jsonArray.put(productObject);
            }

            response.setContentType("application/json");
            response.getWriter().write(jsonArray.toString());
        } catch (Exception e) {
            response.setStatus(500);
            response.getWriter().write("{\"error\": \"Failed to process JSON\"}");
            e.printStackTrace();
        }
    }

    @Override
    protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
        try {
            String payload = request.getReader().lines().reduce("", (accumulator, actual) -> accumulator + actual);
            JSONArray jsonArray = new JSONArray(payload);

            List<Product> updatedProducts = new ArrayList<>();
            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject productObject = jsonArray.getJSONObject(i);
                String title = productObject.getString("title");
                String image = productObject.getString("image");
                String originalPrice = productObject.getString("originalPrice");
                String salePrice = productObject.getString("salePrice");

                updatedProducts.add(new Product(title, image, originalPrice, salePrice));
            }

            updateProducts(updatedProducts);

            response.setContentType("application/json");
            response.getWriter().write("{\"status\": \"success\", \"message\": \"Products updated successfully\"}");
        } catch (Exception e) {
            response.setStatus(500);
            response.getWriter().write("{\"error\": \"Failed to update products\"}");
            e.printStackTrace();
        }
    }

    public static void updateProducts(List<Product> newProducts) {
        products = newProducts;
    }

    @Getter
    @AllArgsConstructor
    public static class Product {
        private String title;
        private String image;
        private String originalPrice;
        private String salePrice;
    }
}
