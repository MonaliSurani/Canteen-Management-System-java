package com.cdac.exception;

public class OrderItemServiceException extends RuntimeException{

	public OrderItemServiceException() {
		super();
	}

	public OrderItemServiceException(String message, Throwable cause) {
		super(message, cause);
	}

	public OrderItemServiceException(String message) {
		super(message);
	}

}
