package tech.finmech.core.controller.user

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.server.ResponseStatusException
import tech.finmech.core.service.UserService

@RestController
@RequestMapping("/api/user")
class UserController(
    private val userService: UserService
) {
    @PostMapping
    fun create(@RequestBody userRequest: UserRequest): UserResponse =
        userService.createUser(userRequest) ?: throw ResponseStatusException(
            HttpStatus.BAD_REQUEST, "Cannot create user."
        )
}
