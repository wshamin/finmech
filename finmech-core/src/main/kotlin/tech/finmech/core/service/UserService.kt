package tech.finmech.core.service

import org.springframework.dao.DuplicateKeyException
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.RequestBody
import tech.finmech.core.controller.user.UserRequest
import tech.finmech.core.controller.user.UserResponse
import tech.finmech.core.mapper.UserMapper
import tech.finmech.core.model.User
import tech.finmech.core.repository.UserRepository

@Service
class UserService(
    private val passwordEncoder: BCryptPasswordEncoder,
    private val roleService: RoleService,
    private val userMapper: UserMapper,
    private val userRepository: UserRepository
) {
    fun createUser(@RequestBody userRequest: UserRequest): UserResponse? {
        val userModel = userMapper.toModel(userRequest)
        val foundUserByUsername = userRepository.findByUsername(userModel.username)

        if (foundUserByUsername != null) {
            throw DuplicateKeyException("User already exists.")
        }

        val foundUserByEmail = userRepository.findByEmail(userModel.email)

        if (foundUserByEmail != null) {
            throw DuplicateKeyException("Email already in use.")
        }

        val encodedPassword = passwordEncoder.encode(userModel.password)
        val user = User(
            username = userModel.username, email = userModel.email, password = encodedPassword, roles = userModel.roles
        )

        val userRole = roleService.findById(1L)
        user.roles.add(userRole)

        val savedUser = userRepository.save(user)
        return userMapper.toResponse(savedUser)
    }
}
