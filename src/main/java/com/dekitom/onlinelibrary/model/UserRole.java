package com.dekitom.onlinelibrary.model;

/*import org.springframework.security.core.GrantedAuthority;*/

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "user_role")
public class UserRole  {
    //implements GrantedAuthority

    @Id
    private Long id;

    private String name;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
