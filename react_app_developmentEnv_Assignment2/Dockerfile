# Official Node.js runtime as the base image
FROM node:latest

# Working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port Vite uses for development server (default is 3000)
EXPOSE 3000

# Command to run the development server
CMD ["npm", "run", "dev"]
