package com.liu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testController {

    @RequestMapping("/getMsg")
    public String getMsg(){
        return "Hello,Vue SpringBoot Connect By Axios";
    }
}
