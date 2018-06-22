package com.dekitom.onlinelibrary.repository;

import com.dekitom.onlinelibrary.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByUsername(String username);

    User findUserByUsernameAndPassword (String username, String password);
}
