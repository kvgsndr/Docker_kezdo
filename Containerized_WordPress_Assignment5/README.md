# 🚀 Containerized WordPress Website

## 📋 Table of Contents
- [👋 Introduction](#-introduction)
- [✨ Features](#-features)
- [🔧 Prerequisites](#-prerequisites)
- [🛠️ Installation](#️-installation)
- [🖥️ Usage](#️-usage)
- [📁 Folder Structure](#️-folder-structure)
- [📝 Steps to Solution](#️-steps-to-solution)
- [🤝 Contributing](#️-contributing)

## 👋 Introduction
Welcome to the Containerized WordPress Website project! This project provides a Dockerized setup for hosting a WordPress website. It utilizes Docker containers to isolate the WordPress application and the MySQL/MariaDB database, providing a scalable and easy-to-manage environment for hosting WordPress sites.

## ✨ Features
- 🐳 Docker containers for WordPress application and MySQL database.
- 📂 Persistent storage for WordPress files and database data using Docker volumes.
- 🔧 Easily customizable and configurable setup.

## 🔧 Prerequisites
Before getting started with this project, ensure that you have the following prerequisites installed on your system:
- 🐳 Docker: [Installation Guide](https://docs.docker.com/get-docker/)
- 🐳 Docker Compose: [Installation Guide](https://docs.docker.com/compose/install/)

## 🛠️ Installation
1. Clone this repository to your local machine:
   ```
   git clone https://github.com/Liquizar/Containerized_WordPress.git
   ```
2. Navigate to the project directory:
   ```
   cd Containerized_WordPress
   ```
3. Start the Docker containers:
   ```
   docker-compose up --build
   ```
4. Access your WordPress site in your web browser at `http://localhost:9000`.

## 🖥️ Usage
Once the Docker containers are up and running, you can access your WordPress website through the specified port (`9000` by default). You can customize your website by installing themes and plugins, creating pages and posts, and configuring settings through the WordPress admin dashboard.

## 📁 Folder Structure
```
Containerized_WordPress/
│
├── docker-compose.yml
├── mysql/
│   └── Dockerfile
│
└── wordpress/
    └── Dockerfile

├── wordpress_data/
│   └── # WordPress files and directories will be stored here
│
└── db_data/
    └── # MySQL/MariaDB database data will be stored here
```

## 📝 Steps to Solution
1. Set up Dockerfile for WordPress and MySQL containers.
2. Configure Docker Compose to define services, networks, and volumes.
3. Create Docker volumes for persistent storage of WordPress files and database data.
4. Build and run Docker containers using `docker-compose up --build`.
5. Access WordPress website through the specified port.
6. Customize WordPress website as needed.

## 🤝 Contributing
Contributions to this project are welcome! Feel free to fork the repository, make your changes, and submit a pull request. For major changes, please open an issue first to discuss the proposed changes.

---

Happy Dockerizing! 🐳✨
