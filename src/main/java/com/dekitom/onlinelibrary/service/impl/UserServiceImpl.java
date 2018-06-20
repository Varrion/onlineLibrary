package com.dekitom.onlinelibrary.service.impl;

import com.dekitom.onlinelibrary.model.User;
import com.dekitom.onlinelibrary.repository.UserRepository;
import com.dekitom.onlinelibrary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
/*import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;*/
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public Optional<User> findById(Long id){
        return Optional.of(userRepository.getOne(id));
    }

    @Override
    public User findOne(Long id){
        return userRepository.getOne(id);
    }

    @Override
    public Collection<User> findAll(){
        return userRepository.findAll();
    }

    @Override
    public User save(User user){
        return userRepository.save(user);
    }

    @Override
    public User findByUsername(String username) {

        return userRepository.findByUsername(username);
    }
}
