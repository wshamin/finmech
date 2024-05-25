package tech.finmech.core.model

import jakarta.persistence.*
import jakarta.validation.constraints.Email
import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.Size

@Entity
@Table(name = "users")
data class User(
    @Id @GeneratedValue(strategy = GenerationType.AUTO) val id: Long = 0,

    @NotBlank @Size(max = 20) val username: String,

    @NotBlank @Size(max = 50) @Email val email: String,

    @NotBlank @Size(max = 120) val password: String,

    @ManyToMany(fetch = FetchType.LAZY, cascade = [CascadeType.MERGE]) @JoinTable(
        name = "user_roles",
        joinColumns = [JoinColumn(name = "user_id")],
        inverseJoinColumns = [JoinColumn(name = "role_id")]
    ) val roles: MutableSet<Role> = HashSet()
)
