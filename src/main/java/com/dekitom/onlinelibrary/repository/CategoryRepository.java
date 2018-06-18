package com.dekitom.onlinelibrary.repository;

import com.dekitom.onlinelibrary.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Long> {
}
