package tech.finmech.core.service

import JwtProperties
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.stereotype.Service
import tech.finmech.core.controller.auth.AuthRequest
import tech.finmech.core.controller.auth.AuthResponse
import tech.finmech.core.controller.auth.TokenResponse
import tech.finmech.core.mapper.AuthMapper
import tech.finmech.core.repository.RefreshTokenRepository
import java.util.*

@Service
class AuthService(
    private val authManager: AuthenticationManager,
    private val userDetailsService: UserDetailsServiceImpl,
    private val tokenService: TokenService,
    private val authMapper: AuthMapper,
    private val refreshTokenRepository: RefreshTokenRepository,
    private val jwtProperties: JwtProperties
) {
    fun authenticate(authRequest: AuthRequest): AuthResponse {
        authManager.authenticate(
            UsernamePasswordAuthenticationToken(
                authRequest.username, authRequest.password
            )
        )

        val user = userDetailsService.loadUserByUsername(authRequest.username)

        val accessToken = createAccessToken(user)
        val refreshToken = createRefreshToken(user)

        refreshTokenRepository.save(refreshToken, user)

        return AuthResponse(
            accessToken = accessToken, refreshToken = refreshToken
        )
    }

    fun refreshAccessToken(refreshToken: String): TokenResponse? {
        val extractedUsername = tokenService.extractUsername(refreshToken)

        return extractedUsername?.let { username ->
            val currentUserDetails = userDetailsService.loadUserByUsername(username)
            val refreshTokenUserDetails = refreshTokenRepository.findUserDetailsByToken(refreshToken)

            if (!tokenService.isExpired(refreshToken) && refreshTokenUserDetails?.username == currentUserDetails.username) {
                val accessToken = createAccessToken(currentUserDetails)
                authMapper.toTokenResponse(accessToken)
            } else null
        }
    }

    private fun createAccessToken(user: UserDetails) = tokenService.generate(
        userDetails = user, expirationDate = getAccessTokenExpiration()
    )

    private fun createRefreshToken(user: UserDetails) = tokenService.generate(
        userDetails = user, expirationDate = getRefreshTokenExpiration()
    )

    private fun getAccessTokenExpiration(): Date =
        Date(System.currentTimeMillis() + jwtProperties.accessTokenExpiration)

    private fun getRefreshTokenExpiration(): Date =
        Date(System.currentTimeMillis() + jwtProperties.refreshTokenExpiration)
}
