package tech.finmech.core.controller.user

data class UserRequest(
    val username: String, val email: String, val password: String
)
