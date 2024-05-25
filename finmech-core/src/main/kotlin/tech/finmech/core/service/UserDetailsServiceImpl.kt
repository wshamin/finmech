package tech.finmech.core.service

import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service
import tech.finmech.core.mapper.UserMapper
import tech.finmech.core.repository.UserRepository

@Service
class UserDetailsServiceImpl(
    private val userMapper: UserMapper, private val userRepository: UserRepository
) : UserDetailsService {
    override fun loadUserByUsername(username: String): UserDetails =
        userRepository.findByUsername(username)?.let { userMapper.toUserDetails(it) }
            ?: throw UsernameNotFoundException("Not found!")

    fun loadUserByEmail(email: String): UserDetails =
        userRepository.findByEmail(email)?.let { userMapper.toUserDetails(it) }
            ?: throw UsernameNotFoundException("Not found!")
}
