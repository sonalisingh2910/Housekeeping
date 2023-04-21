package com.housekepper.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.housekepper.entities.Apply;
import com.housekepper.repositories.ApplyRepository;

@Service
public class ApplyServiceImpl implements ApplyService {

    @Autowired
    private ApplyRepository applyRepository;
    
    @Override
    public Apply saveApply(Apply apply) {
        return applyRepository.save(apply);
    }
    @Override
    public Apply createApply(Apply apply) {
        return applyRepository.save(apply);
    }

    @Override
    public Apply getApplyById(Long id) {
        Optional<Apply> apply = applyRepository.findById(id);
        if (apply.isPresent()) {
            return apply.get();
        }
        return null;
    }

    @Override
    public Apply updateApply(Long id, Apply apply) {
        Optional<Apply> applyOptional = applyRepository.findById(id);
        if (applyOptional.isPresent()) {
            Apply updatedApply = applyOptional.get();
            updatedApply.setName(apply.getName());
            updatedApply.setAadhaarId(apply.getAadhaarId());
            updatedApply.setPhoneNumber(apply.getPhoneNumber());
            return applyRepository.save(updatedApply);
        }
        return null;
    }

    @Override
    public boolean deleteApply(Long id) {
        Optional<Apply> apply = applyRepository.findById(id);
        if (apply.isPresent()) {
            applyRepository.delete(apply.get());
            return true;
        }
        return false;
    }

}