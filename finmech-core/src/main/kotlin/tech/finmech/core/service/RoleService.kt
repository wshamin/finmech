package tech.finmech.core.service

import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import tech.finmech.core.model.Role
import tech.finmech.core.repository.RoleRepository

@Service
class RoleService(private val roleRepository: RoleRepository) {
    @Transactional(readOnly = true)
    fun findById(id: Long): Role {
        return roleRepository.findByIdOrNull(id) ?: throw IllegalArgumentException("Role with id $id not found.")
    }
}
