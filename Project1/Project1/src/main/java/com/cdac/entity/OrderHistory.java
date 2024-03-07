package com.cdac.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="orders_history")
public class OrderHistory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int history_id;
	
	@OneToOne
	@JoinColumn(name="order_id")
	@JsonBackReference
	private Order orderH;
	
	@ManyToOne
	@JoinColumn(name="employee_id")
	@JsonBackReference(value="employee-orderHistory")
	private Employee employeeH;

	public int getHistory_id() {
		return history_id;
	}

	public void setHistory_id(int history_id) {
		this.history_id = history_id;
	}

	public Order getOrderH() {
		return orderH;
	}

	public void setOrderH(Order orderH) {
		this.orderH = orderH;
	}

	public Employee getEmployeeH() {
		return employeeH;
	}

	public void setEmployeeH(Employee employeeH) {
		this.employeeH = employeeH;
	}
	
	
	
	//private LocalDate orderDate;
	//private double totalAmount;
}
