package com.housekepper.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "housekeeper_profiles")
public class HousekeeperProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;
    private String phone;
    private String city;
    private String state;
    private Double hourlyRate;
    private Boolean weekendAvailability;
    private Boolean weekdayAvailability;
    private String category;
    private Integer experience;
    private String description;
    
    
	public HousekeeperProfile() {
		super();
		// TODO Auto-generated constructor stub
	}
	public HousekeeperProfile(Long id, String name, String phone, String city, String state, Double hourlyRate,
			Boolean weekendAvailability, Boolean weekdayAvailability, String category, Integer experience,
			String description) {
		super();
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.city = city;
		this.state = state;
		this.hourlyRate = hourlyRate;
		this.weekendAvailability = weekendAvailability;
		this.weekdayAvailability = weekdayAvailability;
		this.category = category;
		this.experience = experience;
		this.description = description;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public Double getHourlyRate() {
		return hourlyRate;
	}
	public void setHourlyRate(Double hourlyRate) {
		this.hourlyRate = hourlyRate;
	}
	public Boolean getWeekendAvailability() {
		return weekendAvailability;
	}
	public void setWeekendAvailability(Boolean weekendAvailability) {
		this.weekendAvailability = weekendAvailability;
	}
	public Boolean getWeekdayAvailability() {
		return weekdayAvailability;
	}
	public void setWeekdayAvailability(Boolean weekdayAvailability) {
		this.weekdayAvailability = weekdayAvailability;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public Integer getExperience() {
		return experience;
	}
	public void setExperience(Integer experience) {
		this.experience = experience;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
    
    

}