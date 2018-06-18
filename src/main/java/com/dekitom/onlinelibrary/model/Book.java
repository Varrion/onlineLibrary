package com.dekitom.onlinelibrary.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table (name="books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    private String description;

    private Float price;

    private Integer stock;

    @ManyToOne(fetch = FetchType.EAGER)
    private Author author;

    @ManyToOne(fetch = FetchType.EAGER)
    private Category category;

    @ManyToOne(fetch = FetchType.EAGER)
    private Publisher publisher;

    /*@JsonIgnore
    @Lob
    private byte[] image;*/

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    /*public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }*/

    public Publisher getPublisher() {
        return publisher;
    }

    public void setPublisher(Publisher publisher) {
        this.publisher = publisher;
    }

    @Override
    public String toString() {
        return name;
    }
}