package com.dekitom.onlinelibrary.web.controllers;

import com.dekitom.onlinelibrary.model.Author;
import com.dekitom.onlinelibrary.service.AuthorService;
import org.hibernate.validator.constraints.URL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/authors")
@CrossOrigin(origins="*")
public class AuthorController {

    @Autowired
    private AuthorService authorService;


    @GetMapping("/all")
    public Iterable<Author> getAuthors(){
        return authorService.findAll();
    }

}
