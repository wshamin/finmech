package tech.finmech.core.model

import jakarta.persistence.*

@Entity
@Table(name = "users")
open class User(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    open var id: Long? = null,
    @Column(nullable = false)
    open var name: String,
    @Column(nullable = false, unique = true)
    open var email: String,
    @Column(nullable = false)
    open var password: String
)
