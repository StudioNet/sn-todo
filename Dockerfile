# Stage first
# Build your application and deploy it inside the container
FROM node:14.11.0 AS BUILD_STAGE
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN ["npm", "install"]
COPY . .
RUN ["npm", "run", "build"]
EXPOSE 4200

# Stage secons:
# Run the nginx server inside the container
FROM nginx:1.18.0-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=BUILD_STAGE /usr/src/app/dist/infopro /usr/share/nginx/html
