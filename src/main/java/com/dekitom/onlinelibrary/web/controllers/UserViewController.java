package com.dekitom.onlinelibrary.web.controllers;

import com.dekitom.onlinelibrary.model.User;
import com.dekitom.onlinelibrary.repository.UserRepository;
import com.dekitom.onlinelibrary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class UserViewController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public User findUserbyCredentials (@RequestParam String username, @RequestParam String password){
        return userRepository.findUserByCredentials(username, password);
    }

}
