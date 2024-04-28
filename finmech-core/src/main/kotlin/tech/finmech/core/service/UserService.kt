package tech.finmech.core.service

import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

import tech.finmech.core.model.User
import tech.finmech.core.repository.UserRepository

@Service
class UserService(val userRepository: UserRepository) {

    @Transactional
    fun registerUser(name: String, email: String, password: String): User {
        if (userRepository.findByEmail(email) != null) {
            throw RuntimeException("User already exists with email: $email")
        }
        val encryptedPassword = encryptPassword(password)
        return userRepository.save(User(name = name, email = email, password = encryptedPassword))
    }

    private fun encryptPassword(password: String): String {
        return password
    }
}