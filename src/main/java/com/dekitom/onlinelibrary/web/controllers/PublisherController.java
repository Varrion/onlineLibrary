package com.dekitom.onlinelibrary.web.controllers;

import com.dekitom.onlinelibrary.model.Category;
import com.dekitom.onlinelibrary.model.Publisher;
import com.dekitom.onlinelibrary.service.PublisherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/publishers")
@CrossOrigin(origins = "*")
public class PublisherController {

    @Autowired
    private PublisherService publisherService;

    @GetMapping("/all")
    public Iterable<Publisher> getPublisher() {
        return publisherService.findAll();
    }

    @GetMapping("/{id}")
    public Publisher getPublisher(@PathVariable Long id) {
        return publisherService.findOne(id);
    }
}
