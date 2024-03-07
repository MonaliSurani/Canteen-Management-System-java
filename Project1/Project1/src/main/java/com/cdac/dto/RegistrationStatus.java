package com.cdac.dto;

public class RegistrationStatus {

	private boolean status;
	private String statusMessage;
	private int employeeId;
	
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
	public int getCustomerId() {
		return employeeId;
	}
	public void setCustomerId(int employeeId) {
		this.employeeId = employeeId;
	}
	
	
}
