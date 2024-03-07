package com.cdac.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdac.entity.Order;

import com.cdac.entity.OrderItem;
import com.cdac.dto.ItemDetails;
import com.cdac.entity.Employee;
import com.cdac.entity.Item;
import com.cdac.repository.ItemRepository;
import com.cdac.repository.OrderRepository;


@Service
@Transactional
public class ItemService {

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private ItemRepository itemRepository;

	public Item save(Item item) {
		//suppose we need to check if this customer has already registered before
		Optional<Item> itemCheck = itemRepository.findByItemName(item.getItemName());
		if(!itemCheck.isPresent()) {
			Item savedItem = itemRepository.save(item);
			return savedItem;
		}
		else
			
			return null;
	}
	
	public Item update(Item item) {

		Optional<Item> itemCheck = itemRepository.findByItemName(item.getItemName());
		if(itemCheck.isPresent()) {
			Item i1 = itemCheck.get();
			i1.setAvailableNo(item.getAvailableNo());
			i1.setItemPrice(item.getItemPrice());
			
			itemRepository.save(i1);
			return i1;
		}
		else return null;
	}

	public boolean delete(int item_id) {

		Optional<Item> itemCheck = itemRepository.findById(item_id);
		if(itemCheck.isPresent()) {
			itemRepository.delete(itemCheck.get());
			return true;
		}
		else {
			return false;
			
		}
	}
	public List<Item> fetch() {

		List<Item> itemCheck = itemRepository.findAll();
		return itemCheck;
	
	}
	
	public Item fetchItemByName(String itemName) {
		Optional<Item> itemCheck = itemRepository.findByItemName(itemName);
		return itemCheck.get();
	}
}
