package tech.finmech.core.service

import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

import tech.finmech.core.model.User
import tech.finmech.core.repository.UserRepository

@Service
class UserService(val userRepository: UserRepository) {

    @Transactional
    fun createUser(name: String, email: String): User {
        val user = User(name = name, email = email)
        return userRepository.save(user)
    }
}