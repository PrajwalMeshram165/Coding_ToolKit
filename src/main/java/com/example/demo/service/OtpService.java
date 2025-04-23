package com.example.demo.service;

import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class OtpService {

    private Map<String, String> otpMap = new HashMap<>();

    public String sendOtp(String mobile) {
        String otp = String.valueOf(new Random().nextInt(900000) + 100000);
        otpMap.put(mobile, otp);
        System.out.println("Sending OTP to " + mobile + ": " + otp); // Simulated SMS
        return "OTP sent successfully";
    }

    public boolean verifyOtp(String mobile, String otp) {
        if (otpMap.containsKey(mobile) && otpMap.get(mobile).equals(otp)) {
            otpMap.remove(mobile); // Clear after use
            return true;
        }
        return false;
    }
}
