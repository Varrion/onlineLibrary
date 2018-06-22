package com.dekitom.onlinelibrary.service;

import com.dekitom.onlinelibrary.model.Book;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface BookService extends BaseEntityService<Book> {

    void updateBook ( Book book);

    //public void saveFile(Book book, MultipartFile file);
}
