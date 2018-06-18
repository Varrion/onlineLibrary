package com.dekitom.onlinelibrary.service.impl;

import com.dekitom.onlinelibrary.model.Author;
import com.dekitom.onlinelibrary.repository.AuthorRepository;
import com.dekitom.onlinelibrary.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class AuthorServiceImpl implements AuthorService {

    @Autowired
    private AuthorRepository authorRepository;

    @Override
    public Optional<Author> findById(Long id) {
        return Optional.of(authorRepository.getOne(id));
    }

    @Override
    public Author findOne(Long id) {
        return authorRepository.getOne(id);
    }

    @Override
    public Collection<Author> findAll() {
        return authorRepository.findAll();
    }

    @Override
    public Author save(Author category) {
        return authorRepository.save(category);
    }

}
