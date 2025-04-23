package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.OtpService;
import com.example.demo.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserRepository userRepository;
    private final OtpService otpService;
    private final UserService userService;

    public AuthController(UserRepository userRepository, OtpService otpService, UserService userService) {
        this.userRepository = userRepository;
        this.otpService = otpService;
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        User existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok("Login Successful");
        }
        return ResponseEntity.status(401).body("Invalid Credentials");
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        User existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser != null) {
            return ResponseEntity.status(400).body("Username already taken");
        }
        userRepository.save(user);
        return ResponseEntity.ok("User Registered Successfully");
    }

    @PostMapping("/send-otp")
    public String sendOtp(@RequestBody User user) {
        return otpService.sendOtp(user.getMobile());
    }

    @PostMapping("/verify-otp")
    public String verifyOtp(@RequestBody User user) {
        boolean verified = otpService.verifyOtp(user.getMobile(), user.getOtp());
        return verified ? "OTP verified" : "Invalid OTP";
    }
}
