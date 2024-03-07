package com.cdac.dto;

public class ItemDetails {

	private String itemName;
	private double itemPrice;
	private int availableNo;

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

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
		
	}

	
}
