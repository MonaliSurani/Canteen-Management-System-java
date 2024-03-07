package com.cdac.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.EmployeeLoginStatus;
import com.cdac.dto.ItemStatus;
import com.cdac.dto.LoginDetails;
import com.cdac.dto.LoginStatus;
import com.cdac.dto.RegistrationStatus;
import com.cdac.dto.Status;
import com.cdac.entity.Employee;
import com.cdac.entity.Item;
import com.cdac.exception.EmployeeServiceException;
import com.cdac.service.EmployeeService;

@RestController
@CrossOrigin
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	@PostMapping("/employee/register")
	public RegistrationStatus register(@RequestBody Employee employee) {
		
			boolean b = employeeService.register(employee);
			if(b){
			RegistrationStatus status = new RegistrationStatus();
			status.setStatus(true);
			status.setStatusMessage("Customer registered successfully!");
			return status;
			}
			
			else {
			RegistrationStatus status = new RegistrationStatus();
			status.setStatus(false);
			status.setStatusMessage("Customer already registered");
			return status;		
			}
		
	}
	
	@PostMapping("/employee/login")
	public Status login(@RequestBody LoginDetails loginDetails) {
		Employee employee = employeeService.login(loginDetails.getEmail(), loginDetails.getPassword());
		if(employee != null) {			
			EmployeeLoginStatus status = new EmployeeLoginStatus();
			status.setStatus(true);
			status.setMessageIfAny("Login successful!");
			status.setEmployeeId(employee.getEmployee_id());
			status.setName(employee.getEmployeeName());
			status.getRoll();
			status.setApproval(employee.getApproval());
			return status;
		}
		else  {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny("Invalid loginId/Password");
			return status;
		}
	}
	
	@PostMapping("/employee/update")
	public Status update(@RequestBody Employee employee) {
		
		Employee employeeCheck = employeeService.update(employee);
		if(employeeCheck != null) {
			
			EmployeeLoginStatus status = new EmployeeLoginStatus();
			status.setStatus(true);
			
			return status;
		}
		else  {
			EmployeeLoginStatus status = new EmployeeLoginStatus();
			status.setStatus(false);
			
			return status;
		}
	}
	
	@PostMapping("/employee/approve")
	public Status approve(@RequestBody Employee employee) {
		
		Employee employeeCheck = employeeService.approve(employee);
		if(employeeCheck != null) {
			
			EmployeeLoginStatus status = new EmployeeLoginStatus();
			status.setStatus(true);
			status.setApproval(1);
			
			return status;
		}
		else  {
			EmployeeLoginStatus status = new EmployeeLoginStatus();
			status.setStatus(false);
			
			return status;
		}
	}
	
	@PostMapping("/employee/delete")
	public Status delete(@RequestBody Employee employee) {
		
		boolean b = employeeService.delete(employee);
		if(b) {
			
			EmployeeLoginStatus status = new EmployeeLoginStatus();
			status.setStatus(true);
			
			return status;
		}
		else  {
			EmployeeLoginStatus status = new EmployeeLoginStatus();
			status.setStatus(false);
			//status.setStatusMessage("Error in Updation");
			return status;
		}
	}
	
	
	
	@GetMapping("/employee/fetch")
	public List<Employee> fetch() {
		
		List<Employee> employees = employeeService.fetch();
		
		return employees;
	}
	
	
	
}