package tech.finmech.core.controller.auth

data class AuthResponse(
    val accessToken: String, val refreshToken: String
)
