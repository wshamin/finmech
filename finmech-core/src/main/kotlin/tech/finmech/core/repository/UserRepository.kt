package tech.finmech.core.repository

import org.springframework.data.jpa.repository.JpaRepository

import tech.finmech.core.model.User

interface UserRepository : JpaRepository<User, Long>