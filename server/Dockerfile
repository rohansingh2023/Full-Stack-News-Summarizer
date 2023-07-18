FROM python:3.10.9-slim-buster

WORKDIR /server

COPY ./requirements.txt /server/

RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

ENV FLASK_APP=app.py

CMD ["flask", "run", "--host", "0.0.0.0"]