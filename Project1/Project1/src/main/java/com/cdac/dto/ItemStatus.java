package com.cdac.dto;

public class ItemStatus {
	
	

		private boolean status;
		private String statusMessage;
		private int employeeId;
		private int itemId;
		private int availableNo;
		private String itemName;
		private double itemPrice;
		public boolean isStatus() {
			return status;
		}
		public void setStatus(boolean status) {
			this.status = status;
		}
		public String getStatusMessage() {
			return statusMessage;
		}
		public void setStatusMessage(String statusMessage) {
			this.statusMessage = statusMessage;
		}
		public int getEmployeeId() {
			return employeeId;
		}
		public void setEmployeeId(int employeeId) {
			this.employeeId = employeeId;
		}
		public int getItemId() {
			return itemId;
		}
		public void setItemId(int itemId) {
			this.itemId = itemId;
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
		public double getItemPrice() {
			return itemPrice;
		}
		public void setItemPrice(double itemPrice) {
			this.itemPrice = itemPrice;
		}
		
		
		
		



}
