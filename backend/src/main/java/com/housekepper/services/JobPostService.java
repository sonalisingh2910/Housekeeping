package com.housekepper.services;



import java.util.List;

import com.housekepper.entities.JobPost;



public interface JobPostService {

    public JobPost createJobPost(JobPost jobPost);

    public List<JobPost> getAllJobPosts();

    public JobPost getJobPostById(Long id);

    public JobPost updateJobPost(Long id, JobPost jobPost);

    public void deleteJobPostById(Long id);
    public List<JobPost> getAllJobPostsByCategory(String category);

}
