# Dockerfile for Flask Application
FROM python:3.9

# Install system dependencies
RUN apt-get update && apt-get install -y libpq-dev

# Set the working directory inside the container
WORKDIR /app

# Copy the application code into the container
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port 5000
EXPOSE 5000

# Define the command to run the application
CMD ["python", "app.py"]
