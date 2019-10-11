package com.yuryalencar.employeeapi.resource;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import com.yuryalencar.employeeapi.model.Employee;
import com.yuryalencar.employeeapi.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

/**
 * EmployeeResource Created by: Yury Alencar Lima
 */
@RestController
@RequestMapping("/employees")
public class EmployeeResource {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> list() {
        return employeeRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Employee employee, HttpServletResponse response) {
        Employee employeeCreated = employeeRepository.save(employee);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
                .buildAndExpand(employeeCreated.getId()).toUri();

        return ResponseEntity.created(uri).body(employeeCreated);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> searchEmployeeById(@PathVariable Long id){
        Optional employee = employeeRepository.findById(id);
        return employee.isPresent() ? ResponseEntity.ok(employee.get()) : ResponseEntity.notFound().build();
    }

}