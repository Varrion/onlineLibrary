package com.dekitom.onlinelibrary.web.controllers;

import com.dekitom.onlinelibrary.service.BookService;
import com.dekitom.onlinelibrary.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LandingController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private BookService bookService;

    @GetMapping("/")
    public String index(Model model){
        model.addAttribute("categories", this.categoryService.findAll());
        model.addAttribute("books", this.bookService.findAll());

        return "index";
    }
}
