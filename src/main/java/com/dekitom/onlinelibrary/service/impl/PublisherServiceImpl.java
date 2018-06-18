package com.dekitom.onlinelibrary.service.impl;

import com.dekitom.onlinelibrary.model.Publisher;
import com.dekitom.onlinelibrary.repository.PublisherRepository;
import com.dekitom.onlinelibrary.service.PublisherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class PublisherServiceImpl implements PublisherService {

    @Autowired
    private PublisherRepository publisherRepository;

    @Override
    public Optional<Publisher> findById(Long id){
        return Optional.of(publisherRepository.getOne(id));
    }

    @Override
    public Publisher findOne(Long id){
        return publisherRepository.getOne(id);
    }

    @Override
    public Collection<Publisher> findAll(){
        return publisherRepository.findAll();
    }

    @Override
    public Publisher save(Publisher publisher){
        return publisherRepository.save(publisher);
    }
}
