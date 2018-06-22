package com.dekitom.onlinelibrary.web.rest;

import com.dekitom.onlinelibrary.model.Book;
import com.dekitom.onlinelibrary.repository.BookRepository;
import com.dekitom.onlinelibrary.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@CrossOrigin (origins = "*" )
public class BookRestController {

    @Autowired
    private BookService bookService;

    @Autowired
    private BookRepository bookRepository;

    @PostMapping("/add/book")
    public Book saveBook(@RequestBody Book book){
        return this.bookService.save(book);
    }

    @DeleteMapping("/delete/book/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookRepository.deleteById(id);
    }

    @PostMapping("/edit/book/{id}")
    public void editBook (@PathVariable Long id, @RequestBody Book book){
        this.bookService.updateBook(book);
    }
}
