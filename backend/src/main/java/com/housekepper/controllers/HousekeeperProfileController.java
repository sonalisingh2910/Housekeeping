package com.housekepper.controllers;

import com.housekepper.entities.HousekeeperProfile;
import com.housekepper.repositories.HousekeeperProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/housekeepers")
@CrossOrigin(origins = "http://localhost:3000")
public class HousekeeperProfileController {

    @Autowired
    private HousekeeperProfileRepository housekeeperProfileRepository;

    @GetMapping("/all")
    public List<HousekeeperProfile> getAllHousekeepers() {
        return housekeeperProfileRepository.findAll();
    }

    @GetMapping("/{id}")
    public HousekeeperProfile getHousekeeperById(@PathVariable Long id) {
        return housekeeperProfileRepository.findById(id).orElse(null);
    }

    @PostMapping("/register")
    public HousekeeperProfile createHousekeeper(@RequestBody HousekeeperProfile housekeeperProfile) {
        return housekeeperProfileRepository.save(housekeeperProfile);
    }

    @PutMapping("/{id}")
    public HousekeeperProfile updateHousekeeper(@PathVariable Long id, @RequestBody HousekeeperProfile housekeeperProfile) {
        housekeeperProfile.setId(id);
        return housekeeperProfileRepository.save(housekeeperProfile);
    }

    @DeleteMapping("/{id}")
    public void deleteHousekeeper(@PathVariable Long id) {
        housekeeperProfileRepository.deleteById(id);
    }
    
    @GetMapping("/search")
    public List<HousekeeperProfile> searchHousekeepers(@RequestParam String category, @RequestParam String city) {
        return housekeeperProfileRepository.findByCategoryAndCity(category, city);
    }

    
}
