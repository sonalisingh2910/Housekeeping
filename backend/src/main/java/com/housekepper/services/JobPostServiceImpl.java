package com.housekepper.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.housekepper.entities.JobPost;
import com.housekepper.repositories.JobPostRepository;

@Service
public class JobPostServiceImpl implements JobPostService {

	@Autowired
	private JobPostRepository jobPostRepository;

	@Override
	public JobPost createJobPost(JobPost jobPost) {
	    return jobPostRepository.save(jobPost);
	}

	@Override
	public List<JobPost> getAllJobPosts() {
	    return jobPostRepository.findAll();
	}

	@Override
	public JobPost getJobPostById(Long id) {
	    Optional<JobPost> jobPost = jobPostRepository.findById(id);
	    if (jobPost.isPresent()) {
	        return jobPost.get();
	    } else {
	        return null;
	    }
	}

	@Override
	public JobPost updateJobPost(Long id, JobPost jobPost) {
	    Optional<JobPost> optionalJobPost = jobPostRepository.findById(id);
	    if (optionalJobPost.isPresent()) {
	        JobPost existingJobPost = optionalJobPost.get();
	        existingJobPost.setTitle(jobPost.getTitle());
	        existingJobPost.setDescription(jobPost.getDescription());
	        existingJobPost.setRequirements(jobPost.getRequirements());
	        existingJobPost.setLocation(jobPost.getLocation());
	        existingJobPost.setSalary(jobPost.getSalary());
	        return jobPostRepository.save(existingJobPost);
	    } else {
	        return null;
	    }
	}

	@Override
	public void deleteJobPostById(Long id) {
	    jobPostRepository.deleteById(id);
	}
	
	@Override
	public List<JobPost> getAllJobPostsByCategory(String category) {
	    List<JobPost> jobPosts = jobPostRepository.findByCategory(category);
	    return jobPosts;
	}
}