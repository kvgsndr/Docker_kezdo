# 🚀 Multi-Container Application with Docker Compose

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Steps to Solution](#steps-to-solution)
- [Contributing](#contributing)

## Introduction
🎉 Welcome to our multi-container application built using Docker Compose! This project aims to provide a seamless solution for deploying a web application with separate containers for different components, including a web server, a PostgreSQL database, Redis caching, and Nginx as a reverse proxy. The application allows users to register with a username, email, and password, storing the data in the PostgreSQL database upon submission.

## Features
✨ Here are some key features of our application:
- Containerized architecture for easy deployment and scalability
- Web server powered by Flask for handling user registration
- PostgreSQL database for storing user data securely
- Redis caching for optimizing application performance
- Nginx serving as a reverse proxy for efficient request routing

## Prerequisites
Before running this application, ensure you have the following prerequisites installed:
- Docker 🐳
- Docker Compose 🚢

## Installation
To install and run the application, follow these steps:
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/Liquizar/multi_container_app_Assignment4.git
    ```
2. Navigate to the project directory:
    ```bash
    cd multi-container-app
    ```
3. Run Docker Compose to build and start the containers:
    ```bash
    docker-compose up
    ```

## Usage
Once the containers are up and running, you can access the application by navigating to `http://localhost` in your web browser. You will be presented with a registration form where you can enter your username, email, and password. Upon submission, the data will be securely stored in the PostgreSQL database.

## Folder Structure
📁 Here's the folder structure of our project:
```
multi_container_app_Assignment4/
│
├── web/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── registration.html
│
├── db/
│   ├── Dockerfile
│   └── init.sql
│
├── cache/
│   ├── Dockerfile
│   └── redis.conf
│
├── app/
│   ├── app.py
│   ├── requirements.txt
│   └── templates
│       └── registration.html
│
└── docker-compose.yml
```

## Steps to Solution
🔧 Here's how we built our solution:
1. Defined the services, networks, and volumes in the `docker-compose.yml` file.
2. Created Dockerfiles for the web server, database, and cache containers.
3. Implemented the Flask web server for user registration.
4. Configured the PostgreSQL database to securely store user data.
5. Set up Redis caching for optimizing application performance.
6. Configured Nginx as a reverse proxy to efficiently route requests to the appropriate containers.
7. Tested the application to ensure all components are functioning correctly.

## Contributing
🙌 Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

---

Happy Dockerizing! 🐳✨
