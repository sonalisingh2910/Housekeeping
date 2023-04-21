package com.housekepper.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.housekepper.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
 
}