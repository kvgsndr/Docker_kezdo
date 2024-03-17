import psycopg2
from flask import Flask, request, render_template
from flask_caching import Cache

app = Flask(__name__)

# Configure your PostgreSQL connection
DB_HOST = 'db'
DB_PORT = '5432'
DB_NAME = 'mydatabase'
DB_USER = 'postgres'
DB_PASSWORD = 'password'

# Configure Flask-Caching with Redis
cache = Cache(app, config={'CACHE_TYPE': 'redis', 'CACHE_REDIS_URL': 'redis://cache:6379/0'})

# Define a function to create a database connection
def create_db_connection():
    conn = psycopg2.connect(
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT
    )
    return conn

# Define the User model
class User:
    def __init__(self, username, email):
        self.username = username
        self.email = email

# Routes
@app.route('/', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']

        # Create a database connection
        conn = create_db_connection()
        cur = conn.cursor()

        # Insert user data into the database
        cur.execute("INSERT INTO users (username, email) VALUES (%s, %s)", (username, email))
        conn.commit()

        # Close the database connection
        cur.close()
        conn.close()

        return 'User registered successfully!'

    return render_template('registration.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0')
