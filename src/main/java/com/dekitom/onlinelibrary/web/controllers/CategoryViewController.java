package com.dekitom.onlinelibrary.web.controllers;

import com.dekitom.onlinelibrary.model.Category;
import com.dekitom.onlinelibrary.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
