FROM python:3.8
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000
EXPOSE 80
ADD frontend/build frontend/build
CMD ["bash", "-c", "python backend/manage.py migrate && python backend/manage.py runserver 0.0.0.0:8000"]