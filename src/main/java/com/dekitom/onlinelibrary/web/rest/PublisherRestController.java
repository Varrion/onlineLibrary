package com.dekitom.onlinelibrary.web.rest;

import com.dekitom.onlinelibrary.model.Publisher;
import com.dekitom.onlinelibrary.service.PublisherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("/admin")
public class PublisherRestController {

    @Autowired
    private PublisherService publisherService;

    @PostMapping("/add/publisher")
    public Publisher saveCategory(@RequestParam("name") Publisher category){
        return this.publisherService.save(category);
    }
}
