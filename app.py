from flask import Flask, flash, redirect, render_template,\
        request, session, url_for, g, jsonify
from functools import wraps
import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
        return render_template('index.html')

@app.route('/contact/')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
