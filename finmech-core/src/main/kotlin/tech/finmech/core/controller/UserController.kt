package tech.finmech.core.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

import tech.finmech.core.model.User
import tech.finmech.core.service.UserService

@RestController
class UserController(val userService: UserService) {

    @GetMapping("/create")
    fun createTestUser(): User {
        return userService.createUser("Ivan", "ivan@example.com")
    }
}