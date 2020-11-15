FROM openjdk:8-jdk-alpine

LABEL maintainer="nickolay.toropov@gmail.com"

VOLUME /tmp

EXPOSE 8080

ARG JAR_FILE=build/libs/words-service-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} words-service.jar

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/words-service.jar"]