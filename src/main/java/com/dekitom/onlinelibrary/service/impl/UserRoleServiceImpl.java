package com.dekitom.onlinelibrary.service.impl;

import com.dekitom.onlinelibrary.model.UserRole;
import com.dekitom.onlinelibrary.repository.UserRoleRepository;
import com.dekitom.onlinelibrary.service.UserRoleService;
import com.dekitom.onlinelibrary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
/*import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;*/
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserRoleServiceImpl implements UserRoleService {

    @Autowired
    private UserRoleRepository userRoleRepository;

    @Override
    public List<UserRole> findAll() {
        return userRoleRepository.findAll();
    }
}
