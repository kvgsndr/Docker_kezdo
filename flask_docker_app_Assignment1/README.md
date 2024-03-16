# Flask Docker App

This is a simple Python Flask application containerized with Docker.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Steps to Solution](#steps-to-solution)

## Introduction

This project is a basic Flask application that returns "Hello, Docker!" when accessed at the root URL ("/"). It's containerized using Docker for easy deployment.

## Features

- Displays "Hello, Docker!" message when accessed at the root URL
- Allows users to input their name and receive a personalized greeting message
- Containerized with Docker for easy deployment

## Prerequisites

Before running this application, you need to have the following installed:

- Python 3
- Docker

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Liquizar/flask_docker_app_Assignment1.git
    cd flask_docker_app_Assignment1
    ```

2. **Install the required Python dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

## Usage

1. **Run the Flask application locally:**

```bash
python app.py
```

2. **Open a web browser and go to [http://127.0.0.1:5000/](http://127.0.0.1:5000/) to access the application.**

## Folder Structure

```
flask_docker_app/
│
├── app.py
├── Dockerfile
├── README.md
├── requirements.txt
└── templates/
    └── index.html
```

- `app.py`: Main Python script containing the Flask application code.
- `Dockerfile`: File containing instructions for building the Docker image.
- `requirements.txt`: File listing Python dependencies required by the Flask application.
- `templates/`: Directory containing HTML templates for rendering web pages.

## Steps to Solution

1. **Create a Python Flask application:**
   - Create a new directory for the project.
   - Inside the directory, create a new file named `app.py`.
   - Write a simple Python Flask application that returns "Hello, Docker!" when accessed at the root URL ("/").
   - Include the necessary Flask imports and define a Flask app.

2. **Create a Dockerfile:**
   - Inside the project directory, create a new file named `Dockerfile`.

3. **Create a requirements.txt file:**
   - In the project directory, create a file named `requirements.txt`.
   - Add any necessary dependencies for your Flask application. For example, you can add Flask to the `requirements.txt` file.

4. **Build the Docker image:**
   - Open a terminal or command prompt and navigate to the project directory.

5. **Run the Docker container:**
   - Once the image is built, you can run a container based on that image.

6. **Test the Flask application:**
   - Open a web browser and access [http://localhost:5000/](http://localhost:5000/).
   - You should see the message "Hello, Docker!" displayed in the browser.

## Contributing 

Contributions are welcome! Please feel free to submit a pull request.


---

🚀 Happy learning Docker! 🐳
