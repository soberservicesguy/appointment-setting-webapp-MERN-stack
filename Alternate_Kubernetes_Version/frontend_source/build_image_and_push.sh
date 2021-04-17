\#!/usr/bin/env bash

docker image build -t appointment_frontend_6 .
docker image tag appointment_frontend_6 soberservicesguy/portfolio-images:appointment_frontend_6
docker image push soberservicesguy/portfolio-images:appointment_frontend_6
