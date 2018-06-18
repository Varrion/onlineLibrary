package com.dekitom.onlinelibrary.web.rest;

import com.dekitom.onlinelibrary.model.Author;
import com.dekitom.onlinelibrary.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("/admin")
public class AuthorRestController {

    @Autowired
    private AuthorService authorService;

    @PostMapping("/add/author")
    public Author saveAuthor(@RequestBody Author author){
        return this.authorService.save(author);
    }
}
