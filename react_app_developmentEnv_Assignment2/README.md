# 🚀 Containerized React Web App Development Environment

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
Welcome to the Containerized React Web App Development Environment project! This project aims to streamline the development process for React web applications by providing a Dockerized development environment. With Docker, you can ensure consistency across different development environments and easily share your project with other developers.

## ✨ Features
- 🐳 Docker-based development environment for React apps.
- 🔄 Consistent development setup across different machines.
- 🛠️ Easy management of dependencies without cluttering your local machine.

## 🔧 Prerequisites
Before getting started with this project, make sure you have the following prerequisites installed on your system:
- 🐳 Docker: [Installation Guide](https://docs.docker.com/get-docker/)

## 🛠️ Installation
1. Clone this repository to your local machine:
   ```
   git clone https://github.com/Liquizar/react_app_developmentEnv.git
   ```
2. Navigate to the project directory:
   ```
   cd react_app_developmentEnv
   ```
3. Build the Docker image:
   ```
   docker build -t react-app-devenv .
   ```

## 🖥️ Usage
1. Run a container using the built image:
   ```
   docker run -p 3000:3000 my-react-app-devenv
   ```
2. Access your React web application in your browser at `http://localhost:3000`.

## 📁 Folder Structure
```
react_app_developmentEnv/
│
├── node_modules/
├── public/
├── src/
│   ├── App.js
│   ├── index.js
│   └── ...
├── Dockerfile
├── package.json
└── README.md
```

## 📝 Steps to Solution
1. Created a Dockerfile specifying the Node.js runtime as the base image.
2. Installed Node.js dependencies using npm install or yarn install.
3. Copied project files into the Docker image.
4. Exposed port 3000 for the React app.
5. Built the Docker image and ran a container based on it.

## 🤝 Contributing
Contributions are welcome! If you have any ideas for improvements or find any issues, feel free to open an issue or submit a pull request.

---

Happy Dockerizing! 🐳✨
