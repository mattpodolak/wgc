AWS_URL=299559919936.dkr.ecr.us-east-1.amazonaws.com
ECR_CLIENT_REPO=${AWS_URL}/wgc-client
ECR_SERVER_REPO=${AWS_URL}/wgc-server

# Docker Image Versions
CLIENT_VERSION=1.0.1
SERVER_VERSION=1.0.0

echo "Setting Image Version ENV Variables"
export CLIENT_VERSION=${CLIENT_VERSION}
export SERVER_VERSION=${SERVER_VERSION}
# image_version='image_version={"client":'"${CLIENT_VERSION}"',"server":'"${SERVER_VERSION}"'}'

echo "Running Terraform Apply"
cd terraform && terraform validate
terraform apply
cd ..

echo "Building images using Docker Compose"
#TODO use SED to insert ECR repo urls into a tmp-docker-compose file
# this will allow the use of docker compose push and eliminate the need for tagging imgs

docker-compose -f prod-docker-compose.yml build

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin ${AWS_URL}

echo "Tagging and pushing WGC client image version ${CLIENT_VERSION} to ${ECR_CLIENT_REPO}"
docker tag p-wgc-client-img:${CLIENT_VERSION} ${ECR_CLIENT_REPO}:${CLIENT_VERSION}
docker push ${ECR_CLIENT_REPO}:${CLIENT_VERSION}

echo "Tagging and pushing WGC server image version ${SERVER_VERSION} to ${ECR_SERVER_REPO}"
docker tag p-wgc-server-img:${SERVER_VERSION} ${ECR_SERVER_REPO}:${SERVER_VERSION}
docker push ${ECR_SERVER_REPO}:${SERVER_VERSION}