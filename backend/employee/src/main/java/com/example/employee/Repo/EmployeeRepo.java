package com.example.employee.Repo;

import com.example.employee.Entity.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface EmployeeRepo extends MongoRepository<Employee ,String> {
//    List<Object> findByFirstName(String employeeFname);
}
