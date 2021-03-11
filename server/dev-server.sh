#!/bin/bash
set -e

mvn -e spring-boot:run \
    -Dspring-boot.run.profiles=dev \
    -Dspring.config.location=file:./src/test/resources/application-test.yml"
