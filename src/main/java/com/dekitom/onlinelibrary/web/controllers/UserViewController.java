package com.dekitom.onlinelibrary.web.controllers;

import com.dekitom.onlinelibrary.model.User;
import com.dekitom.onlinelibrary.repository.UserRepository;
import com.dekitom.onlinelibrary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin (origins = "http://localhost:4200", allowedHeaders = "*")
public class UserViewController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public Iterable<User> findAllUsers(){
        return userService.findAll();
    }

    @PostMapping("/login")
    public User findUserbyCredentials (@RequestParam String username, @RequestParam String password){
        return userRepository.findUserByUsernameAndPassword(username, password);
    }

}
