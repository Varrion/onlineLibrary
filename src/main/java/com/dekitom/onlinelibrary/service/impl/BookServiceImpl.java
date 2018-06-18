package com.dekitom.onlinelibrary.service.impl;

import com.dekitom.onlinelibrary.model.Book;
import com.dekitom.onlinelibrary.repository.BookRepository;
import com.dekitom.onlinelibrary.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public Optional<Book> findById (Long id) {
        return Optional.of(bookRepository.getOne(id));
    }

    @Override
    public Book findOne(Long id){
        return bookRepository.getOne(id);
    }

    @Override
    public Collection<Book> findAll(){
        return bookRepository.findAll();
    }

    @Override
    public Book save(Book book){
        return bookRepository.save(book);
    }

    @Override
    public List<Book> findByCategoryId(Long id) {
        return bookRepository.findByCategoryId(id);
    }

    @Override
    public List<Book> findByAuthorNameLike(String name) {
        return bookRepository.findByAuthorNameLike(name);
    }

    /*@Override
    public void saveFile(Book book, MultipartFile file) {
        try {
            book.setImage(file.getBytes());
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        this.save(book);
    }*/
}
