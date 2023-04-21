package com.housekepper.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.housekepper.entities.JobPost;

@Repository
public interface JobPostRepository extends JpaRepository<JobPost, Long> {

	List<JobPost> findByCategory(String category);

}