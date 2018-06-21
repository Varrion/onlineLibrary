package com.dekitom.onlinelibrary.web.controllers;

import com.dekitom.onlinelibrary.model.Book;
import com.dekitom.onlinelibrary.model.Category;
import com.dekitom.onlinelibrary.repository.BookRepository;
import com.dekitom.onlinelibrary.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "*")
public class BookController {

    @Autowired
    private BookService bookService;

    @Autowired
    private BookRepository bookRepository;

    @GetMapping("/all")
    public Iterable<Book> getBooks() {
        return bookService.findAll();
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookService.findOne(id);
    }

    @GetMapping("/by-category/{id}")
    public Iterable<Book> getBooksByCategory(@PathVariable Long id){
        return bookRepository.findBooksByCategoryId(id);
    }

    @GetMapping("/by-author/{id}")
    public Iterable<Book> getBooksByAuthor(@PathVariable Long id){
        return bookRepository.findBooksByAuthorId(id);
    }

    @GetMapping("/by-publisher/{id}")
    public Iterable<Book> getBooksByPublisher(@PathVariable Long id){
        return bookRepository.findBooksByPublisherId(id);
    }
}
