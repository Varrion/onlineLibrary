package com.dekitom.onlinelibrary.repository;

import com.dekitom.onlinelibrary.model.Book;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book,Long> {

    List<Book> findByCategoryId(Long id);

    Optional<Book> findById(Long id);

    @EntityGraph(type = EntityGraph.EntityGraphType.FETCH,
            attributePaths = {"category", "author"})
    List<Book> findAll();

    List<Book> findByAuthorNameLike(String author);

    void deleteById(Long id);
}
