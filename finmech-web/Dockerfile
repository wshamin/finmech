# Base image for building the project
FROM node:21.7.3

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json in working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy other project files in working directory
COPY . .

# Build
RUN npm run build

# Expose port
EXPOSE 3000

# Run application
CMD ["npm", "start"]
