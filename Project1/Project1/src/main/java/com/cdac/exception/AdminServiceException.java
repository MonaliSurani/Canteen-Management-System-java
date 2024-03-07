package com.cdac.exception;

public class AdminServiceException extends RuntimeException{

	public AdminServiceException(String message, Throwable cause) {
		super(message, cause);
	}

	public AdminServiceException(String message) {
		super(message);
	}
}
