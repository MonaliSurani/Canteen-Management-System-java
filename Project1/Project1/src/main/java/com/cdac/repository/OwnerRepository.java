package com.cdac.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cdac.entity.Owner;

public interface OwnerRepository extends JpaRepository<Owner, Integer> {
	
	
	public Optional<Owner> findByEmail(String email);
	public Optional<Owner> findByEmailAndPassword(String email, String password);
}
