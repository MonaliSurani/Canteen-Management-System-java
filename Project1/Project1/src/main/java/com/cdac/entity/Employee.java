package com.cdac.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="employees")
public class Employee {

	@Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int employee_id;
	
	@Column(name="name")
	private String employeeName;
	
	private String email;
	
	private String password;
	
	private long contact;
	
	private int approval;
	
	@OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonManagedReference
	private List<Order> orders;
	
	@OneToMany(mappedBy = "employeeH", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonManagedReference(value="employee-orderHistory")
	private List<OrderHistory> orderHistory;


	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}


	public List<OrderHistory> getOrderHistory() {
		return orderHistory;
	}

	public void setOrderHistory(List<OrderHistory> orderHistory) {
		this.orderHistory = orderHistory;
	}

	public int getEmployee_id() {
		return employee_id;
	}

	public void setEmployee_id(int employee_id) {
		this.employee_id = employee_id;
	}

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getContact() {
		return contact;
	}

	public void setContact(long contact) {
		this.contact = contact;
	}

	public int getApproval() {
		return approval;
	}

	public void setApproval(int approval) {
		this.approval = approval;
	}
	
}
