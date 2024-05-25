package tech.finmech.core.mapper

import org.springframework.stereotype.Component
import tech.finmech.core.controller.auth.TokenResponse

@Component
class AuthMapper {
    fun toTokenResponse(tokenResponse: String): TokenResponse {
        return TokenResponse(
            accessToken = tokenResponse
        )
    }
}
