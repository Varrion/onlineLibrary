package com.dekitom.onlinelibrary.web.controllers;

import com.dekitom.onlinelibrary.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserViewController {

    @Autowired
    private UserRepository userRepository;

}
