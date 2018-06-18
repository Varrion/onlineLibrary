package com.dekitom.onlinelibrary.web.rest;

import com.dekitom.onlinelibrary.model.Book;
import com.dekitom.onlinelibrary.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class BookRestController {

    @Autowired
    private BookService bookService;

    @PostMapping("/add/book")
    public Book saveBook(@RequestBody Book book){
        return this.bookService.save(book);
    }

}
