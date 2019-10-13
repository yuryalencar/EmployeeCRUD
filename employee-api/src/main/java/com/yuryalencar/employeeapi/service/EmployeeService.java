package com.yuryalencar.employeeapi.service;

import com.yuryalencar.employeeapi.model.Employee;
import com.yuryalencar.employeeapi.repository.EmployeeRepository;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

/**
 * EmployeeService
 */
@Service
public class EmployeeService {
    
    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee update(Long id, Employee employee){
        Employee employeeSaved = employeeRepository.findById(id).orElse(null);

        if (employeeSaved == null) {
            throw new EmptyResultDataAccessException(1);
        }

        BeanUtils.copyProperties(employee, employeeSaved, "id");
        return employeeRepository.save(employeeSaved);
    }
    
}