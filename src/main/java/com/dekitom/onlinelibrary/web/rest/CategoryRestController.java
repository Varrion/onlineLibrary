package com.dekitom.onlinelibrary.web.rest;

import com.dekitom.onlinelibrary.model.Category;
import com.dekitom.onlinelibrary.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("/admin")
public class CategoryRestController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping ("/add/category")
    public Category saveCategory(@RequestParam("name") Category category){
        return this.categoryService.save(category);
    }
}
