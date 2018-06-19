package com.dekitom.onlinelibrary.web.rest;

import com.dekitom.onlinelibrary.model.Publisher;
import com.dekitom.onlinelibrary.repository.PublisherRepository;
import com.dekitom.onlinelibrary.service.PublisherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping ("/admin")
public class PublisherRestController {

    @Autowired
    private PublisherService publisherService;

    @Autowired
    private PublisherRepository publisherRepository;

    @PostMapping("/add/publisher")
    public Publisher saveCategory(@RequestBody Publisher publisher) {
        return this.publisherService.save(publisher);
    }

    @DeleteMapping("/delete/publisher/{id}")
    public void deleteCategory(@PathVariable Long id) {
        publisherRepository.deleteById(id);
    }
}
