#!/usr/bin/env bash

docker image build -t appointment_frontend .
docker image tag appointment_frontend soberservicesguy/portfolio-images:appointment_frontend
docker image push soberservicesguy/portfolio-images:appointment_frontend