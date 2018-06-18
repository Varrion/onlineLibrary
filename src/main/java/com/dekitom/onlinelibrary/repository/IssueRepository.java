package com.dekitom.onlinelibrary.repository;

import com.dekitom.onlinelibrary.model.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueRepository extends JpaRepository<Issue,Long> {
}
