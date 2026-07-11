from fastapi import FastAPI

app = FastAPI(title="Crescendo")

@app.get("/")
def read_root():
    return "Hello World!"

@app.get("/health")
def health_check():
    return {"status": "ok"}