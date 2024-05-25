package tech.finmech.core.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import tech.finmech.core.model.Role

@Repository
interface RoleRepository : JpaRepository<Role, Long>
