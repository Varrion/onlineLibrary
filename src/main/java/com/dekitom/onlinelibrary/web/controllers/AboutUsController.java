package com.dekitom.onlinelibrary.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AboutUsController {

    @RequestMapping({"/about/us"})
    public String getAboutUs() {
        return "about-us.component";
    }
}
