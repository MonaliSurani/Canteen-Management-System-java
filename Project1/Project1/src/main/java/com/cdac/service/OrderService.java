package com.cdac.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdac.controller.OrderItemController;
import com.cdac.entity.Order;
//import com.cdac.entity.Order.Status;
import com.cdac.entity.OrderItem;
//import com.cdac.entity.Product;
import com.cdac.repository.ItemRepository;
import com.cdac.repository.OrderRepository;
//import com.cdac.repository.ProductRepository;

@Service
@Transactional
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private OrderItemController orderItemController;
	
	@Autowired
	private BillService billService;

	public void placeOrder(Order order,List<OrderItem> orderItemList) {
		order.setOrderDate(LocalDate.now());
		orderRepository.save(order);
		for(OrderItem orderItem:orderItemList) {
			
			orderItem.setOrder(order);
			
		}
		orderItemController.save(orderItemList);
		
	}
	
}
