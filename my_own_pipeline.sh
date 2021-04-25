#!/usr/bin/env expect

# almost same in all
baseURL_for_App='http://localhost:3001'
baseURL_for_Containerized_Version='http://localhost:80'
baseURL_for_Kubernetes_Version='http://hello-world.info:80'

github_username='soberservicesguy'
password_for_github='animation!0!'

# change for each project
baseURL_for_App_engine='https://portfolio-apps-311617.uc.r.appspot.com'
gcp_keyFilename='portfolio-apps-311617-9e5ae7843e5d.json'
gcp_projectId='portfolio-apps-311617'
gcp_bucket='portfolio_content_app'

echo 'Entering Project Path'
echo 'installing yaml'
echo 'running npm install yaml'
npm install yaml



echo 'Generating App Folder'
echo 'running set_baseURL_in_utilities.js $baseURL_for_App'
node set_baseURL_in_utilities.js $baseURL_for_App
echo 'baseURL set'
echo 'running cd App/frontend'
cd App/frontend
echo 'running npm install'
npm install
echo 'running npm run build'
npm run build
echo 'running rm -rf ../backend/build/*'
rm -rf ../backend/build/*
echo 'running cp -r ./build/* ../backend/build/'
cp -r ./build/* ../backend/build/
echo 'running cd ../..'
cd ../..



echo 'Generating Containerzied_Version Folder'
echo 'running node set_baseURL_in_utilities.js $baseURL_for_Containerized_Version'
node set_baseURL_in_utilities.js $baseURL_for_Containerized_Version
echo 'running cd App/frontend'
cd App/frontend
echo 'running npm run build'
npm run build
echo 'running rm -rf ../../Containers_Version/image_sources/frontend_service/build/*'
rm -rf ../../Containers_Version/image_sources/frontend_service/build/*
echo 'running cp -r ./build/* ../../Containers_Version/image_sources/frontend_service/build/'
cp -r ./build/* ../../Containers_Version/image_sources/frontend_service/build/
echo 'running cd ../..'
cd ../..




echo 'Generating Kubernetes_Version Folder'
echo 'running node set_baseURL_in_utilities.js $baseURL_for_Kubernetes_Version'
node set_baseURL_in_utilities.js $baseURL_for_Kubernetes_Version
echo 'running cd App/frontend'
cd App/frontend
echo 'running npm run build'
npm run build
echo 'running rm -rf node_modules'
rm -rf node_modules
echo 'running rm -rf ../../Kubernetes_Version/container_sources/frontend_source/build/*'
rm -rf ../../Kubernetes_Version/container_sources/frontend_source/build/*
echo 'running cp -r ./build/* ../../Kubernetes_Version/container_sources/frontend_source/build/'
cp -r ./build/* ../../Kubernetes_Version/container_sources/frontend_source/build/
echo 'running cd ../..'
cd ../..
echo 'running node set_docker_build_index_for_all_images.js'
node set_docker_build_index_for_all_images.js # a script that increments docker image name and links in all deployments
echo 'running node push_all_docker_images_to_docker_registy.js'
node push_all_docker_images_to_docker_registy.js # a script that pushes all docker images



echo 'Deploying to App Engine'
echo 'running node set_baseURL_in_utilities.js ${baseURL_for_App_engine}'
node set_baseURL_in_utilities.js ${baseURL_for_App_engine}
echo 'running cd App/frontend'
cd App/frontend
echo 'running npm install'
npm install
echo 'running npm run build'
npm run build
echo 'running rm -rf node_modules'
rm -rf node_modules
echo 'running rm -rf ../backend/build/*'
rm -rf ../backend/build/*
echo 'running cp -r ./build/* ../backend/build/'
cp -r ./build/* ../backend/build/
echo 'running cd ../..'
cd ../..
echo 'running node generate_dot_env_file_for_cloud_storage.js $gcp_keyFilename $gcp_projectId $gcp_bucket'
node generate_dot_env_file_for_cloud_storage.js $gcp_keyFilename $gcp_projectId $gcp_bucket
echo 'running cd App/backend'
cd App/backend
# e.g node generate_dot_env_file_for_cloud_storage.js portfolio-apps-311617-9e5ae7843e5d.json portfolio-apps-311617 portfolio_content_app
expect "Do you want to continue (Y/n)? "
send "y"

echo 'running gcloud app deploy'
gcloud app deploy





echo 'Pushing to Github'
spawn /usr/bin/passwd
set pass "mysecret"
expect "Username for 'https://github.com': "
send "$github_username"
expect "password: "
send "$password_for_github"

echo 'running rm -rf node_modules'
git rm -rf node_modules
echo 'running git add -A'
git add -A
echo 'running git reset my_own_pipeline.sh'
git reset my_own_pipeline.sh
echo 'running git commit -m "worked more"'
git commit -m "worked more"
echo 'running git push -u origin main'
git push -u origin main