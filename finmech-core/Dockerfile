# Base image for building the project
FROM ghcr.io/graalvm/jdk-community:21 as build

# Set the working directory in the container
WORKDIR /workspace/app

# Copy gradle executable files and dependency cache to speed up the build
COPY gradlew .
COPY gradle gradle
COPY build.gradle.kts .
COPY settings.gradle.kts .
COPY src src

# Install xargs, necessary for building
RUN microdnf install findutils

# Build
RUN ./gradlew build -x test

# Base image for running
FROM ghcr.io/graalvm/jdk-community:21

# Set the working directory in the new image
WORKDIR /app

# Copy only the built artifact from the previous stage
COPY --from=build /workspace/app/build/libs/*.jar app.jar

# Expose port
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
