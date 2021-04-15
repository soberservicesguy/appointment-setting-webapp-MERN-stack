#!/usr/bin/env bash
kubectl delete -f mongodb-depl-serv.yaml
kubectl delete -f frontend-depl-serv.yaml
kubectl delete -f timetable-depl-serv.yaml
kubectl delete -f ingress.yaml