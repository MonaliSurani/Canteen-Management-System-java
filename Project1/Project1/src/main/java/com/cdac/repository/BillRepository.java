package com.cdac.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entity.Bill;
import com.cdac.entity.Order;

public interface BillRepository extends JpaRepository<Bill, Integer>{

}
