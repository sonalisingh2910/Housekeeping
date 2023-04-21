package com.housekepper.services;

import java.util.ArrayList;
import java.util.Optional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.housekepper.entities.HousekeeperProfile;
import com.housekepper.repositories.HousekeeperProfileRepository;

@Service
public class HousekeeperProfileServiceImpl implements HousekeeperProfileService {

    @Autowired
    private HousekeeperProfileRepository housekeeperProfileRepository;

    public List<HousekeeperProfile> getAllHousekeepers() {
        return housekeeperProfileRepository.findAll();
    }

    public Optional<HousekeeperProfile> getHousekeeperById(Long id) {
        return housekeeperProfileRepository.findById(id);
    }

    public HousekeeperProfile createHousekeeper(HousekeeperProfile housekeeperProfile) {
        return housekeeperProfileRepository.save(housekeeperProfile);
    }

    public HousekeeperProfile updateHousekeeper(Long id, HousekeeperProfile housekeeperProfile) {
        housekeeperProfile.setId(id);
        return housekeeperProfileRepository.save(housekeeperProfile);
    }

    public void deleteHousekeeper(Long id) {
        housekeeperProfileRepository.deleteById(id);
    }
    
    @Override
    public List<HousekeeperProfile> searchHousekeepers(String category, String city) {
        return housekeeperProfileRepository.findByCategoryAndCity(category, city);
    }
}
