from flask import Flask, render_template
from sqlalchemy import create_engine
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
engine = create_engine("postgresql://postgres:YesImChanging333.@localhost:5432/miniproject")
conn = engine.connect()

@app.route("/dataPlot")
def data():
    conn = engine.connect()
    data_df = pd.read_sql("SELECT * FROM sismos",conn)
    df= pd.DataFrame(data_df, columns=['Hora.1','Minutos','Mes','Dia','Ano','Ubicacion','Magnitud' ])
    conn.close()
    return df.to_json()

@app.route("/api")
def apijson():

    data = pd.read_sql("SELECT * FROM sismos", conn)

    apidata = data.to_json(orient='index')

    return(apidata)

@app.route('/')
def home():

    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
	


