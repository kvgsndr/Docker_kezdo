# 🐳 Multi-Container Application with Docker Compose

## Table of Contents

- [🚀 Introduction](#introduction)
- [✨ Features](#features)
- [🔧 Prerequisites](#prerequisites)
- [📦 Installation](#installation)
- [💻 Usage](#usage)
- [📁 Folder Structure](#folder-structure)
- [🛠️ Steps to Solution](#steps-to-solution)
- [🤝 Contributing](#contributing)
- [📝 License](#license)

## Introduction

Welcome to the Multi-Container Application with Docker Compose project! This project demonstrates the setup of a multi-container application using Docker Compose. It includes a Flask web application for user registration, PostgreSQL as the database, Redis for caching, and Nginx as a reverse proxy. The application allows users to register by providing their name, email, and password, which are then stored in the database. Redis is used for caching user data, and Nginx handles reverse proxying for the Flask application.

## Features

- **User Registration**: Users can register by providing their name, email, and password.
- **Data Storage**: User registration data is stored in a PostgreSQL database.
- **Caching**: Redis is used for caching user data, improving performance.
- **Reverse Proxy**: Nginx serves as a reverse proxy to efficiently handle incoming requests.

## Prerequisites

Before running the application, ensure you have the following installed:

- **Docker**: To containerize and manage the application.
- **Docker Compose**: For orchestrating the multi-container setup.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Liquizar/multi-container-application_Assignment4.git
    ```

2. Navigate to the project directory:

    ```bash
    cd multi-container-application
    ```

3. Build and start the Docker containers:

    ```bash
    docker-compose up --build
    ```

## Usage

Once the containers are up and running, you can access the application by visiting `http://localhost` in your web browser.

## Folder Structure

```
multi-container-application/
│
├── nginx/
│   └── nginx.conf
│
├── python-app/
│   ├── app.py
│   ├── Dockerfile
│   ├── requirements.txt
│   ├── static/
│   │   └── styles.css
│   └── templates/
│       └── index.html
│
├── pg_data/
└── redis_data/
```

## Steps to Solution

1. **Setting Up Flask App** 🌱: Developed a Flask application for user registration, utilizing routes to handle registration requests.
   
2. **Database Configuration** 🛠️: Configured PostgreSQL database to store user data, ensuring proper table creation and data insertion.
   
3. **Caching with Redis** 🚀: Implemented Redis for caching user data, improving performance and scalability.
   
4. **Nginx as Reverse Proxy** ⚡: Utilized Nginx as a reverse proxy to handle incoming requests and route traffic to the Flask application.
   
5. **Docker Compose Setup** 🐳: Defined Docker Compose configuration to orchestrate the multi-container setup, facilitating easy deployment.

## Contributing

Contributions are welcome! Please feel free to open issues or pull requests for any improvements or additional features you'd like to see implemented.

---

Happy Dockerizing! 🐳✨
