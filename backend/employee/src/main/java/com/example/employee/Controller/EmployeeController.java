package com.example.employee.Controller;

import com.example.employee.Entity.Employee;
import com.example.employee.Service.EmployeeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/employee")
public class EmployeeController {

    @Autowired
    private EmployeeServices employeeServices;


            @PostMapping(value = "/save")
            private String saveEmployee(@RequestBody Employee employees){


            employeeServices.saveOrUpdate(employees);

                return employees.get_id();

            }


            @GetMapping(value="/getAll")
            private Iterable<Employee> getAlEmployee() {

                return employeeServices.listAll();
            }

            @PutMapping(value = "/update/{id}")
         private Employee updateEmployee(@RequestBody Employee employee ,@PathVariable(name = "id")  String id){
                employee.set_id(id);
                employeeServices.saveOrUpdate(employee);
                return employee;
            }

            @DeleteMapping("/delete/{id}")
             private void deleteEmployee(@PathVariable("id") String id){
                employeeServices.deleteEmployee(id);

            }

            @RequestMapping("/search/{id}")
            private Employee getEmployee(@PathVariable(name = "id") String employeeID){
                return employeeServices.getEmployeeById(employeeID);
            }
}
