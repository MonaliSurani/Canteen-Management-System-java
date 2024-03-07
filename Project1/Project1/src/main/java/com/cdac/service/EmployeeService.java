package com.cdac.service;

import java.util.List;
import java.util.Optional;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Employee;
import com.cdac.entity.Item;
import com.cdac.exception.EmployeeServiceException;
import com.cdac.repository.EmployeeRepository;

@Service
@Transactional
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	public boolean register(Employee employee) {
		
		Optional<Employee> employeeCheck = employeeRepository.findByEmail(employee.getEmail());
		if(!employeeCheck.isPresent()) {
			Employee savedEmployee = employeeRepository.save(employee);
			return true;
		}
		else
			
			return false;
	}

	public Employee login(String email, String password) {
		Optional<Employee> employee = employeeRepository.findByEmailAndPassword(email, password);
		if(employee.isPresent()) {
			System.out.println(employee.get());
			return employee.get();
		}
		else {
			
			return null;
		}
	}
	
	public Employee update(Employee employee) {

		Optional<Employee> employeeCheck = employeeRepository.findByEmail(employee.getEmail());
		if(employeeCheck.isPresent()) {
			Employee i1 = employeeCheck.get();
			i1.setPassword(employee.getPassword());
			i1.setContact(employee.getContact());
			
			employeeRepository.save(i1);
			return i1;
		}
		else return null;
	}
	
	public Employee approve(Employee employee) {

		Optional<Employee> employeeCheck = employeeRepository.findByEmail(employee.getEmail());
		if(employeeCheck.isPresent()) {
			Employee i1 = employeeCheck.get();
			i1.setApproval(1);
			
			
			employeeRepository.save(i1);
			return i1;
		}
		else return null;
	}

	public boolean delete(Employee employee) {

		Optional<Employee> employeeCheck = employeeRepository.findByEmail(employee.getEmail());
		if(employeeCheck.isPresent()) {
			
			employeeRepository.delete(employeeCheck.get());			
			
			return true;
		}
		else return false;
	}
	
	public List<Employee> fetch() {

		List<Employee> employeeCheck = employeeRepository.findAll();
		return employeeCheck;
	
	}
	
	public Employee fetchEmployeeByEmail(String email) {
		Optional<Employee> employeeCheck = employeeRepository.findByEmployeeName(email);
		return employeeCheck.get();
	}
	
}
