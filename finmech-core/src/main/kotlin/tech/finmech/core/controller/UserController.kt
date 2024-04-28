package tech.finmech.core.controller

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

import tech.finmech.core.controller.dto.UserDto
import tech.finmech.core.model.User
import tech.finmech.core.service.UserService

@RestController
class UserController(val userService: UserService) {

    @PostMapping("/auth/register")
    fun registerUser(@RequestBody userDto: UserDto): ResponseEntity<User> {
        val user = userService.registerUser(userDto.name, userDto.email, userDto.password)
        return ResponseEntity(user, HttpStatus.CREATED)
    }
}