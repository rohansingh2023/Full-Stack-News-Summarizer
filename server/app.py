import requests
from flask import Flask, render_template, url_for
from flask import request as req
from flask_cors import CORS

app = Flask(__name__)

cors = CORS(app, origins='*')

@app.route("/", methods=["GET", "POST"])
def Index():
	return render_template("index.html")


@app.route("/Summarize", methods=["GET", "POST"])
def Summarize():
	if req.method == "POST":
		API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"
		headers = {"Authorization": f"Bearer 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"}

		data = req.form["data"]

		maxL = int(req.form["maxL"])
		minL = maxL // 4

		def query(payload):
			response = requests.post(API_URL, headers=headers, json=payload)
			return response.json()

		output = query({
			"inputs": data,
			"parameters": {"min_length": minL, "max_length": maxL},
		})[0]

		return render_template("index.html", result=output["summary_text"])
	else:
		return render_template("index.html")

@app.route("/summary", methods=["GET", "POST"])
def Summary():
	if req.method == "POST":
		API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"
		headers = {"Authorization": f"Bearer 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"}

		data = req.json["article"]

		maxL = int(req.json["maxL"])
		minL = maxL // 4
		
		def query(payload):
			response = requests.post(API_URL, headers=headers, json=payload)
			return response.json()

		output = query({
			"inputs": data,
			"parameters": {"min_length": minL, "max_length": maxL},
		})[0]

		return output["summary_text"]
	else:
		return 0

	
if __name__ == '__main__':
	app.run(debug=True)