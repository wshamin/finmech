package tech.finmech.core.model

import jakarta.persistence.*
import org.springframework.security.core.GrantedAuthority

@Entity
@Table(name = "roles")
data class Role(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Int = 0,

    @Enumerated(EnumType.STRING) @Column(length = 20) val roleName: RoleName
) : GrantedAuthority {
    override fun getAuthority() = roleName.name
}
