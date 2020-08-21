# Multistage Dockerfile for client

# Stage 1: Build React app
# Install node image
FROM node:10.16-alpine as wgc-app-build

# Create client directory
RUN mkdir -p /usr/app/client
WORKDIR /usr/app/client

# Install Dependencies
COPY package*.json ./
RUN npm ci

# Copy local files to client folder
COPY . .

# Build production ready React files
RUN npm run build

# Stage 2: Start Nginx
FROM nginx:1.15.2-alpine
LABEL maintainer=Matthew-Podolak

COPY --from=wgc-app-build /usr/app/client/build/ /var/www
COPY --from=wgc-app-build /usr/app/client/nginx.conf /etc/nginx/nginx.conf

# import cert files for SSL
RUN mkdir -p /etc/ssl/certs
COPY --from=wgc-app-build /usr/app/client/certs/nginx-selfsigned.crt /etc/ssl/certs
COPY --from=wgc-app-build /usr/app/client/certs/dhparam.pem /etc/ssl/certs

# import key file for SSL
RUN mkdir -p /etc/ssl/private
COPY --from=wgc-app-build /usr/app/client/certs/nginx-selfsigned.key /etc/ssl/private

EXPOSE 443
ENTRYPOINT ["nginx","-g","daemon off;"]