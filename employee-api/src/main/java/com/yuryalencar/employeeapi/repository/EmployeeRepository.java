package com.yuryalencar.employeeapi.repository;

import com.yuryalencar.employeeapi.model.Employee;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * EmployeeRepository
 */
public interface EmployeeRepository extends JpaRepository<Employee, Long>{


    
}
