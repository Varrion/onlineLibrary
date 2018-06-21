package com.dekitom.onlinelibrary.web.rest;

import com.dekitom.onlinelibrary.model.User;
import com.dekitom.onlinelibrary.repository.UserRepository;
import com.dekitom.onlinelibrary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
@CrossOrigin (origins = "http://localhost:4200", allowedHeaders = "*")
public class UserRestController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    public User registerUser(@RequestBody User user) {
        return this.userService.save(user);
    }
}
