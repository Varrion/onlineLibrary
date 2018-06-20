package com.dekitom.onlinelibrary.web.controllers;

import com.dekitom.onlinelibrary.model.Book;
import com.dekitom.onlinelibrary.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "*")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/all")
    public Iterable<Book> getBooks() {
        return bookService.findAll();
    }
}
