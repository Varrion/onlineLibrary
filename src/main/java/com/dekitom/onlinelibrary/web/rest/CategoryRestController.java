package com.dekitom.onlinelibrary.web.rest;

import com.dekitom.onlinelibrary.model.Category;
import com.dekitom.onlinelibrary.repository.CategoryRepository;
import com.dekitom.onlinelibrary.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping ("/admin")
public class CategoryRestController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private CategoryRepository categoryRepository;

    @PostMapping ("/add/category")
    public Category saveCategory(@RequestBody Category category) {
        return this.categoryService.save(category);
    }

    @DeleteMapping("/delete/category/{id}")
    public void deleteCategory(@PathVariable Long id) {
        categoryRepository.deleteById(id);
    }
}
