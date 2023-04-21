package com.housekepper.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.housekepper.entities.HousekeeperProfile;
@Repository
public interface HousekeeperProfileRepository extends JpaRepository<HousekeeperProfile, Long> {
	 List<HousekeeperProfile> findByCategoryAndCity(String category, String city);
	    
}
