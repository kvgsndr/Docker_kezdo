# 🚀 Webanalyze: Dockerized Web Analysis Tool

## 📋 Table of Contents
- [👋 Introduction](#-introduction)
- [✨ Features](#-features)
- [🔧 Prerequisites](#-prerequisites)
- [🛠️ Installation](#️-installation)
- [🖥️ Usage](#️-usage)
- [📁 Folder Structure](#️-folder-structure)
- [📝 Steps to Solution](#️-steps-to-solution)
- [🐳 Docker Swarm Deployment](#-docker-swarm-deployment)
- [🤝 Contributing](#️-contributing)

## 👋 Introduction
Welcome to Webanalyze! This project provides a Dockerized solution for analyzing multiple websites simultaneously. It fetches website data such as title, meta tags, headings, and links and logs the analysis results for further inspection. With Docker, it's easy to deploy and scale the Webanalyze application.

## ✨ Features
- 🕸️ Analyze multiple websites in parallel
- 📊 Fetches website metadata and links
- 📁 Customizable log directory for each website
- 🐳 Easy deployment with Docker Compose
- 🐋 Scalable deployments with Docker Swarm

## 🔧 Prerequisites
Before getting started with this project, ensure that you have the following prerequisites installed on your system:
- 🐳 Docker: [Installation Guide](https://docs.docker.com/get-docker/)
- 🐳 Docker Compose: [Installation Guide](https://docs.docker.com/compose/install/)

## 🛠️ Installation
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Liquizar/webanalyze.git
   cd webanalyze
   ```

2. Build the Docker image:
   ```bash
   docker-compose build
   ```

## 🖥️ Usage
1. Update the `docker-compose.yml` file with the desired website URLs.
2. Run the following command to start the Webanalyze services:
   ```bash
   docker-compose up
   ```
3. View the logs for each website in the specified log directories.

## 📁 Folder Structure
```
webanalyze/
│
├── Dockerfile
├── docker-compose.yml
├── webanalyze.js
├── package.json
└── logs/
    ├── meta/
    ├── google/
    ├── amazon/
    ├── apple/
    ├── netflix/
    └── happiestminds/
```

## 📝 Steps to Solution
1. **Create Dockerfile**: Define the Docker image for the Webanalyze application.
2. **Create docker-compose.yml**: Define services for each website, configure environment variables, and specify volume mappings.
3. **Build Docker Image**: Build the Docker image using Docker Compose.
4. **Update Configuration**: Update `docker-compose.yml` with the desired website URLs.
5. **Run the Application**: Start the Webanalyze services using `docker-compose up`.
6. **View Analysis Results**: View the logs for each website in the specified log directories.

## 🐳 Docker Swarm Deployment
- Deploy the Webanalyze application in a Docker Swarm stack for scalable deployments.
- Initialize Docker Swarm on your machine using `docker swarm init`.
- Use `docker stack deploy` to deploy the stack with the `docker-compose-swarm.yml` file.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit issues or pull requests.

---

Happy Analyzing! 🕵️‍♂️✨
