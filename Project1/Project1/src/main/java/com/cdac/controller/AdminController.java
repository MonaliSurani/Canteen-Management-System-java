package com.cdac.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.LoginDetails;
import com.cdac.dto.LoginStatus;
import com.cdac.dto.Status;
import com.cdac.exception.AdminServiceException;
import com.cdac.entity.Admin;
import com.cdac.service.AdminService;

@RestController
@CrossOrigin
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	@PostMapping("/admin/login")
	public Status login(@RequestBody LoginDetails loginDetails) {
		try {
			Admin admin = adminService.login(loginDetails.getEmail(), loginDetails.getPassword());
			LoginStatus status = new LoginStatus();
			status.setStatus(true);
			status.setMessageIfAny("Login successful!");
			status.setAdminId(admin.getAdmin_id());
			status.setName(admin.getAdminName());
			
			status.getRoll();
			return status;
		}
		catch (AdminServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			return status;
		}
	}
}
