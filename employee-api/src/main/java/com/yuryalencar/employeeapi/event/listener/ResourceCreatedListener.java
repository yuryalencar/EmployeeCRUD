package com.yuryalencar.employeeapi.event.listener;

import java.net.URI;

import javax.servlet.http.HttpServletResponse;

import com.yuryalencar.employeeapi.event.ResourceCreatedEvent;

import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

/**
 * ResourceCreatedListener
 */
@Component
public class ResourceCreatedListener implements ApplicationListener<ResourceCreatedEvent> {

    @Override
    public void onApplicationEvent(ResourceCreatedEvent resourceCreatedEvent) {
        System.out.println("deubomespero");

        HttpServletResponse response = resourceCreatedEvent.getResponse();
        Long id = resourceCreatedEvent.getId();

        setHeaderLocation(response, id);
    }

    private void setHeaderLocation(HttpServletResponse response, Long id) {
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").buildAndExpand(id).toUri();
        response.setHeader("Location", uri.toASCIIString());
    }

}