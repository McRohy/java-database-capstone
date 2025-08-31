Architecture Summary

This Spring Boot application uses both MVC and REST controllers. 
Thymeleaf templates are used for the Admin and Doctor dashboards, while REST APIs serve all other modules. 

The application interacts with two databases—MySQL and MongoDB. 
  MySQL - stores relational entites such as Patient, Doctor, Appointment, Admin 
        - uses JPA entities
  MongoDB - stores prescriptions
          -  uses document models.
   
All controllers route requests through a common service layer, which in turn delegates to the appropriate repositories.
This architecture ensures a clear separation of concerns.



Numbered flow of data and control

1. User accesses AdminDashboard or Appointment pages.
2. The action is routed to the appropriate Thymeleaf or REST controller.
3. The controllers call the service layer to process logic for the requested operations.
4. The service layer delegates operations to etheir MySQL Repository or MongoDB Repository based on request.
5. MySQL Repositories access the MySQL Database through JPA Entities, while MongoDB Repository accesses the MongoDB Database through Document models.
6. The databases return the requested data back through their respective repository layers to the service layer.
7. The service layer processes and formats the data and  returns it to the appropriate controllers.
