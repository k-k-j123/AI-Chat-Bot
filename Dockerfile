# Start from a base OpenJDK image
FROM openjdk:21-jdk-slim

# Set working directory
WORKDIR /app

# Copy the JAR file (adjust this name)
COPY target/*.jar ai.jar

# Run the jar
ENTRYPOINT ["java", "-jar", "ai.jar"]
