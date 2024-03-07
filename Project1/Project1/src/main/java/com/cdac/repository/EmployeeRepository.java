package com.cdac.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cdac.entity.Employee;
import com.cdac.entity.Item;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
	
	public Optional<Employee> findByEmail(String email);
	public Optional<Employee> findByEmailAndPassword(String email, String password);
	Optional<Employee> findByEmployeeName(String employeeName);
}
