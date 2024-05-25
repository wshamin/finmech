package tech.finmech.core.controller.auth

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.server.ResponseStatusException
import tech.finmech.core.service.AuthService

@RestController
@RequestMapping("/api/auth")
class AuthController(
    private val authenticationService: AuthService
) {
    @PostMapping
    fun authenticate(
        @RequestBody authRequest: AuthRequest
    ): AuthResponse = authenticationService.authenticate(authRequest)

    @PostMapping("/refresh")
    fun refreshAccessToken(
        @RequestBody request: RefreshTokenRequest
    ): TokenResponse = authenticationService.refreshAccessToken(request.refreshToken) ?: throw ResponseStatusException(
        HttpStatus.FORBIDDEN, "Invalid refresh token."
    )
}
