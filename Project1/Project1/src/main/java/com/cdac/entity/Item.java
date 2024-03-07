package com.cdac.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="items")
public class Item {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int item_id;
	
	@Column(name="name")
	private String itemName;
	
	@Column(name="price")
	private double itemPrice;
	
	@Column(name="available_items")
	private int availableNo;
	
	@OneToMany(mappedBy = "item_id")
	@JsonManagedReference(value="item-orderItem")
	private List<OrderItem> orderItem;

	public int getItem_id() {
		return item_id;
	}

	public List<OrderItem> getOrderItem() {
		return orderItem;
	}

	public void setOrderItem(List<OrderItem> orderItem) {
		this.orderItem = orderItem;
	}

	public void setItem_id(int item_id) {
		this.item_id = item_id;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public double getItemPrice() {
		return itemPrice;
	}

	public void setItemPrice(double itemPrice) {
		this.itemPrice = itemPrice;
	}

	public int getAvailableNo() {
		return availableNo;
	}

	public void setAvailableNo(int availableNo) {
		this.availableNo = availableNo;
	}
}
