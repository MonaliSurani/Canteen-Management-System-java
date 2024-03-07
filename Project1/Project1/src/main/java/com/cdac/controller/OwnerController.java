package com.cdac.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import com.cdac.dto.LoginDetails;

import com.cdac.dto.OwnerLoginStatus;
import com.cdac.dto.RegistrationStatus;
import com.cdac.dto.Status;
import com.cdac.entity.Owner;

import com.cdac.service.OwnerService;

@RestController
@CrossOrigin
public class OwnerController {

	@Autowired
	private OwnerService ownerService;
	
	@PostMapping("/owner/register")
	public RegistrationStatus register(@RequestBody Owner owner) {
		
			boolean b = ownerService.register(owner);
			if(b){
			RegistrationStatus status = new RegistrationStatus();
			status.setStatus(true);
			status.setStatusMessage("Owner registered successfully!");
			return status;
			}
			
			else {
			RegistrationStatus status = new RegistrationStatus();
			status.setStatus(false);
			status.setStatusMessage("Owner already registered");
			return status;		
			}
		
	}
	
	@PostMapping("/owner/login")
	public Status login(@RequestBody LoginDetails loginDetails) {
		Owner owner = ownerService.login(loginDetails.getEmail(), loginDetails.getPassword());
		if(owner != null) {			
			OwnerLoginStatus status = new OwnerLoginStatus();
			status.setStatus(true);
			status.setMessageIfAny("Login successful!");
			status.setOwnerId(owner.getOwner_id());
			status.setName(owner.getOwnerName());
			status.getRoll();
			return status;
		}
		else  {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny("Invalid loginId/Password");
			return status;
		}
	}
	
	@PostMapping("/owner/update")
    public Status update(@RequestBody Owner owner) {
        
        Owner ownerCheck = ownerService.update(owner);
        if(ownerCheck != null) {
            
            OwnerLoginStatus status = new OwnerLoginStatus();
            status.setStatus(true);
            
            return status;
        }
        else {
            OwnerLoginStatus status = new OwnerLoginStatus();
            status.setStatus(false);
            
            return status;
        }
    }
    
    @PostMapping("/owner/delete")
    public Status delete(@RequestBody Owner owner) {
        
        boolean b = ownerService.delete(owner);
        if(b) {
            
            OwnerLoginStatus status = new OwnerLoginStatus();
            status.setStatus(true);
            
            return status;
        }
        else {
            OwnerLoginStatus status = new OwnerLoginStatus();
            status.setStatus(false);
            
            return status;
        }
    }

    @GetMapping("/owner/fetch")
    public List<Owner> fetch() {
        
        List<Owner> owners = ownerService.fetch();
        
        return owners;
    }
	
}