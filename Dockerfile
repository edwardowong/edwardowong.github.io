# Step 1: Build the app using Node.js
FROM node:18-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy only necessary files first to cache node_modules layer
COPY package*.json ./
COPY vite.config.js ./

# Install dependencies
RUN npm install

# Copy the rest of your project files
COPY . .

# Build the app (output goes to /app/dist)
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:alpine

# Copy build output to Nginx's public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Replace default Nginx config with custom one if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
