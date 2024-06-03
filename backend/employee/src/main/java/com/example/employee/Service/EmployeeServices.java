package com.example.employee.Service;

import com.example.employee.Entity.Employee;
import com.example.employee.Repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServices {

    @Autowired
    private EmployeeRepo employeeRepo;
    public void saveOrUpdate(Employee employees) {

        employeeRepo.save(employees);
    }

    public Iterable<Employee> listAll() {
        return  this.employeeRepo.findAll();
    }

    public void deleteEmployee(String id) {
        employeeRepo.deleteById(id);
    }

    public Employee getEmployeeById(String employeeId) {
        return employeeRepo.findById(employeeId).get();
    }

//    public Employee getEmployeeByFirstName(String employeeFname) {
//        return (Employee) employeeRepo.findByFirstName(employeeFname);
//    }
}
