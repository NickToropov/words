FROM openjdk:8-jdk-alpine

LABEL maintainer="nickolay.toropov@gmail.com"

VOLUME /tmp

EXPOSE 8081

ARG JAR_FILE=build/libs/gateway-service-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} gateway-service.jar

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/gateway-service.jar"]