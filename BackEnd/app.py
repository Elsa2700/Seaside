from flask import *
import mysql.connector
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)






@app.route('/', methods = ['GET'])
def get_articles():
    return jsonify({'hello':'world'})



if __name__ == '__main__':
    app.run(debug = True)