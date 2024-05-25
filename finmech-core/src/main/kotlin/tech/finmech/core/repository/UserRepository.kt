package tech.finmech.core.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import tech.finmech.core.model.User

@Repository
interface UserRepository : JpaRepository<User, Long> {
    fun findByUsername(username: String): User?
    fun existsByUsername(username: String): Boolean
    fun findByEmail(email: String): User?
    fun existsByEmail(username: String): Boolean
}
