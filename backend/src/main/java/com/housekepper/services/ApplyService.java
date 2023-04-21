package com.housekepper.services;

import com.housekepper.entities.Apply;

public interface ApplyService {

	Apply createApply(Apply apply);
    Apply getApplyById(Long id);
    Apply updateApply(Long id, Apply apply);
    boolean deleteApply(Long id);
	public Apply saveApply(Apply apply);

}
