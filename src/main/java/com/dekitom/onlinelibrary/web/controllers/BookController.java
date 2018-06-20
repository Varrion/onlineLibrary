package com.dekitom.onlinelibrary.web.controllers;

import com.dekitom.onlinelibrary.model.Book;
import com.dekitom.onlinelibrary.model.Category;
import com.dekitom.onlinelibrary.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookService.findOne(id);
    }

    @GetMapping("/category/{id}/books")
    public Iterable<Book> getBookByCategory(@PathVariable Long id){
        return bookService.findByCategoryId(id);

    }
}
