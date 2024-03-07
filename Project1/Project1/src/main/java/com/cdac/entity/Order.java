package com.cdac.entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="orders")
public class Order {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int order_id;
	
	@Column(name="order_date")
	private LocalDate orderDate;
	
	@ManyToOne
	@JoinColumn(name="employee_id")
	@JsonBackReference
	private Employee employee;
	
	@OneToMany(mappedBy = "order")
	@JsonManagedReference
	private List<OrderItem> orderItem;
	
	/*@OneToOne(mappedBy = "orderB")
	private List<Bill> bill;*/
	
	/*@OneToOne(mappedBy = "orderH")
	private List<OrderHistory> orderHistory;*/

	public int getOrder_id() {
		return order_id;
	}

	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public List<OrderItem> getOrderItem() {
		return orderItem;
	}

	public void setOrderItem(List<OrderItem> orderItem) {
		this.orderItem = orderItem;
	}

	/*public List<Bill> getBill() {
		return bill;
	}

	public void setBill(List<Bill> bill) {
		this.bill = bill;
	}*/

	/*public List<OrderHistory> getOrderHistory() {
		return orderHistory;
	}

	public void setOrderHistory(List<OrderHistory> orderHistory) {
		this.orderHistory = orderHistory;
	}*/

	public LocalDate getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}
	
	

}
