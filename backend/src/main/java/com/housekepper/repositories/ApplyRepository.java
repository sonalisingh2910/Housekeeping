package com.housekepper.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.housekepper.entities.Apply;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface ApplyRepository extends JpaRepository<Apply, Long> {
	   Apply findByAadhaarId(String aadhaarId);
}

