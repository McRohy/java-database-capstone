package com.project.back_end.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import java.util.List;

@Entity
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "name cannot be null")
    @Size(min = 3, max = 100, message = "name must be between 3 and 100 characters")
    private String name;

    @NotNull(message = "specialty cannot be null")
    @Size(min = 3, max = 100, message = "specialty must be between 3 and 50 characters")
    private String specialty;

    @NotNull(message = "email cannot be null")
    @Email(message = "email must be valid (e.g., doctor@example.com)")
    private String email;

    @NotNull(message = "password cannot be null")
    @Size(min = 6, message = "password must have at least 6 characters long")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY) //hidden from the frontend
    private String password;

    @NotNull(message = "phone number cannot be null")
    @Pattern(regexp = "^[0-9]{10}$", message = "phone number must be valid or phone number must be 10 digits long")
    private String phone;

    @ElementCollection
    private List<String> availableTimes;

    public Doctor() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public List<String> getAvailableTimes() {
        return availableTimes;
    }

    public void setAvailableTimes(List<String> availableTimes) {
        this.availableTimes = availableTimes;
    }
}

