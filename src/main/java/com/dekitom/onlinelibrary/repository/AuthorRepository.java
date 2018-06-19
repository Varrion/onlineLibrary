package com.dekitom.onlinelibrary.repository;

import com.dekitom.onlinelibrary.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author,Long> {

    void deleteById(Long id);
}
