package com.dekitom.onlinelibrary.web.controllers;

import com.dekitom.onlinelibrary.model.Category;
import com.dekitom.onlinelibrary.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categories")
@CrossOrigin(origins = "*")
public class CategoryViewController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/all")
    public Iterable<Category> getCategories() {
        return categoryService.findAll();
    }

    @GetMapping("/{id}")
    public Category getCategory(@PathVariable Long id) {
        return categoryService.findOne(id);
    }
}
