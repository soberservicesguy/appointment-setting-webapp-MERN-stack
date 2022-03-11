#!/usr/bin/env bash
docker image build -t appointment_frontend ../Containers_Version/image_sources/frontend_service
docker image build -t appointment_timetable ../Containers_Version/image_sources/timetable_service