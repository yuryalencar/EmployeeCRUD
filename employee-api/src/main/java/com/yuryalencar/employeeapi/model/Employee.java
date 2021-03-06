package com.yuryalencar.employeeapi.model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import javax.validation.constraints.Email;
/**
 * Employee Created by: Yury Alencar Lima
 */
@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min=2, max=30)
    private String name;

    @NotNull
    @Size(min=2, max=50)
    private String lastName;
    
    @NotNull
    @Email
    private String email;
    
    @NotNull
    @Size(min=11, max=11)
    @Pattern(regexp="^\\d+$")
    private String nisPis;

    public Employee() {
    }

    public Employee(Long id, String name, String lastName, String email, String nisPis) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.nisPis = nisPis;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNisPis() {
        return this.nisPis;
    }

    public void setNisPis(String nisPis) {
        this.nisPis = nisPis;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Employee)) {
            return false;
        }
        Employee employee = (Employee) o;
        return Objects.equals(id, employee.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, lastName, email, nisPis);
    }

    @Override
    public String toString() {
        return "{" + " id='" + getId() + "'" + ", name='" + getName() + "'" + ", lastName='" + getLastName() + "'"
                + ", email='" + getEmail() + "'" + ", nisPis='" + getNisPis() + "'" + "}";
    }

}
