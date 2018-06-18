package com.dekitom.onlinelibrary.service.impl;

import com.dekitom.onlinelibrary.model.Category;
import com.dekitom.onlinelibrary.repository.CategoryRepository;
import com.dekitom.onlinelibrary.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Optional<Category> findById(Long id){
        return Optional.of(categoryRepository.getOne(id));
    }

    @Override
    public Category findOne(Long id){
        return categoryRepository.getOne(id);
    }

    @Override
    public Collection<Category> findAll(){
        return categoryRepository.findAll();
    }

    @Override
    public Category save(Category category){
        return categoryRepository.save(category);
    }
}
