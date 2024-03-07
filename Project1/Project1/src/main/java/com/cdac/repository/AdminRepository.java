package com.cdac.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer>{
	public Optional<Admin> findByEmail(String email);
	public Optional<Admin> findByEmailAndPassword(String email, String password);
}
