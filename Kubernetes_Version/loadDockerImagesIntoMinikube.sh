#!/usr/bin/env bash

# minikube start
echo "enabling kubernetes to access docker daemon"
echo 'running eval $(minikube docker-env)'
eval $(minikube docker-env)

echo " "
echo "running minikube image load appointment_frontend"
echo " "
minikube image load appointment_frontend

echo " "
echo "running minikube image load appointment_timetable"
echo " "
minikube image load appointment_timetable