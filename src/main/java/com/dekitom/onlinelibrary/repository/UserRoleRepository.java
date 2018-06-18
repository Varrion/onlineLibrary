package com.dekitom.onlinelibrary.repository;

import com.dekitom.onlinelibrary.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRoleRepository extends JpaRepository<UserRole,Long> {
}
