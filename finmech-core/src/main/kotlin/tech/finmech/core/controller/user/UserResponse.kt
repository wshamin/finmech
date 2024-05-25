package tech.finmech.core.controller.user

import tech.finmech.core.model.Role

data class UserResponse(
    val id: Long, val username: String, val email: String, val roles: MutableSet<Role>
)
