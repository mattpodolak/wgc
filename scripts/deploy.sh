AWS_URL=299559919936.dkr.ecr.us-east-1.amazonaws.com
ECR_CLIENT_REPO=${AWS_URL}/wgc-client
ECR_SERVER_REPO=${AWS_URL}/wgc-server

echo "Building images using Docker Compose"
#TODO use SED to insert ECR repo urls into a tmp-docker-compose file
# this will allow the use of docker compose push and eliminate the need for tagging imgs

docker-compose -f prod-docker-compose.yml build

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin ${AWS_URL}

echo "Tagging and pushing WGC client image to ${ECR_CLIENT_REPO}"
docker tag p-wgc-client-img:latest ${ECR_CLIENT_REPO}:latest
docker push ${ECR_CLIENT_REPO}:latest

echo "Tagging and pushing WGC server image to ${ECR_SERVER_REPO}"
docker tag p-wgc-server-img:latest ${ECR_SERVER_REPO}:latest
docker push ${ECR_SERVER_REPO}:latest