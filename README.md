# Words

This is a demo project to test Spring boot + Angular + WebSockets. Video: https://youtu.be/BYYaU7GpIuI. 

## Run with `docker`
To run project with docker execute the following commands from the project root:
```
$ ./docker-build-images.sh

$ docker-compose up
```
It will build all binaries/services, create docker images for them and run container based on created images.
After containers run open in browser:
```
http://localhost:8081
```

## Run
To run `words-service` execute the following command from the project root:
```
./gradlew words-service:bootRun
```

## DB Setup (postgresql)

Download and install [Posgtresql 9.6](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads).

Create a database with name `words`. And add an extension `uuid_ossp` (generates universally unique identifiers).

All necessary schemas will be generated with [Liquibase](https://www.liquibase.org/).
