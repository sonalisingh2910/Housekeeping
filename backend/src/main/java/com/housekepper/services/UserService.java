package com.housekepper.services;

import java.util.List;

import com.housekepper.entities.User;

public interface UserService {
	
	    List<User> getAllUsers();
	    User getUserById(Long id);
	    User saveUser(User user);
	    void deleteUser(Long id);
	
}
