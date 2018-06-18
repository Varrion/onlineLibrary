package com.dekitom.onlinelibrary.web.rest;

import com.dekitom.onlinelibrary.model.User;
import com.dekitom.onlinelibrary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping ("/admin")
/*@CrossOrigin (origins = "http://localhost:4200", allowedHeaders = "*")*/
public class UserRestController {

    @Autowired
    private UserService userService;

    @PostMapping("/add/user")
    public User saveCategory(@RequestBody User user){
        return this.userService.save(user);
    }
}
