import pickle
from flask import Flask, request, render_template, jsonify
import numpy as np
from LogisticRegression import *

# Definimos una instancia de Flask
app = Flask(__name__)

# Path del modelo preentrenado
MODEL_PATH = "model.pkl"


# Cargamos el modelo preentrenado
model = pickle.load(open(MODEL_PATH, 'rb'))

print("\nModelo cargado exitosamente. Verificar http://localhost:5000/\n")

# Realizamos la predicción usando la imagen cargada y el modelo
def model_predict(x_input, model):
    prediction = int(model.predict([np.array(x_input)])[0])
    return prediction


@app.route("/", methods=["GET"])
def index():
    # Página principal
    return render_template("index.html")


@app.route("/predict", methods=["GET", "POST"])
def upload():
    if request.method == "POST":
        # Obtiene el archivo del request
        x_input = request.get_json()['array']

        # Predicción
        prediction = model_predict(x_input, model)
        print("\nPredicción: ", prediction, end="\n\n")
        return jsonify({
            'prediction' : prediction,
            'status': 'prediction SUCCESS'
        })

    return None


if __name__ == "__main__":
    app.run()
