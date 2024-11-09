# Build the React app using Node v22.11.0
FROM docker.io/node:22.11.0 AS build

# Set working directory inside container
WORKDIR /app

# Copy package.json and yarn.lock for yarn install
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . ./

# Build the React app
RUN yarn run build

# Serve the built React app using Nginx
FROM docker.io/nginx:alpine

# Copy the build folder from the build stage to the Nginx server's root directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]