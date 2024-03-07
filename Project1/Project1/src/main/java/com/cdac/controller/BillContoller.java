package com.cdac.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.Status;
import com.cdac.entity.Order;
import com.cdac.service.BillService;

@RestController
@CrossOrigin
public class BillContoller {

	@Autowired
	private BillService billService;
	
	@PostMapping("/generateBill")
	public Status generateBill(@RequestBody Order order) {
		billService.generateBill(order);
		
		Status status = new Status();
		status.setStatus(true);
		status.setMessageIfAny("Bill generated");
		return status;
	}
}
