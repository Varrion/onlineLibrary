package com.dekitom.onlinelibrary.web.controllers;

import com.dekitom.onlinelibrary.model.Publisher;
import com.dekitom.onlinelibrary.service.PublisherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/publishers")
@CrossOrigin(origins = "*")
public class PublisherViewController {

    @Autowired
    private PublisherService publisherService;

    @GetMapping("/all")
    public Iterable<Publisher> getPublisher() {
        return publisherService.findAll();
    }
}
