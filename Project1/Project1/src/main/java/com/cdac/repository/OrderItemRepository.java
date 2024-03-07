package com.cdac.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entity.Item;
import com.cdac.entity.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {

}

