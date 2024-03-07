package com.cdac.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdac.exception.AdminServiceException;
import com.cdac.entity.Admin;
import com.cdac.repository.AdminRepository;

@Service
@Transactional
public class AdminService {

	@Autowired
	private AdminRepository adminRepository;
	
	public Admin login(String email, String password) {
		Optional<Admin> admin = adminRepository.findByEmailAndPassword(email, password);
		if(admin.isPresent())
			return admin.get();
		else
			throw new AdminServiceException("Invalid Email/Password");
	}
}
