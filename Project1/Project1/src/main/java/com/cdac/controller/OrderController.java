package com.cdac.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.Status;
import com.cdac.entity.Employee;
import com.cdac.entity.Order;
import com.cdac.entity.OrderItem;
import com.cdac.repository.EmployeeRepository;
import com.cdac.service.BillService;
import com.cdac.service.OrderService;

@RestController
@CrossOrigin
public class OrderController {

	@Autowired
	private OrderService orderService;
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@PostMapping("/placeOrder/{employee_id}")
	public Status placeOrder(@PathVariable int employee_id, @RequestBody List<OrderItem> orderItemList) {
		Optional<Employee> employeeCheck = employeeRepository.findById(employee_id);
		Order order = new Order();
		order.setEmployee(employeeCheck.get());
		orderService.placeOrder(order,orderItemList);
		
		Status status = new Status();
		status.setStatus(true);
		status.setMessageIfAny("Order placed!");
		return status;
	}
}
