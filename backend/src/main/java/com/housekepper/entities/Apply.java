package com.housekepper.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Apply")
public class Apply {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    
	    @Column(name = "name")
	    private String name;
	    
	    @Column(name = "aadhaar_id")
	    private String aadhaarId;
	    
	    @Column(name = "phone_number")
	    private String phoneNumber;

		public Apply() {
			super();
			// TODO Auto-generated constructor stub
		}
		
		

		public Apply(Long id, String name, String aadhaarId, String phoneNumber) {
			super();
			this.id = id;
			this.name = name;
			this.aadhaarId = aadhaarId;
			this.phoneNumber = phoneNumber;
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

		public String getAadhaarId() {
			return aadhaarId;
		}

		public void setAadhaarId(String aadhaarId) {
			this.aadhaarId = aadhaarId;
		}

		public String getPhoneNumber() {
			return phoneNumber;
		}

		public void setPhoneNumber(String phoneNumber) {
			this.phoneNumber = phoneNumber;
		}

	   

}
