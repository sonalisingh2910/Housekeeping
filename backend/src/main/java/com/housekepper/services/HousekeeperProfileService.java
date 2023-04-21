package com.housekepper.services;

import java.util.List;

import com.housekepper.entities.HousekeeperProfile;
import java.util.Optional;

public interface HousekeeperProfileService {
    List<HousekeeperProfile> getAllHousekeepers();
    Optional<HousekeeperProfile> getHousekeeperById(Long id);
    HousekeeperProfile createHousekeeper(HousekeeperProfile housekeeperProfile);
    HousekeeperProfile updateHousekeeper(Long id, HousekeeperProfile housekeeperProfile);
    void deleteHousekeeper(Long id);
    List<HousekeeperProfile> searchHousekeepers(String category, String city);
}