package com.yuryalencar.employeeapi.resource;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import com.yuryalencar.employeeapi.event.ResourceCreatedEvent;
import com.yuryalencar.employeeapi.model.Employee;
import com.yuryalencar.employeeapi.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * EmployeeResource Created by: Yury Alencar Lima
 */
@RestController
@RequestMapping("/employees")
public class EmployeeResource {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
	private ApplicationEventPublisher publisher;

    @GetMapping
    public List<Employee> list() {
        return employeeRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Employee> create(@Valid @RequestBody Employee employee, HttpServletResponse response) {
        Employee employeeCreated = employeeRepository.save(employee);

        publisher.publishEvent(new ResourceCreatedEvent(this, response, employeeCreated.getId()));

        return ResponseEntity.status(HttpStatus.CREATED).body(employeeCreated);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> searchEmployeeById(@PathVariable Long id) {
        Employee employee = employeeRepository.findById(id).orElse(null);
        return employee != null ? ResponseEntity.ok(employee) : ResponseEntity.notFound().build();
    }

}