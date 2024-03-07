package com.cdac.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="order_items")
public class OrderItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int order_item_id;
	
	@ManyToOne
	@JoinColumn(name="order_id")
	@JsonBackReference
	private Order order;
	
	@ManyToOne
	@JoinColumn(name="item_id")
	@JsonBackReference(value="item-orderItem")
	private Item item_id;
	
	private int quantity;

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getOrder_item_id() {
		return order_item_id;
	}

	public void setOrder_item_id(int order_item_id) {
		this.order_item_id = order_item_id;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public Item getItem_id() {
		return item_id;
	}

	public void setItem_id(Item item_id) {
		this.item_id = item_id;
	}
	
	
	//private int order_id;
	//private int item_id;
}
