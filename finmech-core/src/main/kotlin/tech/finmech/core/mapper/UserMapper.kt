package tech.finmech.core.mapper

import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.stereotype.Component
import tech.finmech.core.controller.user.UserRequest
import tech.finmech.core.controller.user.UserResponse

typealias ApplicationUser = tech.finmech.core.model.User

@Component
class UserMapper {
    fun toModel(userRequest: UserRequest): ApplicationUser =
        ApplicationUser(
            username = userRequest.username,
            email = userRequest.email,
            password = userRequest.password,
            roles = hashSetOf()
        )

    fun toResponse(user: ApplicationUser): UserResponse =
        UserResponse(
            id = user.id,
            username = user.username,
            email = user.email,
            roles = user.roles
        )

    fun toUserDetails(user: ApplicationUser): UserDetails {
        return User.builder()
            .username(user.username)
            .password(user.password)
            .roles("USER")
            .build()
    }
}
