package com.housekepper.controllers;

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

import com.housekepper.entities.Apply;
import com.housekepper.services.ApplyService;

@RestController
@RequestMapping("/apply")
public class ApplyController {

    @Autowired
    private ApplyService applyService;

    @PostMapping("/create")
    public ResponseEntity<?> createApply(@RequestBody Apply apply) {
        Apply newApply = applyService.createApply(apply);
        return ResponseEntity.status(HttpStatus.CREATED).body(newApply);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getApplyById(@PathVariable Long id) {
        Apply apply = applyService.getApplyById(id);
        if (apply == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Apply not found");
        }
        return ResponseEntity.ok(apply);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateApply(@PathVariable Long id, @RequestBody Apply apply) {
        Apply updatedApply = applyService.updateApply(id, apply);
        if (updatedApply == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Apply not found");
        }
        return ResponseEntity.ok(updatedApply);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteApply(@PathVariable Long id) {
        boolean success = applyService.deleteApply(id);
        if (!success) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Apply not found");
        }
        return ResponseEntity.ok("Apply deleted successfully");
    }

}