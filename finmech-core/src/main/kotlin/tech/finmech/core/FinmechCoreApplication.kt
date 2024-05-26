package tech.finmech.core

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.ConfigurationPropertiesScan
import org.springframework.boot.runApplication

@SpringBootApplication
@ConfigurationPropertiesScan
class FinmechCoreApplication

fun main(args: Array<String>) {
    runApplication<FinmechCoreApplication>(*args)
}
