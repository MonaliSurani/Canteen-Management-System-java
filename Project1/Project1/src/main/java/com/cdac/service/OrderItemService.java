package com.cdac.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdac.entity.Item;
import com.cdac.entity.Order;
import com.cdac.entity.OrderItem;
import com.cdac.exception.ItemOutOfStockException;
import com.cdac.exception.NoSuchOrderAvaiableException;
import com.cdac.exception.OrderItemServiceException;
import com.cdac.repository.ItemRepository;
import com.cdac.repository.OrderItemRepository;
import com.cdac.repository.OrderRepository;

@Service
@Transactional
public class OrderItemService{
	
	@Autowired
	private OrderRepository orderRepository;


	@Autowired
	private OrderItemRepository orderItemRepository;
	
	@Autowired
	private ItemRepository itemRepository;
	

	@Transactional
	public void addOrderItem(OrderItem orderItem) {
		Optional<Order> orderCheck = orderRepository.findById(orderItem.getOrder().getOrder_id());
		if(orderCheck.isPresent()) {
			Optional<Item> itemCheck = itemRepository.findById(orderItem.getItem_id().getItem_id());
			System.out.println(itemCheck.isPresent());
			System.out.println(itemCheck.get().getItem_id()+" "+itemCheck.get().getItemName()+" "+itemCheck.get().getAvailableNo());
			System.out.println(orderItem.getQuantity());
			if(itemCheck.isPresent() && itemCheck.get().getAvailableNo() > orderItem.getQuantity()) {
				orderItemRepository.save(orderItem);
			}
			else {
				throw new ItemOutOfStockException("Item is currently out of stock");
			}
		}
		else {
			throw new NoSuchOrderAvaiableException("Order Unavailable");
		}
	}
	
	
	public boolean delete(OrderItem orderItem) {

		Optional<OrderItem> orderCheck = orderItemRepository.findById(orderItem.getOrder_item_id());
		if(orderCheck.isPresent()) {
			orderItemRepository.delete(orderItem);
			return true;
		}
		else {
			return false;
			
		}
	}
}
