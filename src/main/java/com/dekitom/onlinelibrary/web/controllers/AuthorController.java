package com.dekitom.onlinelibrary.web.controllers;

import com.dekitom.onlinelibrary.model.Author;
import com.dekitom.onlinelibrary.model.Category;
import com.dekitom.onlinelibrary.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{id}")
    public Author getAuthor(@PathVariable Long id) {
        return authorService.findOne(id);
    }

}
