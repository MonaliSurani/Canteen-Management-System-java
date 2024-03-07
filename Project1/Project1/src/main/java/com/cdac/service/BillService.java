package com.cdac.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdac.exception.ItemOutOfStockException;
import com.cdac.exception.NoSuchOrderAvaiableException;
import com.cdac.entity.Bill;
import com.cdac.entity.Item;
import com.cdac.entity.Order;
import com.cdac.entity.OrderItem;
import com.cdac.repository.BillRepository;
import com.cdac.repository.ItemRepository;
import com.cdac.repository.OrderItemRepository;
import com.cdac.repository.OrderRepository;

@Service
@Transactional
public class BillService {

	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private OrderItemRepository orderItemRepository;
	
	@Autowired
	private BillRepository billRepository;
	
	@Autowired
	private ItemRepository itemRepository;
	
	
	public void generateBill(Order order) {
		double totalAmount = 0;
		double subTotal = 0;
		Optional<Order> currentOrder = orderRepository.findById(order.getOrder_id());
		if(currentOrder.isPresent()) {
			List<OrderItem> orderItemList = currentOrder.get().getOrderItem();
			for(OrderItem orderItem : orderItemList) {
				if(orderItem.getItem_id().getAvailableNo() != 0) {
					
					Optional<Item> item=itemRepository.findById(orderItem.getItem_id().getItem_id());
					int newAvailableNo = item.get().getAvailableNo() - orderItem.getQuantity();
					if(newAvailableNo >= 0) {
					item.get().setAvailableNo(newAvailableNo);
					itemRepository.save(item.get());
					}
					else {
						throw new ItemOutOfStockException("The quantity of the item : "+item.get().getItemName()+" that you have entered is currently unavailable, please reduce the quantity!");
					}
					
					subTotal = orderItem.getItem_id().getItemPrice()*orderItem.getQuantity();
					totalAmount +=subTotal;
				}
				else {
					throw new ItemOutOfStockException("Sorry,the item is currently unavailble!");
				}
			}
		}
		else {
			throw new NoSuchOrderAvaiableException("Order unavailable");
		}
		Bill bill = new Bill();
		bill.setOrder(order);
		bill.setTotalAmount(totalAmount);
		billRepository.save(bill);
		
		
	}
}
