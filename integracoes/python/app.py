from flask import Flask, jsonify, request
from produtos import produtos_db

app = Flask(__name__)

@app.route('/produtos', methods=['GET'])
def listar_produtos():
    return jsonify(produtos_db), 200

if __name__ == '__main__':
    app.run()