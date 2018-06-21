package com.dekitom.onlinelibrary.web.rest;

import com.dekitom.onlinelibrary.model.Author;
import com.dekitom.onlinelibrary.repository.AuthorRepository;
import com.dekitom.onlinelibrary.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping ("/admin")
@CrossOrigin(origins="*")
public class AuthorRestController {

    @Autowired
    private AuthorService authorService;

    @Autowired
    private AuthorRepository authorRepository;

    @PostMapping("/add/author")
    public Author saveAuthor(@RequestBody Author author){
        return this.authorService.save(author);
    }

    @DeleteMapping("/delete/author/{id}")
    public void deleteAuthor(@PathVariable Long id) {
        authorRepository.deleteById(id);
    }
}
