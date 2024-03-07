package com.cdac.service;

import java.util.Optional;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Owner;
import com.cdac.exception.EmployeeServiceException;

import com.cdac.repository.OwnerRepository;

@Service
public class OwnerService {

	@Autowired
	private OwnerRepository ownerRepository;
	
	public boolean register(Owner owner) {
		
		Optional<Owner> ownerCheck = ownerRepository.findByEmail(owner.getEmail());
		if(!ownerCheck.isPresent()) {
			Owner savedOwner = ownerRepository.save(owner);
			return true;
		}
		else
			
			return false;
	}

	public Owner login(String email, String password) {
		Optional<Owner> owner = ownerRepository.findByEmailAndPassword(email, password);
		if(owner.isPresent()) {
			System.out.println(owner.get());
			return owner.get();
		}
		else {
			
			return null;
		}
	}

	public Owner update(Owner owner) {
        Optional<Owner> ownerCheck = ownerRepository.findByEmail(owner.getEmail());
        if(ownerCheck.isPresent()) {
            Owner updatedOwner = ownerCheck.get();
            updatedOwner.setPassword(owner.getPassword());
            updatedOwner.setContact(owner.getContact());
            
            ownerRepository.save(updatedOwner);
            return updatedOwner;
        }
        else return null;
    }

    public boolean delete(Owner owner) {
        Optional<Owner> ownerCheck = ownerRepository.findByEmail(owner.getEmail());
        if(ownerCheck.isPresent()) {
            ownerRepository.delete(ownerCheck.get());            
            return true;
        }
        else return false;
    }
    
    public List<Owner> fetch() {
        List<Owner> owners = ownerRepository.findAll();
        return owners;
    }
    
    public Owner fetchOwnerByEmail(String email) {
        Optional<Owner> ownerCheck = ownerRepository.findByEmail(email);
        return ownerCheck.orElse(null);
    }

}
