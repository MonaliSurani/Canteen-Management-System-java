package com.cdac.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entity.Item;

public interface ItemRepository extends JpaRepository<Item, Integer> {

	Optional<Item> findByItemName(String itemName);

}
