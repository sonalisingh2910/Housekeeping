package com.housekepper.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.housekepper.entities.JobPost;
import com.housekepper.services.JobPostService;

@RestController
@RequestMapping("/jobposts")
public class JobPostController {

    @Autowired
    private JobPostService jobPostService;

    @GetMapping("/all")
    public ResponseEntity<List<JobPost>> getAllJobPosts() {
        List<JobPost> jobPosts = jobPostService.getAllJobPosts();
        return new ResponseEntity<>(jobPosts, HttpStatus.OK);
    }

    @PostMapping("/add-jobs")
    public ResponseEntity<JobPost> createJobPost(@RequestBody JobPost jobPost) {
        JobPost createdJobPost = jobPostService.createJobPost(jobPost);
        return new ResponseEntity<>(createdJobPost, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobPost> getJobPostById(@PathVariable Long id) {
        JobPost jobPost = jobPostService.getJobPostById(id);
        return new ResponseEntity<>(jobPost, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<JobPost> updateJobPost(@PathVariable Long id, @RequestBody JobPost jobPost) {
        JobPost updatedJobPost = jobPostService.updateJobPost(id, jobPost);
        return new ResponseEntity<>(updatedJobPost, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJobPostById(@PathVariable Long id) {
        jobPostService.deleteJobPostById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}