kubectl create secret generic regcred \
    --from-file=.dockerconfigjson=./docker_config.json \
    --type=kubernetes.io/dockerconfigjson


kubectl apply -f frontend_deployment.yaml

kubectl apply -f timetable_deployment.yaml

kubectl apply -f frontend_service.yaml

kubectl apply -f timetable_service.yaml

kubectl apply -f mongodb_deployment.yaml

kubectl apply -f mongodb_service.yaml

kubectl apply -f appointment_ingress.yaml