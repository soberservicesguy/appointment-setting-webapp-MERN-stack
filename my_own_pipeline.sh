baseURL_for_App='http://localhost:3001'
baseURL_for_Containerized_Version='http://localhost:80'
baseURL_for_Kubernetes_Version='http://hello-world.info:80'
baseURL_for_App_engine='https://portfolio-apps-311617.uc.r.appspot.com'
gcp_keyFilename='portfolio-apps-311617-9e5ae7843e5d.json'
gcp_projectId='portfolio-apps-311617'
gcp_bucket='portfolio_content_app'

echo 'Entering Project Path'
echo 'installing yaml by npm install'
npm install

echo 'Generating App Folder'
node set_baseURL_in_utilities.js $baseURL_for_App
echo 'baseURL set'
cd App/frontend
npm install
npm run build
rm -rf ../backend/build/*
cp ./build/* ../backend/build/
cd ..

echo 'Generating Containerzied_Version Folder'
node set_baseURL_in_utilities.js $baseURL_for_Containerized_Version
cd App/frontend
npm run build
rm -rf ../../Containers_Version/image_sources/frontend_service/build/*
cp ./build/* ../../Containers_Version/image_sources/frontend_service/build/
cd ..


echo 'Generating Kubernetes_Version Folder'
node set_baseURL_in_utilities.js $baseURL_for_Kubernetes_Version
cd App/frontend
npm run build
rm -rf node_modules
rm -rf ../../Kubernetes_Version/container_sources/frontend_source/build/*
cp ./build/* ../../Kubernetes_Version/container_sources/frontend_source/build/
cd ../..
node set_docker_build_index_for_all_images.js # a script that increments docker image name and links in all deployments
node push_all_docker_images_to_docker_registy.js # a script that pushes all docker images

echo 'Pushing to Github'
git add -A
git commit -m "worked more"
git push -u origin main

echo 'Deploying to App Engine'
node set_baseURL_in_utilities.js ${baseURL_for_App_engine}
cd App/frontend
npm install
npm run build
rm -rf node_modules
rm -rf ../backend/build/*
cp ./build/* ../backend/build/
cd ../..
node generate_dot_env_file_for_cloud_storage.js $gcp_keyFilename $gcp_projectId $gcp_bucket
cd App/backend
# e.g node generate_dot_env_file_for_cloud_storage.js portfolio-apps-311617-9e5ae7843e5d.json portfolio-apps-311617 portfolio_content_app

gcloud app deploy'