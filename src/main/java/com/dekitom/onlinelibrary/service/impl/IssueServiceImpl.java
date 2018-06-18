package com.dekitom.onlinelibrary.service.impl;


import com.dekitom.onlinelibrary.model.Issue;
import com.dekitom.onlinelibrary.repository.IssueRepository;
import com.dekitom.onlinelibrary.service.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class IssueServiceImpl implements IssueService {

    @Autowired
    private IssueRepository issueRepository;

    @Override
    public Optional<Issue> findById(Long id){
        return Optional.of(issueRepository.getOne(id));
    }

    @Override
    public Issue findOne(Long id){
        return issueRepository.getOne(id);
    }

    @Override
    public Collection<Issue> findAll(){
        return issueRepository.findAll();
    }

    @Override
    public Issue save(Issue issue){
        return issueRepository.save(issue);
    }
}
