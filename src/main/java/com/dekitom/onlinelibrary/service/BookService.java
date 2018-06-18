package com.dekitom.onlinelibrary.service;

import com.dekitom.onlinelibrary.model.Book;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface BookService extends BaseEntityService<Book> {

    List<Book> findByCategoryId(Long id);
    List<Book> findByAuthorNameLike(String name);
    //public void saveFile(Book book, MultipartFile file);
}
