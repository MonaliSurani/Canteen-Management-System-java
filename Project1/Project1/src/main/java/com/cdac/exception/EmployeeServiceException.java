package com.cdac.exception;

public class EmployeeServiceException extends RuntimeException {

	public  EmployeeServiceException() {
		super();
	}

	public EmployeeServiceException(String message, Throwable cause) {
		super(message, cause);
	}

	public  EmployeeServiceException(String message) {
		super(message);
	}

	
}
