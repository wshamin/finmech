@file:Suppress("INLINE_FROM_HIGHER_PLATFORM")
package tech.finmech.core

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class FinmechCoreApplication

fun main(args: Array<String>) {
    runApplication<FinmechCoreApplication>(*args)
}
