from flask import Flask, render_template, request, jsonify
import redis
import psycopg2
import os

app = Flask(__name__)

# Redis connection
redis_host = os.getenv('REDIS_HOST')
redis_port = os.getenv('REDIS_PORT')
redis_conn = redis.StrictRedis(host=redis_host, port=redis_port, decode_responses=True)

# Postgres connection
postgres_host = "postgres"
postgres_user = os.getenv('POSTGRES_USER')
postgres_password = os.getenv('POSTGRES_PASSWORD')
postgres_db = os.getenv('POSTGRES_DB')
postgres_conn = psycopg2.connect(
    host=postgres_host, 
    user=postgres_user, 
    password=postgres_password, 
    dbname=postgres_db
)

# Create the 'users' table if it doesn't exist
with postgres_conn.cursor() as cursor:
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(100),
            password VARCHAR(100)
        )
    """)
    postgres_conn.commit()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    data = request.form
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    # Save data to Postgres
    with postgres_conn.cursor() as cursor:
        cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)", (name, email, password))
        postgres_conn.commit()

    # Save data to Redis
    redis_conn.set(email, name)

    return jsonify({"message": "Registration successful"}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
